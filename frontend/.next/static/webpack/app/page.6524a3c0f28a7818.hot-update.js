"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Corner.tsx":
/*!*******************************!*\
  !*** ./components/Corner.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Corner = (param)=>{\n    let { top, left, right, bottom, topleft, posx, posy, boundsChange } = param;\n    _s();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: left,\n        y: top\n    });\n    const controlledDrag = (e, position)=>{\n        const { x, y } = position;\n        setPosition({\n            x,\n            y\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n        position: position,\n        onDrag: controlledDrag,\n        bounds: {\n            top: top,\n            left: left,\n            right: right,\n            bottom: bottom\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"corner\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"corner-pip\"\n                }, void 0, false, {\n                    fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Hey guys!!! I'm at \",\n                        undefined,\n                        \" \",\n                        position.x,\n                        \", \",\n                        position.y\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Corner, \"PJda7Komt1g3Wo70PHqLbMcfh0I=\");\n_c = Corner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Corner);\nvar _c;\n$RefreshReg$(_c, \"Corner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUN6QjtBQWFqQyxNQUFNRSxTQUFTO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQVM7O0lBQ3BGLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUFDWSxHQUFHVDtRQUFNVSxHQUFHWDtJQUFHO0lBRXpELE1BQU1ZLGlCQUFpQixDQUFDQyxHQUFtQkw7UUFDekMsTUFBTSxFQUFDRSxDQUFDLEVBQUVDLENBQUMsRUFBQyxHQUFHSDtRQUNmQyxZQUFZO1lBQUNDO1lBQUdDO1FBQUM7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ2Qsd0RBQVNBO1FBQ1JXLFVBQVVBO1FBQ1ZNLFFBQVFGO1FBQ1JHLFFBQVE7WUFBQ2YsS0FBS0E7WUFBS0MsTUFBTUE7WUFBTUMsT0FBT0E7WUFBT0MsUUFBUUE7UUFBTTtrQkFFM0QsNEVBQUNhO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDQzs7d0JBQUU7d0JBQW9CLFNBQUk7d0JBQUM7d0JBQUVWLFNBQVNFLENBQUM7d0JBQUM7d0JBQUdGLFNBQVNHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RDtHQXBCTVo7S0FBQUE7QUFzQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JuZXIudHN4P2MzNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYWdnYWJsZSwge0RyYWdnYWJsZUV2ZW50fSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgdG9wbGVmdDogYm9vbGVhbjtcbiAgcG9zeDogbnVtYmVyO1xuICBwb3N5OiBudW1iZXI7XG4gIGJvdW5kc0NoYW5nZTogKHRvcGxlZnQ6IGJvb2xlYW4sIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDb3JuZXIgPSAoeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcGxlZnQsIHBvc3gsIHBvc3ksIGJvdW5kc0NoYW5nZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHt4OiBsZWZ0LCB5OiB0b3B9KTtcblxuICBjb25zdCBjb250cm9sbGVkRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgcG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pID0+IHtcbiAgICBjb25zdCB7eCwgeX0gPSBwb3NpdGlvbjtcbiAgICBzZXRQb3NpdGlvbih7eCwgeX0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZSBcbiAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgIG9uRHJhZz17Y29udHJvbGxlZERyYWd9XG4gICAgICBib3VuZHM9e3t0b3A6IHRvcCwgbGVmdDogbGVmdCwgcmlnaHQ6IHJpZ2h0LCBib3R0b206IGJvdHRvbX19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3JuZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3JuZXItcGlwXCI+PC9kaXY+XG4gICAgICAgIDxwPkhleSBndXlzISEhIEknbSBhdCB7dGhpc30ge3Bvc2l0aW9uLnh9LCB7cG9zaXRpb24ueX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0RyYWdnYWJsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3JuZXI7Il0sIm5hbWVzIjpbIkRyYWdnYWJsZSIsInVzZVN0YXRlIiwiQ29ybmVyIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wbGVmdCIsInBvc3giLCJwb3N5IiwiYm91bmRzQ2hhbmdlIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiY29udHJvbGxlZERyYWciLCJlIiwib25EcmFnIiwiYm91bmRzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Corner.tsx\n"));

/***/ })

});