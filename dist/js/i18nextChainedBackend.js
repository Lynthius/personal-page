!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self).i18nextChainedBackend=e()}(this,(function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var t=[],i=t.forEach,o=t.slice;function a(n){return i.call(o.call(arguments,1),(function(e){if(e)for(var t in e)void 0===n[t]&&(n[t]=e[t])})),n}function c(n){return n?"function"==typeof n?new n:n:null}var r=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t),this.backends=[],this.type="backend",this.init(e,i)}var i,o,r;return i=t,(o=[{key:"init",value:function(n){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;this.services=n,this.options=a(t,this.options||{},{}),this.options.backends&&this.options.backends.forEach((function(t,o){e.backends[o]=e.backends[o]||c(t),e.backends[o].init(n,e.options.backendOptions[o],i)}))}},{key:"read",value:function(n,e,t){var i=this,o=this.backends.length,a=function t(o,a){if(!(o<0)){var c=i.backends[o];c.save?(c.save(n,e,a),t(o-1,a)):t(o-1,a)}};!function c(r){if(r>=o)return t(new Error("non of the backend loaded data;",!0));var s=i.backends[r];s.read?s.read(n,e,(function(n,e){!n&&e&&Object.keys(e).length>-1?(t(null,e,r),a(r-1,e)):c(r+1)})):c(r+1)}(0)}},{key:"create",value:function(n,e,t,i){this.backends.forEach((function(o){o.create&&o.create(n,e,t,i)}))}}])&&e(i.prototype,o),r&&e(i,r),t}();return r.type="backend",r}));