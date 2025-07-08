"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthPicker = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = require("../ui/Card");
var _Button = require("../ui/Button");
var _lucideReact = require("lucide-react");
var _formatters = require("../../utils/formatters");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MonthPicker = exports.MonthPicker = function MonthPicker(_ref) {
  var month = _ref.month,
    year = _ref.year,
    onPrevious = _ref.onPrevious,
    onNext = _ref.onNext,
    onReset = _ref.onReset;
  var isCurrentMonth = function isCurrentMonth() {
    var now = new Date();
    return month === now.getMonth() && year === now.getFullYear();
  };
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "ghost",
    onClick: onPrevious,
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.ChevronLeft, {
      className: "h-5 w-5"
    }),
    "aria-label": "Previous month"
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-lg font-medium text-gray-900 dark:text-white"
  }, (0, _formatters.formatMonth)(month, year)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex space-x-2"
  }, !isCurrentMonth() && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "outline",
    size: "sm",
    onClick: onReset
  }, "Today"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "ghost",
    onClick: onNext,
    rightIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.ChevronRight, {
      className: "h-5 w-5"
    }),
    "aria-label": "Next month"
  }, "Next"))));
};