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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Corner = ()=>{\n    _s();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        0,\n        0\n    ]);\n    const controlledDrag = (e, position)=>{\n        setPosition(position);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n        position: position,\n        onDrag: undefined.controlledDrag,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"Hey guys!!! I'm at \",\n                position[0],\n                \", \",\n                position[1]\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Corner, \"XRo6stIwDkcbOQl/DCd0QM6L7xk=\");\n_c = Corner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Corner);\nvar _c;\n$RefreshReg$(_c, \"Corner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNQO0FBRWpDLE1BQU1FLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO1FBQUM7UUFBRTtLQUFFO0lBRTlDLE1BQU1JLGlCQUFpQixDQUFDQyxHQUFHSDtRQUN6QkMsWUFBWUQ7SUFDZDtJQUVBLHFCQUNFLDhEQUFDSCx3REFBU0E7UUFBQ0csVUFBVUE7UUFBVUksUUFBUSxTQUFJLENBQUNGLGNBQWM7a0JBQ3hELDRFQUFDRzs7Z0JBQUU7Z0JBQW9CTCxRQUFRLENBQUMsRUFBRTtnQkFBQztnQkFBR0EsUUFBUSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztBQUd2RDtHQVpNRDtLQUFBQTtBQWNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeD9jMzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmFnZ2FibGUgZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ29ybmVyID0gKCkgPT4ge1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKFswLDBdKTtcblxuICBjb25zdCBjb250cm9sbGVkRHJhZyA9IChlLCBwb3NpdGlvbikgPT4ge1xuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZSBwb3NpdGlvbj17cG9zaXRpb259IG9uRHJhZz17dGhpcy5jb250cm9sbGVkRHJhZ30+XG4gICAgICA8cD5IZXkgZ3V5cyEhISBJJ20gYXQge3Bvc2l0aW9uWzBdfSwge3Bvc2l0aW9uWzFdfTwvcD5cbiAgICA8L0RyYWdnYWJsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3JuZXI7Il0sIm5hbWVzIjpbIkRyYWdnYWJsZSIsInVzZVN0YXRlIiwiQ29ybmVyIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImNvbnRyb2xsZWREcmFnIiwiZSIsIm9uRHJhZyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Corner.tsx\n"));

/***/ })

});