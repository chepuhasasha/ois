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

/***/ "./src/component.ts":
/*!**************************!*\
  !*** ./src/component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Component = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "pixi.js");
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
        this.widgets.forEach(function (w) {
            _this.container.addChild(w.container);
            w.setup();
        });
    };
    return Component;
}());
exports.Component = Component;


/***/ }),

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

/***/ "./src/widget.ts":
/*!***********************!*\
  !*** ./src/widget.ts ***!
  \***********************/
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
var component_1 = __webpack_require__(/*! ./component */ "./src/component.ts");
var compare_1 = __webpack_require__(/*! ./helpers/compare */ "./src/helpers/compare.ts");
var widget_1 = __webpack_require__(/*! ./widget */ "./src/widget.ts");
var App = /** @class */ (function () {
    function App(options) {
        this.app = new pixi_js_1.Application(options);
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
        console.log(this.list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEIsSUFBSSxlQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNsRCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sR0FBRyxXQUFTLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxtQkFBSyxHQUFMLFVBQU0sUUFBZ0I7UUFBdEIsaUJBU0M7UUFSQyxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7Z0JBQzFCLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDO0FBbEVZLGtCQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vTXV1cC9leHRlcm5hbCB1bWQgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlBJWElcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUElYSVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNdXVwXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXV1cFwiXSA9IGZhY3Rvcnkocm9vdFtcIlBJWElcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSBcIi4vd2lkZ2V0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRPcHRpb25zIHtcclxuICBtb2RlbDogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH07XHJcbiAgY2hpbGRzS2V5OiBzdHJpbmc7XHJcbiAgd2lkZ2V0czogeyBuYW1lOiBzdHJpbmc7IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gIG1vZGVsOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICBjaGlsZHNLZXk6IHN0cmluZztcclxuICB3aWRnZXRzOiBXaWRnZXRbXTtcclxuICBwYXJlbnQ/OiBzdHJpbmc7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgY29udGFpbmVyOiBDb250YWluZXI7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogSUNvbXBvbmVudE9wdGlvbnMsIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5tb2RlbCA9IG9wdGlvbnMubW9kZWw7XHJcbiAgICB0aGlzLmNoaWxkc0tleSA9IG9wdGlvbnMuY2hpbGRzS2V5O1xyXG4gICAgdGhpcy53aWRnZXRzID0gW107XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHcuY29udGFpbmVyKTtcclxuICAgICAgdy5zZXR1cCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKFxyXG4gIG1vZGVsOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcclxuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxyXG4pOiBib29sZWFuID0+IHtcclxuICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgaWYgKGRhdGFba2V5XSkge1xyXG4gICAgICBzd2l0Y2ggKG1vZGVsW2tleV0uY29uc3RydWN0b3IpIHtcclxuICAgICAgICBjYXNlIE9iamVjdDpcclxuICAgICAgICAgIGlmIChkYXRhW2tleV0gaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gY29tcGFyZShcclxuICAgICAgICAgICAgICBtb2RlbFtrZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4gICAgICAgICAgICAgIGRhdGFba2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgY2FzZSBSZWdFeHA6XHJcbiAgICAgICAgICBsZXQgciA9IG1vZGVsW2tleV0gYXMgUmVnRXhwO1xyXG4gICAgICAgICAgcmVzdWx0ID0gci50ZXN0KEpTT04uc3RyaW5naWZ5KGRhdGFba2V5XSkpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgY2FzZSBBcnJheTpcclxuICAgICAgICAgIGxldCBhcnIgPSBtb2RlbFtrZXldIGFzICgoKSA9PiB2b2lkKVtdO1xyXG4gICAgICAgICAgYXJyLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHQgPT09IGRhdGFba2V5XS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJlc3VsdCA9IG1vZGVsW2tleV0gPT09IGRhdGFba2V5XTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV2lkZ2V0T3B0aW9ucyB7XHJcbiAgcHJvcHM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHtcclxuICAgICAgdHlwZTogdW5rbm93bjtcclxuICAgICAgZGVmYXVsdDogdW5rbm93bjtcclxuICAgIH07XHJcbiAgfTtcclxuICBzZXR1cDogKCkgPT4gdm9pZDtcclxufVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0IHtcclxuICBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgcHJvcHM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHtcclxuICAgICAgdHlwZTogdW5rbm93bjtcclxuICAgICAgZGVmYXVsdDogdW5rbm93bjtcclxuICAgIH07XHJcbiAgfTtcclxuICBjb250YWluZXI6IENvbnRhaW5lcjtcclxuICBzZXR1cDogKCkgPT4gdm9pZDtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJV2lkZ2V0T3B0aW9ucywgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XHJcbiAgICB0aGlzLnByb3BzID0gb3B0aW9ucy5wcm9wcztcclxuICAgIHRoaXMuc2V0dXAgPSBvcHRpb25zLnNldHVwO1xyXG4gICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BpeGlfanNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24sIElBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElDb21wb25lbnRPcHRpb25zIH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi9oZWxwZXJzL2NvbXBhcmVcIjtcclxuaW1wb3J0IHsgSVdpZGdldE9wdGlvbnMsIFdpZGdldCB9IGZyb20gXCIuL3dpZGdldFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNdXVwUGx1Z2luIHtcclxuICBpbnN0YWxsOiAoYXBwOiBBcHApID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG4gIGFwcDogQXBwbGljYXRpb247XHJcbiAgd2lkZ2V0czogeyBba2V5OiBzdHJpbmddOiBJV2lkZ2V0T3B0aW9ucyB9O1xyXG4gIGNvbXBvbmVudHM6IHsgW2tleTogc3RyaW5nXTogSUNvbXBvbmVudE9wdGlvbnMgfTtcclxuICBsaXN0OiBDb21wb25lbnRbXTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJQXBwbGljYXRpb25PcHRpb25zKSB7XHJcbiAgICB0aGlzLmFwcCA9IG5ldyBBcHBsaWNhdGlvbihvcHRpb25zKTtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgdGhpcy53aWRnZXRzID0ge307XHJcbiAgICB0aGlzLmxpc3QgPSBbXTtcclxuICB9XHJcblxyXG4gIHVzZVdpZGdldChuYW1lOiBzdHJpbmcsIHdpZGdldDogSVdpZGdldE9wdGlvbnMpIHtcclxuICAgIHRoaXMud2lkZ2V0c1tuYW1lXSA9IHdpZGdldDtcclxuICB9XHJcblxyXG4gIHVzZUNvbXBvbmVudChuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogSUNvbXBvbmVudE9wdGlvbnMpIHtcclxuICAgIHRoaXMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHVzZVBsdWdpbihwbHVnaW46IE11dXBQbHVnaW4pIHtcclxuICAgIHBsdWdpbi5pbnN0YWxsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdHJlZShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcGFyZW50OiBzdHJpbmcgPSBcIjBcIiwgaTogbnVtYmVyID0gMCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGRhdGEpO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgbm9kZS5pZCA9IGAke3BhcmVudH06JHtpfWA7XHJcbiAgICAgIG5vZGUucGFyZW50ID0gYCR7cGFyZW50fWA7XHJcbiAgICAgIHRoaXMubGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICBjb25zdCBjaGlsZHMgPSBub2RlLmRhdGFbbm9kZS5jaGlsZHNLZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+W107XHJcbiAgICAgIGNoaWxkcy5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xyXG4gICAgICAgIHRoaXMudHJlZShjaGlsZCwgbm9kZS5pZCwgaSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcclxuICAgIHJldHVybiB0aGlzLmxpc3Q7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnQob2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IG51bGwgfCBDb21wb25lbnQge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgaWYgKGNvbXBhcmUodGhpcy5jb21wb25lbnRzW25hbWVdLm1vZGVsLCBvYmopKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5jb21wb25lbnRzW25hbWVdLCBvYmopO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tuYW1lXS53aWRnZXRzLmZvckVhY2goKHdpZGdldCkgPT4ge1xyXG4gICAgICAgICAgY29tcG9uZW50LndpZGdldHMucHVzaChcclxuICAgICAgICAgICAgbmV3IFdpZGdldCh0aGlzLndpZGdldHNbd2lkZ2V0Lm5hbWVdLCB3aWRnZXQubWFwKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHQgPSBjb21wb25lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIG1vdW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGlmICh0aGlzLmVsKSB7XHJcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldyk7XHJcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZChjb21wb25lbnQuY29udGFpbmVyKTtcclxuICAgICAgICBjb21wb25lbnQuc2V0dXAoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==