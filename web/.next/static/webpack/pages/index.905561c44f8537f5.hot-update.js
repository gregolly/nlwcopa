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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_app_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/app-nlw-copa-preview.png */ \"./src/assets/app-nlw-copa-preview.png\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _assets_avatares_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/avatares.png */ \"./src/assets/avatares.png\");\n/* harmony import */ var _assets_icon_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icon-check.svg */ \"./src/assets/icon-check.svg\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(props) {\n    _s();\n    const [poolTitle, setPoolTitle] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    async function createPool(event) {\n        event.preventDefault();\n        try {\n            await _lib_axios__WEBPACK_IMPORTED_MODULE_6__.api.post(\"/pools\", {\n                title: poolTitle\n            });\n        } catch (erro) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-width-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"nlw copa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mt-14 text-white text-5xl font-bold leading-tight\",\n                        children: \"Crie seu pr\\xf3prio bol\\xe3o da copa e compartilhe entre amigos!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_avatares_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"text-gray-100 text-xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-ignite-500\",\n                                        children: [\n                                            \"+\",\n                                            props.userCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 11\n                                    }, this),\n                                    \" pessoas j\\xe1 est\\xe3o usando\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: createPool,\n                        className: \"mt-10 flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100\",\n                                type: \"text\",\n                                required: true,\n                                placeholder: \"Qual nome do seu bol\\xe3o?\",\n                                onChange: (event)=>setPoolTitle(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700\",\n                                type: \"submit\",\n                                children: \"CRIAR MEU BOL\\xc3O\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4 text-sm text-gray-300 leading-relaxed\",\n                        children: \"Ap\\xf3s criar seu bol\\xe3o, voc\\xea receber\\xe1 um c\\xf3digo \\xfanico que poder\\xe1 usar para convidar outras pessoas \\uD83D\\uDE80\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icon_check_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold text-2xl\",\n                                                children: [\n                                                    \"+\",\n                                                    props.poolCount\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Bol\\xf5es criados\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-px h-20 bg-gray-600\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icon_check_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold text-2xl\",\n                                                children: [\n                                                    \"+\",\n                                                    props.guessesCount\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Palpites enviados\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: _assets_app_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"Dois celulares exibindo uma previa da aplicacao do movel do nlw copa\",\n                quality: 90\n            }, void 0, false, {\n                fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 83,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projetos-ignite\\\\nlw\\\\app-copa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 31,\n        columnNumber: 4\n    }, this);\n}\n_s(Home, \"2PkG/mnadCMIAW1vosX9Nle11yE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDZ0M7QUFDdEI7QUFDa0I7QUFDUDtBQUNqQjtBQUNTOztBQVE1QixTQUFTTyxLQUFLQyxLQUFnQixFQUFFOztJQUM3QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFFM0MsZUFBZUssV0FBV0MsS0FBZ0IsRUFBRTtRQUMxQ0EsTUFBTUMsY0FBYztRQUVwQixJQUFJO1lBQ0YsTUFBTVIsZ0RBQVEsQ0FBQyxVQUFVO2dCQUN2QlUsT0FBT047WUFDVDtRQUNGLEVBQUUsT0FBTU8sTUFBTSxDQUVkO0lBQ0Y7SUFFQSxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDOztrQ0FDQyw4REFBQ25CLG1EQUFLQTt3QkFBQ29CLEtBQUtsQix3REFBT0E7d0JBQUVtQixLQUFJOzs7Ozs7a0NBQ3pCLDhEQUFDQzt3QkFBR0osV0FBVTtrQ0FBb0Q7Ozs7OztrQ0FJbEUsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2xCLG1EQUFLQTtnQ0FBQ29CLEtBQUtqQiw0REFBcUJBO2dDQUFFa0IsS0FBSTs7Ozs7OzBDQUN2Qyw4REFBQ0U7Z0NBQU9MLFdBQVU7O2tEQUNoQiw4REFBQ007d0NBQUtOLFdBQVU7OzRDQUFrQjs0Q0FBRVYsTUFBTWlCLFNBQVM7Ozs7Ozs7b0NBQVE7Ozs7Ozs7Ozs7Ozs7a0NBSS9ELDhEQUFDQzt3QkFBS0MsVUFBVWhCO3dCQUFZTyxXQUFVOzswQ0FDcEMsOERBQUNVO2dDQUNDVixXQUFVO2dDQUNWVyxNQUFLO2dDQUNMQyxRQUFRO2dDQUNSQyxhQUFZO2dDQUNaQyxVQUFVcEIsQ0FBQUEsUUFBU0YsYUFBYUUsTUFBTXFCLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzBDQUVwRCw4REFBQ0M7Z0NBQ0NqQixXQUFVO2dDQUNWVyxNQUFLOzBDQUNOOzs7Ozs7Ozs7Ozs7a0NBRUgsOERBQUNPO3dCQUFFbEIsV0FBVTtrQ0FBNkM7Ozs7OztrQ0FJMUQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDbEIsbURBQUtBO3dDQUFDb0IsS0FBS2hCLDhEQUFZQTt3Q0FBRWlCLEtBQUk7Ozs7OztrREFDOUIsOERBQUNKO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ007Z0RBQUtOLFdBQVU7O29EQUFxQjtvREFBRVYsTUFBTTZCLFNBQVM7Ozs7Ozs7MERBQ3RELDhEQUFDYjswREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlWLDhEQUFDUDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUVmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNsQixtREFBS0E7d0NBQUNvQixLQUFLaEIsOERBQVlBO3dDQUFFaUIsS0FBSTs7Ozs7O2tEQUM5Qiw4REFBQ0o7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDTTtnREFBS04sV0FBVTs7b0RBQXFCO29EQUFFVixNQUFNOEIsWUFBWTs7Ozs7OzswREFDekQsOERBQUNkOzBEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWQsOERBQUN4QixtREFBS0E7Z0JBQ0pvQixLQUFLbkIsd0VBQWFBO2dCQUNsQm9CLEtBQUk7Z0JBQ0prQixTQUFTOzs7Ozs7Ozs7Ozs7QUFJZixDQUFDO0dBM0V1QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBhcHBQcmV2aWV3SW1nIGZyb20gJy4uL2Fzc2V0cy9hcHAtbmx3LWNvcGEtcHJldmlldy5wbmcnXG5pbXBvcnQgbG9nb0ltZyBmcm9tICcuLi9hc3NldHMvbG9nby5zdmcnXG5pbXBvcnQgdXNlcnNBdmF0YXJFeGFtcGxlSW1nIGZyb20gJy4uL2Fzc2V0cy9hdmF0YXJlcy5wbmcnXG5pbXBvcnQgaWNvbkNoZWNrSW1nIGZyb20gJy4uL2Fzc2V0cy9pY29uLWNoZWNrLnN2ZydcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2xpYi9heGlvcydcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHBvb2xDb3VudDogbnVtYmVyXG4gIGd1ZXNzZXNDb3VudDogbnVtYmVyXG4gIHVzZXJDb3VudDogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHM6IEhvbWVQcm9wcykge1xuICBjb25zdCBbcG9vbFRpdGxlLCBzZXRQb29sVGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIFxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb29sKGV2ZW50OiBGb3JtRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpLnBvc3QoJy9wb29scycsIHtcbiAgICAgICAgdGl0bGU6IHBvb2xUaXRsZSxcbiAgICAgIH0pXG4gICAgfSBjYXRjaChlcnJvKSB7XG5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgPGRpdiBjbGFzc05hbWU9J21heC13aWR0aC1bMTEyNHB4XSBoLXNjcmVlbiBteC1hdXRvIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTI4IGl0ZW1zLWNlbnRlcic+XG4gICAgPG1haW4+XG4gICAgICA8SW1hZ2Ugc3JjPXtsb2dvSW1nfSBhbHQ9XCJubHcgY29wYVwiIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibXQtMTQgdGV4dC13aGl0ZSB0ZXh0LTV4bCBmb250LWJvbGQgbGVhZGluZy10aWdodFwiPlxuICAgICAgICBDcmllIHNldSBwcsOzcHJpbyBib2zDo28gZGEgY29wYSBlIGNvbXBhcnRpbGhlIGVudHJlIGFtaWdvcyFcbiAgICAgIDwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgPEltYWdlIHNyYz17dXNlcnNBdmF0YXJFeGFtcGxlSW1nfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgdGV4dC14bFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaWduaXRlLTUwMFwiPit7cHJvcHMudXNlckNvdW50fTwvc3Bhbj4gcGVzc29hcyBqw6EgZXN0w6NvIHVzYW5kb1xuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17Y3JlYXRlUG9vbH0gY2xhc3NOYW1lPSdtdC0xMCBmbGV4IGdhcC0yJz5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIGNsYXNzTmFtZT0nZmxleC0xIHB4LTYgcHktNCByb3VuZGVkIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS02MDAgdGV4dC1zbSB0ZXh0LWdyYXktMTAwJ1xuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgcmVxdWlyZWQgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFsIG5vbWUgZG8gc2V1IGJvbMOjbz9cIlxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRQb29sVGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0nYmcteWVsbG93LTUwMCBweC02IHB5LTQgcm91bmRlZCB0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZCB0ZXh0LXNtIHVwcGVyY2FzZSBob3ZlcjpiZy15ZWxsb3ctNzAwJ1xuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgPkNSSUFSIE1FVSBCT0zDg088L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxwIGNsYXNzTmFtZT0nbXQtNCB0ZXh0LXNtIHRleHQtZ3JheS0zMDAgbGVhZGluZy1yZWxheGVkJz5cbiAgICAgICAgQXDDs3MgY3JpYXIgc2V1IGJvbMOjbywgdm9jw6ogcmVjZWJlcsOhIHVtIGPDs2RpZ28gw7puaWNvIHF1ZSBwb2RlcsOhIHVzYXIgcGFyYSBjb252aWRhciBvdXRyYXMgcGVzc29hcyDwn5qAXG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMCBwdC0xMCBib3JkZXItdCBib3JkZXItZ3JheS02MDAgZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ncmF5LTEwMCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNic+XG4gICAgICAgICAgPEltYWdlIHNyYz17aWNvbkNoZWNrSW1nfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtMnhsJz4re3Byb3BzLnBvb2xDb3VudH08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5Cb2zDtWVzIGNyaWFkb3M8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LXB4IGgtMjAgYmctZ3JheS02MDAnIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC02Jz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpY29uQ2hlY2tJbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC0yeGwnPit7cHJvcHMuZ3Vlc3Nlc0NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPlBhbHBpdGVzIGVudmlhZG9zPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cblxuICAgIDxJbWFnZSBcbiAgICAgIHNyYz17YXBwUHJldmlld0ltZ30gXG4gICAgICBhbHQ9XCJEb2lzIGNlbHVsYXJlcyBleGliaW5kbyB1bWEgcHJldmlhIGRhIGFwbGljYWNhbyBkbyBtb3ZlbCBkbyBubHcgY29wYVwiXG4gICAgICBxdWFsaXR5PXs5MH1cbiAgICAvPlxuICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKCkgPT4ge1xuICBjb25zdCBbcG9vbENvdW50UmVzcG9uc2UsIGd1ZXNzQ291bnRSZXNwb25zZSwgdXNlckNvdW50UmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGFwaS5nZXQoJ3Bvb2xzL2NvdW50JyksXG4gICAgYXBpLmdldCgnZ3Vlc3Nlcy9jb3VudCcpLFxuICAgIGFwaS5nZXQoJ3VzZXJzL2NvdW50JylcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb29sQ291bnQ6IHBvb2xDb3VudFJlc3BvbnNlLmRhdGEuY291bnQsXG4gICAgICBndWVzc2VzQ291bnQ6IGd1ZXNzQ291bnRSZXNwb25zZS5kYXRhLmNvdW50LFxuICAgICAgdXNlckNvdW50OiB1c2VyQ291bnRSZXNwb25zZS5kYXRhLmNvdW50XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIkltYWdlIiwiYXBwUHJldmlld0ltZyIsImxvZ29JbWciLCJ1c2Vyc0F2YXRhckV4YW1wbGVJbWciLCJpY29uQ2hlY2tJbWciLCJhcGkiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJwcm9wcyIsInBvb2xUaXRsZSIsInNldFBvb2xUaXRsZSIsImNyZWF0ZVBvb2wiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRpdGxlIiwiZXJybyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzcmMiLCJhbHQiLCJoMSIsInN0cm9uZyIsInNwYW4iLCJ1c2VyQ291bnQiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInAiLCJwb29sQ291bnQiLCJndWVzc2VzQ291bnQiLCJxdWFsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});