"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar HomePage = function(param) {\n    var onDivClick = param.onDivClick, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"Mahmoud\",\n        onClick: function(e) {\n            return onDivClick(e);\n        },\n        children: [\n            \"Welcome\",\n            children,\n            \"to Next.js\"\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NEXT 101\\\\101\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, _this);\n};\n_c = HomePage;\nvar Cmp = function(param) {\n    var name = param.name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"CMP component \",\n            name\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NEXT 101\\\\101\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = Cmp;\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), name = ref[0], setName = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomePage, {\n        onDivClick: function(e) {\n            return setName(e.target.classList[0]);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cmp, {\n            name: name\n        }, void 0, false, {\n            fileName: \"E:\\\\NEXT 101\\\\101\\\\my-app\\\\pages\\\\index.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\NEXT 101\\\\101\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(Home, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"Cmp\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFBZ0M7QUFFaEMsSUFBTUMsUUFBUSxHQUFHLGdCQUEyQjtRQUF6QkMsVUFBVSxTQUFWQSxVQUFVLEVBQUdDLFFBQVEsU0FBUkEsUUFBUTtJQUVwQyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsU0FBUztRQUFDQyxPQUFPLEVBQUUsU0FBQ0MsQ0FBQzttQkFBR0wsVUFBVSxDQUFDSyxDQUFDLENBQUM7U0FBQTs7WUFBRSxTQUVsRDtZQUNJSixRQUFRO1lBQ1gsWUFFTDs7Ozs7O2FBQU0sQ0FDVDtBQUNMLENBQUM7QUFYS0YsS0FBQUEsUUFBUTtBQWFkLElBQU1PLEdBQUcsR0FBSSxnQkFBVTtRQUFSQyxJQUFJLFNBQUpBLElBQUk7SUFFZixxQkFDSSw4REFBQ0wsS0FBRzs7WUFBQyxnQkFDWTtZQUFDSyxJQUFJOzs7Ozs7YUFDaEIsQ0FDVDtBQUNMLENBQUM7QUFQS0QsTUFBQUEsR0FBRztBQVNULElBQU1FLElBQUksR0FBSSxXQUFLOztJQUNmLElBQTBCVixHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBN0JTLElBQUksR0FBZVQsR0FBVSxHQUF6QixFQUFHVyxPQUFPLEdBQUtYLEdBQVUsR0FBZjtJQUNyQixxQkFDSSw4REFBQ0MsUUFBUTtRQUFFQyxVQUFVLEVBQUUsU0FBQ0ssQ0FBQzttQkFBSUksT0FBTyxDQUFDSixDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUE7a0JBQ3ZELDRFQUFDTCxHQUFHO1lBQUNDLElBQUksRUFBRUEsSUFBSTs7Ozs7aUJBQUc7Ozs7O2FBQ1gsQ0FDZDtBQUNMLENBQUM7R0FQS0MsSUFBSTtBQUFKQSxNQUFBQSxJQUFJO0FBU1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICh7b25EaXZDbGljayAsIGNoaWxkcmVufSk9PntcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFobW91ZFwiIG9uQ2xpY2s9eyhlKT0+b25EaXZDbGljayhlKX0+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIHRvIE5leHQuanMgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IENtcCAgPSAoe25hbWV9KT0+e1xyXG4gICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIENNUCBjb21wb25lbnQge25hbWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgID0gKCk9PiB7XHJcbiAgICBjb25zdCBbbmFtZSAsIHNldE5hbWVdID0gIHVzZVN0YXRlKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhvbWVQYWdlICBvbkRpdkNsaWNrPXsoZSk9PiBzZXROYW1lKGUudGFyZ2V0LmNsYXNzTGlzdFswXSl9ID4gXHJcbiAgICAgICAgICAgIDxDbXAgbmFtZT17bmFtZX0vPlxyXG4gICAgICAgIDwvSG9tZVBhZ2U+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lUGFnZSIsIm9uRGl2Q2xpY2siLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJlIiwiQ21wIiwibmFtZSIsIkhvbWUiLCJzZXROYW1lIiwidGFyZ2V0IiwiY2xhc3NMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});