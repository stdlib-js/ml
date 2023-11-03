// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import e,{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-vector-like@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{ndarray as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gdot@v0.1.1-esm/index.mjs";import{ndarray as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gaxpy@v0.1.1-esm/index.mjs";import p,{ndarray as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dcopy@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dscal@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.1.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expit@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.1.1-esm/index.mjs";import{isPrimitive as _}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.1.1-esm/index.mjs";import{isPrimitive as x}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import{isPrimitive as E}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import{isPrimitive as R}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-matrix-like@v0.1.0-esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@v0.1.0-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs";import{ndarray as M}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.1.0-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@v0.1.0-esm/index.mjs";import q,{isPrimitive as H}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import{factory as W}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-sample@esm/index.mjs";import{factory as B}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs";import{factory as I}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mean@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-meanstdev@esm/index.mjs";import Y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import K from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@v0.1.0-esm/index.mjs";import{isPrimitive as Q}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import{isPrimitive as U}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";var X={basic:"_basicLearningRate",constant:"_constantLearningRate",invscaling:"_inverseScalingLearningRate",pegasos:"_pegasosLearningRate"},Z={hinge:"_hingeLoss",log:"_logLoss",modifiedHuber:"_modifiedHuberLoss",perceptron:"_perceptronLoss",squaredHinge:"_squaredHingeLoss"};function $(t,e){var i;return this._N=t,this._opts=e,this._scaleFactor=1,this._t=0,this._learningRateMethod=X[e.learningRate[0]],this._lossMethod=Z[e.loss],i=t,e.intercept&&(i+=1),this._weights=new v(i),this._coefficients=new b("float64",new v(i),[i],[1],0,"row-major"),this}s($.prototype,"_add",(function(t,e){var i=e/this._scaleFactor,n=this._weights;return l(t.shape[0],i,t.data,t.strides[0],t.offset,n,1,0),this._opts.intercept&&(n[this._N]+=i),this})),s($.prototype,"_basicLearningRate",(function(){return 10/(10+this._t)})),s($.prototype,"_constantLearningRate",(function(){return this._opts.learningRate[1]})),s($.prototype,"_dot",(function(t,e,i){var n=d(this._N,this._weights,1,0,t,e,i);return this._opts.intercept&&(n+=this._weights[this._N]),n*=this._scaleFactor})),s($.prototype,"_hingeLoss",(function(t,e){var i;return i=this[this._learningRateMethod](),this._regularize(i),e*this._dot(t.data,t.strides[0],t.offset)<1&&this._add(t,e*i),this})),s($.prototype,"_inverseScalingLearningRate",(function(){var t=this._opts.learningRate;return t[1]/f(this._t,t[2])})),s($.prototype,"_logLoss",(function(t,e){var i,n,r;return n=this[this._learningRateMethod](),this._regularize(n),r=this._dot(t.data,t.strides[0],t.offset),i=e/(1+c(e*r)),this._add(t,n*i),this})),s($.prototype,"_modifiedHuberLoss",(function(t,e){var i,n;return i=this[this._learningRateMethod](),this._regularize(i),(n=e*this._dot(t.data,t.strides[0],t.offset))<-1?this._add(t,4*i*e):this._add(t,i*(e-n*e)),this})),s($.prototype,"_pegasosLearningRate",(function(){return 1/(this._opts.lambda*this._t)})),s($.prototype,"_perceptronLoss",(function(t,e){var i;return i=this[this._learningRateMethod](),this._regularize(i),e*this._dot(t.data,t.strides[0],t.offset)<=0&&this._add(t,e*i),this})),s($.prototype,"_regularize",(function(t){var e=this._opts.lambda;return e<=0||this._scale(h(1-t*e,1e-7)),this})),s($.prototype,"_scale",(function(t){var e;if(t<=0)throw new RangeError(a("invalid argument. Attempting to scale a weight vector by a nonpositive value. This is likely due to too large a value of eta * lambda. Value: `%f`.",t));return(e=this._scaleFactor)<1e-11&&(u(this._N,e,this._weights,1),this._scaleFactor=1),this._scaleFactor*=t,this})),s($.prototype,"_squaredHingeLoss",(function(t,e){var i,n;return i=this[this._learningRateMethod](),this._regularize(i),(n=e*this._dot(t.data,t.strides[0],t.offset))<1&&this._add(t,i*(e-n*e)),this})),o($.prototype,"coefficients",(function(){var t=this._coefficients.data,e=this._weights;return p(e.length,e,1,t,1),u(this._N,this._scaleFactor,t,1),this._coefficients})),o($.prototype,"nfeatures",(function(){return this._N})),s($.prototype,"predict",(function(t,e){var i,n,r,s,a,o,d,l,p,m,u,h,c,f,_,x;for(n=t.data,s=t.shape,p=t.strides,u=t.offset,o=t.order,i=s.length-1,a=[],x=0;x<i;x++)a.push(s[x]);for(0===i?(h=1,r=new v(1),m=[0]):(h=y(a),r=new v(h),m=j(a,o)),f=new b("int8",r,a,m,0,o),c=this._N,l=p[i],x=0;x<h;x++)d=w(s,p,u,o,x*c,"throw"),_=this._dot(n,l,d),"label"===e?_=_>0?1:-1:"probability"===e&&(_=g(_)),0===i?f.iset(_):f.iset(x,_);return f})),s($.prototype,"update",(function(t,e){return this._t+=1,this[this._lossMethod](t,e)}));var tt={basic:["basic"],constant:["constant",.02],invscaling:["invscaling",.02,.5],pegasos:["pegasos"]},et=["basic","constant","invscaling","pegasos"],it=["hinge","log","modifiedHuber","perceptron","squaredHinge"];function nt(t,e){var i;if(!O(e))return new TypeError(a("invalid argument. Options argument must be an object. Value: `%s`.",e));if(z(e,"intercept")&&(t.intercept=e.intercept,!R(t.intercept)))return new TypeError(a("invalid option. `%s` option must be a boolean. Option: `%s`.","intercept",t.intercept));if(z(e,"lambda")&&(t.lambda=e.lambda,!_(t.lambda)))return new TypeError(a("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","lambda",t.lambda));if(z(e,"learningRate")){if(!T(e.learningRate))return new TypeError(a("invalid option. `%s` option must be an array-like object. Option: `%s`.","learningRate",e.learningRate));if(i=e.learningRate[0],t.learningRate[0]=i,!V(et,i))return new TypeError(a('invalid option. First `%s` option must be one of the following: "%s". Option: `%s`.',"learningRate",et.join('", "'),i));if(e.learningRate.length>1&&("constant"===i||"invscaling"===i)&&(t.learningRate[1]=e.learningRate[1],!x(t.learningRate[1])))return new TypeError(a("invalid option. Second `%s` option must be a positive number. Option: `%s`.","learningRate",t.learningRate[1]));if(e.learningRate.length>2&&"invscaling"===i&&(t.learningRate[2]=e.learningRate[2],!E(t.learningRate[2])))return new TypeError(a("invalid option. Third `%s` option must be a number. Option: `%s`.","learningRate",t.learningRate[2]))}return z(e,"loss")&&(t.loss=e.loss,!V(it,t.loss))?new TypeError(a('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"loss",it.join('", "'),t.loss)):null}function rt(t,e,i){return(i?A:b)("float64",new v(t*e),[t,e],[e,1],0,"row-major")}function st(t,e){var i,n,r,s,a,o,d,l,p,m,u;for(p=e.shape[0],m=e.shape[1],i=e.data,n=t.data,r=e.strides[0],s=e.strides[1],a=t.strides[0],o=t.strides[1],d=e.offset,l=t.offset,u=0;u<p;u++)M(m,i,s,d,n,o,l),d+=r,l+=a;return t}function at(t,e){return(e?S:b)("float64",new v(t),[t],[1],0,"row-major")}function ot(t,e){return M(e.shape[0],e.data,e.strides[0],e.offset,t.data,t.strides[0],t.offset),t}var dt=["euclidean","correlation","cosine"],lt=["forgy","sample","kmeans++"];function pt(t,e){if(!O(e))return new TypeError(a("invalid argument. Options argument must be an object. Value: `%s`.",e));if(z(e,"metric")&&(t.metric=e.metric,!V(dt,t.metric)))return new TypeError(a('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"metric",dt.join('", "'),t.metric));if(z(e,"init")){if(!T(e.init))return new TypeError(a("invalid option. `%s` option must be an array-like object. Option: `%s`.","init",e.init));if(!V(lt,e.init[0]))return new TypeError(a('invalid option. `%s` option method must be one of the following: "%s". Option: `%s`.',"init",lt.join('", "'),e.init[0]));if(t.init[0]=e.init[0],e.init.length>1&&(t.init[1]=e.init[1],!i(t.init[1])))return new TypeError(a("invalid option. First `%s` parameter option must be a positive integer. Option: `%s`.","init",t.init[1]));if(e.init.length>2&&(t.init[2]=e.init[2],!i(t.init[2])))return new TypeError(a("invalid option. Second `%s` parameter option must be a positive integer. Option: `%s`.","init",t.init[2]))}return z(e,"normalize")&&(t.normalize=e.normalize,!H(t.normalize))?new TypeError(a("invalid option. `%s` option must be a boolean. Option: `%s`.","normalize",t.normalize)):z(e,"copy")&&(t.copy=e.copy,!H(t.copy))?new TypeError(a("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",t.copy)):(z(e,"seed")&&(t.seed=e.seed),null)}var mt={forgy:["forgy",1],sample:["sample",1],"kmeans++":["kmeans++",1,1]};function ut(t,e,i,n){var r,s,a,o;for(s=0,r=n,o=0;o<t;o++)s+=(a=e[r])*a,r+=i;for(s=N(s),r=n,o=0;o<t;o++)e[r]/=s;return e}function ht(t){var e,i,n,r,s,a,o;for(e=t.data,s=t.shape[0],a=t.shape[1],i=t.strides[0],n=t.strides[1],r=t.offset,o=0;o<s;o++)ut(a,e,n,r),r+=i;return t}function ct(t,e,i,n,r,s,a,o,d,l){var p,m,u,h;for(p=n,m=a,u=l,h=0;h<t;h++)e[p]=(e[p]-r[m])/o[u],p+=i,m+=s,u+=d;return e}function ft(t,e){var i,n,r,s,a,o,d;for(i=t.data,a=t.shape[0],o=t.shape[1],n=t.strides[0],r=t.strides[1],s=t.offset,d=0;d<a;d++)ct(o,i,r,s,e,2,0,e,2,1),s+=n;return t}function gt(t,e,i,n,r,s,a){var o=function(t,e,i,n,r,s,a){var o,d,l,p,m;for(o=n,d=a,p=0,m=0;m<t;m++)p+=(l=e[o]-r[d])*l,o+=i,d+=s;return N(p)}(t,e,i,n,r,s,a);return o*o}function vt(t,e,i,n,r,s,a){var o,d,l,p;for(o=n,d=a,l=0,p=0;p<t;p++)l+=e[o]*r[d],o+=i,d+=s;return l}function bt(t,e,i,n,r,s,a){var o=1-vt(t,e,i,n,r,s,a);return o*o}function jt(t,e,i,n,r,s,a){var o=1-vt(t,e,i,n,r,s,a);return o*o}function yt(t,e,i,n,r,s){var a,o,d,l,p;for(l=r.data,a=(d=r.strides[0])*s,o=0,p=0;p<i;p++)t[p]=e(n,l,1,o,l,1,a),o+=d;return t}function wt(t,e,i,n,r,s,a,o,d){var l,p,m,u;for(l=C,u=0;u<e;u++)(m=t(i,n,1,s,a,o,d))<l&&(l=m,p=u),s+=r;return p}function _t(t,e,i,n,r,s,a,o){var d,l;for(l=0;l<t;l++)d=i[r],d+=(s[o]-d)/e,i[r]=d,r+=n,o+=a;return i}function xt(t,e,i,n,r,s){var a,o;return o=t.shape[1],function(d){void 0===a&&((a=rt(s.init[1],o,!0)).count=0);if(a.count<s.init[1]&&(M(o,d.data,d.strides[0],d.offset,a.data,a.strides[1],a.strides[0]*a.count),a.count+=1,a.count<s.init[1]))return!1;s.normalize&&("cosine"===s.metric?a=ht(a):"correlation"===s.metric&&(a=ft(a,n())));t="forgy"===s.init[0]?function(t,e,i){var n,r,s,a,o,d,l,p,m,u,h,c,f,g,v,b;for(f=t.shape[0],g=t.shape[1],r=t.data,l=t.strides[0],p=t.strides[1],u=t.offset,a=e.data,s=e.shape[0],o=e.strides[0],d=e.strides[1],c=e.offset,n=B(0,f-1,{seed:i}),m=[],v=0;v<f*g;v++)m.push(D());for(v=0;v<s;v++){for(h=g*n(),b=0;b<g;b++)m[h+b](a[c+d*b]);c+=o}for(h=0,v=0;v<f;v++){for(b=0;b<g;b++)r[u+p*b]=m[h](),h+=1;u+=l}return t}(t,a,s.seed):"sample"===s.init[0]?function(t,e,i){var n,r,s,a,o,d,l,p,u,h,c;for(u=t.shape[0],h=t.shape[1],r=t.data,d=t.strides[1],l=t.offset,s=e.data,a=e.strides[0],o=e.strides[1],n=[],c=0;c<e.shape[0];c++)n.push(c);for(p=u===n.length?n:W({seed:i,size:u,mutate:!1,replacement:!1})(n),c=0;c<u;c++)m(h,s,o,a*p[c],r,d,l);return t}(t,a,s.seed):function(t,e,i,n,r){var s,a,o,d,l,p,u,h,c,f,g,v,b,j,y,w,_,x,E,R,T,O,z,V,k,F,L,P;if(V=t.shape[0],d=t.shape[1],h=e.shape[0],v=t.data,_=t.strides[0],x=t.strides[1],E=t.offset,b=e.data,y=e.strides[0],w=e.strides[1],u=I({seed:r}),o=B({seed:u()}),u=u.normalized,g="cosine"===i?bt:"correlation"===i?jt:gt,z=o(0,h-1),1===V)return m(d,b,w,y*z,v,x,E);for(s=[z],R=new Array(d),l=new Array(2*h),j=0,F=0;F<h;F++)l[j]=C,l[j+1]=0,j+=2;for(p=new Array(h),L=1;L<V;L++){for(yt(R,g,h,d,e,s[L-1]),c=0,j=0,F=0;F<h;F++)R[F]<l[j]?(l[j]=R[F],l[j+1]=L-1,c+=R[F]):c+=l[j],j+=2;for(p[0]=l[0]/c,j=2,F=1;F<h;F++)p[F]=p[F-1]+l[j]/c,j+=2;for(f=C,T=-1,P=0;P<n;P++){for(z=-1;-1===z;)for(k=u(),F=0;F<h;F++)if(k<p[F]){z=F;break}for(c=0,a=y*z,j=0,F=0;F<h;F++)(O=g(d,b,1,y*F,b,1,a))<l[j]?c+=O:c+=l[j],j+=2;c<f&&(f=c,T=z)}s.push(T)}for(F=0;F<V;F++)m(d,b,w,y*s[F],v,x,E),E+=_;return t}(t,a,s.metric,s.init[2],s.seed);return function(t,e,i,n,r){var s,a,o,d,l,p,m,u,h,c,f;for(h=e.shape[0],s=e.shape[1],d=t.shape[0],a=e.data,l=e.strides[0],o=t.data,p=t.strides[0],u=0,f=0;f<d;f++)m=l*(c=wt(r,h,s,a,l,0,o,1,u)),_t(s,i.get(c,0)+1,a,1,m,o,1,u),n(c,r(s,a,1,m,o,1,u)),u+=p}(a,t,e,i,r),!0}}function Et(t,e){var i,n;for(i=[],n=0;n<e;n++)i.push(0);return function(e,n){var r,s,a;return a=t.get(e,0)+1,t.set(e,0,a),t.set(e,1,t.get(e,1)+n),s=t.get(e,2),s+=(r=n-s)/a,i[e]+=r*(n-s),t.set(e,2,s),t.set(e,3,N(i[e]/(a-1))),t}}function Rt(t){var e,i,n,r,s;for(2,e=2*(n=new Y(2*t)).BYTES_PER_ELEMENT,i=[],r=0,s=0;s<t;s++)i.push(G(new Y(n.buffer,r,2))),r+=e;return function(e){var r;if(0===arguments.length)return n;for(r=0;r<t;r++)i[r](e.get(r));return n}}function Tt(t,e){var i={};return i.centroids=rt(t,e,!1),i.stats=rt(t,4,!1),i}function Ot(t,i){var n;if(!(this instanceof Ot))return new Ot(t,i);if(!e(t))throw new TypeError(a("invalid argument. First argument must be a positive integer. Value: `%s`.",t));if(!q(i))throw new TypeError(a("invalid argument. Second argument must be a boolean. Value: `%s`.",i));for(this.scale=1,this.norm=0,this.intercept=i,this.nWeights=t+(this.intercept?1:0),this._data=new Array(this.nWeights),n=0;n<this.nWeights;n++)this._data[n]=0}s(Ot.prototype,"scaleTo",(function(t){var e;if(this.scale<1e-11){for(e=0;e<this.nWeights;e++)this._data[e]*=this.scale;this.scale=1}if(this.norm*=f(t,2),!(t>0))throw new RangeError(a("unexpected error. Scaling weight vector by nonpositive value, likely due to too large value of eta * lambda. Value: `%f`.",t));this.scale*=t})),s(Ot.prototype,"add",(function(t,e){var i,n,r;for(n=0,void 0===e&&(e=1),r=0;r<t.length;r++)i=t[r]*e,n+=this._data[r]*i,this._data[r]=this._data[r]+i/this.scale;this.intercept&&(i=1*e,n+=this._data[r]*i,this._data[r]=this._data[r]+i/this.scale),this.norm+=(function(t,e){var i,n=t.length,r=0;for(i=0;i<n;i++)r+=t[i]*e[i];return r}(t,t)+(this.intercept?1:0))*f(e,2)+2*this.scale*n})),s(Ot.prototype,"innerProduct",(function(t){var e,i=0;for(e=0;e<t.length;e++)i+=this._data[e]*t[e];return i+=this.intercept?this._data[e]:0,i*=this.scale}));function zt(t,e,i){var n;e>0&&(n=1-i*e,t.scaleTo(h(n,1e-7)))}function Vt(t,e,i,n,r,s){var a=t.innerProduct(e)-i;zt(t,r,n),a>s?t.add(e,-n):a<-s&&t.add(e,+n)}function kt(t,e,i,n,r){var s=i-t.innerProduct(e);zt(t,r,n),t.add(e,n*s)}function Ft(t,e,i,n,r,s){var a=t.innerProduct(e)-i;zt(t,r,n),a>s?t.add(e,-n):a<-s?t.add(e,+n):t.add(e,-n*a)}function Lt(t,e,i){var n,r;switch(n=1,t){case"basic":r=function(){var t=1e3/(n+1e3);return n+=1,t};break;case"constant":r=function(){return n+=1,e};break;case"pegasos":r=function(){var t=1/(i*n);return n+=1,t};break;default:throw new Error(a('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"learningRate",["basic","constant","pegasos"].join('", "'),t))}return r}var Pt={epsilon:.1,eta0:.02,intercept:!0,lambda:.001,learningRate:"basic",loss:"squaredError"};function At(t,e){return O(e)?z(e,"epsilon")&&(t.epsilon=e.epsilon,!x(t.epsilon))?new TypeError(a("invalid option. `%s` option must be a positive number. Option: `%s`.","epsilon",t.epsilon)):z(e,"eta0")&&(t.eta0=e.eta0,!x(t.eta0))?new TypeError(a("invalid option. `%s` option must be a positive number. Option: `%s`.","eta0",t.eta0)):z(e,"lambda")&&(t.lambda=e.lambda,!Q(t.lambda))?new TypeError(a("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","lambda",t.lambda)):z(e,"learningRate")&&(t.learningRate=e.learningRate,!U(t.learningRate))?new TypeError(a("invalid option. `%s` option must be a string. Option: `%s`.","learningRate",t.learningRate)):z(e,"loss")&&(t.loss=e.loss,!U(t.loss))?new TypeError(a("invalid option. `%s` option must be a string. Option: `%s`.","loss",t.loss)):z(e,"intercept")&&(t.intercept=e.intercept,!R(t.intercept))?new TypeError(a("invalid option. `%s` option must be a boolean. Option: `%s`.","intercept",t.intercept)):null:new TypeError(a("invalid argument. Options argument must be an object. Value: `%s`.",e))}var Mt={};t(Mt,"incrBinaryClassification",(function(t,e){var o,d,l;if(!i(t))throw new TypeError(a("invalid argument. First argument must be a positive integer. Value: `%s`.",t));if(d={intercept:!0,lambda:1e-4,learningRate:tt.basic.slice(),loss:"log"},arguments.length>1&&(l=nt(d,e)))throw l;return o=new $(t,d),s(p,"predict",m),p;function p(t,e){if(0===arguments.length)return o.coefficients;if(!n(t))throw new TypeError(a("invalid argument. First argument must be a one-dimensional ndarray. Value: `%s`.",t));if(-1!==e&&1!==e)throw new TypeError(a("invalid argument. Second argument must be either +1 or -1. Value: `%s`.",e));if(t.shape[0]!==o.nfeatures)throw new TypeError(a("invalid argument. First argument must be a one-dimensional ndarray of length %u. Actual length: `%u`.",o.nfeatures,t.shape[0]));return o.update(t,e),o.coefficients}function m(e,i){var n,s;if(!r(e))throw new TypeError(a("invalid argument. First argument must be an ndarray. Value: `%s`.",e));if((n=e.shape)[n.length-1]!==t)throw new TypeError(a("invalid argument. First argument must be an ndarray whose last dimension is of size %u. Actual size: `%u`.",t,n[n.length-1]));if(s="label",arguments.length>1){if("probability"===i){if("log"!==d.loss&&"modifiedHuber"!==d.loss)throw new Error(a('invalid argument. Second argument is incompatible with model loss function. Probability predictions are only supported when the loss function is one of the following: "%s". Model loss function: `%s`.',["log","modifiedHuber"].join('", "'),d.loss))}else if("label"!==i&&"linear"!==i)throw new TypeError(a('invalid argument. Second argument must be a string value equal to either "label", "probability", or "linear". Value: `%s`.',i));s=i}return o.predict(e,s)}})),t(Mt,"incrkmeans",(function(){var t,e,r,o,d,l,m,u,h,c,f,g,v,b;if(k(arguments[0]))b=arguments[0].shape[0],u=arguments[0].shape[1],e=st(e=rt(b,u,!0),arguments[0]),arguments.length>1&&(o=arguments[1],v=!0);else{if(!i(arguments[0]))throw new TypeError(a("invalid argument. First argument must either be a positive integer specifying the number of clusters or a matrix containing initial centroids. Value: `%s`.",arguments[0]));if(b=arguments[0],!i(u=arguments[1]))throw new TypeError(a("invalid argument. Argument specifying number of dimensions must be a positive integer. Value: `%s`.",u));arguments.length>2&&(o=arguments[2],v=!0)}if((c={metric:"euclidean",init:mt["kmeans++"].slice(),seed:F(),normalize:!0,copy:!0}).init[1]=b,c.init[2]=2+L(P(b)),v&&(g=pt(c,o)))throw g;if(c.init[1]<b)throw new RangeError(a("invalid option. First `%s` parameter option must be greater than or equal to the number of clusters. Options: `%f`.","init",c.init[1]));return d=Tt(b,u),m=rt(b,4,!0),t=Et(m,b),"cosine"===c.metric?(h=bt,c.copy&&(l=at(u,!0))):"correlation"===c.metric?(h=jt,c.normalize&&(r=Rt(u)),c.copy&&(l=at(u,!0))):h=gt,void 0===e?(e=rt(b,u,!0),f=xt(e,m,t,r,h,c)):st(d.centroids,e),s(j,"seed",c.seed),s(j,"predict",y),j;function j(i){var s,o,g,v,j,y,w,_,x,E,R;if(0===arguments.length)return f?null:d;if(!n(_=i))throw new TypeError(a("invalid argument. Must provide a one-dimensional ndarray. Value: `%s`.",_));if(_.shape[0]!==u)throw new Error(a("invalid argument. Vector length must match centroid dimensions. Expected: `%u``. Actual: `%u``.",u,_.shape[0]));if(r&&r(_),f){if(!1===f(_))return null;f=void 0}else c.normalize&&("cosine"===c.metric?(c.copy&&(_=ot(l,_)),ut(u,_.data,_.strides[0],_.offset)):"correlation"===c.metric&&(c.copy&&(_=ot(l,_)),g=r(),ct(u,_.data,_.strides[0],_.offset,g,2,0,g,2,1))),s=e.data,j=e.strides[0],o=_.data,v=_.strides[0],y=_.offset,w=j*(R=wt(h,b,u,s,j,0,o,v,y)),x=m.get(R,0)+1,_t(u,x,s,1,w,o,v,y),E=h(u,s,1,w,o,v,y),t(R,E);return p(e.length,e.data,1,d.centroids.data,1),p(m.length,m.data,1,d.stats.data,1),d}function y(t,i){var s,o,d,l,p,m,g,v,j,y,w;if(arguments.length>1){if(!n(t))throw new TypeError(a("invalid argument. Output argument must be a one-dimensional ndarray. Value: `%s`.",t));j=t,v=i}else v=t;if(!k(v))throw new TypeError(a("invalid argument. Must provide a two-dimensional ndarray. Value: `%s`.",v));if(v.shape[1]!==u)throw new Error(a("invalid argument. Number of matrix columns must match centroid dimensions. Expected: `%u`. Actual: `%u`.",u,v.shape[1]));if(void 0===j)j=at(v.shape[0],!1);else if(j.length!==v.shape[0])throw new Error(a("invalid argument. Output vector length must match the number of data points. Expected: `%u`. Actual: `%u`.",v.shape[0],j.length));if(f)return null;for(d=v.shape[0],c.normalize&&("cosine"===c.metric?(c.copy&&(v=st(rt(d,u,!0),v)),v=ht(v)):"correlation"===c.metric&&(c.copy&&(v=st(rt(d,u,!0),v)),v=ft(v,r()))),o=e.data,m=e.strides[0],s=v.data,l=v.strides[0],p=v.strides[1],g=v.offset,w=0;w<d;w++)y=wt(h,b,u,o,m,0,s,p,g),j.set(w,y),g+=l;return j}})),t(Mt,"incrSGDRegression",(function(t){var e,i,n,r,d,l,p;if(l=K(Pt),arguments.length>0&&(p=At(l,t)))throw p;switch(n=null,l.loss){case"epsilonInsensitive":i=Vt;break;case"huber":i=Ft;break;case"squaredError":i=kt;break;default:throw Error(a('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"loss",["epsilonInsensitive","huber","squaredError"].join('", "'),l.loss))}function d(t,s){var o;if(!J(t))throw new TypeError(a("invalid argument. First argument must be an array. Value: `%s`.",t));if(n||(n=new Ot(t.length,l.intercept),e=l.intercept?n.nWeights-1:n.nWeights),t.length!==e)throw new TypeError(a("invalid argument. First argument must be an array of length %u. Value: `%s`.",e,t));o=r(),i(n,t,s,o,l.lambda,l.epsilon)}return r=Lt(l.learningRate,l.eta0,l.lambda),o(d,"coefs",m),s(d,"predict",u),d;function m(){var t,e;for(t=new Array(n.nWeights),e=0;e<t.length;e++)t[e]=n._data[e]*n.scale;return t}function u(t){if(!J(t)||t.length!==e)throw new TypeError(a("invalid argument. First argument must be an array of length %u. Value: `%s`.",e||0,t));return n.innerProduct(t)}}));var St={};t(St,"incr",Mt);export{St as default,Mt as incr};
//# sourceMappingURL=index.mjs.map
