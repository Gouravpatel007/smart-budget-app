"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeToggle = void 0;
var _react = _interopRequireDefault(require("react"));
var _lucideReact = require("lucide-react");
var _ThemeContext = require("../../context/ThemeContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ThemeToggle = exports.ThemeToggle = function ThemeToggle() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme,
    toggleTheme = _useTheme.toggleTheme;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleTheme,
    className: "p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700",
    "aria-label": theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  }, theme === 'dark' ? /*#__PURE__*/_react["default"].createElement(_lucideReact.Sun, {
    className: "h-5 w-5 text-yellow-400"
  }) : /*#__PURE__*/_react["default"].createElement(_lucideReact.Moon, {
    className: "h-5 w-5 text-indigo-600"
  }));
};