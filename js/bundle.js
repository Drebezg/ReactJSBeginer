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
eval("\n\nvar _App = __webpack_require__(/*! ./components/App */ 1);\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9hcHAuanM/NDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./js/components/App.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _News = __webpack_require__(/*! ./News */ 2);\n\nvar _News2 = _interopRequireDefault(_News);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar my_news = [{\n\tid: 0,\n\tauthor: 'Саша Печкин',\n\ttext: 'В\tчетверг,\tчетвертого\tчисла...'\n}, {\n\tid: 1,\n\tauthor: 'Просто\tВася',\n\ttext: 'Считаю, что\t$ должен стоить 35 рублей!'\n}, {\n\tid: 2,\n\tauthor: 'Гость',\n\ttext: 'Бесплатно.\tСкачать. Лучший\tсайт - http://localhost:3000'\n}];\n\nvar App = function (_React$Component) {\n\t_inherits(App, _React$Component);\n\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\treturn _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'app' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\t'News'\n\t\t\t\t),\n\t\t\t\tReact.createElement(_News2.default, { data: my_news })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(React.Component);\n\n;\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jb21wb25lbnRzL0FwcC5qcz9lYjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdzIGZyb20gJy4vTmV3cyc7XHJcblxyXG5jb25zdCBteV9uZXdzID0gW1x0XHRcclxue1xyXG5cdGlkOiAwLFx0XHRcdFx0XHJcblx0YXV0aG9yOlx0J9Ch0LDRiNCwINCf0LXRh9C60LjQvScsXHRcdFx0XHRcclxuXHR0ZXh0Olx0J9CSXHTRh9C10YLQstC10YDQsyxcdNGH0LXRgtCy0LXRgNGC0L7Qs9C+XHTRh9C40YHQu9CwLi4uJ1x0XHRcclxufSxcdFx0XHJcbntcclxuXHRpZDogMSxcdFx0XHRcdFxyXG5cdGF1dGhvcjpcdCfQn9GA0L7RgdGC0L5cdNCS0LDRgdGPJyxcdFx0XHRcdFxyXG5cdHRleHQ6XHQn0KHRh9C40YLQsNGOLCDRh9GC0L5cdCQg0LTQvtC70LbQtdC9INGB0YLQvtC40YLRjCAzNSDRgNGD0LHQu9C10LkhJ1x0XHRcclxufSxcdFx0XHJcbntcclxuXHRpZDogMixcdFx0XHRcdFxyXG5cdGF1dGhvcjpcdCfQk9C+0YHRgtGMJyxcdFx0XHRcdFxyXG5cdHRleHQ6XHQn0JHQtdGB0L/Qu9Cw0YLQvdC+Llx00KHQutCw0YfQsNGC0YwuINCb0YPRh9GI0LjQuVx00YHQsNC50YIgLSBodHRwOi8vbG9jYWxob3N0OjMwMDAnXHRcdFxyXG59IFxyXG5dO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG5cdFx0XHRcdDxoMz5OZXdzPC9oMz5cclxuXHRcdFx0XHQ8TmV3cyBkYXRhPXtteV9uZXdzfS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PEFwcCAvPixcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2NvbXBvbmVudHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTs7OztBQVJBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./js/components/News.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Article = __webpack_require__(/*! ./Article */ 4);\n\nvar _Article2 = _interopRequireDefault(_Article);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar News = function (_React$Component) {\n\t_inherits(News, _React$Component);\n\n\tfunction News() {\n\t\t_classCallCheck(this, News);\n\n\t\treturn _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));\n\t}\n\n\t_createClass(News, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.data;\n\t\t\tvar newsTemplate = void 0;\n\n\t\t\tif (data.length > 0) {\n\t\t\t\tnewsTemplate = data.map(function (item, index) {\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ key: item.id },\n\t\t\t\t\t\tReact.createElement(_Article2.default, { data: item })\n\t\t\t\t\t);\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tnewsTemplate = React.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Unfortunately no new required.'\n\t\t\t\t);\n\t\t\t}\n\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'news' },\n\t\t\t\tnewsTemplate,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'strong',\n\t\t\t\t\t{ className: 'news_count ' + (data.length > 0 ? '' : 'none') },\n\t\t\t\t\t'Total news:',\n\t\t\t\t\tdata.length\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn News;\n}(React.Component);\n\n;\n\nexports.default = News;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jb21wb25lbnRzL05ld3MuanM/ZjZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZSBmcm9tICcuL0FydGljbGUnO1xyXG5cclxuY2xhc3MgTmV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHJcblx0XHRsZXQgbmV3c1RlbXBsYXRlO1xyXG5cclxuXHRcdGlmKGRhdGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRuZXdzVGVtcGxhdGUgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0uaWR9PlxyXG5cdFx0XHRcdFx0XHQ8QXJ0aWNsZSBkYXRhPXtpdGVtfSAvPlx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5ld3NUZW1wbGF0ZSA9IDxwPlVuZm9ydHVuYXRlbHkgbm8gbmV3IHJlcXVpcmVkLjwvcD5cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXdzXCI+XHJcblx0XHRcdFx0e25ld3NUZW1wbGF0ZX1cclxuXHRcdFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT17J25ld3NfY291bnQgJyArIChkYXRhLmxlbmd0aCA+IDAgPyAnJyA6ICdub25lJykgfT5Ub3RhbCBuZXdzOntkYXRhLmxlbmd0aH08L3N0cm9uZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1x0XHRcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9jb21wb25lbnRzL05ld3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBOzs7O0FBdkJBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */,
/* 4 */
/*!**********************************!*\
  !*** ./js/components/Article.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Article = function (_React$Component) {\n\t_inherits(Article, _React$Component);\n\n\tfunction Article() {\n\t\t_classCallCheck(this, Article);\n\n\t\treturn _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));\n\t}\n\n\t_createClass(Article, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar author = this.props.data.author,\n\t\t\t    text = this.props.data.text;\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"article\" },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"p\",\n\t\t\t\t\t{ className: \"news_author\" },\n\t\t\t\t\tauthor\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"p\",\n\t\t\t\t\t{ className: \"news_text\" },\n\t\t\t\t\ttext\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Article;\n}(React.Component);\n\nexports.default = Article;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jb21wb25lbnRzL0FydGljbGUuanM/N2Y0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcnRpY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgYXV0aG9yID0gdGhpcy5wcm9wcy5kYXRhLmF1dGhvcixcclxuXHRcdFx0dGV4dCA9IHRoaXMucHJvcHMuZGF0YS50ZXh0O1xyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV3c19hdXRob3JcIj57YXV0aG9yfTwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXdzX3RleHRcIj57dGV4dH08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2NvbXBvbmVudHMvQXJ0aWNsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTs7OztBQVhBO0FBQ0E7QUFhQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);