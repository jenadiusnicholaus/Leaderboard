/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: cursive;\\n  width: 100%;\\n}\\n\\np {\\n  font-weight: bold;\\n  font-size: 24px;\\n}\\n\\nh1 {\\n  font-size: 34px;\\n}\\n\\nnav {\\n  margin-left: 10%;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n\\n.container {\\n  margin: 0 100px 100px 50px;\\n  width: 70%;\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-gap: 33px;\\n  grid-template-columns: 1fr 1fr;\\n}\\n\\n.flex-d-row {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\ndiv.flex-d-row {\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.flex-d-col {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nbutton {\\n  width: 100px;\\n  height: 30px;\\n  border: 2px  solid black;\\n  border-bottom-width: 5px;\\n  border-right-width: 5px;\\n  cursor: pointer;\\n}\\n\\n.scores {\\n  height: 100%;\\n  margin-top: 2px;\\n  border: 3px solid black;\\n  padding-top: 2px;\\n  padding-left: 5px;\\n}\\n\\n.scores li {\\n  padding: 3px;\\n}\\n\\nli.flex-d-row {\\n  justify-content: start;\\n}\\n\\nli span {\\n  margin-right: 10px;\\n}\\n\\n.scores li:nth-child(even) {\\n  background: rgb(238, 234, 234);\\n}\\n\\n.btn-area {\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\ninput[type=text] {\\n  border: 3px solid;\\n  margin-bottom: 24px;\\n  padding: 8px;\\n  text-align: start;\\n  justify-content: center;\\n}\\n\\nbutton.refresh {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n\\n}\\n\\n.loading {\\n  /* display: none; */\\n  display: none;\\n  justify-content: center;\\n}\\n\\n\\n\\n.loading::after {\\n  content: \\\"\\\";\\n  width: 10px;\\n  height: 10px;\\n  border: 3px solid #dddddd;\\n  border-top-color: #009579;\\n  border-radius: 100%;\\n  animation: loading 1s ease infinite;\\n}\\n\\n.scores .loading {\\n  /* content: \\\"\\\"; */\\n  width: 50px;\\n  height: 50px;\\n  /* border: 3px solid #dddddd;\\n  border-top-color: #009579;\\n  border-radius: 100%;\\n  animation: loading 1s ease infinite; */\\n    \\n}\\n\\n@keyframes loading {\\n  to {\\n      transform: rotate(1turn);\\n  }\\n}\\n\\n.message{\\n  width: 100%;\\n  height: auto;\\n  display: none;\\n}\\n\\n.first-alert{\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://work-with-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://work-with-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://work-with-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://work-with-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://work-with-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://work-with-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://work-with-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://work-with-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://work-with-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://work-with-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Apicall.js":
/*!************************!*\
  !*** ./src/Apicall.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nclass API {\n    static getKey = async ()   => { \n         const headers = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getHeader('Content-Type', 'application/x-www-form-urlencoded' )\n         const urlencodedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].urlEncodeParms()\n         const method = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMethod('POST');\n         let requestOptions = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requestOptions(method, headers, urlencodedParams);\n         const url = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseUrl + _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subUrl().games;\n        try {\n        const response = await fetch(url , requestOptions)\n            if (response.ok) {\n                const decodedResponse = await response.json();\n                const gameKey = decodedResponse.result.split(' ')[3]\n                _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveToLocalStorage('gamekey', gameKey )\n                return gameKey\n            }\n            throw new Error(`HTTP error: ${response.status}`);\n        }\n        catch(e){\n          return _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exception(e)\n        }   \n    }\n\n    //  create  game \n    static createGame = async (user, score) => {\n        const headers = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getHeader('Content-Type', 'application/x-www-form-urlencoded' )\n        const method = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMethod('POST');\n        // Todo\n        var urlencoded = new URLSearchParams();\n        urlencoded.append(\"user\", user);\n        urlencoded.append(\"score\", score);\n\n        const requestOptions = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requestOptions(method, headers, urlencoded);\n        const id = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromLocalstorage('gamekey');\n        const url = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseUrl + _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subUrl(id).withgamesId;\n        try {\n            const response = await fetch(url , requestOptions)\n                if (response.ok) {\n                    const decodedResponse = await response.json();\n                    return decodedResponse.result\n                }\n                throw new Error(`HTTP error: ${response.status}`);\n            }\n            catch(e){\n              return _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exception(e)\n            } \n        }\n\n        // list of beaderBoard\n        static  leaderBoardlist = async (id) => {\n            var requestOptions = {\n                method: _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMethod('GET'),\n            };\n            const url = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseUrl + _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subUrl(id).withgamesId;\n            try {\n                const response = await fetch(url , requestOptions)\n                    if (response.ok) {\n                        const decodedResponse = await response.json();\n                        return decodedResponse.result\n                    }\n                    throw new Error(`HTTP error: ${response.status}`);\n                }\n                catch(e){\n                  return _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exception(e)\n            } \n        }\n    }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n\n\n//# sourceURL=webpack://work-with-webpack/./src/Apicall.js?");

/***/ }),

/***/ "./src/LeaderBoard.js":
/*!****************************!*\
  !*** ./src/LeaderBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Leaderboad)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _Apicall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Apicall.js */ \"./src/Apicall.js\");\n\n\n\nclass  Leaderboad {\n  static refresh = (refreshBtn) => {\n    refreshBtn.addEventListener('click',  async ()  => {\n        const id = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromLocalstorage('gamekey')\n         await _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(id);\n        });\n  }\n\n  static createLeaderBoard = (submitBtn) => {\n        submitBtn.addEventListener('click', async () => {\n        const smsel = document.querySelector('.message')\n        let user = document.getElementById('user').value;\n        let score = document.getElementById('score').value;\n        const id = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromLocalstorage('gamekey')\n        if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isEmpty(user) && !_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isEmpty(score) ) {\n            smsel.style.display='inline'\n            smsel.style.color = 'red';\n            smsel.textContent='Field can\\'t empty'; \n            \n   \n        } else {\n            smsel.style.display ='inline'\n            smsel.style.color = 'green';\n            smsel.textContent = 'Leaderboard score created correctly'\n            await _Apicall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createGame(user, score)\n            await _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(id);\n            smsel.style.display ='none' \n        } \n        _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearInput('user', 'score')\n    })\n  }\n}\n\n//# sourceURL=webpack://work-with-webpack/./src/LeaderBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _LeaderBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeaderBoard.js */ \"./src/LeaderBoard.js\");\n\n\n\n\nconst refreshBtn = document.querySelector('.refresh');\nconst submitBtn = document.querySelector('.submit')\n\n// refresh\n_LeaderBoard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].refresh(refreshBtn);\n\n// create game name\n_LeaderBoard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createLeaderBoard(submitBtn)\n\nwindow.addEventListener('load', async ()=>{\n  const id = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromLocalstorage('gamekey')\n  await _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(id);\n})\n\n\n\n//# sourceURL=webpack://work-with-webpack/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Apicall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Apicall.js */ \"./src/Apicall.js\");\n\n\nclass Utilities{\n    static baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\n    \n    \n    static subUrl = (id=null) => {\n        return { \n                games: 'games/',\n                withgamesId: `games/${id}/scores/`,\n            }\n        }\n        \n    // save to local storage\n    static saveToLocalStorage = (key, value) => {\n        if (key!==null && value !== null) localStorage.setItem(key, value);\n    }\n\n    // get from local storage\n    static getFromLocalstorage = (key) => {\n        \n        return key!==null?localStorage.getItem(key):null;\n\n    }\n    // get request heaader\n    static getHeader= (type, value) =>{\n        let requestHeaders = new Headers();\n        requestHeaders.append(type, value);\n        return requestHeaders;\n    }\n\n    // get request encodede parameter\n    static urlEncodeParms = () =>{\n        const urlencoded = new URLSearchParams();\n        urlencoded.append(\"name\", \"LearderBoard\");\n        return urlencoded;\n\n    }\n\n    static getMethod = (methodName) =>{\n        return methodName;\n    }\n\n    static exception = (message) =>{\n        return message;\n\n    }\n\n    static requestOptions = (methods, headers, urlencodedParams)=>{\n   const requestOps = {\n        method: methods,\n        headers: headers,\n        body: urlencodedParams,\n        redirect: 'follow'\n    }\n    return requestOps\n}\nstatic isEmpty = (eleveValue)=>{\n   if(eleveValue === '') return false\n   return true;\n}\nstatic clearInput =  (...args) =>{\n     const [user, score] = args;\n    document.getElementById(user).value='';\n    document.getElementById(score).value='';\n}\n\nstatic render = async (id) => {\n    if (id === null) {\n        document.querySelector('.loading').style.display ='flex'\n        await _Apicall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getKey();\n        document.querySelector('.loading').style.display ='none'\n      \n      }\n    else {\n        document.querySelector('.loading').style.display ='flex'\n        const ulElement = document.querySelector('.scores');\n        const list = await _Apicall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leaderBoardlist(id)\n         ulElement.innerHTML= '';\n         let liElment = '';\n         if (list.length!== 0){\n            for(let i = 0 ; i <list.length ; i += 1){\n            liElment +=`<li class=\"flex-d-row score\"><span> ${list[i].user}</span> <span>${list[i].score}</span></li>`\n            }\n            ulElement.innerHTML = liElment;\n            document.querySelector('.loading').style.display ='none'\n            document.querySelector('.first-alert').style.display ='none'\n        } else {\n            document.querySelector('.loading').style.display ='none'\n            document.querySelector('.first-alert').style.display ='block'\n            document.querySelector('.first-alert').style.color ='red'\n        }\n      }\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utilities);\n\n//# sourceURL=webpack://work-with-webpack/./src/utils.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;