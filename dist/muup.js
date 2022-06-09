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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".muup_node {\n  transition: all 0.3s ease;\n  background: #1E1F29;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid #232B36;\n  width: max-content;\n  display: flex;\n  gap: 10px;\n}\n.muup_node:hover {\n  background: #292A38;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AACE;EAEE,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;AADJ;AAEI;EACE,mBAAA;AAAN","sourcesContent":[".muup {\r\n  &_node {\r\n    // position: absolute;\r\n    transition: all 0.3s ease;\r\n    background: #1E1F29;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    border: 1px solid #232B36;\r\n    width: max-content;\r\n    display: flex;\r\n    gap:10px;\r\n    &:hover {\r\n      background: #292A38;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
                element[key] = options.attrs[key];
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

/***/ "./src/helpers/node.ts":
/*!*****************************!*\
  !*** ./src/helpers/node.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.node = void 0;
var widget_1 = __webpack_require__(/*! ./widget */ "./src/helpers/widget.ts");
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
        var _this = this;
        this.frame.innerHTML = "";
        this.widgets.forEach(function (w) {
            var W = new widget_1.widget(_this.widgetsLib[w.name], data);
            _this.frame.appendChild(W.render());
        });
    };
    return node;
}());
exports.node = node;


/***/ }),

/***/ "./src/helpers/widget.ts":
/*!*******************************!*\
  !*** ./src/helpers/widget.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.widget = void 0;
var widget = /** @class */ (function () {
    function widget(options, data) {
        this.state = data;
        this.props = options.props;
        this.render = options.render;
        this.render.bind(this);
    }
    return widget;
}());
exports.widget = widget;


/***/ }),

/***/ "./src/libs/infra.ts":
/*!***************************!*\
  !*** ./src/libs/infra.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.infra = exports.status = void 0;
var el_1 = __webpack_require__(/*! ../helpers/el */ "./src/helpers/el.ts");
exports.status = {
    props: { color: "red" },
    render: function () {
        // return document.createTextNode(JSON.stringify(this.state.status));
        return (0, el_1.el)("div", { style: { background: "red" } }, [
            (0, el_1.el)("span", { attrs: { innerText: this.state.status.color } }),
        ]);
    },
};
function infra(muup) {
    muup.useWidget("Status", exports.status);
}
exports.infra = infra;


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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
exports.createApp = exports.app = void 0;
__webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
var compare_1 = __webpack_require__(/*! ./helpers/compare */ "./src/helpers/compare.ts");
var node_1 = __webpack_require__(/*! ./helpers/node */ "./src/helpers/node.ts");
var infra_1 = __webpack_require__(/*! ./libs/infra */ "./src/libs/infra.ts");
var el_1 = __webpack_require__(/*! ./helpers/el */ "./src/helpers/el.ts");
var app = /** @class */ (function () {
    function app(selector) {
        this.list = [];
        this.widgets = {};
        this.nodes = {};
        this.el = el_1.el;
        this.container = document.querySelector(selector);
        if (!this.container)
            console.error("[MUUP]: Контейнер не найден!");
    }
    app.prototype.tree = function (tree) {
        this.list = this.proxying(this.convertToList(tree));
        this.mount();
    };
    app.prototype.update = function (tree) {
        var _this = this;
        var newList = this.convertToList(tree);
        newList.forEach(function (item, i) {
            if (JSON.stringify(item) != JSON.stringify(_this.list[i])) {
                _this.list[i].data = item.data;
            }
        });
    };
    app.prototype.convertToList = function (data, i, list, parent) {
        var _this = this;
        if (i === void 0) { i = 0; }
        if (list === void 0) { list = []; }
        var node = this.getNode(data);
        if (node) {
            var listItem_1 = {
                id: "".concat(parent ? parent + ":" : "").concat(i),
                parent: parent ? parent : null,
                node: node,
                data: data,
            };
            list.push(listItem_1);
            var childs = data[listItem_1.node.key];
            childs.forEach(function (child, i) {
                _this.convertToList(child, i, list, listItem_1.id);
            });
        }
        return list;
    };
    app.prototype.getNode = function (obj) {
        for (var name_1 in this.nodes) {
            if ((0, compare_1.compare)(this.nodes[name_1].model, obj)) {
                return new node_1.node(this.nodes[name_1], this.widgets);
            }
        }
        return null;
    };
    app.prototype.proxying = function (list) {
        return list.map(function (node) {
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
function createApp(selector) {
    var muup = new app(selector);
    muup.use(infra_1.infra);
    return muup;
}
exports.createApp = createApp;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBSkQsOEJBSUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vTXV1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vTXV1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL011dXAvLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz83NDdlIiwid2VicGFjazovL011dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTXV1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vTXV1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9NdXVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL011dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9NdXVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2VsLnRzIiwid2VicGFjazovL011dXAvLi9zcmMvaGVscGVycy9ub2RlLnRzIiwid2VicGFjazovL011dXAvLi9zcmMvaGVscGVycy93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9saWJzL2luZnJhLnRzIiwid2VicGFjazovL011dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL011dXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL011dXAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTXV1cFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNdXVwXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm11dXBfbm9kZSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgYmFja2dyb3VuZDogIzFFMUYyOTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjMyQjM2O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLm11dXBfbm9kZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjkyQTM4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDRTtFQUVFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFESjtBQUVJO0VBQ0UsbUJBQUE7QUFBTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubXV1cCB7XFxyXFxuICAmX25vZGUge1xcclxcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxRTFGMjk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIzMkIzNjtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6MTBweDtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzI5MkEzODtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChcclxuICBtb2RlbDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cclxuKTogYm9vbGVhbiA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGlmIChkYXRhW2tleV0pIHtcclxuICAgICAgc3dpdGNoIChtb2RlbFtrZXldLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY2FzZSBPYmplY3Q6XHJcbiAgICAgICAgICBpZiAoZGF0YVtrZXldIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbXBhcmUoXHJcbiAgICAgICAgICAgICAgbW9kZWxba2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcclxuICAgICAgICAgICAgICBkYXRhW2tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGNhc2UgUmVnRXhwOlxyXG4gICAgICAgICAgbGV0IHIgPSBtb2RlbFtrZXldIGFzIFJlZ0V4cDtcclxuICAgICAgICAgIHJlc3VsdCA9IHIudGVzdChKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGNhc2UgQXJyYXk6XHJcbiAgICAgICAgICBsZXQgYXJyID0gbW9kZWxba2V5XSBhcyAoKCkgPT4gdm9pZClbXTtcclxuICAgICAgICAgIGFyci5mb3JFYWNoKCh0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ID09PSBkYXRhW2tleV0uY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXN1bHQgPSBtb2RlbFtrZXldID09PSBkYXRhW2tleV07XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVsKFxyXG4gIHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHwga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXAsXHJcbiAgb3B0aW9ucz86IHtcclxuICAgIHN0eWxlPzoge1xyXG4gICAgICBba2V5IGluIGtleW9mIENTU1N0eWxlRGVjbGFyYXRpb25dPzogQ1NTU3R5bGVEZWNsYXJhdGlvbltrZXldO1xyXG4gICAgfTtcclxuICAgIGF0dHJzPzoge1xyXG4gICAgICBba2V5IGluIGtleW9mIEhUTUxFbGVtZW50XT86IEhUTUxFbGVtZW50W2tleV07XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY2hpbGRzPzogSFRNTEVsZW1lbnRbXVxyXG4pOiBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMuc3R5bGUpIHtcclxuICAgICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMuc3R5bGUpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBvcHRpb25zLnN0eWxlW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmF0dHJzKSB7XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLmF0dHJzKSB7XHJcbiAgICAgICAgZWxlbWVudFtrZXkgYXMgXCJpbm5lclRleHRcIl0gPSBvcHRpb25zLmF0dHJzW2tleSBhcyBcImlubmVyVGV4dFwiXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoY2hpbGRzKSB7XHJcbiAgICBjaGlsZHMuZm9yRWFjaCgoZWwpID0+IGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpKTtcclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVdpZGdldE9wdGlvbnMsIHdpZGdldCB9IGZyb20gXCIuL3dpZGdldFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm9kZU9wdGlvbnMge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIG1vZGVsOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICB3aWRnZXRzOiB7IG5hbWU6IHN0cmluZzsgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIG5vZGUge1xyXG4gIGZyYW1lOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpdmF0ZSB3aWRnZXRzTGliOiBSZWNvcmQ8c3RyaW5nLCBJV2lkZ2V0T3B0aW9ucz4gPSB7fTtcclxuICBtb2RlbDogSU5vZGVPcHRpb25zW1wibW9kZWxcIl07XHJcbiAgd2lkZ2V0czogSU5vZGVPcHRpb25zW1wid2lkZ2V0c1wiXTtcclxuICBrZXk6IElOb2RlT3B0aW9uc1tcImtleVwiXTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJTm9kZU9wdGlvbnMsIHdpZGdldHM6IFJlY29yZDxzdHJpbmcsIElXaWRnZXRPcHRpb25zPikge1xyXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcclxuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xyXG4gICAgdGhpcy53aWRnZXRzID0gb3B0aW9ucy53aWRnZXRzO1xyXG4gICAgdGhpcy53aWRnZXRzTGliID0gd2lkZ2V0cztcclxuICAgIHRoaXMuZnJhbWUuY2xhc3NOYW1lID0gXCJtdXVwX25vZGVcIjtcclxuICB9XHJcblxyXG4gIHJlbmRlcihkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgdGhpcy5mcmFtZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy53aWRnZXRzLmZvckVhY2goKHcpID0+IHtcclxuICAgICAgY29uc3QgVyA9IG5ldyB3aWRnZXQodGhpcy53aWRnZXRzTGliW3cubmFtZV0sIGRhdGEpO1xyXG4gICAgICB0aGlzLmZyYW1lLmFwcGVuZENoaWxkKFcucmVuZGVyKCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVdpZGdldE9wdGlvbnMge1xyXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICByZW5kZXI6ICgpID0+IEhUTUxFbGVtZW50IHwgVGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHdpZGdldCB7XHJcbiAgcHJvcHM6IElXaWRnZXRPcHRpb25zW1wicHJvcHNcIl07XHJcbiAgcmVuZGVyOiBJV2lkZ2V0T3B0aW9uc1tcInJlbmRlclwiXTtcclxuICBzdGF0ZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogSVdpZGdldE9wdGlvbnMsIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XHJcbiAgICB0aGlzLnN0YXRlID0gZGF0YTtcclxuICAgIHRoaXMucHJvcHMgPSBvcHRpb25zLnByb3BzO1xyXG4gICAgdGhpcy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcclxuICAgIHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBJV2lkZ2V0T3B0aW9ucyB9IGZyb20gXCIuLi9oZWxwZXJzL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBlbCB9IGZyb20gXCIuLi9oZWxwZXJzL2VsXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhdHVzOiBJV2lkZ2V0T3B0aW9ucyA9IHtcclxuICBwcm9wczogeyBjb2xvcjogXCJyZWRcIiB9LFxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnN0YXR1cykpO1xyXG4gICAgcmV0dXJuIGVsKFwiZGl2XCIsIHsgc3R5bGU6IHsgYmFja2dyb3VuZDogXCJyZWRcIiB9IH0sIFtcclxuICAgICAgZWwoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaW5uZXJUZXh0OiB0aGlzLnN0YXRlLnN0YXR1cy5jb2xvciB9IH0pLFxyXG4gICAgXSk7XHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluZnJhKG11dXA6IGFwcCkge1xyXG4gIG11dXAudXNlV2lkZ2V0KFwiU3RhdHVzXCIsIHN0YXR1cyk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi9oZWxwZXJzL2NvbXBhcmVcIjtcclxuaW1wb3J0IHsgSU5vZGVPcHRpb25zLCBub2RlIH0gZnJvbSBcIi4vaGVscGVycy9ub2RlXCI7XHJcbmltcG9ydCB7IElXaWRnZXRPcHRpb25zIH0gZnJvbSBcIi4vaGVscGVycy93aWRnZXRcIjtcclxuaW1wb3J0IHsgaW5mcmEgfSBmcm9tIFwiLi9saWJzL2luZnJhXCI7XHJcbmltcG9ydCB7IGVsIH0gZnJvbSBcIi4vaGVscGVycy9lbFwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIElNdXVwTGlzdEl0ZW0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgcGFyZW50OiBzdHJpbmcgfCBudWxsO1xyXG4gIG5vZGU6IG5vZGU7XHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbn1cclxuZXhwb3J0IGNsYXNzIGFwcCB7XHJcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGxpc3Q6IElNdXVwTGlzdEl0ZW1bXSA9IFtdO1xyXG4gIHByaXZhdGUgd2lkZ2V0czogUmVjb3JkPHN0cmluZywgSVdpZGdldE9wdGlvbnM+ID0ge307XHJcbiAgcHJpdmF0ZSBub2RlczogUmVjb3JkPHN0cmluZywgSU5vZGVPcHRpb25zPiA9IHt9O1xyXG4gIGVsID0gZWw7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIGlmICghdGhpcy5jb250YWluZXIpIGNvbnNvbGUuZXJyb3IoXCJbTVVVUF06INCa0L7QvdGC0LXQudC90LXRgCDQvdC1INC90LDQudC00LXQvSFcIik7XHJcbiAgfVxyXG5cclxuICB0cmVlKHRyZWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XHJcbiAgICB0aGlzLmxpc3QgPSB0aGlzLnByb3h5aW5nKHRoaXMuY29udmVydFRvTGlzdCh0cmVlKSk7XHJcbiAgICB0aGlzLm1vdW50KCk7XHJcbiAgfVxyXG4gIHVwZGF0ZSh0cmVlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgY29uc3QgbmV3TGlzdCA9IHRoaXMuY29udmVydFRvTGlzdCh0cmVlKTtcclxuICAgIG5ld0xpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoaXRlbSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0W2ldKSkge1xyXG4gICAgICAgIHRoaXMubGlzdFtpXS5kYXRhID0gaXRlbS5kYXRhO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUb0xpc3QoXHJcbiAgICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcclxuICAgIGk6IG51bWJlciA9IDAsXHJcbiAgICBsaXN0OiBJTXV1cExpc3RJdGVtW10gPSBbXSxcclxuICAgIHBhcmVudD86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZShkYXRhKTtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0ge1xyXG4gICAgICAgIGlkOiBgJHtwYXJlbnQgPyBwYXJlbnQgKyBcIjpcIiA6IFwiXCJ9JHtpfWAsXHJcbiAgICAgICAgcGFyZW50OiBwYXJlbnQgPyBwYXJlbnQgOiBudWxsLFxyXG4gICAgICAgIG5vZGUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfTtcclxuICAgICAgbGlzdC5wdXNoKGxpc3RJdGVtKTtcclxuICAgICAgY29uc3QgY2hpbGRzID0gZGF0YVtsaXN0SXRlbS5ub2RlLmtleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXTtcclxuICAgICAgY2hpbGRzLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9MaXN0KGNoaWxkLCBpLCBsaXN0LCBsaXN0SXRlbS5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICBnZXROb2RlKG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcclxuICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5ub2Rlcykge1xyXG4gICAgICBpZiAoY29tcGFyZSh0aGlzLm5vZGVzW25hbWVdLm1vZGVsLCBvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBub2RlKHRoaXMubm9kZXNbbmFtZV0sIHRoaXMud2lkZ2V0cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJveHlpbmcobGlzdDogSU11dXBMaXN0SXRlbVtdKSB7XHJcbiAgICByZXR1cm4gbGlzdC5tYXAoKG5vZGUpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm94eShub2RlLCB7XHJcbiAgICAgICAgc2V0OiAodGFyZ2V0LCBwOiBcImlkXCIsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB0YXJnZXRbcF0gPSB2YWx1ZTtcclxuICAgICAgICAgIHRhcmdldC5ub2RlLnJlbmRlcih0YXJnZXQuZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbW91bnQoKSB7XHJcbiAgICB0aGlzLmxpc3QuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLm5vZGUuZnJhbWUpO1xyXG4gICAgICBub2RlLm5vZGUucmVuZGVyKG5vZGUuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0LLQuNC00LbQtdGC0L7QslxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g0J3QsNC30LLQsNC90LjQtSDQstC40LTQttC10YLQsFxyXG4gICAqIEBwYXJhbSB7SVdpZGdldE9wdGlvbnN9IHdpZGdldCAtINCa0L7QvdGE0LjQs9GD0YDQsNGG0LjRjyDQstC40LTQttC10YLQsFxyXG4gICAqL1xyXG4gIHVzZVdpZGdldChuYW1lOiBzdHJpbmcsIHdpZGdldDogSVdpZGdldE9wdGlvbnMpIHtcclxuICAgIHRoaXMud2lkZ2V0c1tuYW1lXSA9IHdpZGdldDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDRg9C30LvQvtCyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSDQndCw0LfQstCw0L3QuNC1INGD0LfQu9CwXHJcbiAgICogQHBhcmFtIHtJTm9kZU9wdGlvbnN9IHdpZGdldCAtINCa0L7QvdGE0LjQs9GD0YDQsNGG0LjRjyDRg9C30LvQsFxyXG4gICAqL1xyXG4gIHVzZU5vZGUobmFtZTogc3RyaW5nLCBlbGVtZW50OiBJTm9kZU9wdGlvbnMpIHtcclxuICAgIHRoaXMubm9kZXNbbmFtZV0gPSBlbGVtZW50O1xyXG4gIH1cclxuICAvKipcclxuICAgKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC/0LvQsNCz0LjQvdCwXHJcbiAgICogQHBhcmFtIHsoYXBwOiBhcHApID0+IHZvaWR9IHBsdWdpbiAtINCf0LvQsNCz0LjQvVxyXG4gICAqL1xyXG4gIHVzZShwbHVnaW46IChhcHA6IGFwcCkgPT4gdm9pZCkge1xyXG4gICAgcGx1Z2luKHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwcChzZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgY29uc3QgbXV1cCA9IG5ldyBhcHAoc2VsZWN0b3IpO1xyXG4gIG11dXAudXNlKGluZnJhKTtcclxuICByZXR1cm4gbXV1cDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=