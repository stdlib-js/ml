<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Incremental Machine Learning

> Incremental machine learning algorithms.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/ml/incr' );
```

#### ns

Namespace containing incremental machine learning algorithms.

```javascript
var incr = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`incrBinaryClassification( N[, options] )`][@stdlib/ml/incr/binary-classification]</span><span class="delimiter">: </span><span class="description">incrementally perform binary classification using stochastic gradient descent (SGD).</span>
-   <span class="signature">[`incrkmeans( k[, ndims][, options] )`][@stdlib/ml/incr/kmeans]</span><span class="delimiter">: </span><span class="description">incrementally partition data into `k` clusters.</span>
-   <span class="signature">[`incrSGDRegression( [options] )`][@stdlib/ml/incr/sgd-regression]</span><span class="delimiter">: </span><span class="description">online regression via Stochastic Gradient Descent.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var getKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/ml/incr' );

console.log( getKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/ml/incr/binary-classification]: https://github.com/stdlib-js/ml/tree/main/incr/binary-classification

[@stdlib/ml/incr/kmeans]: https://github.com/stdlib-js/ml/tree/main/incr/kmeans

[@stdlib/ml/incr/sgd-regression]: https://github.com/stdlib-js/ml/tree/main/incr/sgd-regression

<!-- </toc-links> -->

</section>

<!-- /.links -->
