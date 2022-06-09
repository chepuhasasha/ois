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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/libs/base.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/libs/base.scss ***!
  \*********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".muup_base_title {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Arial\";\n}\n.muup_base_title_title {\n  text-transform: uppercase;\n  color: #bac0da;\n  font-size: 14px;\n}\n.muup_base_title_subtitle {\n  color: #8e93a7;\n  font-size: 11px;\n}\n.muup_base_status {\n  width: 4px;\n  height: 100%;\n  min-height: 20px;\n  border-radius: 2px;\n}\n.muup_base_tworows {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.muup_base_tworows_item {\n  font-family: \"Arial\";\n  font-size: 12px;\n  color: #979CAF;\n}", "",{"version":3,"sources":["webpack://./src/libs/base.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,sBAAA;EACA,oBAAA;AAAJ;AACI;EACE,yBAAA;EACA,cAAA;EACA,eAAA;AACN;AACI;EACE,cAAA;EACA,eAAA;AACN;AAEE;EACE,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;AAAJ;AAEE;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;AAAJ;AACI;EACE,oBAAA;EACA,eAAA;EACA,cAAA;AACN","sourcesContent":[".muup_base {\r\n  &_title {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Arial';\r\n    &_title {\r\n      text-transform: uppercase;\r\n      color: #bac0da;\r\n      font-size: 14px;\r\n    }\r\n    &_subtitle {\r\n      color: #8e93a7;\r\n      font-size: 11px;\r\n    }\r\n  }\r\n  &_status {\r\n    width: 4px;\r\n    height: 100%;\r\n    min-height: 20px;\r\n    border-radius: 2px;\r\n  }\r\n  &_tworows {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    &_item {\r\n      font-family: 'Arial';\r\n      font-size: 12px;\r\n      color: #979CAF;\r\n\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, ".muup {\n  display: grid;\n  grid-gap: 100px;\n  grid-row-gap: 10px;\n  grid-auto-columns: minmax(max-content, max-content);\n  background: #141620;\n  padding: 40px;\n  overflow: auto;\n}\n.muup::-webkit-scrollbar {\n  background: none;\n  width: 10px;\n  height: 10px;\n}\n.muup::-webkit-scrollbar-thumb {\n  background: #292A38;\n}\n.muup_node {\n  transition: all 0.3s ease;\n  background: #1E1F29;\n  padding: 10px;\n  border-radius: 4px;\n  border: 1px solid #232B36;\n  width: max-content;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.muup_node:hover {\n  background: #292A38;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,mDAAA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;AACF;AAAE;EACI,gBAAA;EACA,WAAA;EACA,YAAA;AAEN;AACI;EACE,mBAAA;AACN;AACE;EACE,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AACJ;AAAI;EACE,mBAAA;AAEN","sourcesContent":[".muup {\r\n  display: grid;\r\n  grid-gap: 100px;\r\n  grid-row-gap: 10px;\r\n  grid-auto-columns: minmax(max-content, max-content);\r\n  background: #141620;\r\n  padding: 40px;\r\n  overflow: auto;\r\n  &::-webkit-scrollbar {\r\n      background: none;\r\n      width: 10px;\r\n      height: 10px;\r\n    }\r\n  \r\n    &::-webkit-scrollbar-thumb {\r\n      background: #292A38;\r\n    }\r\n  &_node {\r\n    transition: all 0.3s ease;\r\n    background: #1E1F29;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    border: 1px solid #232B36;\r\n    width: max-content;\r\n    display: flex;\r\n    gap:10px;\r\n    align-items: center;\r\n    &:hover {\r\n      background: #292A38;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/libs/base.scss":
/*!****************************!*\
  !*** ./src/libs/base.scss ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/libs/base.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
            var W = new widget_1.widget(_this.widgetsLib[w.name]);
            for (var key in w.map) {
                if (w.map[key][0] === "#") {
                    W.props[key] = w.map[key]
                        .slice(1)
                        .split(".")
                        .reduce(function (acc, val) {
                        return acc[val];
                    }, data);
                }
                else {
                    W.props[key] = w.map[key];
                }
            }
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
    function widget(options) {
        this.props = options.props;
        this.render = options.render;
        this.render.bind(this);
    }
    return widget;
}());
exports.widget = widget;


/***/ }),

/***/ "./src/libs/base.ts":
/*!**************************!*\
  !*** ./src/libs/base.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.base = exports.twoRows = exports.status = exports.title = void 0;
var el_1 = __webpack_require__(/*! ../helpers/el */ "./src/helpers/el.ts");
__webpack_require__(/*! ./base.scss */ "./src/libs/base.scss");
exports.title = {
    props: { title: "Title", subtitle: "subtitle" },
    render: function () {
        return (0, el_1.el)("div", { attrs: { className: "muup_base_title" } }, [
            (0, el_1.el)("span", {
                attrs: {
                    className: "muup_base_title_title",
                    innerText: this.props.title,
                },
            }),
            (0, el_1.el)("span", {
                attrs: {
                    className: "muup_base_title_subtitle",
                    innerText: this.props.subtitle,
                },
            }),
        ]);
    },
};
exports.status = {
    props: { color: "red" },
    render: function () {
        return (0, el_1.el)("div", {
            style: { background: this.props.color },
            attrs: { className: "muup_base_status" },
        });
    },
};
exports.twoRows = {
    props: {
        title_a: "A",
        title_b: "B",
        value_a: 0,
        value_b: 0,
        color_a: "#979CAF",
        color_b: "#979CAF",
    },
    render: function () {
        return (0, el_1.el)("div", { attrs: { className: "muup_base_tworows" } }, [
            (0, el_1.el)("span", {
                style: {
                    color: this.props.color_a,
                },
                attrs: {
                    className: "muup_base_tworows_item",
                    innerText: "".concat(this.props.title_a, ":").concat(this.props.value_a),
                },
            }),
            (0, el_1.el)("span", {
                style: {
                    color: this.props.color_b,
                },
                attrs: {
                    className: "muup_base_tworows_item",
                    innerText: "".concat(this.props.title_b, ":").concat(this.props.value_b),
                },
            }),
        ]);
    },
};
function base(muup) {
    muup.useWidget("Title", exports.title);
    muup.useWidget("Status", exports.status);
    muup.useWidget("TwoRows", exports.twoRows);
}
exports.base = base;


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
var base_1 = __webpack_require__(/*! ./libs/base */ "./src/libs/base.ts");
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
        else
            this.container.className = "muup";
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
    app.prototype.convertToList = function (data, list, area) {
        var _this = this;
        if (list === void 0) { list = []; }
        if (area === void 0) { area = {
            y: 1,
            x: 1,
            _y: 2,
            _x: 2,
        }; }
        var node = this.getNode(data);
        if (node) {
            var listItem = {
                area: "".concat(area.y, "/").concat(area.x, "/").concat(area._y, "/").concat(area._x),
                node: node,
                data: data,
            };
            list.push(listItem);
            var childs = data[listItem.node.key];
            childs.forEach(function (child, i) {
                _this.convertToList(child, list, {
                    y: area.y + i,
                    x: area.x + 1,
                    _y: area.y + i + 1,
                    _x: area.x + 2,
                });
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
        this.list.forEach(function (node, i) {
            node.node.render(node.data);
            _this.container.appendChild(node.node.frame);
            node.node.frame.style.gridArea = node.area;
            // if (node.parent) {
            //   const parent = this.list.find((el) => el.id === node.parent);
            //   const rect = parent.node.frame.getBoundingClientRect();
            //   node.node.frame.style.left = rect.width + rect.x + 50 + "px";
            //   if (this.list[i - 1].parent === node.parent) {
            //     const rect = this.list[i - 1].node.frame.getBoundingClientRect();
            //     node.node.frame.style.top = rect.height + rect.y + 50 + "px";
            //   }
            // }
            // console.log(node.node.frame.getBoundingClientRect());
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
    muup.use(base_1.base);
    return muup;
}
exports.createApp = createApp;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzNDLHFCQUFxQjtZQUNyQixrRUFBa0U7WUFDbEUsNERBQTREO1lBQzVELGtFQUFrRTtZQUNsRSxtREFBbUQ7WUFDbkQsd0VBQXdFO1lBQ3hFLG9FQUFvRTtZQUNwRSxNQUFNO1lBQ04sSUFBSTtZQUNKLHdEQUF3RDtRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsdUJBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxNQUFzQjtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILHFCQUFPLEdBQVAsVUFBUSxJQUFZLEVBQUUsT0FBcUI7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUNEOzs7T0FHRztJQUNILGlCQUFHLEdBQUgsVUFBSSxNQUEwQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0gsVUFBQztBQUFELENBQUM7QUF0SFksa0JBQUc7QUF3SGhCLFNBQWdCLFNBQVMsQ0FBQyxRQUFnQjtJQUN4QyxJQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQUksQ0FBQyxDQUFDO0lBQ2YsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBSkQsOEJBSUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NdXVwLy4vc3JjL2xpYnMvYmFzZS5zY3NzIiwid2VicGFjazovL011dXAvLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9NdXVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9NdXVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9saWJzL2Jhc2Uuc2Nzcz9lMmFkIiwid2VicGFjazovL011dXAvLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz83NDdlIiwid2VicGFjazovL011dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTXV1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vTXV1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9NdXVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL011dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9NdXVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9oZWxwZXJzL2VsLnRzIiwid2VicGFjazovL011dXAvLi9zcmMvaGVscGVycy9ub2RlLnRzIiwid2VicGFjazovL011dXAvLi9zcmMvaGVscGVycy93aWRnZXQudHMiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9saWJzL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL011dXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL011dXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9NdXVwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTXV1cC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vTXV1cC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNdXVwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk11dXBcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubXV1cF9iYXNlX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCI7XFxufVxcbi5tdXVwX2Jhc2VfdGl0bGVfdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjYmFjMGRhO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ubXV1cF9iYXNlX3RpdGxlX3N1YnRpdGxlIHtcXG4gIGNvbG9yOiAjOGU5M2E3O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG4ubXV1cF9iYXNlX3N0YXR1cyB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLm11dXBfYmFzZV90d29yb3dzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubXV1cF9iYXNlX3R3b3Jvd3NfaXRlbSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjOTc5Q0FGO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGlicy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUFKO0FBQ0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ047QUFDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ047QUFFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFKO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm11dXBfYmFzZSB7XFxyXFxuICAmX3RpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XFxyXFxuICAgICZfdGl0bGUge1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgY29sb3I6ICNiYWMwZGE7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxuICAgICZfc3VidGl0bGUge1xcclxcbiAgICAgIGNvbG9yOiAjOGU5M2E3O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9zdGF0dXMge1xcclxcbiAgICB3aWR0aDogNHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIH1cXHJcXG4gICZfdHdvcm93cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgJl9pdGVtIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcXHJcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgY29sb3I6ICM5NzlDQUY7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm11dXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxMDBweDtcXG4gIGdyaWQtcm93LWdhcDogMTBweDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiBtaW5tYXgobWF4LWNvbnRlbnQsIG1heC1jb250ZW50KTtcXG4gIGJhY2tncm91bmQ6ICMxNDE2MjA7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5tdXVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5tdXVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjMjkyQTM4O1xcbn1cXG4ubXV1cF9ub2RlIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBiYWNrZ3JvdW5kOiAjMUUxRjI5O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzJCMzY7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm11dXBfbm9kZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMjkyQTM4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVOO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBQ0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0UsbUJBQUE7QUFFTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubXV1cCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1nYXA6IDEwMHB4O1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xcclxcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1pbm1heChtYXgtY29udGVudCwgbWF4LWNvbnRlbnQpO1xcclxcbiAgYmFja2dyb3VuZDogIzE0MTYyMDtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjMjkyQTM4O1xcclxcbiAgICB9XFxyXFxuICAmX25vZGUge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMUUxRjI5O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMzJCMzY7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOjEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICMyOTJBMzg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChcclxuICBtb2RlbDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXHJcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cclxuKTogYm9vbGVhbiA9PiB7XHJcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIGlmIChkYXRhW2tleV0pIHtcclxuICAgICAgc3dpdGNoIChtb2RlbFtrZXldLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY2FzZSBPYmplY3Q6XHJcbiAgICAgICAgICBpZiAoZGF0YVtrZXldIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbXBhcmUoXHJcbiAgICAgICAgICAgICAgbW9kZWxba2V5XSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcclxuICAgICAgICAgICAgICBkYXRhW2tleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGNhc2UgUmVnRXhwOlxyXG4gICAgICAgICAgbGV0IHIgPSBtb2RlbFtrZXldIGFzIFJlZ0V4cDtcclxuICAgICAgICAgIHJlc3VsdCA9IHIudGVzdChKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGNhc2UgQXJyYXk6XHJcbiAgICAgICAgICBsZXQgYXJyID0gbW9kZWxba2V5XSBhcyAoKCkgPT4gdm9pZClbXTtcclxuICAgICAgICAgIGFyci5mb3JFYWNoKCh0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ID09PSBkYXRhW2tleV0uY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXN1bHQgPSBtb2RlbFtrZXldID09PSBkYXRhW2tleV07XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVsKFxyXG4gIHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHwga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXAsXHJcbiAgb3B0aW9ucz86IHtcclxuICAgIHN0eWxlPzoge1xyXG4gICAgICBba2V5IGluIGtleW9mIENTU1N0eWxlRGVjbGFyYXRpb25dPzogQ1NTU3R5bGVEZWNsYXJhdGlvbltrZXldO1xyXG4gICAgfTtcclxuICAgIGF0dHJzPzoge1xyXG4gICAgICBba2V5IGluIGtleW9mIEhUTUxFbGVtZW50XT86IEhUTUxFbGVtZW50W2tleV07XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY2hpbGRzPzogSFRNTEVsZW1lbnRbXVxyXG4pOiBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMuc3R5bGUpIHtcclxuICAgICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMuc3R5bGUpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBvcHRpb25zLnN0eWxlW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmF0dHJzKSB7XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zLmF0dHJzKSB7XHJcbiAgICAgICAgZWxlbWVudFtrZXkgYXMgXCJpbm5lclRleHRcIl0gPSBvcHRpb25zLmF0dHJzW2tleSBhcyBcImlubmVyVGV4dFwiXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoY2hpbGRzKSB7XHJcbiAgICBjaGlsZHMuZm9yRWFjaCgoZWwpID0+IGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpKTtcclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgSVdpZGdldE9wdGlvbnMsIHdpZGdldCB9IGZyb20gXCIuL3dpZGdldFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTm9kZU9wdGlvbnMge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIG1vZGVsOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICB3aWRnZXRzOiB7IG5hbWU6IHN0cmluZzsgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIG5vZGUge1xyXG4gIGZyYW1lOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpdmF0ZSB3aWRnZXRzTGliOiBSZWNvcmQ8c3RyaW5nLCBJV2lkZ2V0T3B0aW9ucz4gPSB7fTtcclxuICBtb2RlbDogSU5vZGVPcHRpb25zW1wibW9kZWxcIl07XHJcbiAgd2lkZ2V0czogSU5vZGVPcHRpb25zW1wid2lkZ2V0c1wiXTtcclxuICBrZXk6IElOb2RlT3B0aW9uc1tcImtleVwiXTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJTm9kZU9wdGlvbnMsIHdpZGdldHM6IFJlY29yZDxzdHJpbmcsIElXaWRnZXRPcHRpb25zPikge1xyXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcclxuICAgIHRoaXMubW9kZWwgPSBvcHRpb25zLm1vZGVsO1xyXG4gICAgdGhpcy53aWRnZXRzID0gb3B0aW9ucy53aWRnZXRzO1xyXG4gICAgdGhpcy53aWRnZXRzTGliID0gd2lkZ2V0cztcclxuICAgIHRoaXMuZnJhbWUuY2xhc3NOYW1lID0gXCJtdXVwX25vZGVcIjtcclxuICB9XHJcblxyXG4gIHJlbmRlcihkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikge1xyXG4gICAgdGhpcy5mcmFtZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy53aWRnZXRzLmZvckVhY2goKHcpID0+IHtcclxuICAgICAgY29uc3QgVyA9IG5ldyB3aWRnZXQodGhpcy53aWRnZXRzTGliW3cubmFtZV0pO1xyXG4gICAgICBmb3IgKGxldCBrZXkgaW4gdy5tYXApIHtcclxuICAgICAgICBpZiAody5tYXBba2V5XVswXSA9PT0gXCIjXCIpIHtcclxuICAgICAgICAgIFcucHJvcHNba2V5XSA9IHcubWFwW2tleV1cclxuICAgICAgICAgICAgLnNsaWNlKDEpXHJcbiAgICAgICAgICAgIC5zcGxpdChcIi5cIilcclxuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYWNjW3ZhbF07XHJcbiAgICAgICAgICAgIH0sIGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBXLnByb3BzW2tleV0gPSB3Lm1hcFtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZyYW1lLmFwcGVuZENoaWxkKFcucmVuZGVyKCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVdpZGdldE9wdGlvbnMge1xyXG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICByZW5kZXI6ICgpID0+IEhUTUxFbGVtZW50IHwgVGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHdpZGdldCB7XHJcbiAgcHJvcHM6IElXaWRnZXRPcHRpb25zW1wicHJvcHNcIl07XHJcbiAgcmVuZGVyOiBJV2lkZ2V0T3B0aW9uc1tcInJlbmRlclwiXTtcclxuICBzdGF0ZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogSVdpZGdldE9wdGlvbnMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBvcHRpb25zLnByb3BzO1xyXG4gICAgdGhpcy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcclxuICAgIHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGFwcCB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBJV2lkZ2V0T3B0aW9ucyB9IGZyb20gXCIuLi9oZWxwZXJzL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBlbCB9IGZyb20gXCIuLi9oZWxwZXJzL2VsXCI7XHJcbmltcG9ydCBcIi4vYmFzZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdGl0bGU6IElXaWRnZXRPcHRpb25zID0ge1xyXG4gIHByb3BzOiB7IHRpdGxlOiBcIlRpdGxlXCIsIHN1YnRpdGxlOiBcInN1YnRpdGxlXCIgfSxcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gZWwoXCJkaXZcIiwgeyBhdHRyczogeyBjbGFzc05hbWU6IFwibXV1cF9iYXNlX3RpdGxlXCIgfSB9LCBbXHJcbiAgICAgIGVsKFwic3BhblwiLCB7XHJcbiAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogXCJtdXVwX2Jhc2VfdGl0bGVfdGl0bGVcIixcclxuICAgICAgICAgIGlubmVyVGV4dDogdGhpcy5wcm9wcy50aXRsZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgZWwoXCJzcGFuXCIsIHtcclxuICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIm11dXBfYmFzZV90aXRsZV9zdWJ0aXRsZVwiLFxyXG4gICAgICAgICAgaW5uZXJUZXh0OiB0aGlzLnByb3BzLnN1YnRpdGxlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGF0dXM6IElXaWRnZXRPcHRpb25zID0ge1xyXG4gIHByb3BzOiB7IGNvbG9yOiBcInJlZFwiIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGVsKFwiZGl2XCIsIHtcclxuICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZDogdGhpcy5wcm9wcy5jb2xvciB9LFxyXG4gICAgICBhdHRyczogeyBjbGFzc05hbWU6IFwibXV1cF9iYXNlX3N0YXR1c1wiIH0sXHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHR3b1Jvd3M6IElXaWRnZXRPcHRpb25zID0ge1xyXG4gIHByb3BzOiB7XHJcbiAgICB0aXRsZV9hOiBcIkFcIixcclxuICAgIHRpdGxlX2I6IFwiQlwiLFxyXG4gICAgdmFsdWVfYTogMCxcclxuICAgIHZhbHVlX2I6IDAsXHJcbiAgICBjb2xvcl9hOiBcIiM5NzlDQUZcIixcclxuICAgIGNvbG9yX2I6IFwiIzk3OUNBRlwiLFxyXG4gIH0sXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGVsKFwiZGl2XCIsIHsgYXR0cnM6IHsgY2xhc3NOYW1lOiBcIm11dXBfYmFzZV90d29yb3dzXCIgfSB9LCBbXHJcbiAgICAgIGVsKFwic3BhblwiLCB7XHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yX2EsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIm11dXBfYmFzZV90d29yb3dzX2l0ZW1cIixcclxuICAgICAgICAgIGlubmVyVGV4dDogYCR7dGhpcy5wcm9wcy50aXRsZV9hfToke3RoaXMucHJvcHMudmFsdWVfYX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBlbChcInNwYW5cIiwge1xyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICBjb2xvcjogdGhpcy5wcm9wcy5jb2xvcl9iLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgIGNsYXNzTmFtZTogXCJtdXVwX2Jhc2VfdHdvcm93c19pdGVtXCIsXHJcbiAgICAgICAgICBpbm5lclRleHQ6IGAke3RoaXMucHJvcHMudGl0bGVfYn06JHt0aGlzLnByb3BzLnZhbHVlX2J9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIF0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFzZShtdXVwOiBhcHApIHtcclxuICBtdXVwLnVzZVdpZGdldChcIlRpdGxlXCIsIHRpdGxlKTtcclxuICBtdXVwLnVzZVdpZGdldChcIlN0YXR1c1wiLCBzdGF0dXMpO1xyXG4gIG11dXAudXNlV2lkZ2V0KFwiVHdvUm93c1wiLCB0d29Sb3dzKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuL2hlbHBlcnMvY29tcGFyZVwiO1xyXG5pbXBvcnQgeyBJTm9kZU9wdGlvbnMsIG5vZGUgfSBmcm9tIFwiLi9oZWxwZXJzL25vZGVcIjtcclxuaW1wb3J0IHsgSVdpZGdldE9wdGlvbnMgfSBmcm9tIFwiLi9oZWxwZXJzL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSBcIi4vbGlicy9iYXNlXCI7XHJcbmltcG9ydCB7IGVsIH0gZnJvbSBcIi4vaGVscGVycy9lbFwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIElNdXVwTGlzdEl0ZW0ge1xyXG4gIG5vZGU6IG5vZGU7XHJcbiAgYXJlYTogc3RyaW5nO1xyXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBhcHAge1xyXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBsaXN0OiBJTXV1cExpc3RJdGVtW10gPSBbXTtcclxuICBwcml2YXRlIHdpZGdldHM6IFJlY29yZDxzdHJpbmcsIElXaWRnZXRPcHRpb25zPiA9IHt9O1xyXG4gIHByaXZhdGUgbm9kZXM6IFJlY29yZDxzdHJpbmcsIElOb2RlT3B0aW9ucz4gPSB7fTtcclxuICBlbCA9IGVsO1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyKSBjb25zb2xlLmVycm9yKFwiW01VVVBdOiDQmtC+0L3RgtC10LnQvdC10YAg0L3QtSDQvdCw0LnQtNC10L0hXCIpO1xyXG4gICAgZWxzZSB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm11dXBcIjtcclxuICB9XHJcblxyXG4gIHRyZWUodHJlZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcclxuICAgIHRoaXMubGlzdCA9IHRoaXMucHJveHlpbmcodGhpcy5jb252ZXJ0VG9MaXN0KHRyZWUpKTtcclxuICAgIHRoaXMubW91bnQoKTtcclxuICB9XHJcbiAgdXBkYXRlKHRyZWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XHJcbiAgICBjb25zdCBuZXdMaXN0ID0gdGhpcy5jb252ZXJ0VG9MaXN0KHRyZWUpO1xyXG4gICAgbmV3TGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShpdGVtKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3RbaV0pKSB7XHJcbiAgICAgICAgdGhpcy5saXN0W2ldLmRhdGEgPSBpdGVtLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFRvTGlzdChcclxuICAgIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxyXG4gICAgbGlzdDogSU11dXBMaXN0SXRlbVtdID0gW10sXHJcbiAgICBhcmVhOiB7IHk6IG51bWJlcjsgeDogbnVtYmVyOyBfeTogbnVtYmVyOyBfeDogbnVtYmVyIH0gPSB7XHJcbiAgICAgIHk6IDEsXHJcbiAgICAgIHg6IDEsXHJcbiAgICAgIF95OiAyLFxyXG4gICAgICBfeDogMixcclxuICAgIH1cclxuICApIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoZGF0YSk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IHtcclxuICAgICAgICBhcmVhOiBgJHthcmVhLnl9LyR7YXJlYS54fS8ke2FyZWEuX3l9LyR7YXJlYS5feH1gLFxyXG4gICAgICAgIG5vZGUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfTtcclxuICAgICAgbGlzdC5wdXNoKGxpc3RJdGVtKTtcclxuICAgICAgY29uc3QgY2hpbGRzID0gZGF0YVtsaXN0SXRlbS5ub2RlLmtleV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXTtcclxuICAgICAgY2hpbGRzLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9MaXN0KGNoaWxkLCBsaXN0LCB7XHJcbiAgICAgICAgICB5OiBhcmVhLnkgKyBpLFxyXG4gICAgICAgICAgeDogYXJlYS54ICsgMSxcclxuICAgICAgICAgIF95OiBhcmVhLnkgKyBpICsgMSxcclxuICAgICAgICAgIF94OiBhcmVhLnggKyAyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZShvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMubm9kZXMpIHtcclxuICAgICAgaWYgKGNvbXBhcmUodGhpcy5ub2Rlc1tuYW1lXS5tb2RlbCwgb2JqKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgbm9kZSh0aGlzLm5vZGVzW25hbWVdLCB0aGlzLndpZGdldHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByb3h5aW5nKGxpc3Q6IElNdXVwTGlzdEl0ZW1bXSkge1xyXG4gICAgcmV0dXJuIGxpc3QubWFwKChub2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJveHkobm9kZSwge1xyXG4gICAgICAgIHNldDogKHRhcmdldCwgcDogXCJpZFwiLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdGFyZ2V0W3BdID0gdmFsdWU7XHJcbiAgICAgICAgICB0YXJnZXQubm9kZS5yZW5kZXIodGFyZ2V0LmRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1vdW50KCkge1xyXG4gICAgdGhpcy5saXN0LmZvckVhY2goKG5vZGUsIGkpID0+IHtcclxuICAgICAgbm9kZS5ub2RlLnJlbmRlcihub2RlLmRhdGEpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlLm5vZGUuZnJhbWUpO1xyXG4gICAgICBub2RlLm5vZGUuZnJhbWUuc3R5bGUuZ3JpZEFyZWEgPSBub2RlLmFyZWE7XHJcbiAgICAgIC8vIGlmIChub2RlLnBhcmVudCkge1xyXG4gICAgICAvLyAgIGNvbnN0IHBhcmVudCA9IHRoaXMubGlzdC5maW5kKChlbCkgPT4gZWwuaWQgPT09IG5vZGUucGFyZW50KTtcclxuICAgICAgLy8gICBjb25zdCByZWN0ID0gcGFyZW50Lm5vZGUuZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIC8vICAgbm9kZS5ub2RlLmZyYW1lLnN0eWxlLmxlZnQgPSByZWN0LndpZHRoICsgcmVjdC54ICsgNTAgKyBcInB4XCI7XHJcbiAgICAgIC8vICAgaWYgKHRoaXMubGlzdFtpIC0gMV0ucGFyZW50ID09PSBub2RlLnBhcmVudCkge1xyXG4gICAgICAvLyAgICAgY29uc3QgcmVjdCA9IHRoaXMubGlzdFtpIC0gMV0ubm9kZS5mcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgLy8gICAgIG5vZGUubm9kZS5mcmFtZS5zdHlsZS50b3AgPSByZWN0LmhlaWdodCArIHJlY3QueSArIDUwICsgXCJweFwiO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhub2RlLm5vZGUuZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINCy0LjQtNC20LXRgtC+0LJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtINCd0LDQt9Cy0LDQvdC40LUg0LLQuNC00LbQtdGC0LBcclxuICAgKiBAcGFyYW0ge0lXaWRnZXRPcHRpb25zfSB3aWRnZXQgLSDQmtC+0L3RhNC40LPRg9GA0LDRhtC40Y8g0LLQuNC00LbQtdGC0LBcclxuICAgKi9cclxuICB1c2VXaWRnZXQobmFtZTogc3RyaW5nLCB3aWRnZXQ6IElXaWRnZXRPcHRpb25zKSB7XHJcbiAgICB0aGlzLndpZGdldHNbbmFtZV0gPSB3aWRnZXQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0YPQt9C70L7QslxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0g0J3QsNC30LLQsNC90LjQtSDRg9C30LvQsFxyXG4gICAqIEBwYXJhbSB7SU5vZGVPcHRpb25zfSB3aWRnZXQgLSDQmtC+0L3RhNC40LPRg9GA0LDRhtC40Y8g0YPQt9C70LBcclxuICAgKi9cclxuICB1c2VOb2RlKG5hbWU6IHN0cmluZywgZWxlbWVudDogSU5vZGVPcHRpb25zKSB7XHJcbiAgICB0aGlzLm5vZGVzW25hbWVdID0gZWxlbWVudDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQv9C70LDQs9C40L3QsFxyXG4gICAqIEBwYXJhbSB7KGFwcDogYXBwKSA9PiB2b2lkfSBwbHVnaW4gLSDQn9C70LDQs9C40L1cclxuICAgKi9cclxuICB1c2UocGx1Z2luOiAoYXBwOiBhcHApID0+IHZvaWQpIHtcclxuICAgIHBsdWdpbih0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoc2VsZWN0b3I6IHN0cmluZykge1xyXG4gIGNvbnN0IG11dXAgPSBuZXcgYXBwKHNlbGVjdG9yKTtcclxuICBtdXVwLnVzZShiYXNlKTtcclxuICByZXR1cm4gbXV1cDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=