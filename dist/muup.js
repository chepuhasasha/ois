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

/***/ "./src/helpers/node.ts":
/*!*****************************!*\
  !*** ./src/helpers/node.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.node = void 0;
var node = /** @class */ (function () {
    function node(options, widgets) {
        this.frame = document.createElement("div");
        this.widgetsLib = {};
        this.key = options.key;
        this.model = options.model;
        this.widgets = options.widgets;
        this.widgetsLib = widgets;
        this.frame.className = "muup_node";
    }
    node.prototype.render = function (data) {
        this.frame.innerHTML = "";
        var text = document.createTextNode(JSON.stringify(data));
        this.frame.appendChild(text);
    };
    return node;
}());
exports.node = node;


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
var node_1 = __webpack_require__(/*! ./helpers/node */ "./src/helpers/node.ts");
var app = /** @class */ (function () {
    function app(selector) {
        this.list = [];
        this.widgets = {};
        this.nodes = {};
        this.container = document.querySelector(selector);
        if (!this.container)
            console.error("[MUUP]: Контейнер не найден!");
    }
    app.prototype.tree = function (tree) {
        this.convertToList(tree);
        this.proxying();
        this.mount();
    };
    app.prototype.update = function (tree) { };
    app.prototype.convertToList = function (data, i, parent) {
        var _this = this;
        if (i === void 0) { i = 0; }
        var node = this.getNodeName(data);
        if (node) {
            var listItem_1 = {
                id: "".concat(parent ? parent + ":" : "").concat(i),
                parent: parent ? parent : null,
                node: node,
                data: data,
            };
            this.list.push(listItem_1);
            var childs = data[listItem_1.node.key];
            childs.forEach(function (child, i) {
                _this.convertToList(child, i, listItem_1.id);
            });
        }
        return this.list;
    };
    app.prototype.getNodeName = function (obj) {
        for (var name_1 in this.nodes) {
            if ((0, compare_1.compare)(this.nodes[name_1].model, obj)) {
                return new node_1.node(this.nodes[name_1], this.widgets);
            }
        }
        return null;
    };
    app.prototype.proxying = function () {
        this.list = this.list.map(function (node) {
            return new Proxy(node, {
                set: function (target, p, value) {
                    target[p] = value;
                    target.node.render(target.data);
                    return true;
                },
            });
        });
    };
    app.prototype.mount = function () {
        var _this = this;
        this.list.forEach(function (node) {
            _this.container.appendChild(node.node.frame);
            node.node.render(node.data);
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

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDckIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHVCQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsTUFBc0I7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxxQkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLE9BQXFCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFDRDs7O09BR0c7SUFDSCxpQkFBRyxHQUFILFVBQUksTUFBMEI7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDO0FBdEZZLGtCQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL25vZGUudHMiLCJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk11dXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXV1cFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChcclxuICBtb2RlbDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cclxuKTogYm9vbGVhbiA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGlmIChkYXRhW2tleV0pIHtcclxuICAgICAgc3dpdGNoIChtb2RlbFtrZXldLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY2FzZSBPYmplY3Q6XHJcbiAgICAgICAgICBpZiAoZGF0YVtrZXldIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbXBhcmUoXHJcbiAgICAgICAgICAgICAgbW9kZWxba2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcclxuICAgICAgICAgICAgICBkYXRhW2tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGNhc2UgUmVnRXhwOlxyXG4gICAgICAgICAgbGV0IHIgPSBtb2RlbFtrZXldIGFzIFJlZ0V4cDtcclxuICAgICAgICAgIHJlc3VsdCA9IHIudGVzdChKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGNhc2UgQXJyYXk6XHJcbiAgICAgICAgICBsZXQgYXJyID0gbW9kZWxba2V5XSBhcyAoKCkgPT4gdm9pZClbXTtcclxuICAgICAgICAgIGFyci5mb3JFYWNoKCh0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ID09PSBkYXRhW2tleV0uY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXN1bHQgPSBtb2RlbFtrZXldID09PSBkYXRhW2tleV07XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuIiwiaW1wb3J0IHsgSVdpZGdldE9wdGlvbnMgfSBmcm9tIFwiLi93aWRnZXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5vZGVPcHRpb25zIHtcclxuICBrZXk6IHN0cmluZztcclxuICBtb2RlbDogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbiAgd2lkZ2V0czogeyBuYW1lOiBzdHJpbmc7IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBub2RlIHtcclxuICBmcmFtZTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaXZhdGUgd2lkZ2V0c0xpYjogUmVjb3JkPHN0cmluZywgSVdpZGdldE9wdGlvbnM+ID0ge307XHJcbiAgbW9kZWw6IElOb2RlT3B0aW9uc1tcIm1vZGVsXCJdO1xyXG4gIHdpZGdldHM6IElOb2RlT3B0aW9uc1tcIndpZGdldHNcIl07XHJcbiAga2V5OiBJTm9kZU9wdGlvbnNbXCJrZXlcIl07XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogSU5vZGVPcHRpb25zLCB3aWRnZXRzOiBSZWNvcmQ8c3RyaW5nLCBJV2lkZ2V0T3B0aW9ucz4pIHtcclxuICAgIHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XHJcbiAgICB0aGlzLm1vZGVsID0gb3B0aW9ucy5tb2RlbDtcclxuICAgIHRoaXMud2lkZ2V0cyA9IG9wdGlvbnMud2lkZ2V0cztcclxuICAgIHRoaXMud2lkZ2V0c0xpYiA9IHdpZGdldHM7XHJcbiAgICB0aGlzLmZyYW1lLmNsYXNzTmFtZSA9IFwibXV1cF9ub2RlXCI7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcclxuICAgIHRoaXMuZnJhbWUuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICB0aGlzLmZyYW1lLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuL2hlbHBlcnMvY29tcGFyZVwiO1xyXG5pbXBvcnQgeyBJTm9kZU9wdGlvbnMsIG5vZGUgfSBmcm9tIFwiLi9oZWxwZXJzL25vZGVcIjtcclxuaW1wb3J0IHsgSVdpZGdldE9wdGlvbnMsIHdpZGdldCB9IGZyb20gXCIuL2hlbHBlcnMvd2lkZ2V0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNdXVwTGlzdEl0ZW0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgcGFyZW50OiBzdHJpbmcgfCBudWxsO1xyXG4gIG5vZGU6IG5vZGU7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbn1cclxuZXhwb3J0IGNsYXNzIGFwcCB7XHJcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGxpc3Q6IElNdXVwTGlzdEl0ZW1bXSA9IFtdO1xyXG4gIHByaXZhdGUgd2lkZ2V0czogUmVjb3JkPHN0cmluZywgSVdpZGdldE9wdGlvbnM+ID0ge307XHJcbiAgcHJpdmF0ZSBub2RlczogUmVjb3JkPHN0cmluZywgSU5vZGVPcHRpb25zPiA9IHt9O1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyKSBjb25zb2xlLmVycm9yKFwiW01VVVBdOiDQmtC+0L3RgtC10LnQvdC10YAg0L3QtSDQvdCw0LnQtNC10L0hXCIpO1xyXG4gIH1cclxuXHJcbiAgdHJlZSh0cmVlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgdGhpcy5jb252ZXJ0VG9MaXN0KHRyZWUpO1xyXG4gICAgdGhpcy5wcm94eWluZygpO1xyXG4gICAgdGhpcy5tb3VudCgpO1xyXG4gIH1cclxuICB1cGRhdGUodHJlZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHt9XHJcblxyXG4gIGNvbnZlcnRUb0xpc3QoZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGk6IG51bWJlciA9IDAsIHBhcmVudD86IHN0cmluZykge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZU5hbWUoZGF0YSk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IHtcclxuICAgICAgICBpZDogYCR7cGFyZW50ID8gcGFyZW50ICsgXCI6XCIgOiBcIlwifSR7aX1gLFxyXG4gICAgICAgIHBhcmVudDogcGFyZW50ID8gcGFyZW50IDogbnVsbCxcclxuICAgICAgICBub2RlLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubGlzdC5wdXNoKGxpc3RJdGVtKTtcclxuICAgICAgY29uc3QgY2hpbGRzID0gZGF0YVtsaXN0SXRlbS5ub2RlLmtleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXTtcclxuICAgICAgY2hpbGRzLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9MaXN0KGNoaWxkLCBpLCBsaXN0SXRlbS5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubGlzdDtcclxuICB9XHJcblxyXG4gIGdldE5vZGVOYW1lKG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcclxuICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5ub2Rlcykge1xyXG4gICAgICBpZiAoY29tcGFyZSh0aGlzLm5vZGVzW25hbWVdLm1vZGVsLCBvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBub2RlKHRoaXMubm9kZXNbbmFtZV0sIHRoaXMud2lkZ2V0cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJveHlpbmcoKSB7XHJcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QubWFwKChub2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJveHkobm9kZSwge1xyXG4gICAgICAgIHNldDogKHRhcmdldCwgcDogXCJpZFwiLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XHJcbiAgICAgICAgICB0YXJnZXQubm9kZS5yZW5kZXIodGFyZ2V0LmRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1vdW50KCkge1xyXG4gICAgdGhpcy5saXN0LmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZS5ub2RlLmZyYW1lKTtcclxuICAgICAgbm9kZS5ub2RlLnJlbmRlcihub2RlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINCy0LjQtNC20LXRgtC+0LJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtINCd0LDQt9Cy0LDQvdC40LUg0LLQuNC00LbQtdGC0LBcclxuICAgKiBAcGFyYW0ge0lXaWRnZXRPcHRpb25zfSB3aWRnZXQgLSDQmtC+0L3RhNC40LPRg9GA0LDRhtC40Y8g0LLQuNC00LbQtdGC0LBcclxuICAgKi9cclxuICB1c2VXaWRnZXQobmFtZTogc3RyaW5nLCB3aWRnZXQ6IElXaWRnZXRPcHRpb25zKSB7XHJcbiAgICB0aGlzLndpZGdldHNbbmFtZV0gPSB3aWRnZXQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0YPQt9C70L7QslxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g0J3QsNC30LLQsNC90LjQtSDRg9C30LvQsFxyXG4gICAqIEBwYXJhbSB7SU5vZGVPcHRpb25zfSB3aWRnZXQgLSDQmtC+0L3RhNC40LPRg9GA0LDRhtC40Y8g0YPQt9C70LBcclxuICAgKi9cclxuICB1c2VOb2RlKG5hbWU6IHN0cmluZywgZWxlbWVudDogSU5vZGVPcHRpb25zKSB7XHJcbiAgICB0aGlzLm5vZGVzW25hbWVdID0gZWxlbWVudDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9C70LDQs9C40L3QsFxyXG4gICAqIEBwYXJhbSB7KGFwcDogYXBwKSA9PiB2b2lkfSBwbHVnaW4gLSDQn9C70LDQs9C40L1cclxuICAgKi9cclxuICB1c2UocGx1Z2luOiAoYXBwOiBhcHApID0+IHZvaWQpIHtcclxuICAgIHBsdWdpbih0aGlzKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9