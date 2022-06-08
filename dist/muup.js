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
        this.init();
        return this;
    }
    Component.prototype.init = function () {
        this.container = new pixi_js_1.Container();
        this.container.interactive = true;
        this.frame = new pixi_js_2.Graphics();
        this.container.addChild(this.frame);
        this.container.on("pointerover", this.onPointerOver.bind(this));
        this.container.on("pointerout", this.onPointerOut.bind(this));
    };
    Component.prototype.setup = function () {
        var _this = this;
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
        this.drawframe(false);
    };
    Component.prototype.drawframe = function (hover) {
        var bg = hover ? 0x000000 : 0x1e1f29;
        this.frame.clear();
        this.frame.lineStyle(1, 0x232b36, 1);
        this.frame.beginFill(bg);
        this.frame.drawRoundedRect(0, 0, this.container.width + 18, this.container.height + 18, 4);
        this.frame.endFill();
    };
    Component.prototype.onPointerOver = function () {
        this.drawframe(true);
    };
    Component.prototype.onPointerOut = function () {
        this.drawframe(false);
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
        window.muupApp = this;
    }
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
        this.el = document.querySelector(selector);
        if (this.el) {
            this.el.appendChild(this.app.view);
            this.app.view.width = this.el.getBoundingClientRect().width;
            this.app.view.height = this.el.getBoundingClientRect().height;
        }
        this.render();
    };
    App.prototype.render = function () {
        var _this = this;
        this.list.forEach(function (component) {
            _this.app.stage.addChild(component.container);
            component.setup();
        });
    };
    App.prototype.useWidget = function (name, widget) {
        this.widgets[name] = widget;
    };
    App.prototype.useComponent = function (name, component) {
        this.components[name] = component;
    };
    App.prototype.usePlugin = function (plugin) {
        plugin.install(this);
    };
    return App;
}());
exports.App = App;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUMxQixLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1QkFBUyxHQUFULFVBQVUsSUFBWSxFQUFFLE1BQXNCO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCwwQkFBWSxHQUFaLFVBQWEsSUFBWSxFQUFFLFNBQTRCO1FBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx1QkFBUyxHQUFULFVBQVUsTUFBa0I7UUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsVUFBQztBQUFELENBQUM7QUF4RVksa0JBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2hlbHBlcnMvY29tcGFyZS50cyIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2hlbHBlcnMvY29tcG9uZW50LnRzIiwid2VicGFjazovL011dXAvLi9zcmMvaGVscGVycy93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vTXV1cC9leHRlcm5hbCB1bWQgXCJQSVhJXCIiLCJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlBJWElcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUElYSVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNdXVwXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUElYSVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXV1cFwiXSA9IGZhY3Rvcnkocm9vdFtcIlBJWElcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcGl4aV9qc19fKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoXHJcbiAgbW9kZWw6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbik6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICBPYmplY3Qua2V5cyhtb2RlbCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBpZiAoZGF0YVtrZXldKSB7XHJcbiAgICAgIHN3aXRjaCAobW9kZWxba2V5XS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNhc2UgT2JqZWN0OlxyXG4gICAgICAgICAgaWYgKGRhdGFba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBjb21wYXJlKFxyXG4gICAgICAgICAgICAgIG1vZGVsW2tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbiAgICAgICAgICAgICAgZGF0YVtrZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBjYXNlIFJlZ0V4cDpcclxuICAgICAgICAgIGxldCByID0gbW9kZWxba2V5XSBhcyBSZWdFeHA7XHJcbiAgICAgICAgICByZXN1bHQgPSByLnRlc3QoSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBjYXNlIEFycmF5OlxyXG4gICAgICAgICAgbGV0IGFyciA9IG1vZGVsW2tleV0gYXMgKCgpID0+IHZvaWQpW107XHJcbiAgICAgICAgICBhcnIuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodCA9PT0gZGF0YVtrZXldLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmVzdWx0ID0gbW9kZWxba2V5XSA9PT0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gXCIuL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRPcHRpb25zIHtcclxuICBtb2RlbDogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH07XHJcbiAgY2hpbGRzS2V5OiBzdHJpbmc7XHJcbiAgd2lkZ2V0czogeyBuYW1lOiBzdHJpbmc7IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIHBhcmVudD86IHN0cmluZztcclxuICBjb250YWluZXI6IGFueTtcclxuICBmcmFtZTogR3JhcGhpY3M7XHJcbiAgbW9kZWw6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG4gIGNoaWxkc0tleTogc3RyaW5nO1xyXG4gIHdpZGdldHM6IFdpZGdldFtdO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElDb21wb25lbnRPcHRpb25zLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xyXG4gICAgdGhpcy5jaGlsZHNLZXkgPSBvcHRpb25zLmNoaWxkc0tleTtcclxuICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZnJhbWUgPSBuZXcgR3JhcGhpY3MoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuZnJhbWUpO1xyXG4gICAgdGhpcy5jb250YWluZXIub24oXCJwb2ludGVyb3ZlclwiLCB0aGlzLm9uUG9pbnRlck92ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5vbihcInBvaW50ZXJvdXRcIiwgdGhpcy5vblBvaW50ZXJPdXQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIHRoaXMud2lkZ2V0cy5mb3JFYWNoKCh3LCBpKSA9PiB7XHJcbiAgICAgIHcuY29udGFpbmVyLnBvc2l0aW9uLnggPSAxMDtcclxuICAgICAgdy5jb250YWluZXIucG9zaXRpb24ueSA9IDEwO1xyXG4gICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICB3LmNvbnRhaW5lci5wb3NpdGlvbi54ID1cclxuICAgICAgICAgIHRoaXMud2lkZ2V0c1tpIC0gMV0uY29udGFpbmVyLnggK1xyXG4gICAgICAgICAgdGhpcy53aWRnZXRzW2kgLSAxXS5jb250YWluZXIud2lkdGggK1xyXG4gICAgICAgICAgMTA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQody5jb250YWluZXIpO1xyXG4gICAgICB3LnNldHVwKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZHJhd2ZyYW1lKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGRyYXdmcmFtZShob3ZlcjogYm9vbGVhbikge1xyXG4gICAgbGV0IGJnID0gaG92ZXIgPyAweDAwMDAwMCA6IDB4MWUxZjI5O1xyXG4gICAgdGhpcy5mcmFtZS5jbGVhcigpO1xyXG4gICAgdGhpcy5mcmFtZS5saW5lU3R5bGUoMSwgMHgyMzJiMzYsIDEpO1xyXG4gICAgdGhpcy5mcmFtZS5iZWdpbkZpbGwoYmcpO1xyXG4gICAgdGhpcy5mcmFtZS5kcmF3Um91bmRlZFJlY3QoXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuY29udGFpbmVyLndpZHRoICsgMTgsXHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmhlaWdodCArIDE4LFxyXG4gICAgICA0XHJcbiAgICApO1xyXG4gICAgdGhpcy5mcmFtZS5lbmRGaWxsKCk7XHJcbiAgfVxyXG5cclxuICBvblBvaW50ZXJPdmVyKCkge1xyXG4gICAgdGhpcy5kcmF3ZnJhbWUodHJ1ZSk7XHJcbiAgfVxyXG4gIG9uUG9pbnRlck91dCgpIHtcclxuICAgIHRoaXMuZHJhd2ZyYW1lKGZhbHNlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdpZGdldE9wdGlvbnMge1xyXG4gIHByb3BzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiB7XHJcbiAgICAgIHR5cGU6IHVua25vd247XHJcbiAgICAgIGRlZmF1bHQ6IHVua25vd247XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgc2V0dXA6ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFdpZGdldCB7XHJcbiAgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gIHByb3BzOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiB7XHJcbiAgICAgIHR5cGU6IHVua25vd247XHJcbiAgICAgIGRlZmF1bHQ6IHVua25vd247XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgY29udGFpbmVyOiBDb250YWluZXI7XHJcbiAgc2V0dXA6ICgpID0+IHZvaWQ7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogSVdpZGdldE9wdGlvbnMsIG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xyXG4gICAgdGhpcy5wcm9wcyA9IG9wdGlvbnMucHJvcHM7XHJcbiAgICB0aGlzLnNldHVwID0gb3B0aW9ucy5zZXR1cDtcclxuICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9waXhpX2pzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBJQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gXCIuL2hlbHBlcnMvY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi9oZWxwZXJzL2NvbXBhcmVcIjtcclxuaW1wb3J0IHsgSVdpZGdldE9wdGlvbnMsIFdpZGdldCB9IGZyb20gXCIuL2hlbHBlcnMvd2lkZ2V0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE11dXBQbHVnaW4ge1xyXG4gIGluc3RhbGw6IChhcHA6IEFwcCkgPT4gdm9pZDtcclxufVxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBtdXVwQXBwOiBBcHA7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuICBhcHA6IEFwcGxpY2F0aW9uO1xyXG4gIHdpZGdldHM6IHsgW2tleTogc3RyaW5nXTogSVdpZGdldE9wdGlvbnMgfTtcclxuICBjb21wb25lbnRzOiB7IFtrZXk6IHN0cmluZ106IElDb21wb25lbnRPcHRpb25zIH07XHJcbiAgbGlzdDogQ29tcG9uZW50W107XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFwcCA9IG5ldyBBcHBsaWNhdGlvbih7IGJhY2tncm91bmRDb2xvcjogMHgwZDExMTcsIGFudGlhbGlhczogdHJ1ZSB9KTtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgdGhpcy53aWRnZXRzID0ge307XHJcbiAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgIHdpbmRvdy5tdXVwQXBwID0gdGhpcztcclxuICB9XHJcblxyXG4gIHRyZWUoZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHBhcmVudDogc3RyaW5nID0gXCIwXCIsIGk6IG51bWJlciA9IDApIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldENvbXBvbmVudChkYXRhKTtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgIG5vZGUuaWQgPSBgJHtwYXJlbnR9OiR7aX1gO1xyXG4gICAgICBub2RlLnBhcmVudCA9IGAke3BhcmVudH1gO1xyXG4gICAgICB0aGlzLmxpc3QucHVzaChub2RlKTtcclxuICAgICAgY29uc3QgY2hpbGRzID0gbm9kZS5kYXRhW25vZGUuY2hpbGRzS2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdO1xyXG4gICAgICBjaGlsZHMuZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcclxuICAgICAgICB0aGlzLnRyZWUoY2hpbGQsIG5vZGUuaWQsIGkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmxpc3Q7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnQob2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IG51bGwgfCBDb21wb25lbnQge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgaWYgKGNvbXBhcmUodGhpcy5jb21wb25lbnRzW25hbWVdLm1vZGVsLCBvYmopKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5jb21wb25lbnRzW25hbWVdLCBvYmopO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tuYW1lXS53aWRnZXRzLmZvckVhY2goKHdpZGdldCkgPT4ge1xyXG4gICAgICAgICAgY29tcG9uZW50LndpZGdldHMucHVzaChcclxuICAgICAgICAgICAgbmV3IFdpZGdldCh0aGlzLndpZGdldHNbd2lkZ2V0Lm5hbWVdLCB3aWRnZXQubWFwKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHQgPSBjb21wb25lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIG1vdW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGlmICh0aGlzLmVsKSB7XHJcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldyk7XHJcbiAgICAgIHRoaXMuYXBwLnZpZXcud2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICB0aGlzLmFwcC52aWV3LmhlaWdodCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMubGlzdC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQoY29tcG9uZW50LmNvbnRhaW5lcik7XHJcbiAgICAgIGNvbXBvbmVudC5zZXR1cCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1c2VXaWRnZXQobmFtZTogc3RyaW5nLCB3aWRnZXQ6IElXaWRnZXRPcHRpb25zKSB7XHJcbiAgICB0aGlzLndpZGdldHNbbmFtZV0gPSB3aWRnZXQ7XHJcbiAgfVxyXG5cclxuICB1c2VDb21wb25lbnQobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IElDb21wb25lbnRPcHRpb25zKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICB1c2VQbHVnaW4ocGx1Z2luOiBNdXVwUGx1Z2luKSB7XHJcbiAgICBwbHVnaW4uaW5zdGFsbCh0aGlzKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9