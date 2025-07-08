"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Card = exports.Card = function Card(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    title = _ref.title,
    subtitle = _ref.subtitle,
    footer = _ref.footer,
    _ref$hover = _ref.hover,
    hover = _ref$hover === void 0 ? false : _ref$hover;
  var hoverClass = hover ? 'hover:shadow-md transition-shadow duration-200' : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden ".concat(hoverClass, " ").concat(className)
  }, (title || subtitle) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700"
  }, title && /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
  }, title), subtitle && /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400"
  }, subtitle)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-5 sm:p-6"
  }, children), footer && /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-4 sm:px-6 border-t border-gray-200 dark:border-gray-700"
  }, footer));
};