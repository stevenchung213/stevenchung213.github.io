/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {//ssr imports\n// import express from 'express';\n// import React from 'react';\n// import { renderToString } from 'react-dom/server';\n// import Main from '../src/components/Main.jsx';\n// import Html from '../src/html.jsx';\n//non-ssr start\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\"); //non-ssr end\n\n\nvar port = 10000;\nvar app = express(); //non-ssr start\n\napp.use(express.static(path.resolve(__dirname + '/../temp')));\napp.get('/', function (req, res) {}); //non-ssr end\n//server-side render route\n// app.get('/', (req, res) => {\n//\n//   const main = renderToString(<Main/>);\n//   const title = \"Hello~\";\n//\n//   res.send(Html(main, title));\n// });\n\napp.listen(port, function () {\n  console.log(\"server listening on port \".concat(port));\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanM/MGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3NzciBpbXBvcnRzXHJcbi8vIGltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG4vLyBpbXBvcnQgTWFpbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeCc7XHJcbi8vIGltcG9ydCBIdG1sIGZyb20gJy4uL3NyYy9odG1sLmpzeCc7XHJcblxyXG4vL25vbi1zc3Igc3RhcnRcclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuLy9ub24tc3NyIGVuZFxyXG5cclxuY29uc3QgcG9ydCA9IDEwMDAwO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG4vL25vbi1zc3Igc3RhcnRcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lICsgJy8uLi90ZW1wJykpKVxyXG5cclxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xyXG5cclxufSlcclxuLy9ub24tc3NyIGVuZFxyXG5cclxuLy9zZXJ2ZXItc2lkZSByZW5kZXIgcm91dGVcclxuLy8gYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xyXG4vL1xyXG4vLyAgIGNvbnN0IG1haW4gPSByZW5kZXJUb1N0cmluZyg8TWFpbi8+KTtcclxuLy8gICBjb25zdCB0aXRsZSA9IFwiSGVsbG9+XCI7XHJcbi8vXHJcbi8vICAgcmVzLnNlbmQoSHRtbChtYWluLCB0aXRsZSkpO1xyXG4vLyB9KTtcclxuXHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/index.js\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });