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

/***/ "./src/helpers/compare.ts":
/*!********************************!*\
  !*** ./src/helpers/compare.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compare = void 0;
var compare = function (model, data) {
    var result = false;
    Object.keys(model).forEach(function (key) {
        if (data[key]) {
            switch (model[key].constructor) {
                case Object:
                    if (data[key] instanceof Object) {
                        result = (0, exports.compare)(model[key], data[key]);
                    }
                    return result;
                case RegExp:
                    var r = model[key];
                    result = r.test(JSON.stringify(data[key]));
                    return result;
                case Array:
                    var arr = model[key];
                    arr.forEach(function (t) {
                        if (t === data[key].constructor) {
                            result = true;
                        }
                    });
                    return result;
                default:
                    result = model[key] === data[key];
                    return result;
            }
        }
    });
    return result;
};
exports.compare = compare;


/***/ }),

/***/ "./src/helpers/component.ts":
/*!**********************************!*\
  !*** ./src/helpers/component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Component = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var pixi_js_2 = __webpack_require__(/*! pixi.js */ "pixi.js");
var Component = /** @class */ (function () {
    function Component(options, data) {
        this.data = data;
        this.model = options.model;
        this.childsKey = options.childsKey;
        this.widgets = [];
        this.container = new pixi_js_1.Container();
        return this;
    }
    Component.prototype.setup = function () {
        var _this = this;
        var frame = new pixi_js_2.Graphics();
        this.container.x = 100;
        this.container.y = 100;
        this.container.addChild(frame);
        this.widgets.forEach(function (w, i) {
            w.container.position.x = 10;
            w.container.position.y = 10;
            if (i > 0) {
                w.container.position.x =
                    _this.widgets[i - 1].container.x +
                        _this.widgets[i - 1].container.width +
                        10;
            }
            _this.container.addChild(w.container);
            w.setup();
        });
        frame.lineStyle(1, 0x232b36, 1);
        frame.beginFill(0x1e1f29);
        frame.drawRoundedRect(0, 0, this.container.width + 18, this.container.height + 18, 4);
        frame.endFill();
    };
    return Component;
}());
exports.Component = Component;


/***/ }),

/***/ "./src/helpers/widget.ts":
/*!*******************************!*\
  !*** ./src/helpers/widget.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Widget = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var Widget = /** @class */ (function () {
    function Widget(options, map) {
        this.props = options.props;
        this.setup = options.setup;
        this.map = map;
        this.container = new pixi_js_1.Container();
    }
    return Widget;
}());
exports.Widget = Widget;


/***/ }),

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
exports.App = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
var component_1 = __webpack_require__(/*! ./helpers/component */ "./src/helpers/component.ts");
var compare_1 = __webpack_require__(/*! ./helpers/compare */ "./src/helpers/compare.ts");
var widget_1 = __webpack_require__(/*! ./helpers/widget */ "./src/helpers/widget.ts");
var App = /** @class */ (function () {
    function App() {
        this.app = new pixi_js_1.Application({ backgroundColor: 0x0d1117, antialias: true });
        this.components = {};
        this.widgets = {};
        this.list = [];
    }
    App.prototype.useWidget = function (name, widget) {
        this.widgets[name] = widget;
    };
    App.prototype.useComponent = function (name, component) {
        this.components[name] = component;
    };
    App.prototype.usePlugin = function (plugin) {
        plugin.install(this);
    };
    App.prototype.tree = function (data, parent, i) {
        var _this = this;
        if (parent === void 0) { parent = "0"; }
        if (i === void 0) { i = 0; }
        var node = this.getComponent(data);
        if (node) {
            node.id = "".concat(parent, ":").concat(i);
            node.parent = "".concat(parent);
            this.list.push(node);
            var childs = node.data[node.childsKey];
            childs.forEach(function (child, i) {
                _this.tree(child, node.id, i);
            });
        }
        return this.list;
    };
    App.prototype.getComponent = function (obj) {
        var _this = this;
        var result = null;
        Object.keys(this.components).forEach(function (name) {
            if ((0, compare_1.compare)(_this.components[name].model, obj)) {
                var component_2 = new component_1.Component(_this.components[name], obj);
                _this.components[name].widgets.forEach(function (widget) {
                    component_2.widgets.push(new widget_1.Widget(_this.widgets[widget.name], widget.map));
                });
                result = component_2;
            }
        });
        return result;
    };
    App.prototype.mount = function (selector) {
        var _this = this;
        this.el = document.querySelector(selector);
        if (this.el) {
            this.el.appendChild(this.app.view);
            this.app.view.width = this.el.getBoundingClientRect().width;
            this.app.view.height = this.el.getBoundingClientRect().height;
            // window.addEventListener("resize", () => {
            //   this.app.view.width = this.el.getBoundingClientRect().width;
            //   this.app.view.height = this.el.getBoundingClientRect().height;
            // });
            this.list.forEach(function (component) {
                _this.app.stage.addChild(component.container);
                component.setup();
            });
        }
    };
    return App;
}());
exports.App = App;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV1cC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7OztBQ1ZPLElBQU0sT0FBTyxHQUFHLFVBQ3JCLEtBQThCLEVBQzlCLElBQTZCO0lBRTdCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7UUFDN0IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDYixRQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQzlCLEtBQUssTUFBTTtvQkFDVCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxNQUFNLEVBQUU7d0JBQy9CLE1BQU0sR0FBRyxtQkFBTyxFQUNkLEtBQUssQ0FBQyxHQUFHLENBQTRCLEVBQ3JDLElBQUksQ0FBQyxHQUFHLENBQTRCLENBQ3JDLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxNQUFNLENBQUM7Z0JBRWhCLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFXLENBQUM7b0JBQzdCLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsT0FBTyxNQUFNLENBQUM7Z0JBRWhCLEtBQUssS0FBSztvQkFDUixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFtQixDQUFDO29CQUN2QyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQzt3QkFDWixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFOzRCQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDO3lCQUNmO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sTUFBTSxDQUFDO2dCQUVoQjtvQkFDRSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEMsT0FBTyxNQUFNLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBdENXLGVBQU8sV0FzQ2xCOzs7Ozs7Ozs7Ozs7OztBQ3RDRiw4REFBb0M7QUFFcEMsOERBQW1DO0FBUW5DO0lBUUUsbUJBQVksT0FBMEIsRUFBRSxJQUE2QjtRQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QseUJBQUssR0FBTDtRQUFBLGlCQTJCQztRQTFCQyxJQUFNLEtBQUssR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVCxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUs7d0JBQ25DLEVBQUUsQ0FBQzthQUNOO1lBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLGVBQWUsQ0FDbkIsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFDMUIsQ0FBQyxDQUNGLENBQUM7UUFDRixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQztBQTVDWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7QUNWdEIsOERBQW9DO0FBV3BDO0lBVUUsZ0JBQVksT0FBdUIsRUFBRSxHQUEyQjtRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7QUFoQlksd0JBQU07Ozs7Ozs7Ozs7O0FDWG5COzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBLDhEQUEyRDtBQUMzRCwrRkFBbUU7QUFDbkUseUZBQTRDO0FBQzVDLHNGQUEwRDtBQUsxRDtJQU1FO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLHFCQUFXLENBQUMsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1QkFBUyxHQUFULFVBQVUsSUFBWSxFQUFFLE1BQXNCO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCwwQkFBWSxHQUFaLFVBQWEsSUFBWSxFQUFFLFNBQTRCO1FBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx1QkFBUyxHQUFULFVBQVUsTUFBa0I7UUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsa0JBQUksR0FBSixVQUFLLElBQTZCLEVBQUUsTUFBb0IsRUFBRSxDQUFhO1FBQXZFLGlCQVlDO1FBWm1DLHFDQUFvQjtRQUFFLHlCQUFhO1FBQ3JFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQUcsTUFBTSxjQUFJLENBQUMsQ0FBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBRyxNQUFNLENBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQThCLENBQUM7WUFDdEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELDBCQUFZLEdBQVosVUFBYSxHQUE0QjtRQUF6QyxpQkFjQztRQWJDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hDLElBQUkscUJBQU8sRUFBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxXQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07b0JBQzNDLFdBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNwQixJQUFJLGVBQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ2xELENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxHQUFHLFdBQVMsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELG1CQUFLLEdBQUwsVUFBTSxRQUFnQjtRQUF0QixpQkFlQztRQWRDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO1lBQzlELDRDQUE0QztZQUM1QyxpRUFBaUU7WUFDakUsbUVBQW1FO1lBQ25FLE1BQU07WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7Z0JBQzFCLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDO0FBdkVZLGtCQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2hlbHBlcnMvd2lkZ2V0LnRzIiwid2VicGFjazovL011dXAvZXh0ZXJuYWwgdW1kIFwiUElYSVwiIiwid2VicGFjazovL011dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQSVhJXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlBJWElcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTXV1cFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIlBJWElcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk11dXBcIl0gPSBmYWN0b3J5KHJvb3RbXCJQSVhJXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXykgPT4ge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKFxyXG4gIG1vZGVsOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcclxuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxyXG4pOiBib29sZWFuID0+IHtcclxuICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgaWYgKGRhdGFba2V5XSkge1xyXG4gICAgICBzd2l0Y2ggKG1vZGVsW2tleV0uY29uc3RydWN0b3IpIHtcclxuICAgICAgICBjYXNlIE9iamVjdDpcclxuICAgICAgICAgIGlmIChkYXRhW2tleV0gaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gY29tcGFyZShcclxuICAgICAgICAgICAgICBtb2RlbFtrZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4gICAgICAgICAgICAgIGRhdGFba2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgY2FzZSBSZWdFeHA6XHJcbiAgICAgICAgICBsZXQgciA9IG1vZGVsW2tleV0gYXMgUmVnRXhwO1xyXG4gICAgICAgICAgcmVzdWx0ID0gci50ZXN0KEpTT04uc3RyaW5naWZ5KGRhdGFba2V5XSkpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgY2FzZSBBcnJheTpcclxuICAgICAgICAgIGxldCBhcnIgPSBtb2RlbFtrZXldIGFzICgoKSA9PiB2b2lkKVtdO1xyXG4gICAgICAgICAgYXJyLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHQgPT09IGRhdGFba2V5XS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJlc3VsdCA9IG1vZGVsW2tleV0gPT09IGRhdGFba2V5XTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tIFwiLi93aWRnZXRcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50T3B0aW9ucyB7XHJcbiAgbW9kZWw6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9O1xyXG4gIGNoaWxkc0tleTogc3RyaW5nO1xyXG4gIHdpZGdldHM6IHsgbmFtZTogc3RyaW5nOyBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICBtb2RlbDogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbiAgY2hpbGRzS2V5OiBzdHJpbmc7XHJcbiAgd2lkZ2V0czogV2lkZ2V0W107XHJcbiAgcGFyZW50Pzogc3RyaW5nO1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElDb21wb25lbnRPcHRpb25zLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xyXG4gICAgdGhpcy5jaGlsZHNLZXkgPSBvcHRpb25zLmNoaWxkc0tleTtcclxuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbiAgc2V0dXAoKSB7XHJcbiAgICBjb25zdCBmcmFtZSA9IG5ldyBHcmFwaGljcygpO1xyXG4gICAgdGhpcy5jb250YWluZXIueCA9IDEwMDtcclxuICAgIHRoaXMuY29udGFpbmVyLnkgPSAxMDA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChmcmFtZSk7XHJcbiAgICB0aGlzLndpZGdldHMuZm9yRWFjaCgodywgaSkgPT4ge1xyXG4gICAgICB3LmNvbnRhaW5lci5wb3NpdGlvbi54ID0gMTA7XHJcbiAgICAgIHcuY29udGFpbmVyLnBvc2l0aW9uLnkgPSAxMDtcclxuICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgdy5jb250YWluZXIucG9zaXRpb24ueCA9XHJcbiAgICAgICAgICB0aGlzLndpZGdldHNbaSAtIDFdLmNvbnRhaW5lci54ICtcclxuICAgICAgICAgIHRoaXMud2lkZ2V0c1tpIC0gMV0uY29udGFpbmVyLndpZHRoICtcclxuICAgICAgICAgIDEwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHcuY29udGFpbmVyKTtcclxuICAgICAgdy5zZXR1cCgpO1xyXG4gICAgfSk7XHJcbiAgICBmcmFtZS5saW5lU3R5bGUoMSwgMHgyMzJiMzYsIDEpO1xyXG4gICAgZnJhbWUuYmVnaW5GaWxsKDB4MWUxZjI5KTtcclxuICAgIGZyYW1lLmRyYXdSb3VuZGVkUmVjdChcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5jb250YWluZXIud2lkdGggKyAxOCxcclxuICAgICAgdGhpcy5jb250YWluZXIuaGVpZ2h0ICsgMTgsXHJcbiAgICAgIDRcclxuICAgICk7XHJcbiAgICBmcmFtZS5lbmRGaWxsKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElXaWRnZXRPcHRpb25zIHtcclxuICBwcm9wczoge1xyXG4gICAgW2tleTogc3RyaW5nXToge1xyXG4gICAgICB0eXBlOiB1bmtub3duO1xyXG4gICAgICBkZWZhdWx0OiB1bmtub3duO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIHNldHVwOiAoKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBXaWRnZXQge1xyXG4gIG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBwcm9wczoge1xyXG4gICAgW2tleTogc3RyaW5nXToge1xyXG4gICAgICB0eXBlOiB1bmtub3duO1xyXG4gICAgICBkZWZhdWx0OiB1bmtub3duO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyO1xyXG4gIHNldHVwOiAoKSA9PiB2b2lkO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElXaWRnZXRPcHRpb25zLCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcclxuICAgIHRoaXMucHJvcHMgPSBvcHRpb25zLnByb3BzO1xyXG4gICAgdGhpcy5zZXR1cCA9IG9wdGlvbnMuc2V0dXA7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgSUFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSUNvbXBvbmVudE9wdGlvbnMgfSBmcm9tIFwiLi9oZWxwZXJzL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4vaGVscGVycy9jb21wYXJlXCI7XHJcbmltcG9ydCB7IElXaWRnZXRPcHRpb25zLCBXaWRnZXQgfSBmcm9tIFwiLi9oZWxwZXJzL3dpZGdldFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNdXVwUGx1Z2luIHtcclxuICBpbnN0YWxsOiAoYXBwOiBBcHApID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG4gIGFwcDogQXBwbGljYXRpb247XHJcbiAgd2lkZ2V0czogeyBba2V5OiBzdHJpbmddOiBJV2lkZ2V0T3B0aW9ucyB9O1xyXG4gIGNvbXBvbmVudHM6IHsgW2tleTogc3RyaW5nXTogSUNvbXBvbmVudE9wdGlvbnMgfTtcclxuICBsaXN0OiBDb21wb25lbnRbXTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXBwID0gbmV3IEFwcGxpY2F0aW9uKHsgYmFja2dyb3VuZENvbG9yOiAweDBkMTExNywgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICB0aGlzLndpZGdldHMgPSB7fTtcclxuICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgdXNlV2lkZ2V0KG5hbWU6IHN0cmluZywgd2lkZ2V0OiBJV2lkZ2V0T3B0aW9ucykge1xyXG4gICAgdGhpcy53aWRnZXRzW25hbWVdID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgdXNlQ29tcG9uZW50KG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBJQ29tcG9uZW50T3B0aW9ucykge1xyXG4gICAgdGhpcy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgdXNlUGx1Z2luKHBsdWdpbjogTXV1cFBsdWdpbikge1xyXG4gICAgcGx1Z2luLmluc3RhbGwodGhpcyk7XHJcbiAgfVxyXG5cclxuICB0cmVlKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBwYXJlbnQ6IHN0cmluZyA9IFwiMFwiLCBpOiBudW1iZXIgPSAwKSB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXRDb21wb25lbnQoZGF0YSk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICBub2RlLmlkID0gYCR7cGFyZW50fToke2l9YDtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBgJHtwYXJlbnR9YDtcclxuICAgICAgdGhpcy5saXN0LnB1c2gobm9kZSk7XHJcbiAgICAgIGNvbnN0IGNoaWxkcyA9IG5vZGUuZGF0YVtub2RlLmNoaWxkc0tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXTtcclxuICAgICAgY2hpbGRzLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy50cmVlKGNoaWxkLCBub2RlLmlkLCBpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5saXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBudWxsIHwgQ29tcG9uZW50IHtcclxuICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgIGlmIChjb21wYXJlKHRoaXMuY29tcG9uZW50c1tuYW1lXS5tb2RlbCwgb2JqKSkge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KHRoaXMuY29tcG9uZW50c1tuYW1lXSwgb2JqKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbbmFtZV0ud2lkZ2V0cy5mb3JFYWNoKCh3aWRnZXQpID0+IHtcclxuICAgICAgICAgIGNvbXBvbmVudC53aWRnZXRzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBXaWRnZXQodGhpcy53aWRnZXRzW3dpZGdldC5uYW1lXSwgd2lkZ2V0Lm1hcClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0ID0gY29tcG9uZW50O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBtb3VudChzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBpZiAodGhpcy5lbCkge1xyXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYXBwLnZpZXcpO1xyXG4gICAgICB0aGlzLmFwcC52aWV3LndpZHRoID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgdGhpcy5hcHAudmlldy5oZWlnaHQgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICAvLyAgIHRoaXMuYXBwLnZpZXcud2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAvLyAgIHRoaXMuYXBwLnZpZXcuaGVpZ2h0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQoY29tcG9uZW50LmNvbnRhaW5lcik7XHJcbiAgICAgICAgY29tcG9uZW50LnNldHVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=