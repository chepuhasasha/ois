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


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
var compare_1 = __webpack_require__(/*! ./helpers/compare */ "./src/helpers/compare.ts");
var app = /** @class */ (function () {
    function app(selector) {
        this.muupTree = {};
        this.muupList = [];
        this.widgets = {};
        this.nodes = {};
        this.container = document.querySelector(selector);
        if (!this.container)
            console.error("[MUUP]: Контейнер не найден!");
    }
    app.prototype.tree = function (tree) {
        this.convertToList(tree);
        this.proxying();
        console.log(this.muupList);
    };
    app.prototype.update = function (tree) { };
    app.prototype.convertToList = function (data, i, parent) {
        var _this = this;
        if (i === void 0) { i = 0; }
        var node = this.getNodeName(data);
        if (node) {
            node.id = "".concat(parent ? parent + ":" : "").concat(i);
            node.parent = parent ? parent : null;
            var newData = __assign({}, data);
            delete newData[node.node.key];
            this.muupList.push({ node: node, data: newData });
            var childs = data[node.node.key];
            childs.forEach(function (child, i) {
                _this.convertToList(child, i, node.id);
            });
        }
        return this.muupList;
    };
    app.prototype.getNodeName = function (obj) {
        for (var name_1 in this.nodes) {
            if ((0, compare_1.compare)(this.nodes[name_1].model, obj)) {
                return {
                    id: "0",
                    parent: "0",
                    node: this.nodes[name_1],
                    data: {},
                };
            }
        }
        return null;
    };
    app.prototype.proxying = function () {
        this.muupList = this.muupList.map(function (node) {
            return {
                node: node.node,
                data: new Proxy(node.data, {
                    get: function (target, p) {
                        return target[p];
                    },
                    set: function (target, p, value) {
                        target[p] = value;
                        return true;
                    },
                }),
            };
        });
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL011dXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNdXVwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk11dXBcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoXHJcbiAgbW9kZWw6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbik6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICBPYmplY3Qua2V5cyhtb2RlbCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBpZiAoZGF0YVtrZXldKSB7XHJcbiAgICAgIHN3aXRjaCAobW9kZWxba2V5XS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNhc2UgT2JqZWN0OlxyXG4gICAgICAgICAgaWYgKGRhdGFba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBjb21wYXJlKFxyXG4gICAgICAgICAgICAgIG1vZGVsW2tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbiAgICAgICAgICAgICAgZGF0YVtrZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBjYXNlIFJlZ0V4cDpcclxuICAgICAgICAgIGxldCByID0gbW9kZWxba2V5XSBhcyBSZWdFeHA7XHJcbiAgICAgICAgICByZXN1bHQgPSByLnRlc3QoSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBjYXNlIEFycmF5OlxyXG4gICAgICAgICAgbGV0IGFyciA9IG1vZGVsW2tleV0gYXMgKCgpID0+IHZvaWQpW107XHJcbiAgICAgICAgICBhcnIuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodCA9PT0gZGF0YVtrZXldLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmVzdWx0ID0gbW9kZWxba2V5XSA9PT0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbiIsImltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi9oZWxwZXJzL2NvbXBhcmVcIjtcclxuaW1wb3J0IHsgSU5vZGVPcHRpb25zLCBub2RlIH0gZnJvbSBcIi4vaGVscGVycy9ub2RlXCI7XHJcbmltcG9ydCB7IElXaWRnZXRPcHRpb25zLCB3aWRnZXQgfSBmcm9tIFwiLi9oZWxwZXJzL3dpZGdldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGFwcCB7XHJcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIG11dXBUcmVlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xyXG4gIHByaXZhdGUgbXV1cExpc3Q6IHtcclxuICAgIG5vZGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbiAgfVtdID0gW107XHJcbiAgcHJpdmF0ZSB3aWRnZXRzOiBSZWNvcmQ8c3RyaW5nLCBJV2lkZ2V0T3B0aW9ucz4gPSB7fTtcclxuICBwcml2YXRlIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBJTm9kZU9wdGlvbnM+ID0ge307XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGlmICghdGhpcy5jb250YWluZXIpIGNvbnNvbGUuZXJyb3IoXCJbTVVVUF06INCa0L7QvdGC0LXQudC90LXRgCDQvdC1INC90LDQudC00LXQvSFcIik7XHJcbiAgfVxyXG5cclxuICB0cmVlKHRyZWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XHJcbiAgICB0aGlzLmNvbnZlcnRUb0xpc3QodHJlZSk7XHJcbiAgICB0aGlzLnByb3h5aW5nKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm11dXBMaXN0KTtcclxuICB9XHJcbiAgdXBkYXRlKHRyZWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7fVxyXG5cclxuICBjb252ZXJ0VG9MaXN0KGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBpOiBudW1iZXIgPSAwLCBwYXJlbnQ/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGVOYW1lKGRhdGEpO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgbm9kZS5pZCA9IGAke3BhcmVudCA/IHBhcmVudCArIFwiOlwiIDogXCJcIn0ke2l9YDtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnQgOiBudWxsO1xyXG4gICAgICBjb25zdCBuZXdEYXRhID0geyAuLi5kYXRhIH07XHJcbiAgICAgIGRlbGV0ZSBuZXdEYXRhW25vZGUubm9kZS5rZXldO1xyXG4gICAgICB0aGlzLm11dXBMaXN0LnB1c2goeyBub2RlLCBkYXRhOiBuZXdEYXRhIH0pO1xyXG4gICAgICBjb25zdCBjaGlsZHMgPSBkYXRhW25vZGUubm9kZS5rZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+W107XHJcbiAgICAgIGNoaWxkcy5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udmVydFRvTGlzdChjaGlsZCwgaSwgbm9kZS5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubXV1cExpc3Q7XHJcbiAgfVxyXG5cclxuICBnZXROb2RlTmFtZShvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMubm9kZXMpIHtcclxuICAgICAgaWYgKGNvbXBhcmUodGhpcy5ub2Rlc1tuYW1lXS5tb2RlbCwgb2JqKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogXCIwXCIsXHJcbiAgICAgICAgICBwYXJlbnQ6IFwiMFwiLFxyXG4gICAgICAgICAgbm9kZTogdGhpcy5ub2Rlc1tuYW1lXSxcclxuICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJveHlpbmcoKSB7XHJcbiAgICB0aGlzLm11dXBMaXN0ID0gdGhpcy5tdXVwTGlzdC5tYXAoKG5vZGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBub2RlOiBub2RlLm5vZGUsXHJcbiAgICAgICAgZGF0YTogbmV3IFByb3h5KG5vZGUuZGF0YSwge1xyXG4gICAgICAgICAgZ2V0OiAodGFyZ2V0LCBwKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcCBhcyBzdHJpbmddO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNldDogKHRhcmdldCwgcCwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGFyZ2V0W3AgYXMgc3RyaW5nXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0LLQuNC00LbQtdGC0L7QslxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g0J3QsNC30LLQsNC90LjQtSDQstC40LTQttC10YLQsFxyXG4gICAqIEBwYXJhbSB7SVdpZGdldE9wdGlvbnN9IHdpZGdldCAtINCa0L7QvdGE0LjQs9GD0YDQsNGG0LjRjyDQstC40LTQttC10YLQsFxyXG4gICAqL1xyXG4gIHVzZVdpZGdldChuYW1lOiBzdHJpbmcsIHdpZGdldDogSVdpZGdldE9wdGlvbnMpIHtcclxuICAgIHRoaXMud2lkZ2V0c1tuYW1lXSA9IHdpZGdldDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDRg9C30LvQvtCyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSDQndCw0LfQstCw0L3QuNC1INGD0LfQu9CwXHJcbiAgICogQHBhcmFtIHtJTm9kZU9wdGlvbnN9IHdpZGdldCAtINCa0L7QvdGE0LjQs9GD0YDQsNGG0LjRjyDRg9C30LvQsFxyXG4gICAqL1xyXG4gIHVzZU5vZGUobmFtZTogc3RyaW5nLCBlbGVtZW50OiBJTm9kZU9wdGlvbnMpIHtcclxuICAgIHRoaXMubm9kZXNbbmFtZV0gPSBlbGVtZW50O1xyXG4gIH1cclxuICAvKipcclxuICAgKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC/0LvQsNCz0LjQvdCwXHJcbiAgICogQHBhcmFtIHsoYXBwOiBhcHApID0+IHZvaWR9IHBsdWdpbiAtINCf0LvQsNCz0LjQvVxyXG4gICAqL1xyXG4gIHVzZShwbHVnaW46IChhcHA6IGFwcCkgPT4gdm9pZCkge1xyXG4gICAgcGx1Z2luKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=