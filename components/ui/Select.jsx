"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireDefault(require("react"));
var _lucideReact = require("lucide-react");
var _excluded = ["label", "options", "error", "fullWidth", "className", "id"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Select = exports.Select = function Select(_ref) {
  var label = _ref.label,
    options = _ref.options,
    error = _ref.error,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    id = _ref.id,
    props = _objectWithoutProperties(_ref, _excluded);
  var selectId = id || "select-".concat(Math.random().toString(36).substring(2, 9));
  var widthClass = fullWidth ? 'w-full' : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(widthClass, " ").concat(className)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: selectId,
    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative rounded-md shadow-sm"
  }, /*#__PURE__*/_react["default"].createElement("select", _extends({
    id: selectId,
    className: "\n            ".concat(widthClass, "\n            appearance-none pl-4 pr-10 py-2 bg-white dark:bg-gray-900 \n            border border-gray-300 dark:border-gray-700 rounded-md shadow-sm \n            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 \n            sm:text-sm dark:text-white\n            ").concat(error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '', "\n          ")
  }, props), options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.ChevronDown, {
    className: "h-4 w-4 text-gray-400 dark:text-gray-500"
  }))), error && /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-1 text-sm text-red-600 dark:text-red-500"
  }, error));
};