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
    function Component(options, model) {
        this.model = model;
        this.where = options.where;
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
        console.log(this.container);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFELENBQUM7QUF6RVksa0JBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL3dpZGdldC50cyIsIndlYnBhY2s6Ly9NdXVwL2V4dGVybmFsIHVtZCBcIlBJWElcIiIsIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL011dXAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJQSVhJXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk11dXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJQSVhJXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNdXVwXCJdID0gZmFjdG9yeShyb290W1wiUElYSVwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX18pID0+IHtcbnJldHVybiAiLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tIFwiLi93aWRnZXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudE9wdGlvbnMge1xyXG4gIHdoZXJlOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfTtcclxuICBjaGlsZHNLZXk6IHN0cmluZztcclxuICB3aWRnZXRzOiB7IG5hbWU6IHN0cmluZzsgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgbW9kZWw6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG4gIHdoZXJlOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfTtcclxuICBjaGlsZHNLZXk6IHN0cmluZztcclxuICB3aWRnZXRzOiBXaWRnZXRbXTtcclxuICBwYXJlbnQ/OiBzdHJpbmc7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgY29udGFpbmVyOiBDb250YWluZXI7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogSUNvbXBvbmVudE9wdGlvbnMsIG1vZGVsOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgdGhpcy53aGVyZSA9IG9wdGlvbnMud2hlcmU7XHJcbiAgICB0aGlzLmNoaWxkc0tleSA9IG9wdGlvbnMuY2hpbGRzS2V5O1xyXG4gICAgdGhpcy53aWRnZXRzID0gW107XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHcuY29udGFpbmVyKTtcclxuICAgICAgdy5zZXR1cCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy53aWRnZXRzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdpZGdldE9wdGlvbnMge1xyXG4gIHByb3BzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiB7XHJcbiAgICAgIHR5cGU6IHVua25vd247XHJcbiAgICAgIGRlZmF1bHQ6IHVua25vd247XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgc2V0dXA6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXQge1xyXG4gIG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBwcm9wczoge1xyXG4gICAgW2tleTogc3RyaW5nXToge1xyXG4gICAgICB0eXBlOiB1bmtub3duO1xyXG4gICAgICBkZWZhdWx0OiB1bmtub3duO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyO1xyXG4gIHNldHVwOiAoKSA9PiB2b2lkO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElXaWRnZXRPcHRpb25zLCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcclxuICAgIHRoaXMucHJvcHMgPSBvcHRpb25zLnByb3BzO1xyXG4gICAgdGhpcy5zZXR1cCA9IG9wdGlvbnMuc2V0dXA7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgSUFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSUNvbXBvbmVudE9wdGlvbnMgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSVdpZGdldE9wdGlvbnMsIFdpZGdldCB9IGZyb20gXCIuL3dpZGdldFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNdXVwUGx1Z2luIHtcclxuICBpbnN0YWxsOiAoYXBwOiBBcHApID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG4gIGFwcDogQXBwbGljYXRpb247XHJcbiAgd2lkZ2V0czogeyBba2V5OiBzdHJpbmddOiBJV2lkZ2V0T3B0aW9ucyB9O1xyXG4gIGNvbXBvbmVudHM6IHsgW2tleTogc3RyaW5nXTogSUNvbXBvbmVudE9wdGlvbnMgfTtcclxuICBsaXN0OiBDb21wb25lbnRbXTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJQXBwbGljYXRpb25PcHRpb25zKSB7XHJcbiAgICB0aGlzLmFwcCA9IG5ldyBBcHBsaWNhdGlvbihvcHRpb25zKTtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgdGhpcy53aWRnZXRzID0ge307XHJcbiAgICB0aGlzLmxpc3QgPSBbXTtcclxuICB9XHJcblxyXG4gIHVzZVdpZGdldChuYW1lOiBzdHJpbmcsIHdpZGdldDogSVdpZGdldE9wdGlvbnMpIHtcclxuICAgIHRoaXMud2lkZ2V0c1tuYW1lXSA9IHdpZGdldDtcclxuICB9XHJcblxyXG4gIHVzZUNvbXBvbmVudChuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogSUNvbXBvbmVudE9wdGlvbnMpIHtcclxuICAgIHRoaXMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHVzZVBsdWdpbihwbHVnaW46IE11dXBQbHVnaW4pIHtcclxuICAgIHBsdWdpbi5pbnN0YWxsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdHJlZShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcGFyZW50OiBzdHJpbmcgPSBcIjBcIiwgaTogbnVtYmVyID0gMCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGRhdGEpO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgbm9kZS5pZCA9IGAke3BhcmVudH06JHtpfWA7XHJcbiAgICAgIG5vZGUucGFyZW50ID0gYCR7cGFyZW50fWA7XHJcbiAgICAgIHRoaXMubGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICBjb25zdCBjaGlsZHMgPSBub2RlLm1vZGVsW25vZGUuY2hpbGRzS2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdO1xyXG4gICAgICBjaGlsZHMuZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcclxuICAgICAgICB0aGlzLnRyZWUoY2hpbGQsIG5vZGUuaWQsIGkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmxpc3Q7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnQob2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IG51bGwgfCBDb21wb25lbnQge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29tcG9uZW50c1tuYW1lXS53aGVyZSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgdmFsaWQgPSBvYmpba2V5XSAmJiBvYmpba2V5XSA9PT0gdGhpcy5jb21wb25lbnRzW25hbWVdLndoZXJlW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdmFsaWQgJiZcclxuICAgICAgICBvYmpbdGhpcy5jb21wb25lbnRzW25hbWVdLmNoaWxkc0tleV0gJiZcclxuICAgICAgICBBcnJheS5pc0FycmF5KG9ialt0aGlzLmNvbXBvbmVudHNbbmFtZV0uY2hpbGRzS2V5XSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5jb21wb25lbnRzW25hbWVdLCBvYmopO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tuYW1lXS53aWRnZXRzLmZvckVhY2goKHdpZGdldCkgPT4ge1xyXG4gICAgICAgICAgY29tcG9uZW50LndpZGdldHMucHVzaChcclxuICAgICAgICAgICAgbmV3IFdpZGdldCh0aGlzLndpZGdldHNbd2lkZ2V0Lm5hbWVdLCB3aWRnZXQubWFwKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHQgPSBjb21wb25lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIG1vdW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGlmICh0aGlzLmVsKSB7XHJcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldyk7XHJcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZChjb21wb25lbnQuY29udGFpbmVyKTtcclxuICAgICAgICBjb21wb25lbnQuc2V0dXAoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==