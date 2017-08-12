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
eval("\n\n/*var\tmy_news\t=\t[\t\t\r\n{\t\t\t\t\r\n\tauthor:\t'Саша\tПечкин',\t\t\t\t\r\n\ttext:\t'В\tчетверг,\tчетвертого\tчисла...'\t\t\r\n},\t\t\r\n{\t\t\t\t\r\n\tauthor:\t'Просто\tВася',\t\t\t\t\r\n\ttext:\t'Считаю,\tчто\t$\tдолжен\tстоить\t35\tрублей!'\t\t\r\n},\t\t\r\n{\t\t\t\t\r\n\tauthor:\t'Гость',\t\t\t\t\r\n\ttext:\t'Бесплатно.\tСкачать.\tЛучший\tсайт\t-\thttp://localhost:3000'\t\t\r\n} \r\n];\r\n\r\n\r\nvar News = React.createClass({\r\n\trender: function(){\r\n\t\tvar data = this.props.data;\r\n\t\tvar newsTemplate;\r\n\r\n\t\tif(data.length > 0){\r\n\t\t\tnewsTemplate  = data.map(function(item, index){\r\n\t\t\t\treturn(\r\n\t\t\t\t\t<div key={index}>\r\n\t\t\t\t\t\t<p className=\"news__author\">{item.author};</p>\r\n\t\t\t\t\t\t<p className=\"news__text\">{item.text};</p>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t);\r\n\t\t\t});\r\n\t\t}else{\r\n\t\t\tnewsTemplate = <p>К сожалению новостей нет</p>\r\n\t\t}\r\n\t\treturn(\r\n\t\t\t<div className=\"news\">\r\n\t\t\t\t{newsTemplate}\r\n\t\t\t\t<strong className={data.length > 0 ? '':'none'}>Всего новостей: {data.length}</strong>\r\n\t\t\t</div>\r\n\t\t);\r\n\t}\r\n});\r\n\r\nvar Comments = React.createClass({\r\n\trender: function(){\r\n\t\treturn(\r\n\t\t\t<div className=\"comments\">\r\n\t\t\t\tНет новостей - комментировать нечего\r\n\t\t\t</div>\r\n\t\t);\r\n\t}\r\n});\r\n\r\nvar App = React.createClass({\r\n\trender: function(){\r\n\t\treturn(\r\n\t\t\t<div className=\"app\">\r\n\t\t\t\tВсем привет, я компонент App!\r\n\t\t\t\t<News data={my_news} />\r\n\t\t\t\t<Comments />\r\n\t\t\t</div>\r\n\t\t);\r\n\t}\r\n});\r\n\r\nReactDOM.render(\r\n\t<App />,\r\n\tdocument.getElementById('root')\r\n\t);*/\nReactDOM.render(React.createElement(\n\t'h1',\n\tnull,\n\t'Hello'\n), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9hcHAuanM/NDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKnZhclx0bXlfbmV3c1x0PVx0W1x0XHRcclxue1x0XHRcdFx0XHJcblx0YXV0aG9yOlx0J9Ch0LDRiNCwXHTQn9C10YfQutC40L0nLFx0XHRcdFx0XHJcblx0dGV4dDpcdCfQklx00YfQtdGC0LLQtdGA0LMsXHTRh9C10YLQstC10YDRgtC+0LPQvlx00YfQuNGB0LvQsC4uLidcdFx0XHJcbn0sXHRcdFxyXG57XHRcdFx0XHRcclxuXHRhdXRob3I6XHQn0J/RgNC+0YHRgtC+XHTQktCw0YHRjycsXHRcdFx0XHRcclxuXHR0ZXh0Olx0J9Ch0YfQuNGC0LDRjixcdNGH0YLQvlx0JFx00LTQvtC70LbQtdC9XHTRgdGC0L7QuNGC0YxcdDM1XHTRgNGD0LHQu9C10LkhJ1x0XHRcclxufSxcdFx0XHJcbntcdFx0XHRcdFxyXG5cdGF1dGhvcjpcdCfQk9C+0YHRgtGMJyxcdFx0XHRcdFxyXG5cdHRleHQ6XHQn0JHQtdGB0L/Qu9Cw0YLQvdC+Llx00KHQutCw0YfQsNGC0YwuXHTQm9GD0YfRiNC40LlcdNGB0LDQudGCXHQtXHRodHRwOi8vbG9jYWxob3N0OjMwMDAnXHRcdFxyXG59IFxyXG5dO1xyXG5cclxuXHJcbnZhciBOZXdzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG5cdFx0dmFyIG5ld3NUZW1wbGF0ZTtcclxuXHJcblx0XHRpZihkYXRhLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRuZXdzVGVtcGxhdGUgID0gZGF0YS5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpe1xyXG5cdFx0XHRcdHJldHVybihcclxuXHRcdFx0XHRcdDxkaXYga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5ld3NfX2F1dGhvclwiPntpdGVtLmF1dGhvcn07PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXdzX190ZXh0XCI+e2l0ZW0udGV4dH07PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRuZXdzVGVtcGxhdGUgPSA8cD7QmiDRgdC+0LbQsNC70LXQvdC40Y4g0L3QvtCy0L7RgdGC0LXQuSDQvdC10YI8L3A+XHJcblx0XHR9XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiPlxyXG5cdFx0XHRcdHtuZXdzVGVtcGxhdGV9XHJcblx0XHRcdFx0PHN0cm9uZyBjbGFzc05hbWU9e2RhdGEubGVuZ3RoID4gMCA/ICcnOidub25lJ30+0JLRgdC10LPQviDQvdC+0LLQvtGB0YLQtdC5OiB7ZGF0YS5sZW5ndGh9PC9zdHJvbmc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxudmFyIENvbW1lbnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxyXG5cdFx0XHRcdNCd0LXRgiDQvdC+0LLQvtGB0YLQtdC5IC0g0LrQvtC80LzQtdC90YLQuNGA0L7QstCw0YLRjCDQvdC10YfQtdCz0L5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7XHJcblxyXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuXHRcdFx0XHTQktGB0LXQvCDQv9GA0LjQstC10YIsINGPINC60L7QvNC/0L7QvdC10L3RgiBBcHAhXHJcblx0XHRcdFx0PE5ld3MgZGF0YT17bXlfbmV3c30gLz5cclxuXHRcdFx0XHQ8Q29tbWVudHMgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PEFwcCAvPixcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcblx0KTsqL1xyXG5SZWFjdERPTS5yZW5kZXIoXHJcblx0PGgxPkhlbGxvPC9oMT4sXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);