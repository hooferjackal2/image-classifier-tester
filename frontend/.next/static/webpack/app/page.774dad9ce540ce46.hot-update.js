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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Corner = ()=>{\n    _s();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const controlledDrag = (e, position)=>{\n        const { x, y } = position;\n        e.setState({\n            controlledPosition: {\n                x,\n                y\n            }\n        });\n    };\n    const handleDrag = (e, position)=>{\n        const { x, y } = undefined.state.deltaPosition;\n        e.setState({\n            deltaPosition: {\n                x: x + ui.deltaX,\n                y: y + ui.deltaY\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n        position: position,\n        onDrag: controlledDrag,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"Hey guys!!! I'm at \",\n                undefined,\n                \" \",\n                position.x,\n                \", \",\n                position.y\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Corner, \"6hYSgMa8L1E4uK0sodL6oqPCEzg=\");\n_c = Corner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Corner);\nvar _c;\n$RefreshReg$(_c, \"Corner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUN4QjtBQUVqQyxNQUFNRSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztRQUFDSSxHQUFHO1FBQUdDLEdBQUc7SUFBQztJQUVwRCxNQUFNQyxpQkFBaUIsQ0FBQ0MsR0FBbUJMO1FBQ3pDLE1BQU0sRUFBQ0UsQ0FBQyxFQUFFQyxDQUFDLEVBQUMsR0FBR0g7UUFDZkssRUFBRUMsUUFBUSxDQUFDO1lBQUNDLG9CQUFvQjtnQkFBQ0w7Z0JBQUdDO1lBQUM7UUFBQztJQUN4QztJQUVBLE1BQU1LLGFBQWEsQ0FBQ0gsR0FBbUJMO1FBQ3JDLE1BQU0sRUFBQ0UsQ0FBQyxFQUFFQyxDQUFDLEVBQUMsR0FBRyxTQUFJLENBQUNNLEtBQUssQ0FBQ0MsYUFBYTtRQUN2Q0wsRUFBRUMsUUFBUSxDQUFDO1lBQ1RJLGVBQWU7Z0JBQ2JSLEdBQUdBLElBQUlTLEdBQUdDLE1BQU07Z0JBQ2hCVCxHQUFHQSxJQUFJUSxHQUFHRSxNQUFNO1lBQ2xCO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDaEIsd0RBQVNBO1FBQUNHLFVBQVVBO1FBQVVjLFFBQVFWO2tCQUNyQyw0RUFBQ1c7O2dCQUFFO2dCQUFvQixTQUFJO2dCQUFDO2dCQUFFZixTQUFTRSxDQUFDO2dCQUFDO2dCQUFHRixTQUFTRyxDQUFDOzs7Ozs7Ozs7Ozs7QUFHNUQ7R0F2Qk1KO0tBQUFBO0FBeUJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeD9jMzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmFnZ2FibGUsIHtEcmFnZ2FibGVDb3JlfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb3JuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe3g6IDAsIHk6IDB9KTtcblxuICBjb25zdCBjb250cm9sbGVkRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgcG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pID0+IHtcbiAgICBjb25zdCB7eCwgeX0gPSBwb3NpdGlvbjtcbiAgICBlLnNldFN0YXRlKHtjb250cm9sbGVkUG9zaXRpb246IHt4LCB5fX0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIHBvc2l0aW9uOiB7ZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyfSkgPT4ge1xuICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMuc3RhdGUuZGVsdGFQb3NpdGlvbjtcbiAgICBlLnNldFN0YXRlKHtcbiAgICAgIGRlbHRhUG9zaXRpb246IHtcbiAgICAgICAgeDogeCArIHVpLmRlbHRhWCxcbiAgICAgICAgeTogeSArIHVpLmRlbHRhWSxcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGUgcG9zaXRpb249e3Bvc2l0aW9ufSBvbkRyYWc9e2NvbnRyb2xsZWREcmFnfT5cbiAgICAgIDxwPkhleSBndXlzISEhIEknbSBhdCB7dGhpc30ge3Bvc2l0aW9uLnh9LCB7cG9zaXRpb24ueX08L3A+XG4gICAgPC9EcmFnZ2FibGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ybmVyOyJdLCJuYW1lcyI6WyJEcmFnZ2FibGUiLCJ1c2VTdGF0ZSIsIkNvcm5lciIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ4IiwieSIsImNvbnRyb2xsZWREcmFnIiwiZSIsInNldFN0YXRlIiwiY29udHJvbGxlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZyIsInN0YXRlIiwiZGVsdGFQb3NpdGlvbiIsInVpIiwiZGVsdGFYIiwiZGVsdGFZIiwib25EcmFnIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Corner.tsx\n"));

/***/ })

});