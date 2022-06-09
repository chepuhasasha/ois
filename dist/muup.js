(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Muup"] = factory();
	else
		root["Muup"] = factory();
})(self, () => {
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
var compare_1 = __webpack_require__(/*! ./helpers/compare */ "./src/helpers/compare.ts");
var app = /** @class */ (function () {
    function app(selector) {
        this.widgets = {};
        this.nodes = {};
        this.muupTree = {};
        this.container = document.querySelector(selector);
        if (!this.container)
            console.error("[MUUP]: Контейнер не найден!");
    }
    app.prototype.tree = function (tree) {
        this.muupTree = this.proxying(this.parse(tree));
    };
    app.prototype.parse = function (tree) {
        return tree;
    };
    app.prototype.getNodeName = function (obj) {
        for (var name_1 in this.nodes) {
            if ((0, compare_1.compare)(this.nodes[name_1].model, obj)) {
                return name_1;
            }
        }
    };
    app.prototype.proxying = function (data) {
        var _this = this;
        if (typeof data === "object") {
            for (var key in data) {
                data[key] = this.proxying(data[key]);
            }
            return new Proxy(data, {
                get: function (target, p) {
                    return target[p];
                },
                set: function (target, p, value) {
                    if (typeof value === "object") {
                        target[p] = _this.proxying(value);
                        return true;
                    }
                    target[p] = value;
                    return true;
                },
            });
        }
        return data;
    };
    app.prototype.update = function (tree) { };
    /**
     * Регистрация виджетов
     * @param {string} name - Название виджета
     * @param {IWidgetOptions} widget - Конфигурация виджета
     */
    app.prototype.useWidget = function (name, widget) {
        this.widgets[name] = widget;
    };
    /**
     * Регистрация узлов
     * @param {string} name - Название узла
     * @param {INodeOptions} widget - Конфигурация узла
     */
    app.prototype.useNode = function (name, element) {
        this.nodes[name] = element;
    };
    /**
     * Регистрация плагина
     * @param {(app: app) => void} plugin - Плагин
     */
    app.prototype.use = function (plugin) {
        plugin(this);
    };
    return app;
}());
exports.app = app;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsaUJBQUcsR0FBSCxVQUFJLE1BQTBCO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQztBQTFFWSxrQkFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL011dXAvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL011dXAvLi9zcmMvaGVscGVycy9jb21wYXJlLnRzIiwid2VicGFjazovL011dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNdXVwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk11dXBcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoXHJcbiAgbW9kZWw6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbik6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICBPYmplY3Qua2V5cyhtb2RlbCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBpZiAoZGF0YVtrZXldKSB7XHJcbiAgICAgIHN3aXRjaCAobW9kZWxba2V5XS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNhc2UgT2JqZWN0OlxyXG4gICAgICAgICAgaWYgKGRhdGFba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBjb21wYXJlKFxyXG4gICAgICAgICAgICAgIG1vZGVsW2tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbiAgICAgICAgICAgICAgZGF0YVtrZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBjYXNlIFJlZ0V4cDpcclxuICAgICAgICAgIGxldCByID0gbW9kZWxba2V5XSBhcyBSZWdFeHA7XHJcbiAgICAgICAgICByZXN1bHQgPSByLnRlc3QoSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBjYXNlIEFycmF5OlxyXG4gICAgICAgICAgbGV0IGFyciA9IG1vZGVsW2tleV0gYXMgKCgpID0+IHZvaWQpW107XHJcbiAgICAgICAgICBhcnIuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodCA9PT0gZGF0YVtrZXldLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmVzdWx0ID0gbW9kZWxba2V5XSA9PT0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4vaGVscGVycy9jb21wYXJlXCI7XHJcbmltcG9ydCB7IElOb2RlT3B0aW9ucywgbm9kZSB9IGZyb20gXCIuL2hlbHBlcnMvbm9kZVwiO1xyXG5pbXBvcnQgeyBJV2lkZ2V0T3B0aW9ucywgd2lkZ2V0IH0gZnJvbSBcIi4vaGVscGVycy93aWRnZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBhcHAge1xyXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgbXV1cFRyZWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG4gIHByaXZhdGUgd2lkZ2V0czogUmVjb3JkPHN0cmluZywgSVdpZGdldE9wdGlvbnM+ID0ge307XHJcbiAgcHJpdmF0ZSBub2RlczogUmVjb3JkPHN0cmluZywgSU5vZGVPcHRpb25zPiA9IHt9O1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubXV1cFRyZWUgPSB7fTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyKSBjb25zb2xlLmVycm9yKFwiW01VVVBdOiDQmtC+0L3RgtC10LnQvdC10YAg0L3QtSDQvdCw0LnQtNC10L0hXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJlZSh0cmVlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgdGhpcy5tdXVwVHJlZSA9IHRoaXMucHJveHlpbmcodGhpcy5wYXJzZSh0cmVlKSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZSh0cmVlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgcmV0dXJuIHRyZWU7XHJcbiAgfVxyXG5cclxuICBnZXROb2RlTmFtZShvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMubm9kZXMpIHtcclxuICAgICAgaWYgKGNvbXBhcmUodGhpcy5ub2Rlc1tuYW1lXS5tb2RlbCwgb2JqKSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm94eWluZyhkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgZGF0YVtrZXldID0gdGhpcy5wcm94eWluZyhkYXRhW2tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXcgUHJveHkoZGF0YSwge1xyXG4gICAgICAgIGdldDogKHRhcmdldCwgcCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtwIGFzIHN0cmluZ107XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6ICh0YXJnZXQsIHAsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtwIGFzIHN0cmluZ10gPSB0aGlzLnByb3h5aW5nKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YXJnZXRbcCBhcyBzdHJpbmddID0gdmFsdWU7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRyZWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7fVxyXG5cclxuICAvKipcclxuICAgKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINCy0LjQtNC20LXRgtC+0LJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtINCd0LDQt9Cy0LDQvdC40LUg0LLQuNC00LbQtdGC0LBcclxuICAgKiBAcGFyYW0ge0lXaWRnZXRPcHRpb25zfSB3aWRnZXQgLSDQmtC+0L3RhNC40LPRg9GA0LDRhtC40Y8g0LLQuNC00LbQtdGC0LBcclxuICAgKi9cclxuICB1c2VXaWRnZXQobmFtZTogc3RyaW5nLCB3aWRnZXQ6IElXaWRnZXRPcHRpb25zKSB7XHJcbiAgICB0aGlzLndpZGdldHNbbmFtZV0gPSB3aWRnZXQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0YPQt9C70L7QslxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g0J3QsNC30LLQsNC90LjQtSDRg9C30LvQsFxyXG4gICAqIEBwYXJhbSB7SU5vZGVPcHRpb25zfSB3aWRnZXQgLSDQmtC+0L3RhNC40LPRg9GA0LDRhtC40Y8g0YPQt9C70LBcclxuICAgKi9cclxuICB1c2VOb2RlKG5hbWU6IHN0cmluZywgZWxlbWVudDogSU5vZGVPcHRpb25zKSB7XHJcbiAgICB0aGlzLm5vZGVzW25hbWVdID0gZWxlbWVudDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9C70LDQs9C40L3QsFxyXG4gICAqIEBwYXJhbSB7KGFwcDogYXBwKSA9PiB2b2lkfSBwbHVnaW4gLSDQn9C70LDQs9C40L1cclxuICAgKi9cclxuICB1c2UocGx1Z2luOiAoYXBwOiBhcHApID0+IHZvaWQpIHtcclxuICAgIHBsdWdpbih0aGlzKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9