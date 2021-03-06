webpackJsonp(["discussion.module"],{

/***/ "./src/app/discussions/discussion.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisscussionsModuleNgFactory", function() { return DisscussionsModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__discussion_module__ = __webpack_require__("./src/app/discussions/discussion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discussions_component_ngfactory__ = __webpack_require__("./src/app/discussions/discussions.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_common_shared__ = __webpack_require__("./node_modules/primeng/components/common/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_common_shared___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_components_common_shared__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_dropdown_dropdown__ = __webpack_require__("./node_modules/primeng/components/dropdown/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_dropdown_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_components_dropdown_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_paginator_paginator__ = __webpack_require__("./node_modules/primeng/components/paginator/paginator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_paginator_paginator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_components_paginator_paginator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_table_table__ = __webpack_require__("./node_modules/primeng/components/table/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_table_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_components_table_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__discussions_component__ = __webpack_require__("./src/app/discussions/discussions.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var DisscussionsModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__discussion_module__["a" /* DisscussionsModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__discussions_component_ngfactory__["a" /* DiscussionsComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgLocalization"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgLocaleLocalization"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_3__angular_common__["ɵa"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* BREAKPOINTS */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["c" /* DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["b" /* BreakPointRegistry */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["b" /* BreakPointRegistry */], [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* BREAKPOINTS */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["j" /* MatchMedia */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["j" /* MatchMedia */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["k" /* MediaMonitor */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["i" /* MEDIA_MONITOR_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["k" /* MediaMonitor */]], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["b" /* BreakPointRegistry */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["j" /* MatchMedia */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* ObservableMedia */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["m" /* OBSERVABLE_MEDIA_PROVIDER_FACTORY */], [[3, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["n" /* ObservableMedia */]], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["j" /* MatchMedia */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["b" /* BreakPointRegistry */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ɵi"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ɵi"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_6__angular_router__["n" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["n" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_6__angular_router__["s" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_6__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["l" /* MediaQueriesModule */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["l" /* MediaQueriesModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["e" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["e" /* FlexLayoutModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_7_primeng_components_common_shared__["SharedModule"], __WEBPACK_IMPORTED_MODULE_7_primeng_components_common_shared__["SharedModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_8_primeng_components_dropdown_dropdown__["DropdownModule"], __WEBPACK_IMPORTED_MODULE_8_primeng_components_dropdown_dropdown__["DropdownModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ɵba"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ɵba"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9_primeng_components_paginator_paginator__["PaginatorModule"], __WEBPACK_IMPORTED_MODULE_9_primeng_components_paginator_paginator__["PaginatorModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_10_primeng_components_table_table__["TableModule"], __WEBPACK_IMPORTED_MODULE_10_primeng_components_table_table__["TableModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__discussion_module__["a" /* DisscussionsModule */], __WEBPACK_IMPORTED_MODULE_1__discussion_module__["a" /* DisscussionsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_6__angular_router__["i" /* ROUTES */], function () { return [[{ path: "all", component: __WEBPACK_IMPORTED_MODULE_11__discussions_component__["a" /* DiscussionsComponent */] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/discussions/discussion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisscussionsModule; });
var DisscussionsModule = (function () {
    function DisscussionsModule() {
    }
    return DisscussionsModule;
}());



/***/ }),

/***/ "./src/app/discussions/discussions.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_DiscussionsComponent */
/* unused harmony export View_DiscussionsComponent_0 */
/* unused harmony export View_DiscussionsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__discussions_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/discussions/discussions.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discussions_component__ = __webpack_require__("./src/app/discussions/discussions.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_DiscussionsComponent = [__WEBPACK_IMPORTED_MODULE_0__discussions_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_DiscussionsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0, styles: styles_DiscussionsComponent, data: {} });

function View_DiscussionsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  discussions works!\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n"]))], null, null); }
function View_DiscussionsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-discussions", [], null, null, null, View_DiscussionsComponent_0, RenderType_DiscussionsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_2__discussions_component__["a" /* DiscussionsComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DiscussionsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-discussions", __WEBPACK_IMPORTED_MODULE_2__discussions_component__["a" /* DiscussionsComponent */], View_DiscussionsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/discussions/discussions.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ })

});
//# sourceMappingURL=discussion.module.chunk.js.map