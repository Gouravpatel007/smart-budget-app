"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["label", "error", "leftIcon", "rightIcon", "fullWidth", "className", "id"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Input = exports.Input = function Input(_ref) {
  var label = _ref.label,
    error = _ref.error,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    id = _ref.id,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputId = id || "input-".concat(Math.random().toString(36).substring(2, 9));
  var widthClass = fullWidth ? 'w-full' : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(widthClass, " ").concat(className)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: inputId,
    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative rounded-md shadow-sm"
  }, leftIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, leftIcon), /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: inputId,
    className: "\n            ".concat(widthClass, "\n            ").concat(leftIcon ? 'pl-10' : 'pl-4', "\n            ").concat(rightIcon ? 'pr-10' : 'pr-4', "\n            py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 \n            rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 \n            focus:border-emerald-500 sm:text-sm\n            ").concat(error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '', "\n            dark:text-white\n          ")
  }, props)), rightIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
  }, rightIcon)), error && /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-1 text-sm text-red-600 dark:text-red-500"
  }, error));
};