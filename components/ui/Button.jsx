"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["children", "variant", "size", "fullWidth", "leftIcon", "rightIcon", "loading", "disabled", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Button = exports.Button = function Button(_ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    disabled = _ref.disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded);
  var variantClasses = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm',
    secondary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800',
    outline: 'bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800'
  };
  var sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  var baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50';
  var widthClass = fullWidth ? 'w-full' : '';
  var disabledClass = disabled || loading ? 'opacity-60 cursor-not-allowed' : '';
  var focusRingColor = {
    primary: 'focus:ring-emerald-500',
    secondary: 'focus:ring-indigo-500',
    danger: 'focus:ring-red-500',
    ghost: 'focus:ring-gray-500',
    outline: 'focus:ring-gray-500'
  };
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: "\n        ".concat(baseClasses, "\n        ").concat(variantClasses[variant], "\n        ").concat(sizeClasses[size], "\n        ").concat(widthClass, "\n        ").concat(disabledClass, "\n        ").concat(focusRingColor[variant], "\n        ").concat(className, "\n      "),
    disabled: disabled || loading
  }, props), loading && /*#__PURE__*/_react["default"].createElement("svg", {
    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })), !loading && leftIcon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "mr-2"
  }, leftIcon), children, !loading && rightIcon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2"
  }, rightIcon));
};