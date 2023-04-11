module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/PrereqDashboard.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ExportTable.jsx":
/*!*****************************!*\
  !*** ./src/ExportTable.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splunk/react-ui/Table */ "@splunk/react-ui/Table");
/* harmony import */ var _splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/splunk/prereq_page/packages/prereq-dashboard/src/ExportTable.jsx",
  _this = undefined;


var ExportTable = function ExportTable(_ref) {
  var dependencyApps = _ref.dependencyApps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default.a.Head, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default.a.HeadCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Present"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default.a.HeadCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Apps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, dependencyApps.map(function (row, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default.a.Row, {
      data: row,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default.a.Cell, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, row.Present), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_1___default.a.Cell, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, row.App));
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ExportTable);

/***/ }),

/***/ "./src/PrereqDashboard.jsx":
/*!*********************************!*\
  !*** ./src/PrereqDashboard.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _splunk_react_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splunk/react-ui/Button */ "@splunk/react-ui/Button");
/* harmony import */ var _splunk_react_ui_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @splunk/react-ui/Heading */ "@splunk/react-ui/Heading");
/* harmony import */ var _splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @splunk/react-ui/List */ "@splunk/react-ui/List");
/* harmony import */ var _splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _splunk_react_ui_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @splunk/react-ui/Link */ "@splunk/react-ui/Link");
/* harmony import */ var _splunk_react_ui_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @splunk/react-ui/Table */ "@splunk/react-ui/Table");
/* harmony import */ var _splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ExportTable_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExportTable.jsx */ "./src/ExportTable.jsx");
/* harmony import */ var _splunk_splunk_utils_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @splunk/splunk-utils/fetch */ "@splunk/splunk-utils/fetch");
/* harmony import */ var _splunk_splunk_utils_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_splunk_splunk_utils_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _splunk_react_ui_Markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @splunk/react-ui/Markdown */ "@splunk/react-ui/Markdown");
/* harmony import */ var _splunk_react_ui_Markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_splunk_react_ui_Markdown__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _jsxFileName = "/home/splunk/prereq_page/packages/prereq-dashboard/src/PrereqDashboard.jsx",
  _this = undefined;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










// import { defaultFetchInit, handleResponse, handleError } from '@splunk/splunk-utils/fetch';

var appsEndpoint = '/en-US/splunkd/__raw/servicesNS/nobody/system/apps/local/'; // this is the endpoint that will get us in the apps list
function getApps() {
  return _getApps.apply(this, arguments);
}
function _getApps() {
  _getApps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var fetchInit, n;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // this function will fetch a list of apps from the apps endpoint
          fetchInit = _splunk_splunk_utils_fetch__WEBPACK_IMPORTED_MODULE_7__["defaultFetchInit"]; // from splunk-utils API
          fetchInit.method = 'GET';
          _context.next = 4;
          return fetch("".concat(appsEndpoint, "?output_mode=json&count=100"), _objectSpread({}, fetchInit)).then(Object(_splunk_splunk_utils_fetch__WEBPACK_IMPORTED_MODULE_7__["handleResponse"])(200));
        case 4:
          n = _context.sent;
          return _context.abrupt("return", n);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getApps.apply(this, arguments);
}
function updateAppConf() {
  return _updateAppConf.apply(this, arguments);
}
function _updateAppConf() {
  _updateAppConf = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var fetchInit, n;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // function to update app.conf is_configured property to true when password is successfully added
          fetchInit = _splunk_splunk_utils_fetch__WEBPACK_IMPORTED_MODULE_7__["defaultFetchInit"]; // from splunk-utils API
          fetchInit.method = 'POST';
          _context2.next = 4;
          return fetch("".concat(appsEndpoint, "/ta-csnf"), _objectSpread(_objectSpread({}, fetchInit), {}, {
            body: 'configured=true' // update the configured property
          }));
        case 4:
          n = _context2.sent;
          return _context2.abrupt("return", n);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _updateAppConf.apply(this, arguments);
}
var DependencyCheck = function DependencyCheck() {
  // create state variables using state hooks
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
    _useState2 = _slicedToArray(_useState, 2),
    appsList = _useState2[0],
    setAppsList = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
      'Present': 0,
      'App': 'Splunk_TA_aws'
    }, {
      'Present': 0,
      'App': 'splunk_app_oci'
    }, {
      'Present': 0,
      'App': 'Splunk_TA_MS_Security'
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    dependencyApps = _useState4[0],
    setDependencyApps = _useState4[1];

  // the app we want to check against
  var dependency = ['Splunk_TA_aws', 'splunk_app_oci', 'Splunk_TA_MS_Security'];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // get our app data from the getApps function after rendering for the first time
    getApps().then(function (r) {
      var list = r.entry.map(function (entry) {
        return entry.name;
      });
      setAppsList(list);
    });
  }, []); // useEffect only runs once due to the empty array

  var valuesList = [];
  var checkDependency = function checkDependency() {
    // this function checks whether or not our dependency is in our apps list, if so then update app.conf to complete setup and reload the app

    for (var appItem = 0; appItem < dependency.length; appItem++) {
      if (appsList.includes(dependency[appItem])) {
        valuesList.push({
          'Present': 1,
          'App': dependency[appItem]
        });
        if (appItem == dependency.length - 1) {
          var present = valuesList.map(function (_ref) {
            var Present = _ref.Present;
            return Present;
          });
          var allPresent = present.every(function (item) {
            return item === 1;
          });
          if (allPresent) {
            console.log("successful");
            updateAppConf().then(function (r) {
              if (r.status >= 200 && r.status <= 299) {
                // if app.conf is successfully updated, then reload the page
                window.location.href = '/en-US/app/ta-csnf/csnf_home';
              }
            });
          } else {
            console.log("Not setup yet");
          }
        }
      } else {
        valuesList.push({
          'Present': 0,
          'App': dependency[appItem]
        });
        console.log('error');
      }
    }
    setDependencyApps(valuesList);
  };
  return (
    /*#__PURE__*/
    // create the UI for the Setup Page
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
      level: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, "TA-CSNF Setup Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExportTable_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      dependencyApps: dependencyApps,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
      level: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 25
      }
    }, "Summary"), "Use the Splunk Add-on for CSNF to ingest security events normalized to the Cloud Security Notification Framework (CSNF). The Splunk CSNF Add-on offers support for multiple Cloud providers and integrates with your existing Splunk security landing zone to deliver powerful security searches, dashboards and analytics, allowing you to secure your multi-Cloud security practice in minutes.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
      level: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    }, "Mappings for AWS GuardDuty, Microsoft Security Center and Oracle Cloudguard security events. GCP SCC event integration is coming soon."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 29
      }
    }, "With a single click, implement multi-cloud security searches into Splunk Enterprise or Enterprise Security"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    }, "Filter to identify all security types by threat categories, keywords, sourcetypes, or kill chain phases"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 29
      }
    }, "CSNF advanced data model management to simplify administration")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
      level: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, "Installation:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
      text: "1. Download the app. \n 2. Log in to your Splunk instance. \n  3. Click the 'Manage Apps' gear icon located above your installed apps. \n 4. Click 'Install app from file'. \n 5. Click the 'Browse' button and select the CSNF App install file that you downloaded. \n 6. If you already have the CSNF App installed, check the 'Upgrade app' button. Otherwise, leave this unchecked. \n 7. Click the 'Upload' button. \n 8. You will be required to restart Splunk. Once Splunk has been restarted you may enjoy your new app!",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
      level: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    }, "Application Dependencies:"), "At least one of the following are required:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      to: "https://splunkbase.splunk.com/app/1876",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 29
      }
    }, "Splunk Add-on for Amazon Web Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      to: "https://splunkbase.splunk.com/app/6207",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 29
      }
    }, "Splunk Add-on for Microsoft Security")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_List__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      to: "https://splunkbase.splunk.com/app/5289",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 29
      }
    }, "OCI (Oracle Cloud Infrastructure) App for Splunk"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Heading__WEBPACK_IMPORTED_MODULE_2___default.a, {
      level: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 25
      }
    }, "Flow Diagram:"), "Below Flow Diagram provides a pictorial representation of the data flow that takes place from GuardDuty to Splunk. It will help you to provide a concrete understanding during the configuration of the CSNF Splunk App.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/app/ta-csnf/images/csnf_flow_diagram.png",
      alt: "csnf flow diagram",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_splunk_react_ui_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "submit",
      label: "Perform Setup Check",
      name: "setup_button",
      onClick: checkDependency // complete setup by running the password click function
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "error output",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 25
      }
    })))))
  );
};
/* harmony default export */ __webpack_exports__["default"] = (DependencyCheck);

/***/ }),

/***/ "@splunk/react-ui/Button":
/*!******************************************!*\
  !*** external "@splunk/react-ui/Button" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Button");

/***/ }),

/***/ "@splunk/react-ui/Heading":
/*!*******************************************!*\
  !*** external "@splunk/react-ui/Heading" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Heading");

/***/ }),

/***/ "@splunk/react-ui/Link":
/*!****************************************!*\
  !*** external "@splunk/react-ui/Link" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Link");

/***/ }),

/***/ "@splunk/react-ui/List":
/*!****************************************!*\
  !*** external "@splunk/react-ui/List" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/List");

/***/ }),

/***/ "@splunk/react-ui/Markdown":
/*!********************************************!*\
  !*** external "@splunk/react-ui/Markdown" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Markdown");

/***/ }),

/***/ "@splunk/react-ui/Table":
/*!*****************************************!*\
  !*** external "@splunk/react-ui/Table" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@splunk/react-ui/Table");

/***/ }),

/***/ "@splunk/splunk-utils/fetch":
/*!*********************************************!*\
  !*** external "@splunk/splunk-utils/fetch" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@splunk/splunk-utils/fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });