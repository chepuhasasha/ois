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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Component = void 0;
var Component = /** @class */ (function () {
    function Component(options, model) {
        this.model = model;
        this.where = options.where;
        this.childsKey = options.childsKey;
        this.widgets = [];
        return this;
    }
    Component.prototype.setup = function () {
        this.widgets.forEach(function (w) { return w.setup(); });
        console.log(this.widgets);
    };
    return Component;
}());
exports.Component = Component;


/***/ }),

/***/ "./src/widget.ts":
/*!***********************!*\
  !*** ./src/widget.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Widget = void 0;
var Widget = /** @class */ (function () {
    function Widget(options, map) {
        this.props = options.props;
        this.setup = options.setup;
        this.map = map;
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
            var childs = node.model[node.childsKey];
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
            var valid = false;
            Object.keys(_this.components[name].where).forEach(function (key) {
                valid = obj[key] && obj[key] === _this.components[name].where[key];
            });
            if (valid &&
                obj[_this.components[name].childsKey] &&
                Array.isArray(obj[_this.components[name].childsKey])) {
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
        this.el = document.querySelector(selector);
        if (this.el) {
            this.el.appendChild(this.app.view);
            this.list.forEach(function (component) { return component.setup(); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLENBQUMsVUFBQyxNQUFNO29CQUMzQyxXQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDcEIsSUFBSSxlQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNsRCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sR0FBRyxXQUFTLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxtQkFBSyxHQUFMLFVBQU0sUUFBZ0I7UUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTLElBQUssZ0JBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDO0FBdEVZLGtCQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vTXV1cC9leHRlcm5hbCB1bWQgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlBJWElcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUElYSVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNdXVwXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXV1cFwiXSA9IGZhY3Rvcnkocm9vdFtcIlBJWElcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSBcIi4vd2lkZ2V0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRPcHRpb25zIHtcclxuICB3aGVyZTogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH07XHJcbiAgY2hpbGRzS2V5OiBzdHJpbmc7XHJcbiAgd2lkZ2V0czogeyBuYW1lOiBzdHJpbmc7IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gIG1vZGVsOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICB3aGVyZTogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH07XHJcbiAgY2hpbGRzS2V5OiBzdHJpbmc7XHJcbiAgd2lkZ2V0czogV2lkZ2V0W107XHJcbiAgcGFyZW50Pzogc3RyaW5nO1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElDb21wb25lbnRPcHRpb25zLCBtb2RlbDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcclxuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgIHRoaXMud2hlcmUgPSBvcHRpb25zLndoZXJlO1xyXG4gICAgdGhpcy5jaGlsZHNLZXkgPSBvcHRpb25zLmNoaWxkc0tleTtcclxuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIHNldHVwKCkge1xyXG4gICAgdGhpcy53aWRnZXRzLmZvckVhY2goKHcpID0+IHcuc2V0dXAoKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLndpZGdldHMpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElXaWRnZXRPcHRpb25zIHtcclxuICBwcm9wczoge1xyXG4gICAgW2tleTogc3RyaW5nXToge1xyXG4gICAgICB0eXBlOiB1bmtub3duO1xyXG4gICAgICBkZWZhdWx0OiB1bmtub3duO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIHNldHVwOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0IHtcclxuICBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgcHJvcHM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHtcclxuICAgICAgdHlwZTogdW5rbm93bjtcclxuICAgICAgZGVmYXVsdDogdW5rbm93bjtcclxuICAgIH07XHJcbiAgfTtcclxuICBzZXR1cDogKCkgPT4gdm9pZDtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJV2lkZ2V0T3B0aW9ucywgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XHJcbiAgICB0aGlzLnByb3BzID0gb3B0aW9ucy5wcm9wcztcclxuICAgIHRoaXMuc2V0dXAgPSBvcHRpb25zLnNldHVwO1xyXG4gICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBJQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJV2lkZ2V0T3B0aW9ucywgV2lkZ2V0IH0gZnJvbSBcIi4vd2lkZ2V0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE11dXBQbHVnaW4ge1xyXG4gIGluc3RhbGw6IChhcHA6IEFwcCkgPT4gdm9pZDtcclxufVxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgYXBwOiBBcHBsaWNhdGlvbjtcclxuICB3aWRnZXRzOiB7IFtrZXk6IHN0cmluZ106IElXaWRnZXRPcHRpb25zIH07XHJcbiAgY29tcG9uZW50czogeyBba2V5OiBzdHJpbmddOiBJQ29tcG9uZW50T3B0aW9ucyB9O1xyXG4gIGxpc3Q6IENvbXBvbmVudFtdO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElBcHBsaWNhdGlvbk9wdGlvbnMpIHtcclxuICAgIHRoaXMuYXBwID0gbmV3IEFwcGxpY2F0aW9uKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICB0aGlzLndpZGdldHMgPSB7fTtcclxuICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgdXNlV2lkZ2V0KG5hbWU6IHN0cmluZywgd2lkZ2V0OiBJV2lkZ2V0T3B0aW9ucykge1xyXG4gICAgdGhpcy53aWRnZXRzW25hbWVdID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgdXNlQ29tcG9uZW50KG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBJQ29tcG9uZW50T3B0aW9ucykge1xyXG4gICAgdGhpcy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgdXNlUGx1Z2luKHBsdWdpbjogTXV1cFBsdWdpbikge1xyXG4gICAgcGx1Z2luLmluc3RhbGwodGhpcyk7XHJcbiAgfVxyXG5cclxuICB0cmVlKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBwYXJlbnQ6IHN0cmluZyA9IFwiMFwiLCBpOiBudW1iZXIgPSAwKSB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXRDb21wb25lbnQoZGF0YSk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICBub2RlLmlkID0gYCR7cGFyZW50fToke2l9YDtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBgJHtwYXJlbnR9YDtcclxuICAgICAgdGhpcy5saXN0LnB1c2gobm9kZSk7XHJcbiAgICAgIGNvbnN0IGNoaWxkcyA9IG5vZGUubW9kZWxbbm9kZS5jaGlsZHNLZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+W107XHJcbiAgICAgIGNoaWxkcy5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xyXG4gICAgICAgIHRoaXMudHJlZShjaGlsZCwgbm9kZS5pZCwgaSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubGlzdDtcclxuICB9XHJcblxyXG4gIGdldENvbXBvbmVudChvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogbnVsbCB8IENvbXBvbmVudCB7XHJcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29tcG9uZW50cykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzW25hbWVdLndoZXJlKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICB2YWxpZCA9IG9ialtrZXldICYmIG9ialtrZXldID09PSB0aGlzLmNvbXBvbmVudHNbbmFtZV0ud2hlcmVba2V5XTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB2YWxpZCAmJlxyXG4gICAgICAgIG9ialt0aGlzLmNvbXBvbmVudHNbbmFtZV0uY2hpbGRzS2V5XSAmJlxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkob2JqW3RoaXMuY29tcG9uZW50c1tuYW1lXS5jaGlsZHNLZXldKVxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCh0aGlzLmNvbXBvbmVudHNbbmFtZV0sIG9iaik7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW25hbWVdLndpZGdldHMuZm9yRWFjaCgod2lkZ2V0KSA9PiB7XHJcbiAgICAgICAgICBjb21wb25lbnQud2lkZ2V0cy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgV2lkZ2V0KHRoaXMud2lkZ2V0c1t3aWRnZXQubmFtZV0sIHdpZGdldC5tYXApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdCA9IGNvbXBvbmVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgbW91bnQoc2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKHRoaXMuZWwpIHtcclxuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFwcC52aWV3KTtcclxuICAgICAgdGhpcy5saXN0LmZvckVhY2goKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LnNldHVwKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=