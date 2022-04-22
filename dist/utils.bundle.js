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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Utilities {\n    static baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\n\n    static subUrl = (id = null) => ({\n      games: 'games/',\n      withgamesId: `games/${id}/scores/`,\n    })\n\n    // save to local storage\n    static saveToLocalStorage = (key, value) => {\n      if (key !== null && value !== null) localStorage.setItem(key, value);\n    }\n\n    // get from local storage\n    static getFromLocalstorage = (key) => (key !== null ? localStorage.getItem(key) : null)\n\n    // get request heaader\n    static getHeader= (type, value) => {\n      const requestHeaders = new Headers();\n      requestHeaders.append(type, value);\n      return requestHeaders;\n    }\n\n    // get request encodede parameter\n    static urlEncodeParms = () => {\n      const urlencoded = new URLSearchParams();\n      urlencoded.append('name', 'LearderBoard');\n      return urlencoded;\n    }\n\n    static getMethod = (methodName) => methodName\n\n    static exception = (message) => message\n\n    static requestOptions = (methods, headers, urlencodedParams) => {\n      const requestOps = {\n        method: methods,\n        headers,\n        body: urlencodedParams,\n        redirect: 'follow',\n      };\n      return requestOps;\n    }\n\nstatic isEmpty = (eleveValue) => {\n  if (eleveValue === '') return false;\n  return true;\n}\n\nstatic clearInput = (...args) => {\n  const [user, score] = args;\n  document.getElementById(user).value = '';\n  document.getElementById(score).value = '';\n}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utilities);\n\n//# sourceURL=webpack://work-with-webpack/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/utils.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;