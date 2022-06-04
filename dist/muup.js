(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define(["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["Muup"] = factory(require("PIXI"));
	else
		root["Muup"] = factory(root["PIXI"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_pixi_js__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_pixi_js__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var app = /** @class */ (function () {
    function app(width, height) {
        this.components = {};
        this.app = new PIXI.Application({ width: width, height: height });
        return this;
    }
    app.prototype.mount = function (selector) {
        var container = document.querySelector(selector);
        if (container)
            container.appendChild(this.app.view);
    };
    app.prototype.component = function (name, component) {
        this.components[name] = component;
    };
    app.prototype.use = function (plagin) {
        if (plagin.install) {
            plagin.install(this);
            return this;
        }
        return this;
    };
    return app;
}());
exports.app = app;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV1cC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBLHlEQUFnQztBQVFoQztJQUdFLGFBQVksS0FBYSxFQUFFLE1BQWM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLFNBQUUsTUFBTSxVQUFFLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxtQkFBSyxHQUFMLFVBQU0sUUFBZ0I7UUFDcEIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLFNBQVM7WUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHVCQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsU0FBb0I7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVELGlCQUFHLEdBQUgsVUFBSSxNQUFjO1FBQ2hCLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQztBQXpCWSxrQkFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL011dXAvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL011dXAvZXh0ZXJuYWwgdW1kIFwiUElYSVwiIiwid2VicGFjazovL011dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQSVhJXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlBJWElcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTXV1cFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIlBJWElcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk11dXBcIl0gPSBmYWN0b3J5KHJvb3RbXCJQSVhJXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXykgPT4ge1xucmV0dXJuICIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGx1Z2luIHtcclxuICBpbnN0YWxsOiAobXV1cDogYXBwKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50IHtcclxuICBwcm9wczogc3RyaW5nW107XHJcbn1cclxuZXhwb3J0IGNsYXNzIGFwcCB7XHJcbiAgYXBwOiBQSVhJLkFwcGxpY2F0aW9uO1xyXG4gIGNvbXBvbmVudHM6IHsgW2tleTogc3RyaW5nXTogQ29tcG9uZW50IH07XHJcbiAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgdGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih7IHdpZHRoLCBoZWlnaHQgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIG1vdW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKGNvbnRhaW5lcikgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYXBwLnZpZXcpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50KG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBDb21wb25lbnQpIHtcclxuICAgIHRoaXMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHVzZShwbGFnaW46IFBsdWdpbikge1xyXG4gICAgaWYgKHBsYWdpbi5pbnN0YWxsKSB7XHJcbiAgICAgIHBsYWdpbi5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=