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

/***/ "./src/helpers/el.ts":
/*!***************************!*\
  !*** ./src/helpers/el.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.el = void 0;
function el(tag, options, childs) {
    var element = document.createElement(tag);
    if (options) {
        if (options.style) {
            for (var key in options.style) {
                element.style[key] = options.style[key];
            }
        }
        if (options.attrs) {
            for (var key in options.attrs) {
                // element[key] = options[key];
            }
        }
    }
    if (childs) {
        childs.forEach(function (el) { return element.appendChild(el); });
    }
    return element;
}
exports.el = el;


/***/ }),

/***/ "./src/helpers/tree.ts":
/*!*****************************!*\
  !*** ./src/helpers/tree.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tree = void 0;
function tree(data) {
    if (typeof data === "object") {
        for (var key in data) {
            data[key] = tree(data[key]);
        }
        return new Proxy(data, {
            get: function (target, p) {
                return target[p];
            },
            set: function (target, p, value) {
                console.log("123");
                return true;
            },
        });
    }
    return data;
}
exports.tree = tree;


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
exports.createApp = void 0;
var el_1 = __webpack_require__(/*! ./helpers/el */ "./src/helpers/el.ts");
var tree_1 = __webpack_require__(/*! ./helpers/tree */ "./src/helpers/tree.ts");
var compare_1 = __webpack_require__(/*! ./helpers/compare */ "./src/helpers/compare.ts");
function createApp() {
    return {
        el: el_1.el,
        tree: tree_1.tree,
        widgets: {},
        elements: {},
        useWidget: function (name, widget) {
            this.widgets[name] = widget;
        },
        useElement: function (name, element) {
            this.elements[name] = element;
        },
        getElementName: function (obj) {
            for (var name_1 in this.elements) {
                if ((0, compare_1.compare)(this.elements[name_1].model, obj)) {
                    return name_1;
                }
            }
        },
        mount: function (selector) {
            this.container = document.querySelector(selector);
            console.log(this.getElementName(this.tree));
            // if (container) container.appendChild();
        },
    };
}
exports.createApp = createApp;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDM0MsT0FBTyxNQUFJLENBQUM7aUJBQ2I7YUFDRjtRQUNILENBQUM7UUFDRCxLQUFLLEVBQUwsVUFBTSxRQUFnQjtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVDLDBDQUEwQztRQUM1QyxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFuQ0QsOEJBbUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2VsLnRzIiwid2VicGFjazovL011dXAvLi9zcmMvaGVscGVycy90cmVlLnRzIiwid2VicGFjazovL011dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNdXVwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk11dXBcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoXHJcbiAgbW9kZWw6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbik6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICBPYmplY3Qua2V5cyhtb2RlbCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBpZiAoZGF0YVtrZXldKSB7XHJcbiAgICAgIHN3aXRjaCAobW9kZWxba2V5XS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNhc2UgT2JqZWN0OlxyXG4gICAgICAgICAgaWYgKGRhdGFba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBjb21wYXJlKFxyXG4gICAgICAgICAgICAgIG1vZGVsW2tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbiAgICAgICAgICAgICAgZGF0YVtrZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBjYXNlIFJlZ0V4cDpcclxuICAgICAgICAgIGxldCByID0gbW9kZWxba2V5XSBhcyBSZWdFeHA7XHJcbiAgICAgICAgICByZXN1bHQgPSByLnRlc3QoSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBjYXNlIEFycmF5OlxyXG4gICAgICAgICAgbGV0IGFyciA9IG1vZGVsW2tleV0gYXMgKCgpID0+IHZvaWQpW107XHJcbiAgICAgICAgICBhcnIuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodCA9PT0gZGF0YVtrZXldLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmVzdWx0ID0gbW9kZWxba2V5XSA9PT0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBlbChcclxuICB0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB8IGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwLFxyXG4gIG9wdGlvbnM/OiB7XHJcbiAgICBzdHlsZT86IHtcclxuICAgICAgW2tleSBpbiBrZXlvZiBDU1NTdHlsZURlY2xhcmF0aW9uXT86IENTU1N0eWxlRGVjbGFyYXRpb25ba2V5XTtcclxuICAgIH07XHJcbiAgICBhdHRycz86IHtcclxuICAgICAgW2tleSBpbiBrZXlvZiBIVE1MRWxlbWVudF0/OiBIVE1MRWxlbWVudFtrZXldO1xyXG4gICAgfTtcclxuICB9LFxyXG4gIGNoaWxkcz86IEhUTUxFbGVtZW50W11cclxuKTogSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zLnN0eWxlKSB7XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLnN0eWxlKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gb3B0aW9ucy5zdHlsZVtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5hdHRycykge1xyXG4gICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5hdHRycykge1xyXG4gICAgICAgIC8vIGVsZW1lbnRba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoY2hpbGRzKSB7XHJcbiAgICBjaGlsZHMuZm9yRWFjaCgoZWwpID0+IGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpKTtcclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRyZWUoZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcclxuICBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgIGRhdGFba2V5XSA9IHRyZWUoZGF0YVtrZXldIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUHJveHkoZGF0YSwge1xyXG4gICAgICBnZXQodGFyZ2V0LCBwOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0W3BdO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQ6ICh0YXJnZXQsIHA6IHN0cmluZywgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjEyM1wiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgZWwgfSBmcm9tIFwiLi9oZWxwZXJzL2VsXCI7XHJcbmltcG9ydCB7IHRyZWUgfSBmcm9tIFwiLi9oZWxwZXJzL3RyZWVcIjtcclxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuL2hlbHBlcnMvY29tcGFyZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwcCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZWwsXHJcbiAgICB0cmVlLFxyXG4gICAgd2lkZ2V0czoge30sXHJcbiAgICBlbGVtZW50czoge30sXHJcbiAgICB1c2VXaWRnZXQoXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgd2lkZ2V0OiB7IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjsgcmVuZGVyOiAoKSA9PiBIVE1MRWxlbWVudCB9XHJcbiAgICApIHtcclxuICAgICAgdGhpcy53aWRnZXRzW25hbWVdID0gd2lkZ2V0O1xyXG4gICAgfSxcclxuICAgIHVzZUVsZW1lbnQoXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgZWxlbWVudDoge1xyXG4gICAgICAgIG1vZGVsOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfTtcclxuICAgICAgICBrZXk6IHN0cmluZztcclxuICAgICAgICB3aWRnZXRzOiB7IG5hbWU6IHN0cmluZzsgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH1bXTtcclxuICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNbbmFtZV0gPSBlbGVtZW50O1xyXG4gICAgfSxcclxuICAgIGdldEVsZW1lbnROYW1lKG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcclxuICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKGNvbXBhcmUodGhpcy5lbGVtZW50c1tuYW1lXS5tb2RlbCwgb2JqKSkge1xyXG4gICAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnQoc2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmdldEVsZW1lbnROYW1lKHRoaXMudHJlZSkpO1xyXG4gICAgICAvLyBpZiAoY29udGFpbmVyKSBjb250YWluZXIuYXBwZW5kQ2hpbGQoKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=