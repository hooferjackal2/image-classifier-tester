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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Corner = ()=>{\n    _s();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const controlledDrag = (e, position)=>{\n        const { x, y } = position;\n        setPosition({\n            controlledPosition: {\n                x,\n                y\n            }\n        });\n    };\n    const handleDrag = (e, velocity)=>{\n        const { x, y } = position;\n        setPosition({\n            x: x + velocity.deltaX,\n            y: y + velocity.deltaY\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n        position: position,\n        onDrag: controlledDrag,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"Hey guys!!! I'm at \",\n                undefined,\n                \" \",\n                position.x,\n                \", \",\n                position.y\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Corner, \"6hYSgMa8L1E4uK0sodL6oqPCEzg=\");\n_c = Corner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Corner);\nvar _c;\n$RefreshReg$(_c, \"Corner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUN4QjtBQUVqQyxNQUFNRSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztRQUFDSSxHQUFHO1FBQUdDLEdBQUc7SUFBQztJQUVwRCxNQUFNQyxpQkFBaUIsQ0FBQ0MsR0FBVUw7UUFDaEMsTUFBTSxFQUFDRSxDQUFDLEVBQUVDLENBQUMsRUFBQyxHQUFHSDtRQUNmQyxZQUFZO1lBQUNLLG9CQUFvQjtnQkFBQ0o7Z0JBQUdDO1lBQUM7UUFBQztJQUN6QztJQUVBLE1BQU1JLGFBQWEsQ0FBQ0YsR0FBVUc7UUFDNUIsTUFBTSxFQUFDTixDQUFDLEVBQUVDLENBQUMsRUFBQyxHQUFHSDtRQUNmQyxZQUFZO1lBQ1ZDLEdBQUdBLElBQUlNLFNBQVNDLE1BQU07WUFDdEJOLEdBQUdBLElBQUlLLFNBQVNFLE1BQU07UUFDeEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYix3REFBU0E7UUFBQ0csVUFBVUE7UUFBVVcsUUFBUVA7a0JBQ3JDLDRFQUFDUTs7Z0JBQUU7Z0JBQW9CLFNBQUk7Z0JBQUM7Z0JBQUVaLFNBQVNFLENBQUM7Z0JBQUM7Z0JBQUdGLFNBQVNHLENBQUM7Ozs7Ozs7Ozs7OztBQUc1RDtHQXJCTUo7S0FBQUE7QUF1Qk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JuZXIudHN4P2MzNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYWdnYWJsZSwge0RyYWdnYWJsZUNvcmV9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvcm5lciA9ICgpID0+IHtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7eDogMCwgeTogMH0pO1xuXG4gIGNvbnN0IGNvbnRyb2xsZWREcmFnID0gKGU6IEV2ZW50LCBwb3NpdGlvbjoge3g6IG51bWJlciwgeTogbnVtYmVyfSkgPT4ge1xuICAgIGNvbnN0IHt4LCB5fSA9IHBvc2l0aW9uO1xuICAgIHNldFBvc2l0aW9uKHtjb250cm9sbGVkUG9zaXRpb246IHt4LCB5fX0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRXZlbnQsIHZlbG9jaXR5OiB7ZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyfSkgPT4ge1xuICAgIGNvbnN0IHt4LCB5fSA9IHBvc2l0aW9uO1xuICAgIHNldFBvc2l0aW9uKHtcbiAgICAgIHg6IHggKyB2ZWxvY2l0eS5kZWx0YVgsXG4gICAgICB5OiB5ICsgdmVsb2NpdHkuZGVsdGFZLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZSBwb3NpdGlvbj17cG9zaXRpb259IG9uRHJhZz17Y29udHJvbGxlZERyYWd9PlxuICAgICAgPHA+SGV5IGd1eXMhISEgSSdtIGF0IHt0aGlzfSB7cG9zaXRpb24ueH0sIHtwb3NpdGlvbi55fTwvcD5cbiAgICA8L0RyYWdnYWJsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3JuZXI7Il0sIm5hbWVzIjpbIkRyYWdnYWJsZSIsInVzZVN0YXRlIiwiQ29ybmVyIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiY29udHJvbGxlZERyYWciLCJlIiwiY29udHJvbGxlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZyIsInZlbG9jaXR5IiwiZGVsdGFYIiwiZGVsdGFZIiwib25EcmFnIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Corner.tsx\n"));

/***/ })

});