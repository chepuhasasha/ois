(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pixi.js"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OIS"] = factory(require("pixi.js"));
	else
		root["OIS"] = factory(root["PIXI"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_pixi_js__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Engine = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var mover_layer_1 = __webpack_require__(/*! ./layers/mover.layer */ "./src/layers/mover.layer.ts");
var points_layer_1 = __webpack_require__(/*! ./layers/points.layer */ "./src/layers/points.layer.ts");
var viewer_layer_1 = __webpack_require__(/*! ./layers/viewer.layer */ "./src/layers/viewer.layer.ts");
var factory_service_1 = __webpack_require__(/*! ./services/factory.service */ "./src/services/factory.service.ts");
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine(FACTORY) {
        if (FACTORY === void 0) { FACTORY = new factory_service_1.Factory(); }
        var _this = _super.call(this, {
            antialias: true,
            backgroundColor: 0xff0000,
            resolution: window.devicePixelRatio * 0.9 || 0.9,
        }) || this;
        _this.FACTORY = FACTORY;
        return _this;
    }
    Engine.prototype.bootstrap = function () {
        this.VIEWER = new viewer_layer_1.Viewer(this.FACTORY);
        this.MOVER = new mover_layer_1.Mover(this.FACTORY);
        this.POINTS = new points_layer_1.Points(this.FACTORY);
    };
    return Engine;
}(pixi_js_1.Application));
exports.Engine = Engine;


/***/ }),

/***/ "./src/layers/mover.layer.ts":
/*!***********************************!*\
  !*** ./src/layers/mover.layer.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mover = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var Mover = /** @class */ (function (_super) {
    __extends(Mover, _super);
    function Mover(FACTORY) {
        var _this = _super.call(this) || this;
        _this.FACTORY = FACTORY;
        return _this;
    }
    return Mover;
}(pixi_js_1.Container));
exports.Mover = Mover;


/***/ }),

/***/ "./src/layers/points.layer.ts":
/*!************************************!*\
  !*** ./src/layers/points.layer.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Points = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var Points = /** @class */ (function (_super) {
    __extends(Points, _super);
    function Points(FACTORY) {
        var _this = _super.call(this) || this;
        _this.FACTORY = FACTORY;
        return _this;
    }
    return Points;
}(pixi_js_1.Container));
exports.Points = Points;


/***/ }),

/***/ "./src/layers/viewer.layer.ts":
/*!************************************!*\
  !*** ./src/layers/viewer.layer.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Viewer = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var Viewer = /** @class */ (function (_super) {
    __extends(Viewer, _super);
    function Viewer(FACTORY) {
        var _this = _super.call(this) || this;
        _this.FACTORY = FACTORY;
        return _this;
    }
    return Viewer;
}(pixi_js_1.Container));
exports.Viewer = Viewer;


/***/ }),

/***/ "./src/services/factory.service.ts":
/*!*****************************************!*\
  !*** ./src/services/factory.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Node = exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.add = function () {
        return new Node();
    };
    return Factory;
}());
exports.Factory = Factory;
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
exports.Node = Node;


/***/ }),

/***/ "pixi.js":
/*!***********************************************************************************************************!*\
  !*** external {"commonjs":"pixi.js","commonjs2":"pixi.js","umd":"pixi.js","script":"PIXI","root":"PIXI"} ***!
  \***********************************************************************************************************/
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSw4REFBc0M7QUFDdEMsbUdBQTZDO0FBQzdDLHNHQUErQztBQUMvQyxzR0FBK0M7QUFDL0MsbUhBQXFEO0FBRXJEO0lBQTRCLDBCQUFXO0lBS3JDLGdCQUFtQixPQUFnQztRQUFoQyx3Q0FBdUIseUJBQU8sRUFBRTtRQUFuRCxZQUNFLGtCQUFNO1lBQ0osU0FBUyxFQUFFLElBQUk7WUFDZixlQUFlLEVBQUUsUUFBUTtZQUN6QixVQUFVLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsSUFBSSxHQUFHO1NBQ2pELENBQUMsU0FDSDtRQU5rQixhQUFPLEdBQVAsT0FBTyxDQUF5Qjs7SUFNbkQsQ0FBQztJQUVPLDBCQUFTLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHFCQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxtQkFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscUJBQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLENBbEIyQixxQkFBVyxHQWtCdEM7QUFsQlksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5CLDhEQUFvQztBQUdwQztJQUEyQix5QkFBUztJQUNsQyxlQUFvQixPQUFnQjtRQUFwQyxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsYUFBTyxHQUFQLE9BQU8sQ0FBUzs7SUFFcEMsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLENBSjBCLG1CQUFTLEdBSW5DO0FBSlksc0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGxCLDhEQUFvQztBQUdwQztJQUE0QiwwQkFBUztJQUNuQyxnQkFBb0IsT0FBZ0I7UUFBcEMsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7O0lBRXBDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxDQUoyQixtQkFBUyxHQUlwQztBQUpZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0huQiw4REFBb0M7QUFHcEM7SUFBNEIsMEJBQVM7SUFDbkMsZ0JBQW9CLE9BQWdCO1FBQXBDLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixhQUFPLEdBQVAsT0FBTyxDQUFTOztJQUVwQyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQ0FKMkIsbUJBQVMsR0FJcEM7QUFKWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7SUFBQTtJQUlBLENBQUM7SUFIQyxxQkFBRyxHQUFIO1FBQ0UsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUpZLDBCQUFPO0FBTXBCO0lBQUE7SUFBbUIsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDO0FBQVAsb0JBQUk7Ozs7Ozs7Ozs7O0FDTmpCOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vT0lTLy4vc3JjL2xheWVycy9tb3Zlci5sYXllci50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvbGF5ZXJzL3BvaW50cy5sYXllci50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvbGF5ZXJzL3ZpZXdlci5sYXllci50cyIsIndlYnBhY2s6Ly9PSVMvLi9zcmMvc2VydmljZXMvZmFjdG9yeS5zZXJ2aWNlLnRzIiwid2VicGFjazovL09JUy9leHRlcm5hbCB1bWQge1wiY29tbW9uanNcIjpcInBpeGkuanNcIixcImNvbW1vbmpzMlwiOlwicGl4aS5qc1wiLFwidW1kXCI6XCJwaXhpLmpzXCIsXCJzY3JpcHRcIjpcIlBJWElcIixcInJvb3RcIjpcIlBJWElcIn0iLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09JUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL09JUy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vT0lTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJwaXhpLmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk9JU1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInBpeGkuanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk9JU1wiXSA9IGZhY3Rvcnkocm9vdFtcIlBJWElcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBNb3ZlciB9IGZyb20gXCIuL2xheWVycy9tb3Zlci5sYXllclwiO1xyXG5pbXBvcnQgeyBQb2ludHMgfSBmcm9tIFwiLi9sYXllcnMvcG9pbnRzLmxheWVyXCI7XHJcbmltcG9ydCB7IFZpZXdlciB9IGZyb20gXCIuL2xheWVycy92aWV3ZXIubGF5ZXJcIjtcclxuaW1wb3J0IHsgRmFjdG9yeSB9IGZyb20gXCIuL3NlcnZpY2VzL2ZhY3Rvcnkuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSBleHRlbmRzIEFwcGxpY2F0aW9uIHtcclxuICBwdWJsaWMgVklFV0VSOiBWaWV3ZXI7XHJcbiAgcHVibGljIE1PVkVSOiBNb3ZlcjtcclxuICBwdWJsaWMgUE9JTlRTOiBQb2ludHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBGQUNUT1JZOiBGYWN0b3J5ID0gbmV3IEZhY3RvcnkoKSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogMHhmZjAwMDAsXHJcbiAgICAgIHJlc29sdXRpb246IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICogMC45IHx8IDAuOSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBib290c3RyYXAoKSB7XHJcbiAgICB0aGlzLlZJRVdFUiA9IG5ldyBWaWV3ZXIodGhpcy5GQUNUT1JZKTtcclxuICAgIHRoaXMuTU9WRVIgPSBuZXcgTW92ZXIodGhpcy5GQUNUT1JZKTtcclxuICAgIHRoaXMuUE9JTlRTID0gbmV3IFBvaW50cyh0aGlzLkZBQ1RPUlkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBGYWN0b3J5IH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZhY3Rvcnkuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEZBQ1RPUlk6IEZhY3RvcnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEZhY3RvcnkgfSBmcm9tIFwiLi4vc2VydmljZXMvZmFjdG9yeS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRzIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEZBQ1RPUlk6IEZhY3RvcnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEZhY3RvcnkgfSBmcm9tIFwiLi4vc2VydmljZXMvZmFjdG9yeS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEZBQ1RPUlk6IEZhY3RvcnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuICBhZGQoKSB7XHJcbiAgICByZXR1cm4gbmV3IE5vZGUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOb2RlIHt9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9