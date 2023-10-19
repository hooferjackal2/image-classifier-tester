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

/***/ "(app-pages-browser)/./components/BoundingBox.tsx":
/*!************************************!*\
  !*** ./components/BoundingBox.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Corner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Corner */ \"(app-pages-browser)/./components/Corner.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst BoundingBox = (param)=>{\n    let { height, width } = param;\n    _s();\n    const [bounds, setBounds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x1: 0,\n        y1: 0,\n        x2: width,\n        y2: height\n    });\n    const boundsChange = (topleft, x, y)=>{\n        if (topleft) {\n            setBounds({\n                ...bounds,\n                x1: x,\n                y1: y\n            });\n        } else {\n            setBounds({\n                ...bounds,\n                x2: x,\n                y2: y\n            });\n        }\n    };\n    const leftLineStyle = {\n        position: \"absolute\",\n        left: bounds.x1,\n        top: bounds.y1,\n        \"border-left\": \"solid #660000 2px\",\n        transform: \"translate(-2px, 0px)\",\n        height: bounds.y2 - bounds.y1 - 4,\n        width: 10\n    };\n    const topLineStyle = {\n        position: \"absolute\",\n        left: bounds.x1,\n        top: bounds.y1,\n        \"border-top\": \"solid #660000 2px\",\n        transform: \"translate(0px, -2px)\",\n        height: 10,\n        width: bounds.x2 - bounds.x1 - 4\n    };\n    const rightLineStyle = {\n        position: \"absolute\",\n        left: bounds.x2,\n        top: bounds.y1,\n        \"border-left\": \"solid #660000 2px\",\n        transform: \"translate(-4px, 0px)\",\n        height: bounds.y2 - bounds.y1 - 4,\n        width: 10\n    };\n    const bottomLineStyle = {\n        position: \"absolute\",\n        left: bounds.x1,\n        top: bounds.y2,\n        \"border-top\": \"solid #660000 2px\",\n        transform: \"translate(0px, -4px)\",\n        height: 10,\n        width: bounds.x2 - bounds.x1 - 4\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bounding-box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: leftLineStyle\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: topLineStyle\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: rightLineStyle\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: bottomLineStyle\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Corner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                top: 0,\n                left: 0,\n                right: bounds.x2 - 10,\n                bottom: bounds.y2 - 10,\n                topleft: true,\n                posx: bounds.x1,\n                posy: bounds.y1,\n                boundsChange: boundsChange\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Corner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                top: bounds.y1 + 10,\n                left: bounds.x1 + 10,\n                right: width,\n                bottom: height,\n                topleft: false,\n                posx: bounds.x2,\n                posy: bounds.y2,\n                boundsChange: boundsChange\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BoundingBox, \"FRCKkTlFdJSakpry6ULUSOWpbWE=\");\n_c = BoundingBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoundingBox);\nvar _c;\n$RefreshReg$(_c, \"BoundingBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm91bmRpbmdCb3gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDUjtBQU9qQyxNQUFNRSxjQUFjO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQVM7O0lBQzNDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFDTSxJQUFJO1FBQUdDLElBQUk7UUFBR0MsSUFBSUw7UUFBT00sSUFBSVA7SUFBTTtJQUV6RSxNQUFNUSxlQUFlLENBQUNDLFNBQWtCQyxHQUFXQztRQUNqRCxJQUFJRixTQUFTO1lBQ1hOLFVBQVU7Z0JBQUMsR0FBR0QsTUFBTTtnQkFBRUUsSUFBSU07Z0JBQUdMLElBQUlNO1lBQUM7UUFDcEMsT0FBTztZQUNMUixVQUFVO2dCQUFDLEdBQUdELE1BQU07Z0JBQUVJLElBQUlJO2dCQUFHSCxJQUFJSTtZQUFDO1FBQ3BDO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEJDLFVBQVU7UUFDVkMsTUFBTVosT0FBT0UsRUFBRTtRQUNmVyxLQUFLYixPQUFPRyxFQUFFO1FBQ2QsZUFBZTtRQUNmVyxXQUFXO1FBQ1hoQixRQUFRRSxPQUFPSyxFQUFFLEdBQUdMLE9BQU9HLEVBQUUsR0FBRztRQUNoQ0osT0FBTztJQUNUO0lBRUEsTUFBTWdCLGVBQWU7UUFDbkJKLFVBQVU7UUFDVkMsTUFBTVosT0FBT0UsRUFBRTtRQUNmVyxLQUFLYixPQUFPRyxFQUFFO1FBQ2QsY0FBYztRQUNkVyxXQUFXO1FBQ1hoQixRQUFRO1FBQ1JDLE9BQU9DLE9BQU9JLEVBQUUsR0FBR0osT0FBT0UsRUFBRSxHQUFHO0lBQ2pDO0lBRUEsTUFBTWMsaUJBQWlCO1FBQ3JCTCxVQUFVO1FBQ1ZDLE1BQU1aLE9BQU9JLEVBQUU7UUFDZlMsS0FBS2IsT0FBT0csRUFBRTtRQUNkLGVBQWU7UUFDZlcsV0FBVztRQUNYaEIsUUFBUUUsT0FBT0ssRUFBRSxHQUFHTCxPQUFPRyxFQUFFLEdBQUc7UUFDaENKLE9BQU87SUFDVDtJQUVBLE1BQU1rQixrQkFBa0I7UUFDdEJOLFVBQVU7UUFDVkMsTUFBTVosT0FBT0UsRUFBRTtRQUNmVyxLQUFLYixPQUFPSyxFQUFFO1FBQ2QsY0FBYztRQUNkUyxXQUFXO1FBQ1hoQixRQUFRO1FBQ1JDLE9BQU9DLE9BQU9JLEVBQUUsR0FBR0osT0FBT0UsRUFBRSxHQUFHO0lBQ2pDO0lBRUEscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlFLE9BQU9WOzs7Ozs7MEJBQ1osOERBQUNRO2dCQUFJRSxPQUFPTDs7Ozs7OzBCQUNaLDhEQUFDRztnQkFBSUUsT0FBT0o7Ozs7OzswQkFDWiw4REFBQ0U7Z0JBQUlFLE9BQU9IOzs7Ozs7MEJBQ1osOERBQUN0QiwwREFBTUE7Z0JBQ0xrQixLQUFLO2dCQUNMRCxNQUFNO2dCQUNOUyxPQUFPckIsT0FBT0ksRUFBRSxHQUFHO2dCQUNuQmtCLFFBQVF0QixPQUFPSyxFQUFFLEdBQUc7Z0JBQ3BCRSxTQUFTO2dCQUNUZ0IsTUFBTXZCLE9BQU9FLEVBQUU7Z0JBQ2ZzQixNQUFNeEIsT0FBT0csRUFBRTtnQkFDZkcsY0FBY0E7Ozs7OzswQkFDaEIsOERBQUNYLDBEQUFNQTtnQkFDTGtCLEtBQUtiLE9BQU9HLEVBQUUsR0FBRztnQkFDakJTLE1BQU1aLE9BQU9FLEVBQUUsR0FBRztnQkFDbEJtQixPQUFPdEI7Z0JBQ1B1QixRQUFReEI7Z0JBQ1JTLFNBQVM7Z0JBQ1RnQixNQUFNdkIsT0FBT0ksRUFBRTtnQkFDZm9CLE1BQU14QixPQUFPSyxFQUFFO2dCQUNmQyxjQUFjQTs7Ozs7Ozs7Ozs7O0FBR3RCO0dBN0VNVDtLQUFBQTtBQStFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JvdW5kaW5nQm94LnRzeD8zNmQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JuZXIgZnJvbSAnQC9jb21wb25lbnRzL0Nvcm5lcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbn1cblxuY29uc3QgQm91bmRpbmdCb3ggPSAoeyBoZWlnaHQsIHdpZHRoIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtib3VuZHMsIHNldEJvdW5kc10gPSB1c2VTdGF0ZSh7eDE6IDAsIHkxOiAwLCB4Mjogd2lkdGgsIHkyOiBoZWlnaHR9KTtcblxuICBjb25zdCBib3VuZHNDaGFuZ2UgPSAodG9wbGVmdDogYm9vbGVhbiwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICBpZiAodG9wbGVmdCkge1xuICAgICAgc2V0Qm91bmRzKHsuLi5ib3VuZHMsIHgxOiB4LCB5MTogeX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRCb3VuZHMoey4uLmJvdW5kcywgeDI6IHgsIHkyOiB5fSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbGVmdExpbmVTdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIGxlZnQ6IGJvdW5kcy54MSxcbiAgICB0b3A6IGJvdW5kcy55MSxcbiAgICBcImJvcmRlci1sZWZ0XCI6IFwic29saWQgIzY2MDAwMCAycHhcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC0ycHgsIDBweClcIixcbiAgICBoZWlnaHQ6IGJvdW5kcy55MiAtIGJvdW5kcy55MSAtIDQsXG4gICAgd2lkdGg6IDEwXG4gIH0gYXMgY29uc3Q7XG5cbiAgY29uc3QgdG9wTGluZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgbGVmdDogYm91bmRzLngxLFxuICAgIHRvcDogYm91bmRzLnkxLFxuICAgIFwiYm9yZGVyLXRvcFwiOiBcInNvbGlkICM2NjAwMDAgMnB4XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwcHgsIC0ycHgpXCIsXG4gICAgaGVpZ2h0OiAxMCxcbiAgICB3aWR0aDogYm91bmRzLngyIC0gYm91bmRzLngxIC0gNFxuICB9IGFzIGNvbnN0O1xuXG4gIGNvbnN0IHJpZ2h0TGluZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgbGVmdDogYm91bmRzLngyLFxuICAgIHRvcDogYm91bmRzLnkxLFxuICAgIFwiYm9yZGVyLWxlZnRcIjogXCJzb2xpZCAjNjYwMDAwIDJweFwiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTRweCwgMHB4KVwiLFxuICAgIGhlaWdodDogYm91bmRzLnkyIC0gYm91bmRzLnkxIC0gNCxcbiAgICB3aWR0aDogMTBcbiAgfSBhcyBjb25zdDtcblxuICBjb25zdCBib3R0b21MaW5lU3R5bGUgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBsZWZ0OiBib3VuZHMueDEsXG4gICAgdG9wOiBib3VuZHMueTIsXG4gICAgXCJib3JkZXItdG9wXCI6IFwic29saWQgIzY2MDAwMCAycHhcIixcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDBweCwgLTRweClcIixcbiAgICBoZWlnaHQ6IDEwLFxuICAgIHdpZHRoOiBib3VuZHMueDIgLSBib3VuZHMueDEgLSA0XG4gIH0gYXMgY29uc3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5kaW5nLWJveFwiPlxuICAgICAgPGRpdiBzdHlsZT17bGVmdExpbmVTdHlsZX0+PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt0b3BMaW5lU3R5bGV9PjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17cmlnaHRMaW5lU3R5bGV9PjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17Ym90dG9tTGluZVN0eWxlfT48L2Rpdj5cbiAgICAgIDxDb3JuZXIgXG4gICAgICAgIHRvcD17MH1cbiAgICAgICAgbGVmdD17MH1cbiAgICAgICAgcmlnaHQ9e2JvdW5kcy54MiAtIDEwfVxuICAgICAgICBib3R0b209e2JvdW5kcy55MiAtIDEwfVxuICAgICAgICB0b3BsZWZ0PXt0cnVlfVxuICAgICAgICBwb3N4PXtib3VuZHMueDF9XG4gICAgICAgIHBvc3k9e2JvdW5kcy55MX1cbiAgICAgICAgYm91bmRzQ2hhbmdlPXtib3VuZHNDaGFuZ2V9PjwvQ29ybmVyPlxuICAgICAgPENvcm5lclxuICAgICAgICB0b3A9e2JvdW5kcy55MSArIDEwfVxuICAgICAgICBsZWZ0PXtib3VuZHMueDEgKyAxMH1cbiAgICAgICAgcmlnaHQ9e3dpZHRofVxuICAgICAgICBib3R0b209e2hlaWdodH1cbiAgICAgICAgdG9wbGVmdD17ZmFsc2V9XG4gICAgICAgIHBvc3g9e2JvdW5kcy54Mn1cbiAgICAgICAgcG9zeT17Ym91bmRzLnkyfVxuICAgICAgICBib3VuZHNDaGFuZ2U9e2JvdW5kc0NoYW5nZX0+PC9Db3JuZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm91bmRpbmdCb3g7Il0sIm5hbWVzIjpbIkNvcm5lciIsInVzZVN0YXRlIiwiQm91bmRpbmdCb3giLCJoZWlnaHQiLCJ3aWR0aCIsImJvdW5kcyIsInNldEJvdW5kcyIsIngxIiwieTEiLCJ4MiIsInkyIiwiYm91bmRzQ2hhbmdlIiwidG9wbGVmdCIsIngiLCJ5IiwibGVmdExpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsInRvcExpbmVTdHlsZSIsInJpZ2h0TGluZVN0eWxlIiwiYm90dG9tTGluZVN0eWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyaWdodCIsImJvdHRvbSIsInBvc3giLCJwb3N5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BoundingBox.tsx\n"));

/***/ })

});