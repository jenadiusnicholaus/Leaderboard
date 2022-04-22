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

/***/ "./src/Apicall.js":
/*!************************!*\
  !*** ./src/Apicall.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nclass API {\n    static getKey = async () => {\n      const headers = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getHeader('Content-Type', 'application/x-www-form-urlencoded');\n      const urlencodedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].urlEncodeParms();\n      const method = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMethod('POST');\n      const requestOptions = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requestOptions(method, headers, urlencodedParams);\n      const url = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseUrl + _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subUrl().games;\n      try {\n        const response = await fetch(url, requestOptions);\n        if (response.ok) {\n          const decodedResponse = await response.json();\n          const gameKey = decodedResponse.result.split(' ')[3];\n          _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveToLocalStorage('gamekey', gameKey);\n          return gameKey;\n        }\n        throw new Error(`HTTP error: ${response.status}`);\n      } catch (e) {\n        return _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exception(e);\n      }\n    }\n\n    //  create  game\n    static createGame = async (user, score) => {\n      const headers = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getHeader('Content-Type', 'application/x-www-form-urlencoded');\n      const method = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMethod('POST');\n      // Todo\n      const urlencoded = new URLSearchParams();\n      urlencoded.append('user', user);\n      urlencoded.append('score', score);\n\n      const requestOptions = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].requestOptions(method, headers, urlencoded);\n      const id = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromLocalstorage('gamekey');\n      const url = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseUrl + _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subUrl(id).withgamesId;\n      try {\n        const response = await fetch(url, requestOptions);\n        if (response.ok) {\n          const decodedResponse = await response.json();\n          return decodedResponse.result;\n        }\n        throw new Error(`HTTP error: ${response.status}`);\n      } catch (e) {\n        return _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exception(e);\n      }\n    }\n\n        // list of beaderBoard\n        static leaderBoardlist = async (id) => {\n          const requestOptions = {\n            method: _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMethod('GET'),\n          };\n          const url = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseUrl + _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subUrl(id).withgamesId;\n          try {\n            const response = await fetch(url, requestOptions);\n            if (response.ok) {\n              const decodedResponse = await response.json();\n              return decodedResponse.result;\n            }\n            throw new Error(`HTTP error: ${response.status}`);\n          } catch (e) {\n            return _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exception(e);\n          }\n        }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);\n\n\n//# sourceURL=webpack://work-with-webpack/./src/Apicall.js?");

/***/ }),

/***/ "./src/LeaderBoard.js":
/*!****************************!*\
  !*** ./src/LeaderBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Leaderboad)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _Apicall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Apicall.js */ \"./src/Apicall.js\");\n\n\n\nclass Leaderboad {\n  static render = async (id) => {\n    if (id === null) {\n      document.querySelector('.loading').style.display = 'flex';\n      await _Apicall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getKey();\n      document.querySelector('.loading').style.display = 'none';\n    } else {\n      document.querySelector('.loading').style.display = 'flex';\n      const ulElement = document.querySelector('.scores');\n      const list = await _Apicall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].leaderBoardlist(id);\n      ulElement.innerHTML = '';\n      let liElment = '';\n      if (list.length !== 0) {\n        for (let i = 0; i < list.length; i += 1) {\n          liElment += `<li class=\"flex-d-row score\"><span> ${list[i].user}</span> <span>${list[i].score}</span></li>`;\n        }\n        ulElement.innerHTML = liElment;\n        document.querySelector('.loading').style.display = 'none';\n        document.querySelector('.first-alert').style.display = 'none';\n      } else {\n        document.querySelector('.loading').style.display = 'none';\n        document.querySelector('.first-alert').style.display = 'block';\n        document.querySelector('.first-alert').style.color = 'red';\n      }\n    }\n  }\n\n  static refresh(refreshBtn) {\n    refreshBtn.addEventListener('click', async () => {\n      const id = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromLocalstorage('gamekey');\n      await this.render(id);\n    });\n  }\n\n  static createLeaderBoard(submitBtn) {\n    submitBtn.addEventListener('click', async () => {\n      const smsel = document.querySelector('.message');\n      const user = document.getElementById('user').value;\n      const score = document.getElementById('score').value;\n      const id = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromLocalstorage('gamekey');\n      if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isEmpty(user) && !_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isEmpty(score)) {\n        smsel.style.display = 'inline';\n        smsel.style.color = 'red';\n        smsel.textContent = 'Fields can\\'t empty';\n      } else {\n        smsel.style.display = 'inline';\n        smsel.style.color = 'green';\n        smsel.textContent = 'Leaderboard score created correctly';\n        await _Apicall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createGame(user, score);\n        await this.render(id);\n        smsel.style.display = 'none';\n      }\n      _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearInput('user', 'score');\n    });\n  }\n}\n\n//# sourceURL=webpack://work-with-webpack/./src/LeaderBoard.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Utilities {\n    static baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\n\n    static subUrl = (id = null) => ({\n      games: 'games/',\n      withgamesId: `games/${id}/scores/`,\n    })\n\n    // save to local storage\n    static saveToLocalStorage = (key, value) => {\n      if (key !== null && value !== null) localStorage.setItem(key, value);\n    }\n\n    // get from local storage\n    static getFromLocalstorage = (key) => (key !== null ? localStorage.getItem(key) : null)\n\n    // get request heaader\n    static getHeader= (type, value) => {\n      const requestHeaders = new Headers();\n      requestHeaders.append(type, value);\n      return requestHeaders;\n    }\n\n    // get request encodede parameter\n    static urlEncodeParms = () => {\n      const urlencoded = new URLSearchParams();\n      urlencoded.append('name', 'LearderBoard');\n      return urlencoded;\n    }\n\n    static getMethod = (methodName) => methodName\n\n    static exception = (message) => message\n\n    static requestOptions = (methods, headers, urlencodedParams) => {\n      const requestOps = {\n        method: methods,\n        headers,\n        body: urlencodedParams,\n        redirect: 'follow',\n      };\n      return requestOps;\n    }\n\nstatic isEmpty = (eleveValue) => {\n  if (eleveValue === '') return false;\n  return true;\n}\n\nstatic clearInput = (...args) => {\n  const [user, score] = args;\n  document.getElementById(user).value = '';\n  document.getElementById(score).value = '';\n}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utilities);\n\n//# sourceURL=webpack://work-with-webpack/./src/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/LeaderBoard.js");
/******/ 	
/******/ })()
;