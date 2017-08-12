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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _App = __webpack_require__(/*! ./components/App */ 1);\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9hcHAuanM/NDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKnZhclx0bXlfbmV3c1x0PVx0W1x0XHRcclxue1x0XHRcdFx0XHJcblx0YXV0aG9yOlx0J9Ch0LDRiNCwXHTQn9C10YfQutC40L0nLFx0XHRcdFx0XHJcblx0dGV4dDpcdCfQklx00YfQtdGC0LLQtdGA0LMsXHTRh9C10YLQstC10YDRgtC+0LPQvlx00YfQuNGB0LvQsC4uLidcdFx0XHJcbn0sXHRcdFxyXG57XHRcdFx0XHRcclxuXHRhdXRob3I6XHQn0J/RgNC+0YHRgtC+XHTQktCw0YHRjycsXHRcdFx0XHRcclxuXHR0ZXh0Olx0J9Ch0YfQuNGC0LDRjixcdNGH0YLQvlx0JFx00LTQvtC70LbQtdC9XHTRgdGC0L7QuNGC0YxcdDM1XHTRgNGD0LHQu9C10LkhJ1x0XHRcclxufSxcdFx0XHJcbntcdFx0XHRcdFxyXG5cdGF1dGhvcjpcdCfQk9C+0YHRgtGMJyxcdFx0XHRcdFxyXG5cdHRleHQ6XHQn0JHQtdGB0L/Qu9Cw0YLQvdC+Llx00KHQutCw0YfQsNGC0YwuXHTQm9GD0YfRiNC40LlcdNGB0LDQudGCXHQtXHRodHRwOi8vbG9jYWxob3N0OjMwMDAnXHRcdFxyXG59IFxyXG5dO1xyXG5cclxuXHJcbnZhciBOZXdzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG5cdFx0dmFyIG5ld3NUZW1wbGF0ZTtcclxuXHJcblx0XHRpZihkYXRhLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRuZXdzVGVtcGxhdGUgID0gZGF0YS5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpe1xyXG5cdFx0XHRcdHJldHVybihcclxuXHRcdFx0XHRcdDxkaXYga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5ld3NfX2F1dGhvclwiPntpdGVtLmF1dGhvcn07PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXdzX190ZXh0XCI+e2l0ZW0udGV4dH07PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRuZXdzVGVtcGxhdGUgPSA8cD7QmiDRgdC+0LbQsNC70LXQvdC40Y4g0L3QvtCy0L7RgdGC0LXQuSDQvdC10YI8L3A+XHJcblx0XHR9XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiPlxyXG5cdFx0XHRcdHtuZXdzVGVtcGxhdGV9XHJcblx0XHRcdFx0PHN0cm9uZyBjbGFzc05hbWU9e2RhdGEubGVuZ3RoID4gMCA/ICcnOidub25lJ30+0JLRgdC10LPQviDQvdC+0LLQvtGB0YLQtdC5OiB7ZGF0YS5sZW5ndGh9PC9zdHJvbmc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxudmFyIENvbW1lbnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxyXG5cdFx0XHRcdNCd0LXRgiDQvdC+0LLQvtGB0YLQtdC5IC0g0LrQvtC80LzQtdC90YLQuNGA0L7QstCw0YLRjCDQvdC10YfQtdCz0L5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7XHJcblxyXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuXHRcdFx0XHTQktGB0LXQvCDQv9GA0LjQstC10YIsINGPINC60L7QvNC/0L7QvdC10L3RgiBBcHAhXHJcblx0XHRcdFx0PE5ld3MgZGF0YT17bXlfbmV3c30gLz5cclxuXHRcdFx0XHQ8Q29tbWVudHMgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PEFwcCAvPixcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcblx0KTsqL1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBb0VBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./js/components/App.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _News = __webpack_require__(/*! ./News */ 2);\n\nvar _News2 = _interopRequireDefault(_News);\n\nvar _Comments = __webpack_require__(/*! ./Comments */ 3);\n\nvar _Comments2 = _interopRequireDefault(_Comments);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n\t_inherits(App, _React$Component);\n\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\treturn _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'app' },\n\t\t\t\t'Component App! I can show news.',\n\t\t\t\tReact.createElement(_News2.default, null),\n\t\t\t\tReact.createElement(_Comments2.default, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(React.Component);\n\n;\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jb21wb25lbnRzL0FwcC5qcz9lYjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdzIGZyb20gJy4vTmV3cyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuXHRcdFx0XHRDb21wb25lbnQgQXBwISBJIGNhbiBzaG93IG5ld3MuXHJcblx0XHRcdFx0PE5ld3MgLz5cclxuXHRcdFx0XHQ8Q29tbWVudHMgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8QXBwIC8+LFxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvY29tcG9uZW50cy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBTUE7Ozs7QUFUQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./js/components/News.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar News = function (_React$Component) {\n\t_inherits(News, _React$Component);\n\n\tfunction News() {\n\t\t_classCallCheck(this, News);\n\n\t\treturn _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));\n\t}\n\n\t_createClass(News, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"news\" },\n\t\t\t\t\"Unfortunately no news required.\"\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn News;\n}(React.Component);\n\n;\n\nexports.default = News;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jb21wb25lbnRzL05ld3MuanM/ZjZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOZXdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ld3NcIj5cclxuXHRcdFx0XHRVbmZvcnR1bmF0ZWx5IG5vIG5ld3MgcmVxdWlyZWQuXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcdFx0XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvY29tcG9uZW50cy9OZXdzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBUEE7QUFDQTtBQU9BO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** ./js/components/Comments.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Comments = function (_React$Component) {\n\t_inherits(Comments, _React$Component);\n\n\tfunction Comments() {\n\t\t_classCallCheck(this, Comments);\n\n\t\treturn _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));\n\t}\n\n\t_createClass(Comments, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"comments\" },\n\t\t\t\t\"No news - nothing to comment.\"\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Comments;\n}(React.Component);\n\n;\n\nexports.default = Comments;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jb21wb25lbnRzL0NvbW1lbnRzLmpzPzY5MzYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29tbWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNcIj5cclxuXHRcdFx0XHRObyBuZXdzIC0gbm90aGluZyB0byBjb21tZW50LlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2NvbXBvbmVudHMvQ29tbWVudHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUFQQTtBQUNBO0FBT0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);