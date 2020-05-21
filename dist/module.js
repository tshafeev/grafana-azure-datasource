define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./QueryEditor.tsx":
/*!*************************!*\
  !*** ./QueryEditor.tsx ***!
  \*************************/
/*! exports provided: AzureMonitorQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureMonitorQueryEditor", function() { return AzureMonitorQueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./config.ts");
/* harmony import */ var _azure_resource_graph_ResourceGraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./azure/resource_graph/ResourceGraph */ "./azure/resource_graph/ResourceGraph.ts");
/* harmony import */ var _azure_azure_costanalysis_AzureCostAnalysis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./azure/azure_costanalysis/AzureCostAnalysis */ "./azure/azure_costanalysis/AzureCostAnalysis.ts");







var supportedAzureServices = _config__WEBPACK_IMPORTED_MODULE_4__["supportedServices"];

var AzureMonitorQueryEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureMonitorQueryEditor, _super);

  function AzureMonitorQueryEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {};

    _this.onServiceTypeChange = function (service) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        queryType: service.value
      }));
    };

    _this.onAppInsightsAppIDChange = function (event) {
      var appId = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azAppInsights = query.azureAppInsights;
      azAppInsights.appInsightsAppId = appId;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureAppInsights: azAppInsights
      }));
    };

    _this.onAppInsightsQueryChange = function (event) {
      var aiQuery = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azAppInsights = query.azureAppInsights;
      azAppInsights.query = aiQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureAppInsights: azAppInsights
      }));
    };

    _this.onLAWorkspaceIDChange = function (event) {
      var laId = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azLogAnalytics = query.azureLogAnalytics;
      azLogAnalytics.workspace = laId;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureLogAnalytics: azLogAnalytics
      }));
    };

    _this.onLAQueryChange = function (event) {
      var laQuery = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azLogAnalytics = query.azureLogAnalytics;
      azLogAnalytics.query = laQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureLogAnalytics: azLogAnalytics
      }));
    };

    return _this;
  }

  AzureMonitorQueryEditor.prototype.render = function () {
    var query = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(this.props.query, {
      azureResourceGraph: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(this.props.query.azureResourceGraph, _azure_resource_graph_ResourceGraph__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_RESOURCE_GRAPH_QUERY"]),
      azureAppInsights: {
        query: ""
      },
      azureLogAnalytics: {
        query: ""
      },
      azureCostAnalysis: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(this.props.query.azureCostAnalysis, _azure_azure_costanalysis_AzureCostAnalysis__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_COST_ANALYSIS_QUERY"])
    });
    var QueryEditor;

    if (query.queryType === _config__WEBPACK_IMPORTED_MODULE_4__["AzureResourceGraph"]) {
      QueryEditor = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_azure_resource_graph_ResourceGraph__WEBPACK_IMPORTED_MODULE_5__["AzureResourceGraphQueryEditor"], {
        onChange: this.props.onChange,
        query: query,
        datasource: this.props.datasource
      });
    } else if (query.queryType === _config__WEBPACK_IMPORTED_MODULE_4__["AzureApplicationInsights"]) {
      QueryEditor = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
        label: "Application Insights ID",
        labelWidth: 12,
        inputWidth: 24,
        onChange: this.onAppInsightsAppIDChange,
        value: query.azureAppInsights.appInsightsAppId || '',
        placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        tooltip: "AppInsights ID"
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormLabel"], {
        className: "width-12",
        tooltip: "Application Insights Query"
      }, "Query"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
        value: query.azureAppInsights.query || '',
        onChange: this.onAppInsightsQueryChange,
        className: "gf-form-input min-width-30 width-30",
        rows: 10
      })))));
    } else if (query.queryType === _config__WEBPACK_IMPORTED_MODULE_4__["AzureLogAnalytics"]) {
      QueryEditor = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
        label: "Workspace ID",
        labelWidth: 12,
        inputWidth: 24,
        onChange: this.onLAWorkspaceIDChange,
        value: query.azureLogAnalytics.workspace || '',
        placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        tooltip: "Log Anlaytics workspace ID"
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormLabel"], {
        className: "width-12",
        tooltip: "Log Analytics Query"
      }, "Query"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
        value: query.azureLogAnalytics.query || '',
        onChange: this.onLAQueryChange,
        className: "gf-form-input min-width-30 width-30",
        rows: 10
      })))));
    } else if (query.queryType === _config__WEBPACK_IMPORTED_MODULE_4__["AzureCostAnalysis"]) {
      QueryEditor = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_azure_azure_costanalysis_AzureCostAnalysis__WEBPACK_IMPORTED_MODULE_6__["AzureCostAnalysisQueryEditor"], {
        onChange: this.props.onChange,
        query: query,
        datasource: this.props.datasource
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormLabel"], {
      className: "width-12",
      tooltip: "Service Type"
    }, "Service"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      className: "width-24",
      value: supportedAzureServices.find(function (service) {
        return service.value === query.queryType;
      }),
      options: supportedAzureServices,
      defaultValue: query.queryType,
      onChange: this.onServiceTypeChange
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, QueryEditor)));
  };

  return AzureMonitorQueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./app/utils.ts":
/*!**********************!*\
  !*** ./app/utils.ts ***!
  \**********************/
/*! exports provided: doBackendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doBackendRequest", function() { return doBackendRequest; });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);

var doBackendRequest = function doBackendRequest(requestObject, maxRetries) {
  if (maxRetries === void 0) {
    maxRetries = 1;
  }

  return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getBackendSrv"])().datasourceRequest(requestObject)["catch"](function (error) {
    if (maxRetries > 0) {
      return doBackendRequest(requestObject, maxRetries - 1);
    } else {
      console.error("Error while retreiving data from " + requestObject.url, error);
      return {};
    }
  });
};

/***/ }),

/***/ "./azure/AzureMonitorPluginQuery.ts":
/*!******************************************!*\
  !*** ./azure/AzureMonitorPluginQuery.ts ***!
  \******************************************/
/*! exports provided: AzureMonitorPluginQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureMonitorPluginQuery", function() { return AzureMonitorPluginQuery; });
var AzureMonitorPluginQuery =
/** @class */
function () {
  function AzureMonitorPluginQuery(refId, query) {
    this.refId = refId;
    this.query = query;
  }

  return AzureMonitorPluginQuery;
}();



/***/ }),

/***/ "./azure/application_insights/ApplicationInsights.ts":
/*!***********************************************************!*\
  !*** ./azure/application_insights/ApplicationInsights.ts ***!
  \***********************************************************/
/*! exports provided: AzureApplicationInsightsQuery, AzureApplicationInsightsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureApplicationInsightsQuery", function() { return AzureApplicationInsightsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureApplicationInsightsDataSource", function() { return AzureApplicationInsightsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AzureMonitorPluginQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../AzureMonitorPluginQuery */ "./azure/AzureMonitorPluginQuery.ts");
/* harmony import */ var _azure_resource_AzureResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../azure_resource/AzureResource */ "./azure/azure_resource/AzureResource.ts");
/* harmony import */ var _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/KustoResponseParser */ "./azure/utils/KustoResponseParser.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app/utils */ "./app/utils.ts");






var AzureApplicationInsightsQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureApplicationInsightsQuery, _super);

  function AzureApplicationInsightsQuery(refId, resourceId, appInsightsAppId, query) {
    if (refId === void 0) {
      refId = '';
    }

    if (resourceId === void 0) {
      resourceId = '';
    }

    if (appInsightsAppId === void 0) {
      appInsightsAppId = '';
    }

    if (query === void 0) {
      query = '';
    }

    var _this = _super.call(this, refId, query) || this;

    _this.resourceId = resourceId;
    _this.resource = new _azure_resource_AzureResource__WEBPACK_IMPORTED_MODULE_2__["AzureResource"](resourceId);
    _this.appInsightsAppId = appInsightsAppId;
    _this.query = query;
    return _this;
  }

  return AzureApplicationInsightsQuery;
}(_AzureMonitorPluginQuery__WEBPACK_IMPORTED_MODULE_1__["AzureMonitorPluginQuery"]);



var AzureApplicationInsightsDataSource =
/** @class */
function () {
  AzureApplicationInsightsDataSource.$inject = ["azureConnection", "templateSrv"];

  /** @ngInject */
  function AzureApplicationInsightsDataSource(azureConnection, templateSrv) {
    this.azureConnection = azureConnection;
    this.templateSrv = templateSrv;
    this.url = this.azureConnection.instanceSettings.url;
    this.baseUrl = "/" + this.azureConnection.instanceSettings.jsonData.cloudName;
  }

  AzureApplicationInsightsDataSource.prototype.doApplicationInsightsRequest = function (query, maxRetries) {
    if (maxRetries === void 0) {
      maxRetries = 1;
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var requestObject;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        requestObject = {
          data: {
            query: query.query
          },
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          url: this.url + this.baseUrl + query.resourceId + '/query?api-version=2018-04-20'
        };

        if (query.appInsightsAppId) {
          requestObject.url = this.url + '/applicationinsights/v1/apps/' + query.appInsightsAppId + '/query?api-version=2018-04-20';
        }

        return [2
        /*return*/
        , Object(_app_utils__WEBPACK_IMPORTED_MODULE_4__["doBackendRequest"])(requestObject, maxRetries)];
      });
    });
  };

  AzureApplicationInsightsDataSource.prototype.doQueries = function (queries) {
    var _this = this;

    return queries.map(function (query) {
      return _this.doApplicationInsightsRequest(query).then(function (result) {
        return {
          result: result,
          query: query
        };
      })["catch"](function (error) {
        throw {
          error: error,
          query: query
        };
      });
    });
  };

  AzureApplicationInsightsDataSource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var queries, promises;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        queries = options.targets.filter(function (item) {
          var ai = item.azureAppInsights;
          return item.hide !== true && ai && ai.query && (ai.resourceId || ai.appInsightsAppId);
        }).map(function (target) {
          var item = target.azureAppInsights;
          var queryOption = new AzureApplicationInsightsQuery(target.refId, _this.templateSrv.replace(item.resourceId, options.scopedVars), _this.templateSrv.replace(item.appInsightsAppId, options.scopedVars), _this.templateSrv.replace(item.query, options.scopedVars));
          return queryOption;
        });

        if (!queries || queries.length === 0) {
          return [2
          /*return*/
          ];
        }

        promises = this.doQueries(queries);
        return [2
        /*return*/
        , Promise.all(promises).then(function (results) {
          var responseParser = new _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_3__["KustoResponseParser"](results);
          return responseParser.output;
        })];
      });
    });
  };

  AzureApplicationInsightsDataSource.prototype.metricFindQuery = function (query) {
    return undefined;
  };

  return AzureApplicationInsightsDataSource;
}();



/***/ }),

/***/ "./azure/azure_connection/AzureConnection.ts":
/*!***************************************************!*\
  !*** ./azure/azure_connection/AzureConnection.ts ***!
  \***************************************************/
/*! exports provided: AzureConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureConnection", function() { return AzureConnection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _azure_subscription_AzureSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../azure_subscription/AzureSubscription */ "./azure/azure_subscription/AzureSubscription.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app/utils */ "./app/utils.ts");




var AzureConnection =
/** @class */
function () {
  AzureConnection.$inject = ["instanceSettings"];

  /** @ngInject */
  function AzureConnection(instanceSettings) {
    this.instanceSettings = instanceSettings;
    this.subscriptions = [];
    this.baseUrl = instanceSettings.url;
    this.cloudName = instanceSettings.jsonData.cloudName || 'azuremonitor';
  }

  AzureConnection.prototype.getSubscriptions = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var requestObject;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (this.subscriptions.length > 0) {
          return [2
          /*return*/
          , new Promise(function (resolve) {
            resolve(_this.subscriptions);
          })];
        } else {
          requestObject = {
            method: 'GET',
            url: this.baseUrl + ("/" + this.cloudName + "/subscriptions?api-version=2018-01-01")
          };
          return [2
          /*return*/
          , Object(_app_utils__WEBPACK_IMPORTED_MODULE_2__["doBackendRequest"])(requestObject, 2).then(function (response) {
            if (response && response.status === 200 && response.data && response.data.value) {
              _this.subscriptions = (response.data.value || []).map(function (result) {
                return new _azure_subscription_AzureSubscription__WEBPACK_IMPORTED_MODULE_1__["AzureSubscription"](result);
              });
              return _this.subscriptions;
            }

            console.error('Invalid response received for getSubscriptions query', response);
            return _this.subscriptions;
          })["catch"](function (ex) {
            console.error(ex);
            return _this.subscriptions;
          })];
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  return AzureConnection;
}();



/***/ }),

/***/ "./azure/azure_costanalysis/AzureCostAnalysis.ts":
/*!*******************************************************!*\
  !*** ./azure/azure_costanalysis/AzureCostAnalysis.ts ***!
  \*******************************************************/
/*! exports provided: DEFAULT_COST_ANALYSIS_QUERY, ACA_SUPPORTED_FILTER_TYPES, AzureCostQueryDataParam, AzureCostAnalysisQuery, AzureCostAnalysisDataSource, AzureCostAnalysisQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COST_ANALYSIS_QUERY", function() { return DEFAULT_COST_ANALYSIS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACA_SUPPORTED_FILTER_TYPES", function() { return ACA_SUPPORTED_FILTER_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureCostQueryDataParam", function() { return AzureCostQueryDataParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureCostAnalysisQuery", function() { return AzureCostAnalysisQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureCostAnalysisDataSource", function() { return AzureCostAnalysisDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AzureMonitorPluginQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AzureMonitorPluginQuery */ "./azure/AzureMonitorPluginQuery.ts");
/* harmony import */ var _AzureCostAnalysisResultsParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AzureCostAnalysisResultsParser */ "./azure/azure_costanalysis/AzureCostAnalysisResultsParser.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/utils */ "./app/utils.ts");
/* harmony import */ var _AzureCostAnalysisQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AzureCostAnalysisQueryEditor */ "./azure/azure_costanalysis/AzureCostAnalysisQueryEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AzureCostAnalysisQueryEditor", function() { return _AzureCostAnalysisQueryEditor__WEBPACK_IMPORTED_MODULE_4__["AzureCostAnalysisQueryEditor"]; });





var DEFAULT_COST_ANALYSIS_QUERY = {
  subscriptionId: '',
  granularity: 'Daily',
  grouping: [{
    type: 'None',
    name: 'None'
  }],
  filters: [{
    FilterType: 'None',
    Name: 'None',
    Operator: 'In',
    Values: []
  }]
};
var ACA_SUPPORTED_FILTER_TYPES = [{
  value: 'None',
  label: 'None'
}, {
  value: 'Dimensions',
  label: 'Dimensions'
}, {
  value: 'Tags',
  label: 'Tags'
}];

var AzureCostQueryDataParam =
/** @class */
function () {
  function AzureCostQueryDataParam(range, dataSet) {
    this.type = 'ActualCost';
    this.timeframe = 'Custom';
    this.timePeriod = {
      from: new Date(range.from).toISOString(),
      to: new Date(range.to).toISOString()
    };
    this.dataSet = dataSet;
  }

  return AzureCostQueryDataParam;
}();



var AzureCostAnalysisQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureCostAnalysisQuery, _super);

  function AzureCostAnalysisQuery(refId, options, item, templateSrv) {
    if (refId === void 0) {
      refId = '';
    }

    var _this = _super.call(this, refId, options) || this;

    _this.scope = templateSrv.replace("/subscriptions/" + item.subscriptionId, options.scopedVars);
    _this.granularity = templateSrv.replace(item.granularity || 'Monthly', options.scopedVars);
    var grouping = [];
    grouping = item.grouping && item.grouping.length > 0 ? item.grouping : [{
      type: 'Dimension',
      name: 'ServiceName'
    }];
    _this.data = new AzureCostQueryDataParam(options.range, {
      granularity: _this.granularity,
      aggregation: {
        totalCost: {
          name: 'PreTaxCost',
          "function": 'Sum'
        },
        totalCostUSD: {
          name: 'PreTaxCostUSD',
          "function": 'Sum'
        }
      },
      sorting: [{
        direction: 'ascending',
        name: 'UsageDate'
      }],
      grouping: grouping
    });

    if (grouping && grouping.length > 0 && grouping[0].type === 'None') {
      delete _this.data.dataSet.grouping;
    }

    item.filters = item.filters.filter(function (f) {
      return f && f.FilterType !== 'None';
    });

    if (item.filters && item.filters.length > 0 && item.filters[0].FilterType !== 'None') {
      if (item.filters.length === 1) {
        var filteritem = {};
        filteritem[item.filters[0].FilterType] = item.filters[0];
        delete filteritem[item.filters[0].FilterType].FilterType;
        _this.data.dataSet.filter = filteritem;
      } else if (item.filters.length > 0) {
        var filter_1 = {
          And: []
        };
        item.filters.forEach(function (filterItem) {
          var filteritem = {};
          filteritem[filterItem.FilterType] = filterItem;
          delete filteritem[filterItem.FilterType].FilterType;
          filter_1.And.push(filteritem);
        });
        _this.data.dataSet.filter = filter_1;
      }
    } else if (item.filter) {
      _this.data.dataSet.filter = item.filter;
    }

    return _this;
  }

  return AzureCostAnalysisQuery;
}(_AzureMonitorPluginQuery__WEBPACK_IMPORTED_MODULE_1__["AzureMonitorPluginQuery"]);



var AzureCostAnalysisDataSource =
/** @class */
function () {
  AzureCostAnalysisDataSource.$inject = ["azureConnection", "templateSrv"];

  /** @ngInject */
  function AzureCostAnalysisDataSource(azureConnection, templateSrv) {
    this.azureConnection = azureConnection;
    this.templateSrv = templateSrv;
    this.url = this.azureConnection.instanceSettings.url;
    this.baseUrl = "/" + this.azureConnection.instanceSettings.jsonData.cloudName;
  }

  AzureCostAnalysisDataSource.prototype.doCostRequest = function (query, maxRetries) {
    if (maxRetries === void 0) {
      maxRetries = 1;
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var requestObject;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        requestObject = {
          data: query.data,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          url: this.url + this.baseUrl + query.scope + "/providers/Microsoft.CostManagement/query?api-version=2019-11-01&$top=10000"
        };
        return [2
        /*return*/
        , Object(_app_utils__WEBPACK_IMPORTED_MODULE_3__["doBackendRequest"])(requestObject, maxRetries)];
      });
    });
  };

  AzureCostAnalysisDataSource.prototype.doQueries = function (queries) {
    var _this = this;

    return queries.map(function (query) {
      return _this.doCostRequest(query).then(function (result) {
        return {
          result: result,
          query: query
        };
      })["catch"](function (error) {
        throw {
          error: error,
          query: query
        };
      });
    });
  };

  AzureCostAnalysisDataSource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var queries, promises;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        queries = options.targets.filter(function (item) {
          var aca = item.azureCostAnalysis;
          return item.hide !== true && aca;
        }).map(function (target) {
          var item = target.azureCostAnalysis;
          var queryOption = new AzureCostAnalysisQuery(target.refId, options, item, _this.templateSrv);
          return queryOption;
        });

        if (!queries || queries.length === 0) {
          return [2
          /*return*/
          ];
        }

        promises = this.doQueries(queries);
        return [2
        /*return*/
        , Promise.all(promises).then(function (results) {
          var responseParser = new _AzureCostAnalysisResultsParser__WEBPACK_IMPORTED_MODULE_2__["AzureCostAnalysisResultsParser"](results);
          return responseParser.output;
        })];
      });
    });
  };

  AzureCostAnalysisDataSource.prototype.metricFindQuery = function (query) {
    return undefined;
  };

  return AzureCostAnalysisDataSource;
}();




/***/ }),

/***/ "./azure/azure_costanalysis/AzureCostAnalysisQueryEditor.tsx":
/*!*******************************************************************!*\
  !*** ./azure/azure_costanalysis/AzureCostAnalysisQueryEditor.tsx ***!
  \*******************************************************************/
/*! exports provided: AzureCostAnalysisQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureCostAnalysisQueryEditor", function() { return AzureCostAnalysisQueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _azure_connection_AzureConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../azure_connection/AzureConnection */ "./azure/azure_connection/AzureConnection.ts");





var Granularities = [{
  value: 'None',
  label: 'None'
}, {
  value: 'Daily',
  label: 'Daily'
}, {
  value: 'Monthly',
  label: 'Monthly'
}];
var GroupingTypes = [{
  value: 'None',
  label: 'None'
}, {
  value: 'Dimension',
  label: 'Dimension'
}, {
  value: 'TagKey',
  label: 'Tag'
}];
var GroupingDimensions = [{
  value: 'ResourceId',
  label: 'Resource'
}, {
  value: 'ResourceType',
  label: 'Resource Type'
}, {
  value: 'ResourceLocation',
  label: 'Resource Location'
}, {
  value: 'ResourceGroupName',
  label: 'Resource Group Name'
}, {
  value: 'ServiceName',
  label: 'Service Name'
}, {
  value: 'ServiceTier',
  label: 'Service Tier'
}, {
  value: 'Meter',
  label: 'Meter'
}, {
  value: 'MeterCategory',
  label: 'Meter Category'
}, {
  value: 'MeterSubCategory',
  label: 'Meter SubCategory'
}, {
  value: 'PricingModel',
  label: 'Pricing Model'
}, {
  value: 'PublisherType',
  label: 'Publisher Type'
}, {
  value: 'ChargeType',
  label: 'Charge Type'
}];
var FilterTypes = [{
  value: 'None',
  label: 'None'
}, {
  value: 'Dimensions',
  label: 'Dimensions'
}, {
  value: 'Tags',
  label: 'Tags'
}];

var AzureCostAnalysisSubscriptionIdQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureCostAnalysisSubscriptionIdQuery, _super);

  function AzureCostAnalysisSubscriptionIdQuery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(_this.state, {
      AzureSubscriptions: []
    });

    _this.onACASubscriptionIDChange = function (event) {
      var acaSubscriptionId = event.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.subscriptionId = acaSubscriptionId;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    return _this;
  }

  AzureCostAnalysisSubscriptionIdQuery.prototype.componentWillMount = function () {
    var _this = this;

    if (this.state.AzureSubscriptions.length === 0) {
      var az = new _azure_connection_AzureConnection__WEBPACK_IMPORTED_MODULE_4__["AzureConnection"](this.props.datasource.instanceSettings);
      az.getSubscriptions().then(function (res) {
        _this.setState({
          AzureSubscriptions: res.map(function (r) {
            return {
              value: r.subscriptionId,
              label: r.name
            };
          })
        });
      });
    }
  };

  AzureCostAnalysisSubscriptionIdQuery.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormLabel"], {
      className: "width-12",
      tooltip: "Subscription"
    }, "Subscription"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      className: "width-24",
      value: this.state.AzureSubscriptions.find(function (gran) {
        return gran.value === query.azureCostAnalysis.subscriptionId;
      }),
      options: this.state.AzureSubscriptions,
      defaultValue: query.azureCostAnalysis.subscriptionId,
      onChange: this.onACASubscriptionIDChange
    }))));
  };

  return AzureCostAnalysisSubscriptionIdQuery;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

var AzureCostAnalysisGranularityQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureCostAnalysisGranularityQuery, _super);

  function AzureCostAnalysisGranularityQuery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onACAGranularityChange = function (gran) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.granularity = gran.value;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    return _this;
  }

  AzureCostAnalysisGranularityQuery.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormLabel"], {
      className: "width-12",
      tooltip: "Granularity"
    }, ' ', "Granularity"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      className: "width-24",
      value: Granularities.find(function (gran) {
        return gran.value === query.azureCostAnalysis.granularity;
      }),
      options: Granularities,
      defaultValue: query.azureCostAnalysis.granularity,
      onChange: this.onACAGranularityChange
    }))));
  };

  return AzureCostAnalysisGranularityQuery;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

var AzureCostAnalysisGroupingQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureCostAnalysisGroupingQuery, _super);

  function AzureCostAnalysisGroupingQuery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onACAGroupingTypeChange = function (groupingType) {
      var gtype = groupingType.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.grouping = azCostAnalysis.grouping || {
        type: 'Dimension',
        name: 'ServiceName'
      };
      azCostAnalysis.grouping[0].type = gtype;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    _this.onACAGroupingNameChange = function (event) {
      var groupingName = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.grouping = azCostAnalysis.grouping || {
        type: 'Dimension',
        name: 'ServiceName'
      };
      azCostAnalysis.grouping[0].name = groupingName;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    _this.onACAGroupingNameChangeDimension = function (event) {
      var groupingName = event.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.grouping = azCostAnalysis.grouping || {
        type: 'Dimension',
        name: 'ServiceName'
      };
      azCostAnalysis.grouping[0].name = groupingName;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    return _this;
  }

  AzureCostAnalysisGroupingQuery.prototype.render = function () {
    var query = this.props.query;
    var GroupingNameField;

    if (query.azureCostAnalysis.grouping[0].type === 'TagKey') {
      GroupingNameField = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
        label: "Tag Name",
        labelWidth: 8,
        inputWidth: 16,
        onChange: this.onACAGroupingNameChange,
        value: query.azureCostAnalysis.grouping[0].name,
        placeholder: "Tag Name",
        tooltip: "Tag Name"
      }));
    } else if (query.azureCostAnalysis.grouping[0].type === 'Dimension') {
      GroupingNameField = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        className: "width-24",
        value: GroupingDimensions.find(function (gran) {
          return gran.value === query.azureCostAnalysis.grouping[0].name;
        }),
        options: GroupingDimensions,
        defaultValue: query.azureCostAnalysis.grouping[0].name,
        onChange: this.onACAGroupingNameChangeDimension
      }));
    } else {
      GroupingNameField = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormLabel"], {
      className: "width-12",
      tooltip: "Group by"
    }, "Group by"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      className: "width-12",
      value: GroupingTypes.find(function (gran) {
        return gran.value === query.azureCostAnalysis.grouping[0].type;
      }),
      options: GroupingTypes,
      defaultValue: query.azureCostAnalysis.grouping[0].type,
      onChange: this.onACAGroupingTypeChange
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, GroupingNameField))));
  };

  return AzureCostAnalysisGroupingQuery;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

var AzureCostAnalysisFilterQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureCostAnalysisFilterQuery, _super);

  function AzureCostAnalysisFilterQuery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onACAFilteAdd = function () {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.filters = azCostAnalysis.filters || [{
        FilterType: 'None',
        Name: 'None',
        Operator: 'In',
        Values: []
      }];
      azCostAnalysis.filters.push({
        FilterType: 'None',
        Name: 'None',
        Operator: 'In',
        Values: []
      });
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    _this.onACAFilterRemove = function (index) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.filters = azCostAnalysis.filters || [{
        FilterType: 'None',
        Name: 'None',
        Operator: 'In',
        Values: []
      }];
      azCostAnalysis.filters.splice(index, 1);
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    _this.onACAFilterTypeChange = function (event, index) {
      var filtertype = event.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.filters = azCostAnalysis.filters || [{
        FilterType: 'None',
        Name: 'None',
        Operator: 'In',
        Values: []
      }];
      azCostAnalysis.filters[index].FilterType = filtertype;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    _this.onACAFilterNameChange = function (event, index) {
      var filtername = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.filters = azCostAnalysis.filters || [{
        FilterType: 'None',
        Name: 'None',
        Operator: 'In',
        Values: []
      }];
      azCostAnalysis.filters[index].Name = filtername;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    _this.onACAFilterNameChangeDimension = function (event, index) {
      var filtername = event.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.filters = azCostAnalysis.filters || [{
        FilterType: 'None',
        Name: 'None',
        Operator: 'In',
        Values: []
      }];
      azCostAnalysis.filters[index].Name = filtername;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    _this.onACAFilterOperatorChange = function (event, index) {
      var operatorname = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.filters = azCostAnalysis.filters || [{
        FilterType: 'None',
        Name: 'None',
        Operator: 'In',
        Values: []
      }];
      azCostAnalysis.filters[index].Operator = operatorname;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    _this.onACAFilterValueChange = function (event, index) {
      var valuename = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azCostAnalysis = query.azureCostAnalysis;
      azCostAnalysis.filters = azCostAnalysis.filters || [{
        FilterType: 'None',
        Name: 'None',
        Operator: 'In',
        Values: []
      }];
      azCostAnalysis.filters[index].Values = valuename.split(',');
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureCostAnalysis: azCostAnalysis
      }));
    };

    return _this;
  }

  AzureCostAnalysisFilterQuery.prototype.render = function () {
    var _this = this;

    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, query.azureCostAnalysis.filters.length === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormLabel"], {
      className: "width-12",
      tooltip: "Filter"
    }, "Filter"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "btn btn-success btn-small",
      style: {
        margin: '5px'
      },
      onClick: this.onACAFilteAdd
    }, "Add Filter")))) : null, query.azureCostAnalysis.filters.map(function (filter, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormLabel"], {
        className: "width-12",
        tooltip: "Filter"
      }, "Filter ", index + 1))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        className: "width-12",
        value: FilterTypes.find(function (gran) {
          return gran.value === filter.FilterType;
        }),
        options: FilterTypes,
        defaultValue: filter.FilterType,
        onChange: function onChange(e) {
          return _this.onACAFilterTypeChange(e, index);
        }
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, filter.FilterType === 'None' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "btn btn-success btn-small",
        style: {
          margin: '5px'
        },
        onClick: _this.onACAFilteAdd
      }, "+"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "btn btn-danger btn-small",
        style: {
          margin: '5px'
        },
        onClick: function onClick() {
          return _this.onACAFilterRemove(index);
        }
      }, "x")))) : null, filter.FilterType === 'Dimensions' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        className: "width-12",
        value: GroupingDimensions.find(function (fil) {
          return fil.value === filter.Name;
        }),
        options: GroupingDimensions,
        defaultValue: filter.Name,
        onChange: function onChange(e) {
          return _this.onACAFilterNameChangeDimension(e, index);
        }
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        className: "width-12",
        title: "Operator",
        placeholder: "Operator",
        value: filter.Operator,
        onChange: function onChange(e) {
          return _this.onACAFilterOperatorChange(e, index);
        },
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        className: "width-12",
        title: "Values; Comma seperated",
        placeholder: "Values",
        value: filter.Values.join(','),
        onChange: function onChange(e) {
          return _this.onACAFilterValueChange(e, index);
        }
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "btn btn-success btn-small",
        style: {
          margin: '5px'
        },
        onClick: _this.onACAFilteAdd
      }, "+"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "btn btn-danger btn-small",
        style: {
          margin: '5px'
        },
        onClick: function onClick() {
          return _this.onACAFilterRemove(index);
        }
      }, "x")))) : null, filter.FilterType === 'Tags' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        className: "width-12",
        title: "Tag Name",
        placeholder: "Tag Name",
        value: filter.Name,
        onChange: function onChange(e) {
          return _this.onACAFilterNameChange(e, index);
        }
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        className: "width-12",
        title: "Operator",
        placeholder: "Operator",
        value: filter.Operator,
        onChange: function onChange(e) {
          return _this.onACAFilterOperatorChange(e, index);
        },
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        className: "width-12",
        title: "Tags; Comma seperated",
        placeholder: "Tags",
        value: filter.Values.join(','),
        onChange: function onChange(e) {
          return _this.onACAFilterValueChange(e, index);
        }
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "btn btn-success btn-small",
        style: {
          margin: '5px'
        },
        onClick: _this.onACAFilteAdd
      }, "+"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "btn btn-danger btn-small",
        style: {
          margin: '5px'
        },
        onClick: function onClick() {
          return _this.onACAFilterRemove(index);
        }
      }, "x")))) : null));
    }));
  };

  return AzureCostAnalysisFilterQuery;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

var AzureCostAnalysisQueryEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureCostAnalysisQueryEditor, _super);

  function AzureCostAnalysisQueryEditor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AzureCostAnalysisQueryEditor.prototype.render = function () {
    var _a = this.props,
        query = _a.query,
        onChange = _a.onChange,
        datasource = _a.datasource;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AzureCostAnalysisSubscriptionIdQuery, {
      query: query,
      onChange: onChange,
      datasource: datasource
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AzureCostAnalysisGranularityQuery, {
      query: query,
      onChange: onChange
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AzureCostAnalysisGroupingQuery, {
      query: query,
      onChange: onChange
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AzureCostAnalysisFilterQuery, {
      query: query,
      onChange: onChange
    }));
  };

  return AzureCostAnalysisQueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./azure/azure_costanalysis/AzureCostAnalysisResultsParser.ts":
/*!********************************************************************!*\
  !*** ./azure/azure_costanalysis/AzureCostAnalysisResultsParser.ts ***!
  \********************************************************************/
/*! exports provided: AzureCostAnalysisResultItem, AzureCostAnalysisResultsParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureCostAnalysisResultItem", function() { return AzureCostAnalysisResultItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureCostAnalysisResultsParser", function() { return AzureCostAnalysisResultsParser; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


var AzureCostAnalysisResultItem =
/** @class */
function () {
  function AzureCostAnalysisResultItem(row, columns, query) {
    var keyindex = 2;
    this.timestamp = new Date();
    this.label = '';
    this.cost = row[0];

    if (query.granularity === 'None') {
      this.timestamp = new Date(query.query.range.from);
      keyindex--;
    } else if (query.granularity === 'Daily') {
      var dateString = row[2].toString();
      var year = dateString.substring(0, 4);
      var month = dateString.substring(4, 6);
      var day = dateString.substring(6, 8);
      this.timestamp = new Date(year, month - 1, day);
    } else if (query.granularity === 'Monthly') {
      this.timestamp = new Date(row[2]);
    }

    if (query.data.dataSet.grouping) {
      if (query.data.dataSet.grouping[0] && query.data.dataSet.grouping[0].type === 'TagKey') {
        this.label = row.filter(function (r, i) {
          return i < row.length - 1 && i > keyindex + 1;
        }).map(function (item) {
          return item || '-';
        }).join(':').trim();
      } else {
        this.label = row.filter(function (r, i) {
          return i < row.length - 1 && i > keyindex;
        }).map(function (item) {
          return item || '-';
        }).join(':').trim();
      }
    } else {
      this.label = "cost";
    }
  }

  return AzureCostAnalysisResultItem;
}();



var AzureCostAnalysisResultsParser =
/** @class */
function () {
  function AzureCostAnalysisResultsParser(response) {
    var _this = this;

    this.output = [];
    var costitems = [];
    response.forEach(function (res) {
      if (res && res.result && res.result.data && res.result.data.properties && res.result.data.properties.rows) {
        res.result.data.properties.rows.forEach(function (row) {
          costitems.push(new AzureCostAnalysisResultItem(row, res.result.data.properties.columns, res.query));
        });
      }
    });
    var uniqkeys = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(costitems.map(function (c) {
      return c.label;
    }));
    uniqkeys.forEach(function (key) {
      var o = {
        target: key || '-',
        datapoints: []
      };
      o.datapoints = costitems.filter(function (c) {
        return c.label === key;
      }).map(function (c) {
        return [c.cost, c.timestamp];
      }).sort(function (a, b) {
        return a[1] - b[1];
      });

      _this.output.push(o);
    });
    this.output = this.output.sort(function (a, b) {
      return b.target - a.target;
    });
  }

  return AzureCostAnalysisResultsParser;
}();



/***/ }),

/***/ "./azure/azure_resource/AzureResource.ts":
/*!***********************************************!*\
  !*** ./azure/azure_resource/AzureResource.ts ***!
  \***********************************************/
/*! exports provided: AzureResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureResource", function() { return AzureResource; });
var AzureResource =
/** @class */
function () {
  function AzureResource(id, subscriptionId, resourceGroup, type, name) {
    if (id === void 0) {
      id = '';
    }

    if (subscriptionId === void 0) {
      subscriptionId = '';
    }

    if (resourceGroup === void 0) {
      resourceGroup = '';
    }

    if (type === void 0) {
      type = '';
    }

    if (name === void 0) {
      name = '';
    }

    this.id = '';
    this.subscriptionId = '';
    this.resourceGroup = '';
    this.type = '';
    this.name = '';

    if (id) {
      var idsplit_1 = id.split('/');
      this.id = id;
      this.subscriptionId = idsplit_1[2];
      this.resourceGroup = idsplit_1[4];
      this.type = idsplit_1.filter(function (iditem, index) {
        return iditem && index >= 6 && index !== idsplit_1.length - 1;
      }).join('/');
      this.name = idsplit_1[idsplit_1.length - 1];
    } else if (resourceGroup && type && name) {
      this.id = "/subscriptions/" + subscriptionId + "/resourceGroups/" + resourceGroup + "/providers/" + type + "/" + name;
    }
  }

  return AzureResource;
}();



/***/ }),

/***/ "./azure/azure_subscription/AzureSubscription.ts":
/*!*******************************************************!*\
  !*** ./azure/azure_subscription/AzureSubscription.ts ***!
  \*******************************************************/
/*! exports provided: AzureSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureSubscription", function() { return AzureSubscription; });
var AzureSubscription =
/** @class */
function () {
  function AzureSubscription(result) {
    this.id = '';
    this.subscriptionId = '';
    this.tenantId = '';
    this.displayName = '';
    this.name = '';

    if (result) {
      this.id = result.id || result.subscriptionId;
      this.subscriptionId = result.subscriptionId || result.id;
      this.tenantId = result.tenantId;
      this.displayName = result.displayName;
      this.name = result.name || result.displayName || '';
    }
  }

  return AzureSubscription;
}();



/***/ }),

/***/ "./azure/log_analytics/LogAnalytics.ts":
/*!*********************************************!*\
  !*** ./azure/log_analytics/LogAnalytics.ts ***!
  \*********************************************/
/*! exports provided: AzureLogAnalyticsQuery, AzureLogAnalyticsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureLogAnalyticsQuery", function() { return AzureLogAnalyticsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureLogAnalyticsDataSource", function() { return AzureLogAnalyticsDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AzureMonitorPluginQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../AzureMonitorPluginQuery */ "./azure/AzureMonitorPluginQuery.ts");
/* harmony import */ var _azure_resource_AzureResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../azure_resource/AzureResource */ "./azure/azure_resource/AzureResource.ts");
/* harmony import */ var _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/KustoResponseParser */ "./azure/utils/KustoResponseParser.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app/utils */ "./app/utils.ts");






var AzureLogAnalyticsQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureLogAnalyticsQuery, _super);

  function AzureLogAnalyticsQuery(refId, resourceId, workspace, query) {
    if (refId === void 0) {
      refId = '';
    }

    if (resourceId === void 0) {
      resourceId = '';
    }

    if (workspace === void 0) {
      workspace = '';
    }

    if (query === void 0) {
      query = '';
    }

    var _this = _super.call(this, refId, query) || this;

    _this.resourceId = resourceId;
    _this.resource = new _azure_resource_AzureResource__WEBPACK_IMPORTED_MODULE_2__["AzureResource"](resourceId);
    _this.workspace = workspace;
    _this.query = query;
    return _this;
  }

  return AzureLogAnalyticsQuery;
}(_AzureMonitorPluginQuery__WEBPACK_IMPORTED_MODULE_1__["AzureMonitorPluginQuery"]);



var AzureLogAnalyticsDataSource =
/** @class */
function () {
  AzureLogAnalyticsDataSource.$inject = ["azureConnection", "templateSrv"];

  /** @ngInject */
  function AzureLogAnalyticsDataSource(azureConnection, templateSrv) {
    this.azureConnection = azureConnection;
    this.templateSrv = templateSrv;
    this.url = this.azureConnection.instanceSettings.url;
    this.baseUrl = "/" + this.azureConnection.instanceSettings.jsonData.cloudName;
  }

  AzureLogAnalyticsDataSource.prototype.doLogAnalyticsRequest = function (query, maxRetries) {
    if (maxRetries === void 0) {
      maxRetries = 1;
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var requestObject;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        requestObject = {
          data: {
            query: query.query
          },
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          url: this.url + this.baseUrl + query.resourceId + '/query?api-version=2017-10-01'
        };

        if (query.workspace) {
          requestObject.url = this.url + '/loganalytics/v1/workspaces/' + query.workspace + '/query?api-version=2017-10-01';
        }

        return [2
        /*return*/
        , Object(_app_utils__WEBPACK_IMPORTED_MODULE_4__["doBackendRequest"])(requestObject, maxRetries)];
      });
    });
  };

  AzureLogAnalyticsDataSource.prototype.doQueries = function (queries) {
    var _this = this;

    return queries.map(function (query) {
      return _this.doLogAnalyticsRequest(query).then(function (result) {
        return {
          result: result,
          query: query
        };
      })["catch"](function (error) {
        throw {
          error: error,
          query: query
        };
      });
    });
  };

  AzureLogAnalyticsDataSource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var queries, promises;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        queries = options.targets.filter(function (item) {
          var la = item.azureLogAnalytics;
          return item.hide !== true && la && la.query && (la.resourceId || la.workspace);
        }).map(function (target) {
          var item = target.azureLogAnalytics;
          var queryOption = new AzureLogAnalyticsQuery(target.refId, _this.templateSrv.replace(item.resourceId, options.scopedVars), _this.templateSrv.replace(item.workspace, options.scopedVars), _this.templateSrv.replace(item.query, options.scopedVars));
          return queryOption;
        });

        if (!queries || queries.length === 0) {
          return [2
          /*return*/
          ];
        }

        promises = this.doQueries(queries);
        return [2
        /*return*/
        , Promise.all(promises).then(function (results) {
          var responseParser = new _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_3__["KustoResponseParser"](results);
          return responseParser.output;
        })];
      });
    });
  };

  AzureLogAnalyticsDataSource.prototype.metricFindQuery = function (query) {
    return undefined;
  };

  return AzureLogAnalyticsDataSource;
}();



/***/ }),

/***/ "./azure/resource_graph/AzureResourceGraphQueryEditor.tsx":
/*!****************************************************************!*\
  !*** ./azure/resource_graph/AzureResourceGraphQueryEditor.tsx ***!
  \****************************************************************/
/*! exports provided: AzureResourceGraphQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureResourceGraphQueryEditor", function() { return AzureResourceGraphQueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var AzureResourceGraphQueryEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureResourceGraphQueryEditor, _super);

  function AzureResourceGraphQueryEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onResourceGraphQueryChange = function (event) {
      var rgQuery = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azResourceGraph = query.azureResourceGraph;
      azResourceGraph.query = rgQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureResourceGraph: azResourceGraph
      }));
    };

    _this.onResourceGraphTopChange = function (event) {
      var rgTop = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azResourceGraph = query.azureResourceGraph;
      azResourceGraph.top = rgTop;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureResourceGraph: azResourceGraph
      }));
    };

    _this.onResourceGraphSkipChange = function (event) {
      var rgSkip = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var azResourceGraph = query.azureResourceGraph;
      azResourceGraph.skip = rgSkip;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        azureResourceGraph: azResourceGraph
      }));
    };

    return _this;
  }

  AzureResourceGraphQueryEditor.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      className: "width-12",
      tooltip: "Resource Graph Query"
    }, "Query"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      value: query.azureResourceGraph.query || '',
      onChange: this.onResourceGraphQueryChange,
      className: "gf-form-input min-width-30 width-30",
      rows: 10
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Top",
      labelWidth: 12,
      inputWidth: 9,
      onChange: this.onResourceGraphTopChange,
      value: query.azureResourceGraph.top,
      placeholder: "1000",
      tooltip: "Top N Results. Default / Max is 1000"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "width-1"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Skip",
      labelWidth: 12,
      inputWidth: 9,
      onChange: this.onResourceGraphSkipChange,
      value: query.azureResourceGraph.skip,
      placeholder: "0",
      tooltip: "Skip N Results. Default 0"
    }))))));
  };

  return AzureResourceGraphQueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./azure/resource_graph/ResourceGraph.ts":
/*!***********************************************!*\
  !*** ./azure/resource_graph/ResourceGraph.ts ***!
  \***********************************************/
/*! exports provided: AzureResourceGraphQueryEditor, DEFAULT_RESOURCE_GRAPH_QUERY, AzureResourceGraphQuery, AzureResourceGraphDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESOURCE_GRAPH_QUERY", function() { return DEFAULT_RESOURCE_GRAPH_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureResourceGraphQuery", function() { return AzureResourceGraphQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureResourceGraphDataSource", function() { return AzureResourceGraphDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AzureMonitorPluginQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../AzureMonitorPluginQuery */ "./azure/AzureMonitorPluginQuery.ts");
/* harmony import */ var _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/KustoResponseParser */ "./azure/utils/KustoResponseParser.ts");
/* harmony import */ var _utils_kusto_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/kusto_utils */ "./azure/utils/kusto_utils.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app/utils */ "./app/utils.ts");
/* harmony import */ var _AzureResourceGraphQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AzureResourceGraphQueryEditor */ "./azure/resource_graph/AzureResourceGraphQueryEditor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AzureResourceGraphQueryEditor", function() { return _AzureResourceGraphQueryEditor__WEBPACK_IMPORTED_MODULE_5__["AzureResourceGraphQueryEditor"]; });







var DEFAULT_RESOURCE_GRAPH_QUERY = {
  query: '',
  top: 1000,
  skip: 0
};

var AzureResourceGraphQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureResourceGraphQuery, _super);

  function AzureResourceGraphQuery(refId, query, top, skip, subscriptions) {
    if (refId === void 0) {
      refId = '';
    }

    if (query === void 0) {
      query = '';
    }

    if (top === void 0) {
      top = 1000;
    }

    if (skip === void 0) {
      skip = 0;
    }

    if (subscriptions === void 0) {
      subscriptions = [];
    }

    var _this = _super.call(this, refId, query) || this;

    _this.top = top;
    _this.skip = skip;
    _this.subscriptions = subscriptions;
    return _this;
  }

  return AzureResourceGraphQuery;
}(_AzureMonitorPluginQuery__WEBPACK_IMPORTED_MODULE_1__["AzureMonitorPluginQuery"]);



var AzureResourceGraphDataSource =
/** @class */
function () {
  AzureResourceGraphDataSource.$inject = ["azureConnection", "templateSrv"];

  /** @ngInject */
  function AzureResourceGraphDataSource(azureConnection, templateSrv) {
    this.azureConnection = azureConnection;
    this.templateSrv = templateSrv;
    this.allSubscriptions = [];
    this.url = azureConnection.instanceSettings.url;
    this.baseUrl = "/" + azureConnection.instanceSettings.jsonData.cloudName;
  }

  AzureResourceGraphDataSource.prototype.doResourceGraphRequest = function (query, maxRetries) {
    if (maxRetries === void 0) {
      maxRetries = 1;
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var subscriptions, _a, filteredSubscriptions, requestObject;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        switch (_b.label) {
          case 0:
            subscriptions = [];
            if (!(this.allSubscriptions.length === 0)) return [3
            /*break*/
            , 2];
            _a = this;
            return [4
            /*yield*/
            , this.azureConnection.getSubscriptions()];

          case 1:
            _a.allSubscriptions = _b.sent();
            _b.label = 2;

          case 2:
            subscriptions = this.allSubscriptions.map(function (sub) {
              return sub.subscriptionId.toString();
            });

            if (query.subscriptions.indexOf('all') < 0) {
              filteredSubscriptions = query.subscriptions.filter(function (s) {
                return s !== 'all';
              });

              if (filteredSubscriptions.length > 0) {
                subscriptions = filteredSubscriptions;
              }
            }

            requestObject = {
              data: {
                options: {
                  $skip: query.skip || 0,
                  $top: query.top || 100,
                  resultFormat: 'table'
                },
                query: query.query,
                subscriptions: subscriptions
              },
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              url: this.url + this.baseUrl + '/providers/Microsoft.ResourceGraph/resources?api-version=2019-04-01'
            };
            return [2
            /*return*/
            , Object(_app_utils__WEBPACK_IMPORTED_MODULE_4__["doBackendRequest"])(requestObject, maxRetries)];
        }
      });
    });
  };

  AzureResourceGraphDataSource.prototype.doQueries = function (queries) {
    var _this = this;

    return queries.map(function (query) {
      return _this.doResourceGraphRequest(query).then(function (result) {
        return {
          result: result,
          query: query
        };
      })["catch"](function (error) {
        throw {
          error: error,
          query: query
        };
      });
    });
  };

  AzureResourceGraphDataSource.prototype.query = function (options) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var queries, promises;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        queries = options.targets.filter(function (item) {
          return item.hide !== true && item.azureResourceGraph && item.azureResourceGraph.query;
        }).map(function (target) {
          var item = target.azureResourceGraph;
          var queryOption = new AzureResourceGraphQuery(target.refId, _this.templateSrv.replace(item.query, options.scopedVars), item.top || 1000, item.skip || 0, item.subscriptions || ['all']);
          return queryOption;
        });

        if (!queries || queries.length === 0) {
          return [2
          /*return*/
          ];
        }

        promises = this.doQueries(queries);
        return [2
        /*return*/
        , Promise.all(promises).then(function (results) {
          var responseParser = new _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_2__["KustoResponseParser"](results);
          return responseParser.output;
        })];
      });
    });
  };

  AzureResourceGraphDataSource.prototype.simpleQuery = function (query, refId, top, skip, subscriptions) {
    if (refId === void 0) {
      refId = 'SimpleQuery';
    }

    if (top === void 0) {
      top = 1000;
    }

    if (skip === void 0) {
      skip = 0;
    }

    if (subscriptions === void 0) {
      subscriptions = ['all'];
    }

    if (query) {
      var queries = [new AzureResourceGraphQuery(refId, query, top, skip, subscriptions)];
      var promises = this.doQueries(queries);
      return Promise.all(promises).then(function (results) {
        var responseParser = new _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_2__["KustoResponseParser"](results);
        return responseParser.output;
      });
    }

    return undefined;
  };

  AzureResourceGraphDataSource.prototype.batchQuery = function (query, maxLoop, results, skip) {
    if (results === void 0) {
      results = [];
    }

    if (skip === void 0) {
      skip = 0;
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var res;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.simpleQuery(query, '', 1000, skip)];

          case 1:
            res = _a.sent();
            results.push(res);
            if (!(maxLoop > 0 && res && res.rows && res.rows.length >= 1000)) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , this.batchQuery(query, maxLoop - 1, results, skip + 1000)];

          case 2:
            _a.sent();

            _a.label = 3;

          case 3:
            return [2
            /*return*/
            , Object(_utils_kusto_utils__WEBPACK_IMPORTED_MODULE_3__["flattenTableResults"])(results)];
        }
      });
    });
  };

  AzureResourceGraphDataSource.prototype.metricFindQuery = function (query, refId) {
    if (refId === void 0) {
      refId = "MetricFindQuery";
    }

    if (query.startsWith("ResourceGraph(") && query.endsWith(")")) {
      var resourceGraphQuery = query.replace("ResourceGraph(", "").slice(0, -1);
      var queryOption = new AzureResourceGraphQuery(refId, this.templateSrv.replace(resourceGraphQuery), 1000, 0, ['all']);
      var promises = this.doQueries([queryOption]);
      return Promise.all(promises).then(function (results) {
        var responseParser = new _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_2__["KustoResponseParser"](results);
        return Object(_utils_kusto_utils__WEBPACK_IMPORTED_MODULE_3__["getResultsAsVariablesList"])(responseParser.output);
      });
    } else if (query.startsWith("Subscriptions(") && query.endsWith(")")) {
      var resourceGraphQuery = "resourcecontainers | where type == \"microsoft.resources/subscriptions\" | distinct name, subscriptionId | order by name asc";
      var queryOption = new AzureResourceGraphQuery(refId, this.templateSrv.replace(resourceGraphQuery), 1000, 0, ['all']);
      var promises = this.doQueries([queryOption]);
      return Promise.all(promises).then(function (results) {
        var responseParser = new _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_2__["KustoResponseParser"](results);
        return Object(_utils_kusto_utils__WEBPACK_IMPORTED_MODULE_3__["getResultsAsVariablesList"])(responseParser.output);
      });
    } else if (query.startsWith("ResourceGroups(") && query.endsWith(")")) {
      var subscriptionId = query.replace("ResourceGroups(", "").slice(0, -1);
      var resourceGraphQuery = "";

      if (subscriptionId) {
        resourceGraphQuery = "resourcecontainers | where type != \"microsoft.resources/subscriptions\" and subscriptionId == \"" + subscriptionId + "\" | distinct name | order by name asc";
      } else {
        resourceGraphQuery = "resourcecontainers | where type != \"microsoft.resources/subscriptions\" | distinct name | order by name asc";
      }

      var queryOption = new AzureResourceGraphQuery(refId, this.templateSrv.replace(resourceGraphQuery), 1000, 0, ['all']);
      var promises = this.doQueries([queryOption]);
      return Promise.all(promises).then(function (results) {
        var responseParser = new _utils_KustoResponseParser__WEBPACK_IMPORTED_MODULE_2__["KustoResponseParser"](results);
        return Object(_utils_kusto_utils__WEBPACK_IMPORTED_MODULE_3__["getResultsAsVariablesList"])(responseParser.output);
      });
    }

    return undefined;
  };

  return AzureResourceGraphDataSource;
}();



/***/ }),

/***/ "./azure/utils/KustoResponseParser.ts":
/*!********************************************!*\
  !*** ./azure/utils/KustoResponseParser.ts ***!
  \********************************************/
/*! exports provided: KustoResponseParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KustoResponseParser", function() { return KustoResponseParser; });
/* harmony import */ var _kusto_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kusto_utils */ "./azure/utils/kusto_utils.ts");


var KustoResponseParser =
/** @class */
function () {
  function KustoResponseParser(response) {
    var _this = this;

    this.output = {
      columns: [],
      refId: '',
      rows: [],
      type: 'table'
    };

    if (Object(_kusto_utils__WEBPACK_IMPORTED_MODULE_0__["isTimeSeriesResults"])(response)) {
      this.output.type = 'time_series';
      this.output = Object(_kusto_utils__WEBPACK_IMPORTED_MODULE_0__["parseTimeSeriesResults"])(response);
      this.output = Object(_kusto_utils__WEBPACK_IMPORTED_MODULE_0__["sortTimeSeriesResults"])(this.output);
    } else {
      this.output.type = 'table';
      response.forEach(function (res) {
        if (res.result && res.result.data && res.result.data.tables) {
          var tmpOutput = res.result.data.tables || [];
          tmpOutput.forEach(function (table) {
            var output = Object(_kusto_utils__WEBPACK_IMPORTED_MODULE_0__["parseTableResult"])(table.columns, table.rows);
            _this.output.columns = output.columns;
            _this.output.rows = [].concat(_this.output.rows, output.rows);
            _this.output.refId = res.query.refId;
          });
        } else if (res.result && res.result.data && res.result.data.data) {
          var tmpOutput = res.result.data.data || {};
          var output = Object(_kusto_utils__WEBPACK_IMPORTED_MODULE_0__["parseTableResult"])(tmpOutput.columns, tmpOutput.rows);
          _this.output.columns = output.columns;
          _this.output.rows = [].concat(_this.output.rows, output.rows);
          _this.output.refId = res.query.refId;
        }
      });
    }
  }

  return KustoResponseParser;
}();



/***/ }),

/***/ "./azure/utils/kusto_utils.ts":
/*!************************************!*\
  !*** ./azure/utils/kusto_utils.ts ***!
  \************************************/
/*! exports provided: isTimeSeriesResults, isTimeSeriesWithoutSeriesName, decideFieldNamesAndPosition, sortTimeSeriesResults, parseTimeSeriesResults, parseTableResult, getResultsAsVariablesList, flattenTableResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeSeriesResults", function() { return isTimeSeriesResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeSeriesWithoutSeriesName", function() { return isTimeSeriesWithoutSeriesName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decideFieldNamesAndPosition", function() { return decideFieldNamesAndPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTimeSeriesResults", function() { return sortTimeSeriesResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTimeSeriesResults", function() { return parseTimeSeriesResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTableResult", function() { return parseTableResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultsAsVariablesList", function() { return getResultsAsVariablesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenTableResults", function() { return flattenTableResults; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var isTimeSeriesResults = function isTimeSeriesResults(results) {
  var formats = [];
  results.forEach(function (res) {
    if (res.result && res.result.data && res.result.data.tables) {
      var tmpOutput = res.result.data.tables || [];
      tmpOutput.forEach(function (table) {
        if (table.columns && table.columns.length === 3 && table.columns.find(function (c) {
          return c.type === 'datetime';
        }) && table.columns.find(function (c) {
          return c.type === 'string';
        }) && table.columns.find(function (c) {
          return c.type === 'long';
        })) {
          formats.push('time_series');
        } else if (table.columns && table.columns.length === 2 && table.columns.find(function (c) {
          return c.type === 'datetime';
        }) && table.columns.find(function (c) {
          return c.type === 'long';
        })) {
          formats.push('time_series');
        } else {
          formats.push('table');
        }
      });
    } else if (res.result && res.result.data && res.result.data.data) {
      formats.push('table');
    }
  });
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["every"])(formats, function (f) {
    return f === 'time_series';
  });
};
var isTimeSeriesWithoutSeriesName = function isTimeSeriesWithoutSeriesName(table) {
  if (table.columns && table.columns.length >= 3 && table.columns.find(function (c) {
    return c.type === 'datetime';
  }) && table.columns.find(function (c) {
    return c.type === 'string';
  }) && table.columns.find(function (c) {
    return c.type === 'long';
  })) {
    return false;
  } else if (table.columns && table.columns.length >= 2 && table.columns.find(function (c) {
    return c.type === 'datetime';
  }) && table.columns.find(function (c) {
    return c.type === 'long';
  })) {
    return true;
  } else {
    return true;
  }
};
var decideFieldNamesAndPosition = function decideFieldNamesAndPosition(table) {
  var fields = {};
  table.columns.forEach(function (column, position) {
    if (column.type === 'datetime') {
      fields.timestamp = {};
      fields.timestamp.name = column.name;
      fields.timestamp.index = position;
    } else if (column.type === 'string') {
      fields.metricname = {};
      fields.metricname.name = column.name;
      fields.metricname.index = position;
    } else if (column.type === 'long') {
      fields.value = {};
      fields.value.name = column.name;
      fields.value.index = position;
    }
  });

  if (isTimeSeriesWithoutSeriesName(table)) {
    fields.metricname = {};
    fields.metricname.name = fields.value.name || 'metric';
    fields.metricname.index = -1;
  }

  return fields;
};
var sortTimeSeriesResults = function sortTimeSeriesResults(output) {
  return output.map(function (o) {
    o.datapoints = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(o.datapoints, [function (o) {
      return o[1];
    }]);
    return o;
  });
};
var parseTimeSeriesResults = function parseTimeSeriesResults(result) {
  var data = [];
  result.forEach(function (res) {
    if (res.result && res.result.data && res.result.data.tables) {
      var tmpOutput = res.result.data.tables || [];
      tmpOutput.forEach(function (table) {
        var fields = decideFieldNamesAndPosition(table);

        if (fields.metricname.index === -1) {
          var series_1 = {};
          series_1.target = fields.value.name;
          series_1.datapoints = [];
          table.rows.forEach(function (row) {
            series_1.datapoints.push([row[fields.value.index], new Date(row[fields.timestamp.index]).getTime()]);
          });
          data.push(series_1);
        } else {
          var uniquenames = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(table.rows.map(function (row) {
            return row[fields.metricname.index];
          }));
          uniquenames.forEach(function (uniquename) {
            var series = {};
            series.target = uniquename;
            series.datapoints = [];
            table.rows.forEach(function (row) {
              if (row[fields.metricname.index] === uniquename) {
                series.datapoints.push([row[fields.value.index], new Date(row[fields.timestamp.index]).getTime()]);
              }
            });
            data.push(series);
          });
        }
      });
    }
  });
  return data;
};
var parseTableResult = function parseTableResult(columns, rows) {
  columns = (columns || []).map(function (column, index) {
    column.text = column.name || index;
    column.type = column.type === 'integer' ? 'number' : column.type || 'string';
    return column;
  });
  rows = (rows || []).map(function (row) {
    return row.map(function (rowItem, index) {
      if (columns[index] && columns[index].type === 'number') {
        return +rowItem;
      } else if (typeof rowItem === 'string') {
        return rowItem;
      } else {
        return JSON.stringify(rowItem);
      }
    });
  });
  var output = {
    columns: columns,
    rows: rows,
    type: 'table'
  };
  return output;
};
var getResultsAsVariablesList = function getResultsAsVariablesList(output) {
  var returnvalues = [];

  if (output && output.rows) {
    output.rows.forEach(function (row) {
      if (row.length === 2) {
        var text = row[0];
        var value = row[1];
        returnvalues.push({
          text: text,
          value: value
        });
      } else {
        row.forEach(function (col) {
          var text = col;
          var value = col;
          returnvalues.push({
            text: text,
            value: value
          });
        });
      }
    });
  }

  return returnvalues;
};
var flattenTableResults = function flattenTableResults(results) {
  var resultsFlattened = results[0] || {};
  resultsFlattened.rows = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(results.map(function (r) {
    return r.rows;
  })));
  return resultsFlattened;
};

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: AzureResourceGraph, AzureApplicationInsights, AzureLogAnalytics, AzureCostAnalysis, supportedServices, CloudNameAzurePublic, CloudNameAzureGov, CloudNameAzureGermany, CloudNameAzureChina, supportedCloudnames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureResourceGraph", function() { return AzureResourceGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureApplicationInsights", function() { return AzureApplicationInsights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureLogAnalytics", function() { return AzureLogAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureCostAnalysis", function() { return AzureCostAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedServices", function() { return supportedServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudNameAzurePublic", function() { return CloudNameAzurePublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudNameAzureGov", function() { return CloudNameAzureGov; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudNameAzureGermany", function() { return CloudNameAzureGermany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudNameAzureChina", function() { return CloudNameAzureChina; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedCloudnames", function() { return supportedCloudnames; });
var AzureResourceGraph = 'Azure Resource Graph';
var AzureApplicationInsights = "Azure Application Insights";
var AzureLogAnalytics = "Azure Log Analytics";
var AzureCostAnalysis = "Azure Cost Analysis";
var supportedServices = [{
  value: AzureResourceGraph,
  label: AzureResourceGraph
}, {
  value: AzureCostAnalysis,
  label: AzureCostAnalysis
}, {
  value: AzureApplicationInsights,
  label: AzureApplicationInsights + ' - unstable'
}, {
  value: AzureLogAnalytics,
  label: AzureLogAnalytics + ' - unstable'
}];
var CloudNameAzurePublic = 'azuremonitor';
var CloudNameAzureGov = 'govazuremonitor';
var CloudNameAzureGermany = 'germanyazuremonitor';
var CloudNameAzureChina = 'chinaazuremonitor';
var supportedCloudnames = [{
  value: CloudNameAzurePublic,
  label: 'Azure'
}, {
  value: CloudNameAzureGov,
  label: 'Azure US Government'
}, {
  value: CloudNameAzureGermany,
  label: 'Azure Germany'
}, {
  value: CloudNameAzureChina,
  label: 'Azure China'
}];

/***/ }),

/***/ "./configEditor.tsx":
/*!**************************!*\
  !*** ./configEditor.tsx ***!
  \**************************/
/*! exports provided: AzureMonitorConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AzureMonitorConfigEditor", function() { return AzureMonitorConfigEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./config.ts");




var supportedCloudnames = _config__WEBPACK_IMPORTED_MODULE_3__["supportedCloudnames"];

var AzureMonitorConfigEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AzureMonitorConfigEditor, _super);

  function AzureMonitorConfigEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onCloudNameChange = function (cloudName) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        cloudName: cloudName.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onTenantIdChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        tenantId: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onClientIdChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;

      var jsonData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.jsonData), {
        clientId: event.target.value
      });

      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        jsonData: jsonData
      }));
    };

    _this.onClientSecretChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        secureJsonData: {
          clientSecret: event.target.value
        }
      }));
    };

    _this.onResetclientSecret = function () {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        secureJsonFields: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonFields), {
          clientSecret: false
        }),
        secureJsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonData), {
          clientSecret: ''
        })
      }));
    };

    return _this;
  }

  AzureMonitorConfigEditor.prototype.render = function () {
    var options = this.props.options;
    var secureJsonData = options.secureJsonData || {};
    options.jsonData.cloudName = options.jsonData.cloudName || 'azuremonitor';
    var jsonData = options.jsonData,
        secureJsonFields = options.secureJsonFields;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      className: "width-10",
      tooltip: "Choose an Azure Cloud Type"
    }, "Cloud Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      className: "width-24",
      value: supportedCloudnames.find(function (cloud) {
        return cloud.value === jsonData.cloudName;
      }),
      options: supportedCloudnames,
      defaultValue: jsonData.cloudName,
      onChange: this.onCloudNameChange
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Tenant ID",
      labelWidth: 10,
      inputWidth: 24,
      onChange: this.onTenantIdChange,
      value: jsonData.tenantId || '',
      placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
      tooltip: "Tenant ID"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Client ID",
      labelWidth: 10,
      inputWidth: 24,
      onChange: this.onClientIdChange,
      value: jsonData.clientId || '',
      placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
      tooltip: "Client ID"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["SecretFormField"], {
      isConfigured: secureJsonFields && secureJsonFields.clientSecret,
      value: secureJsonData.clientSecret || '',
      label: "API Key",
      placeholder: "Client Secret",
      labelWidth: 10,
      inputWidth: 24,
      onReset: this.onResetclientSecret,
      onChange: this.onClientSecretChange
    }))));
  };

  return AzureMonitorConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! exports provided: Datasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return Datasource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _azure_azure_connection_AzureConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./azure/azure_connection/AzureConnection */ "./azure/azure_connection/AzureConnection.ts");
/* harmony import */ var _azure_resource_graph_ResourceGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./azure/resource_graph/ResourceGraph */ "./azure/resource_graph/ResourceGraph.ts");
/* harmony import */ var _azure_application_insights_ApplicationInsights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./azure/application_insights/ApplicationInsights */ "./azure/application_insights/ApplicationInsights.ts");
/* harmony import */ var _azure_log_analytics_LogAnalytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./azure/log_analytics/LogAnalytics */ "./azure/log_analytics/LogAnalytics.ts");
/* harmony import */ var _azure_azure_costanalysis_AzureCostAnalysis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./azure/azure_costanalysis/AzureCostAnalysis */ "./azure/azure_costanalysis/AzureCostAnalysis.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "./config.ts");










var Datasource =
/** @class */
function (_super) {
  Datasource.$inject = ["instanceSettings", "templateSrv"];

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Datasource, _super);
  /** @ngInject */


  function Datasource(instanceSettings, templateSrv) {
    var _this = _super.call(this, instanceSettings) || this;

    _this.instanceSettings = instanceSettings;
    _this.templateSrv = templateSrv;
    var azureConnection = new _azure_azure_connection_AzureConnection__WEBPACK_IMPORTED_MODULE_3__["AzureConnection"](_this.instanceSettings);
    _this.azureResourceGraphDatasource = new _azure_resource_graph_ResourceGraph__WEBPACK_IMPORTED_MODULE_4__["AzureResourceGraphDataSource"](azureConnection, _this.templateSrv);
    _this.azureApplicationInsightsDatasource = new _azure_application_insights_ApplicationInsights__WEBPACK_IMPORTED_MODULE_5__["AzureApplicationInsightsDataSource"](azureConnection, _this.templateSrv);
    _this.azureLogAnalyticsDatasource = new _azure_log_analytics_LogAnalytics__WEBPACK_IMPORTED_MODULE_6__["AzureLogAnalyticsDataSource"](azureConnection, _this.templateSrv);
    _this.azureConstAnalysisDatasource = new _azure_azure_costanalysis_AzureCostAnalysis__WEBPACK_IMPORTED_MODULE_7__["AzureCostAnalysisDataSource"](azureConnection, _this.templateSrv);
    return _this;
  }

  Datasource.prototype.query = function (options) {
    var promises = [];
    var azureResourceGraphOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(options);
    azureResourceGraphOptions.targets = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(azureResourceGraphOptions.targets, ['queryType', _config__WEBPACK_IMPORTED_MODULE_8__["AzureResourceGraph"]]);

    if (azureResourceGraphOptions.targets.length > 0) {
      var argPromise = this.azureResourceGraphDatasource.query(azureResourceGraphOptions);

      if (argPromise) {
        promises.push(argPromise);
      }
    }

    var azureAppInsightsOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(options);
    azureAppInsightsOptions.targets = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(azureAppInsightsOptions.targets, ['queryType', _config__WEBPACK_IMPORTED_MODULE_8__["AzureApplicationInsights"]]);

    if (azureAppInsightsOptions.targets.length > 0) {
      var argPromise = this.azureApplicationInsightsDatasource.query(azureAppInsightsOptions);

      if (argPromise) {
        promises.push(argPromise);
      }
    }

    var azureLogAnalyticsOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(options);
    azureLogAnalyticsOptions.targets = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(azureLogAnalyticsOptions.targets, ['queryType', _config__WEBPACK_IMPORTED_MODULE_8__["AzureLogAnalytics"]]);

    if (azureLogAnalyticsOptions.targets.length > 0) {
      var argPromise = this.azureLogAnalyticsDatasource.query(azureLogAnalyticsOptions);

      if (argPromise) {
        promises.push(argPromise);
      }
    }

    var azureCostAnalysisOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(options);
    azureCostAnalysisOptions.targets = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(azureCostAnalysisOptions.targets, ['queryType', _config__WEBPACK_IMPORTED_MODULE_8__["AzureCostAnalysis"]]);

    if (azureCostAnalysisOptions.targets.length > 0) {
      var acmPromise = this.azureConstAnalysisDatasource.query(azureCostAnalysisOptions);

      if (acmPromise) {
        promises.push(acmPromise);
      }
    }

    return Promise.all(promises).then(function (results) {
      return {
        data: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(results)
      };
    });
  };

  Datasource.prototype.testDatasource = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var azureConnection, result, error_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2,, 3]);

              azureConnection = new _azure_azure_connection_AzureConnection__WEBPACK_IMPORTED_MODULE_3__["AzureConnection"](this.instanceSettings);
              return [4
              /*yield*/
              , azureConnection.getSubscriptions()];

            case 1:
              result = _a.sent();

              if (result && result.length > 0) {
                resolve({
                  message: 'Successfully Connected Azure Monitor',
                  status: 'success'
                });
              } else {
                reject({
                  message: 'Failed to retrieve subscriptions',
                  status: 'error'
                });
              }

              return [3
              /*break*/
              , 3];

            case 2:
              error_1 = _a.sent();
              reject({
                message: 'Failed to Connect',
                status: 'error'
              });
              return [3
              /*break*/
              , 3];

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    });
  };

  Datasource.prototype.metricFindQuery = function (query) {
    if (!query) {
      return Promise.resolve([]);
    }

    var argResult = this.azureResourceGraphDatasource.metricFindQuery(query);

    if (argResult) {
      return argResult;
    }

    return Promise.resolve([]);
  };

  return Datasource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["DataSourceApi"]);



/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony import */ var _configEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configEditor */ "./configEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryEditor */ "./QueryEditor.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_1__["Datasource"]).setConfigEditor(_configEditor__WEBPACK_IMPORTED_MODULE_2__["AzureMonitorConfigEditor"]).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["AzureMonitorQueryEditor"]);

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map