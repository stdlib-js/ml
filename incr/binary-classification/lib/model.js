/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var gdot = require( '@stdlib/blas/base/gdot' );
var dcopy = require( '@stdlib/blas/base/dcopy' );
var dscal = require( '@stdlib/blas/base/dscal' );
var max = require( '@stdlib/math/base/special/max' );
var exp = require( '@stdlib/math/base/special/exp' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );


// VARIABLES //

var MIN_SCALING_FACTOR = 1.0e-7;
var MIN_SCALE = 1.0e-11;
var LEARNING_RATE_METHODS = {
	'basic': '_basicLearningRate',
	'constant': '_constantLearningRate',
	'pegasos': '_pegasosLearningRate'
};
var LOSS_METHODS = {
	'hinge': '_hingeLoss',
	'log': '_logLoss',
	'modifiedHuber': '_modifiedHuberLoss',
	'perceptron': '_perceptronLoss',
	'squaredHinge': '_squaredHingeLoss'
};


// MAIN //

/**
* Model constructor.
*
* ## Notes
*
* -   The model (weight vector) implementation is inspired by the [sofia-ml][sofia-ml] library.
*
* [sofia-ml]: https://code.google.com/archive/p/sofia-ml/
*
* @private
* @constructor
* @param {PositiveInteger} N - number of feature weights (excluding bias/intercept term)
* @param {Options} opts - model options
* @param {PositiveNumber} opts.lambda - regularization parameter
* @param {ArrayLikeObject} opts.learningRate - learning rate function and associated parameters
* @param {string} opts.loss - loss function
* @param {boolean} opts.intercept - boolean indicating whether to include an intercept
* @returns {Model} model
*/
function Model( N, opts ) {
	var len;

	// Set internal properties:
	this._N = N;
	this._opts = opts;

	this._scaleFactor = 1.0;
	this._squaredNorm = 0.0;
	this._t = 0; // counter

	// Determine the learning rate function:
	this._learningRateMethod = LEARNING_RATE_METHODS[ opts.learningRate[ 0 ] ];

	// Determine the loss function:
	this._lossMethod = LOSS_METHODS[ opts.loss ];

	// Determine the number of model coefficients:
	len = N;
	if ( opts.intercept ) {
		len += 1;
	}
	// Initialize a model weight vector with all weights set to zero:
	this._weights = new Float64Array( len );

	// Initialize model coefficients to zero:
	this._coefficients = new ndarray( 'float64', new Float64Array( len ), [ len ], [ 1 ], 0, 'row-major' );

	return this;
}

/**
* Adds a provided input vector to the model weight vector.
*
* @private
* @name _add
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - input vector
* @param {number} scale - scale factor
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_add', function add( x, scale ) {
	var xlen;
	var xbuf;
	var ox;
	var sx;
	var dp;
	var w;
	var s;
	var v;
	var i;

	w = this._weights;
	s = this._scaleFactor;

	xbuf = x.data;
	xlen = x.shape[ 0 ];
	sx = x.strides[ 0 ];
	ox = x.offset;

	dp = 0.0; // dot product
	for ( i = 0; i < xlen; i++ ) {
		v = xbuf[ ox+(sx*i) ] * scale;
		dp += w[ i ] * v;
		w[ i ] += v / s;
	}
	v = gdot( xlen, xbuf, 1, xbuf, 1 );

	// If an intercept is assumed, treat `x` as containing one additional element equal to one...
	if ( this._opts.intercept ) {
		v += 1.0;
		dp += w[ i ] * scale;
		w[ i ] += scale / s;
	}
	this._squaredNorm += ( v*scale*scale ) + ( 2.0*s*dp );

	return this;
});

/**
* Computes a learning rate.
*
* ## Notes
*
* -   This learning rate function is based on the learning rate function of the same name in the [sofia-ml][sofia-ml] library.
*
* [sofia-ml]: https://code.google.com/archive/p/sofia-ml/
*
* @private
* @name _basicLearningRate
* @memberof Model.prototype
* @type {Function}
* @returns {number} learning rate
*/
setReadOnly( Model.prototype, '_basicLearningRate', function basic() {
	return 1000.0 / ( 1000.0+this._t );
});

/**
* Returns a constant learning rate.
*
* @private
* @name _constantLearningRate
* @memberof Model.prototype
* @type {Function}
* @returns {number} learning rate
*/
setReadOnly( Model.prototype, '_constantLearningRate', function constant() {
	return this._opts.learningRate[ 1 ];
});

/**
* Calculates the dot product of the model weight vector and a provided vector `x`.
*
* @private
* @name _dot
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - input vector
* @returns {number} dot product
*/
setReadOnly( Model.prototype, '_dot', function dot( x ) {
	var v = gdot( this._N, this._weights, 1, x.data, x.strides[ 0 ] );
	if ( this._opts.intercept ) {
		v += this._weights[ this._N ];
	}
	v *= this._scaleFactor;
	return v;
});

/**
* Updates the model weight vector using the hinge loss function.
*
* ## Notes
*
* -   The hinge loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \max\{ 0, 1 - y\,f(x) \}
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* @private
* @name _hingeLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_hingeLoss', function hingeLoss( x, y ) {
	var eta = this[ this._learningRateMethod ]();
	this._regularize( eta );
	if ( ( y*this._dot( x ) ) < 1.0 ) {
		this._add( x, y*eta );
	}
	return this;
});

/**
* Updates the model weight vector using the log loss function.
*
* ## Notes
*
* -   The log loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \ln( 1 + \exp( -y\,f(x) ) )
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
*
* @private
* @name _logLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_logLoss', function logLoss( x, y ) {
	var loss = y / ( 1.0 + exp( y*this._dot( x ) ) );
	var eta = this[ this._learningRateMethod ]();
	this._regularize( eta );
	this._add( x, eta*loss );
	return this;
});

/**
* Updates the model weight vector using the modified Huber loss function.
*
* ## Notes
*
* -   The modified Huber loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \begin{cases}
*       \max(0, 1 - y\,f(x))^2 & \textrm{for}\,\,y\,f(x) \geq -1\\
*       -4y\,f(x) & \textrm{otherwise}
*     \end{cases}
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* @private
* @name _modifiedHuberLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_modifiedHuberLoss', function modifiedHuber( x, y ) {
	var eta = this[ this._learningRateMethod ]();
	var d = y * this._dot( x );
	this._regularize( eta );
	if ( d < -1.0 ) {
		this._add( x, 4.0*eta*y );
	} else {
		this._add( x, eta*( y-(d*y) ) );
	}
	return this;
});

/**
* Computes a learning rate using Pegasos.
*
* ## References
*
* -   Shalev-Shwartz, S., Singer, Y., Srebro, N., & Cotter, A. (2011). Pegasos: Primal estimated sub-gradient solver for SVM. Mathematical Programming, 127(1), 3–30. doi:10.1007/s10107-010-0420-4
*
* @private
* @name _pegasos
* @memberof Model.prototype
* @type {Function}
* @returns {number} learning rate
*/
setReadOnly( Model.prototype, '_pegasosLearningRate', function pegasos() {
	return 1.0 / ( this._opts.lambda*this._t );
});

/**
* Updates the model weight vector using the perceptron loss function.
*
* ## Notes
*
* -   The perceptron loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \max(0, -y\,f(x))
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* -   The perceptron loss function is equivalent to the hinge loss function without a margin.
*
* -   The perceptron loss function does not update the model weight vector when the response is correctly classified.
*
* @private
* @name _perceptronLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_perceptronLoss', function perceptron( x, y ) {
	var eta = this[ this._learningRateMethod ]();
	this._regularize( eta );
	if ( ( y*this._dot( x ) ) <= 0.0 ) {
		this._add( x, y*eta );
	}
	return this;
});

/**
* Peforms L2 regularization of the model weights.
*
* @private
* @name _regularize
* @memberof Model.prototype
* @type {Function}
* @param {PositiveNumber} eta - learning rate
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_regularize', function regularize( eta ) {
	var lambda = this._opts.lambda;
	if ( lambda <= 0.0 ) {
		return this;
	}
	this._scale( max( 1.0-( eta*lambda ), MIN_SCALING_FACTOR ) );
	return this;
});

/**
* Scale the model weight vector by a provided scaling factor.
*
* @private
* @name _scale
* @memberof Model.prototype
* @type {Function}
* @param {number} factor - scaling factor
* @throws {RangeError} scaling factor must be a positive number
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_scale', function scale( factor ) {
	var w;
	var s;
	if ( factor <= 0.0 ) {
		throw new RangeError( 'invalid argument. Attempting to scale a weight vector by a nonpositive value. This is likely due to too large a value of `eta*lambda`. Value: `' + factor + '`.' );
	}
	// Check whether we need to scale the weight vector to unity in order to avoid numerical issues...
	s = this._scaleFactor;
	if ( s < MIN_SCALE ) {
		w = this._weights;
		dscal( w.length, s, w, 1 );
		this._scaleFactor = 1.0;
	}
	this._squaredNorm *= factor * factor;
	this._scaleFactor *= factor;
	return this;
});

/**
* Updates the model weight vector using the squared hinge loss function.
*
* ## Notes
*
* -   The squared hinge loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \max\{ 0, 1 - y\,f(x) \}^2
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* @private
* @name _squaredHingeLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_squaredHingeLoss', function squaredHingeLoss( x, y ) {
	var eta = this[ this._learningRateMethod ]();
	var d = y * this._dot( x );
	this._regularize( eta );
	if ( d < 1.0 ) {
		this._add( x, eta*( y-(d*y) ) );
	}
	return this;
});

/**
* Returns the model coefficients.
*
* @private
* @name coefficients
* @memberof Model.prototype
* @type {Function}
* @returns {ndarray} model coefficients
*/
setReadOnlyAccessor( Model.prototype, 'coefficients', function coefficients() {
	var c = this._coefficients.data;
	var w = this._weights;
	dcopy( w.length, w, 1, c, 1 );
	dscal( w.length, this._scaleFactor, c, 1 );
	return this._coefficients;
});

/**
* Returns the number of model features.
*
* @private
* @name nfeatures
* @memberof Model.prototype
* @type {PositiveInteger}
*/
setReadOnlyAccessor( Model.prototype, 'nfeatures', function nfeatures() {
	return this._N;
});

/**
* Predicts the response value for a provided observation vector `x`.
*
* @private
* @name predict
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {string} type - prediction type
* @returns {number} response value
*/
setReadOnly( Model.prototype, 'predict', function predict( x, type ) {
	var v = this._dot( x );
	if ( type === 'probability' ) {
		return 1.0 / ( 1.0 + exp( -v ) );
	}
	return v;
});

/**
* Updates a model given a provided observation vector and response value.
*
* @private
* @name update
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, 'update', function update( x, y ) {
	this._t += 1;
	return this[ this._lossMethod ]( x, y );
});


// EXPORTS //

module.exports = Model;
