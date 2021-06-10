<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrBinaryClassification

> Incrementally perform binary classification using [stochastic gradient descent][stochastic-gradient-descent] (SGD).

<section class="usage">

## Usage

```javascript
var incrBinaryClassification = require( '@stdlib/ml/incr/binary-classification' );
```

#### incrBinaryClassification( N\[, options] )

Returns an accumulator `function` which incrementally performs binary classification using [stochastic gradient descent][stochastic-gradient-descent].

```javascript
// Create an accumulator for performing binary classification on 3-dimensional data:
var accumulator = incrBinaryClassification( 3 );
```

The function accepts the following `options`:

-   **intercept**: `boolean` indicating whether to include an intercept. If `true`, an element equal to one is implicitly added to each provided feature vector, and, thus, the model performs regularization of the intercept term. If `false`, the model assumes that feature vectors are already centered. Default: `true`.

-   **lambda**: regularization parameter. The regularization parameter determines the amount of shrinkage inflicted on the model coefficients. Higher values reduce the variance of the model coefficient estimates at the expense of introducing bias. Default: `1.0e-4`.

-   **learningRate**: an array-like object containing the learning rate function and associated parameters. The learning rate function decides how fast or slow the model coefficients will be updated toward the optimal coefficients. Must be one of the following:

    -   `['constant', ...]`: constant learning rate function. To set the learning rate, provide a second array element. By default, when the learn rate function is 'constant', the learning rate is set to `0.02`.
    -   `['basic']`: basic learning rate according to the formula `10/(10+t)` where `t` is the current iteration.
    -   `['pegasos']`: Pegasos learning rate which follows the formula `1/(lambda*t)` where `t` is the current iteration and `lambda` is the regularization parameter.

    Default: `['basic']`.

-   **loss**: loss function. Must be one of the following:

    -   `hinge`: hinge loss function. Corresponds to a soft-margin linear Support Vector Machine (SVM), which can handle non-linearly separable data.
    -   `log`: logistic loss function. Corresponds to Logistic Regression.
    -   `modifiedHuber`: Huber loss function variant for classification. 
    -   `perceptron`: hinge loss function without a margin. Corresponds to the original Perceptron by Rosenblatt.
    -   `squaredHinge`: squared hinge loss function SVM (L2-SVM).

    Default: `'log'`.

By default, the model contains an intercept term. To omit the intercept, set the `intercept` option to `false`:

```javascript
var array = require( '@stdlib/ndarray/array' );

// Create a model with the intercept term:
var acc = incrBinaryClassification( 2, {
    'intercept': true
});
var coefs = acc( array( [ 1.4, 0.5 ] ), 1 );
// returns <ndarray>

var dim = coefs.length;
// returns 3

// Create a model without the intercept term:
acc = incrBinaryClassification( 2, {
    'intercept': false
});
coefs = acc( array( [ 1.4, 0.5 ] ), -1 );
// returns <ndarray>

dim = coefs.length;
// returns 2
```

#### accumulator( x, y )

If provided a feature vector `x` and response value `y` (either `+1` or `-1`), the accumulator function updates a binary classification model; otherwise, the accumulator function returns the current binary classification model coefficients.

```javascript
var array = require( '@stdlib/ndarray/array' );

// Create an accumulator:
var acc = incrBinaryClassification( 2 );

// Provide data to the accumulator...
var x = array( [ 1.0, 0.0 ] );

var coefs = acc( x, -1 );
// returns <ndarray>

x.set( 0, 0.0 );
x.set( 1, 1.0 );

coefs = acc( x, 1 );
// returns <ndarray>

x.set( 0, 0.5 );
x.set( 1, 1.0 );

coefs = acc( x, 1 );
// returns <ndarray>

coefs = acc();
// returns <ndarray>
```

#### accumulator.predict( x\[, type] )

Calculates the linear predictor for a provided feature vector `x`.

```javascript
var array = require( '@stdlib/ndarray/array' );

// Create a model with the intercept term:
var acc = incrBinaryClassification( 2 );

// ...

var lp = acc.predict( array( [ 0.5, 2.0 ] ) );
// returns <number>
```

Given a feature vector `x = [x_0, x_1, ...]` and model coefficients `c = [c_0, c_1, ...]`, the linear predictor is equal to `(x_0*c_0) + (x_1*c_1) + ... + c_intercept`.

By default, the method returns the linear predictor. In order to return a prediction probability for the logistic (`log`) and modified Huber (`modifiedHuber`) loss functions, set the second argument to `'probability'`.

```javascript
var array = require( '@stdlib/ndarray/array' );

// Create a model with the intercept term:
var acc = incrBinaryClassification( 2, {
    'loss': 'log'
});

// ...

var phat = acc.predict( array( [ 0.5, 2.0 ] ), 'probability' );
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The underlying binary classification model performs [L2 regularization][tikhonov-regularization] of model coefficients, shrinking them toward zero by penalizing their squared [euclidean norm][euclidean-norm].
-   [Stochastic gradient descent][stochastic-gradient-descent] is sensitive to the scaling of the features. One is advised to either scale each feature to `[0,1]` or `[-1,1]` or to transform each feature into z-scores with zero mean and unit variance. One should keep in mind that the same scaling has to be applied to test vectors in order to obtain accurate predictions.
-   In general, the more data provided to an accumulator, the more reliable the model predictions.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var normal = require( '@stdlib/random/base/normal' );
var binomial = require( '@stdlib/random/base/binomial' );
var array = require( '@stdlib/ndarray/array' );
var exp = require( '@stdlib/math/base/special/exp' );
var incrBinaryClassification = require( '@stdlib/ml/incr/binary-classification' );

// Create a new accumulator:
var acc = incrBinaryClassification( 2, {
    'intercept': true,
    'lambda': 1.0e-3,
    'loss': 'log'
});

// Incrementally update the classification model...
var phat;
var x;
var i;
for ( i = 0; i < 10000; i++ ) {
    x = array( [ normal( 0.0, 1.0 ), normal( 0.0, 1.0 ) ] );
    phat = 1.0 / ( 1.0+exp( -( ( 3.0*x.get(0) ) - ( 2.0*x.get(1) ) + 1.0 ) ) );
    acc( x, ( binomial( 1, phat ) ) ? 1.0 : -1.0 );
}

// Retrieve model coefficients:
var coefs = acc();
console.log( 'Coefficients: %d, %d, %d', coefs.get( 0 ), coefs.get( 1 ), coefs.get( 2 ) );

// Predict new observations...
x = array( [ 0.9, 0.1 ] );
var yhat = acc.predict( x, 'probability' );
console.log( 'Pr(Y=1)_hat = %d; x1 = %d; x2 = %d', yhat, x.get( 0 ), x.get( 1 ) );

x = array( [ 0.1, 0.9 ] );
yhat = acc.predict( x, 'link' );
console.log( 'y_hat = %d; x1 = %d; x2 = %d', yhat, x.get( 0 ), x.get( 1 ) );

x = array( [ 0.9, 0.9 ] );
yhat = acc.predict( x, 'link' );
console.log( 'y_hat = %d; x1 = %d; x2 = %d', yhat, x.get( 0 ), x.get( 1 ) );
```

</section>

<!-- /.examples -->

<section class="links">

[euclidean-norm]: https://en.wikipedia.org/wiki/Norm_%28mathematics%29#Euclidean_norm

[tikhonov-regularization]: https://en.wikipedia.org/wiki/Tikhonov_regularization

[stochastic-gradient-descent]: https://en.wikipedia.org/wiki/Stochastic_gradient_descent

</section>

<!-- /.links -->
