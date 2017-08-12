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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _News = __webpack_require__(/*! ./News */ 2);\n\nvar _News2 = _interopRequireDefault(_News);\n\nvar _Comments = __webpack_require__(/*! ./Comments */ 3);\n\nvar _Comments2 = _interopRequireDefault(_Comments);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar my_news = [{\n\tid: 0,\n\tauthor: 'Саша Печкин',\n\ttext: 'В\tчетверг,\tчетвертого\tчисла...'\n}, {\n\tid: 1,\n\tauthor: 'Просто\tВася',\n\ttext: 'Считаю, что\t$ должен стоить 35 рублей!'\n}, {\n\tid: 2,\n\tauthor: 'Гость',\n\ttext: 'Бесплатно.\tСкачать. Лучший\tсайт - http://localhost:3000'\n}];\n\nvar App = function (_React$Component) {\n\t_inherits(App, _React$Component);\n\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\treturn _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'app' },\n\t\t\t\t'Component App! I can show news.',\n\t\t\t\tReact.createElement(_News2.default, { data: my_news }),\n\t\t\t\tReact.createElement(_Comments2.default, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(React.Component);\n\n;\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jb21wb25lbnRzL0FwcC5qcz9lYjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdzIGZyb20gJy4vTmV3cyc7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuXHJcbmNvbnN0IG15X25ld3MgPSBbXHRcdFxyXG57XHJcblx0aWQ6IDAsXHRcdFx0XHRcclxuXHRhdXRob3I6XHQn0KHQsNGI0LAg0J/QtdGH0LrQuNC9JyxcdFx0XHRcdFxyXG5cdHRleHQ6XHQn0JJcdNGH0LXRgtCy0LXRgNCzLFx00YfQtdGC0LLQtdGA0YLQvtCz0L5cdNGH0LjRgdC70LAuLi4nXHRcdFxyXG59LFx0XHRcclxue1xyXG5cdGlkOiAxLFx0XHRcdFx0XHJcblx0YXV0aG9yOlx0J9Cf0YDQvtGB0YLQvlx00JLQsNGB0Y8nLFx0XHRcdFx0XHJcblx0dGV4dDpcdCfQodGH0LjRgtCw0Y4sINGH0YLQvlx0JCDQtNC+0LvQttC10L0g0YHRgtC+0LjRgtGMIDM1INGA0YPQsdC70LXQuSEnXHRcdFxyXG59LFx0XHRcclxue1xyXG5cdGlkOiAyLFx0XHRcdFx0XHJcblx0YXV0aG9yOlx0J9CT0L7RgdGC0YwnLFx0XHRcdFx0XHJcblx0dGV4dDpcdCfQkdC10YHQv9C70LDRgtC90L4uXHTQodC60LDRh9Cw0YLRjC4g0JvRg9GH0YjQuNC5XHTRgdCw0LnRgiAtIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcdFx0XHJcbn0gXHJcbl07XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcblx0XHRcdFx0Q29tcG9uZW50IEFwcCEgSSBjYW4gc2hvdyBuZXdzLlxyXG5cdFx0XHRcdDxOZXdzIGRhdGE9e215X25ld3N9Lz5cclxuXHRcdFx0XHQ8Q29tbWVudHMgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8QXBwIC8+LFxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvY29tcG9uZW50cy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBVEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./js/components/News.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar News = function (_React$Component) {\n\t_inherits(News, _React$Component);\n\n\tfunction News() {\n\t\t_classCallCheck(this, News);\n\n\t\treturn _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));\n\t}\n\n\t_createClass(News, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.data;\n\t\t\tvar newsTemplate = data.map(function (item, index) {\n\t\t\t\treturn React.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ key: item.id },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t{ className: \"news_author\" },\n\t\t\t\t\t\titem.author,\n\t\t\t\t\t\t\":\"\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t{ className: \"news_text\" },\n\t\t\t\t\t\titem.text,\n\t\t\t\t\t\t\":\"\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t});\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"news\" },\n\t\t\t\tnewsTemplate,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"strong\",\n\t\t\t\t\t{ className: data.length > 0 ? '' : 'none' },\n\t\t\t\t\t\"\\u0412\\u0441\\u0435\\u0433\\u043E \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0435\\u0439:\",\n\t\t\t\t\tdata.length\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn News;\n}(React.Component);\n\n;\n\nexports.default = News;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9jb21wb25lbnRzL05ld3MuanM/ZjZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOZXdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcclxuXHRcdGxldCBuZXdzVGVtcGxhdGUgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2IGtleT17aXRlbS5pZH0+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXdzX2F1dGhvclwiPntpdGVtLmF1dGhvcn06PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV3c190ZXh0XCI+e2l0ZW0udGV4dH06PC9wPlx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXdzXCI+XHJcblx0XHRcdFx0e25ld3NUZW1wbGF0ZX1cclxuXHRcdFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT17ZGF0YS5sZW5ndGggPiAwID8gJycgOiAnbm9uZSd9PtCS0YHQtdCz0L4g0L3QvtCy0L7RgdGC0LXQuTp7ZGF0YS5sZW5ndGh9PC9zdHJvbmc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHRcdFxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGpzL2NvbXBvbmVudHMvTmV3cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTUE7Ozs7QUFuQkE7QUFDQTtBQW1CQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

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