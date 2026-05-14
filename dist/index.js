"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var b=c(function(V,q){"use strict";var w=require("@stdlib/ndarray-base-assert-is-complex-floating-point-data-type"),E=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,T=require("@stdlib/assert-is-plain-object"),o=require("@stdlib/assert-has-own-property"),N=require("@stdlib/assert-is-nonnegative-integer-array").primitives,D=require("@stdlib/assert-is-empty-collection"),h=require("@stdlib/array-base-assert-contains").factory,O=require("@stdlib/ndarray-base-shape2strides"),P=require("@stdlib/ndarray-base-buffer"),_=require("@stdlib/ndarray-base-numel"),A=require("@stdlib/ndarray-base-fill"),j=require("@stdlib/ndarray-ctor"),p=require("@stdlib/ndarray-defaults"),x=require("@stdlib/ndarray-dtypes"),C=require("@stdlib/array-base-join"),F=require("@stdlib/constants-complex128-nan"),d=require("@stdlib/string-format"),m=p.get("dtypes.default"),g=p.get("order"),y=x("floating_point_and_generic"),I=h(y);function L(r){var e,i,t,f,n,s,v,u,a,l;if(n={},arguments.length>1){if(e=arguments[1],!T(e))throw new TypeError(d("invalid argument. Options argument must be an object. Value: `%s`.",e));if(o(e,"dtype")){if(i=e.dtype,!I(i))throw new TypeError(d('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",C(y,'", "'),i))}else i=m;o(e,"order")?t=e.order:t=g,o(e,"mode")&&(n.mode=e.mode),o(e,"submode")&&(n.submode=e.submode),o(e,"readonly")&&(n.readonly=e.readonly)}else i=m,t=g;if(E(r))a=[r];else if(N(r)||D(r))a=r;else throw new TypeError(d("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",r));return f=a.length,f>0?(s=_(a),u=O(a,t)):(s=1,u=[0]),v=new j(i,P(i,s),a,u,0,t,n),w(i)?l=F:l=NaN,A(v,l),v}q.exports=L});var R=b();module.exports=R;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
