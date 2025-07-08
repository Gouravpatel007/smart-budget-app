"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangeFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../ui/Button");
var _Card = require("../ui/Card");
var _dateFns = require("date-fns");
var _lucideReact = require("lucide-react");
var _defaults = require("../../utils/defaults");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DateRangeFilter = exports.DateRangeFilter = function DateRangeFilter(_ref) {
  var dateRange = _ref.dateRange,
    onChange = _ref.onChange;
  var handleRangeChange = function handleRangeChange(type) {
    onChange((0, _defaults.getDefaultDateRange)(type));
  };
  var handleStartDateChange = function handleStartDateChange(e) {
    var newStartDate = new Date(e.target.value);
    onChange(_objectSpread(_objectSpread({}, dateRange), {}, {
      startDate: newStartDate,
      label: 'custom'
    }));
  };
  var handleEndDateChange = function handleEndDateChange(e) {
    var newEndDate = new Date(e.target.value);
    newEndDate.setHours(23, 59, 59, 999); // Set to end of day
    onChange(_objectSpread(_objectSpread({}, dateRange), {}, {
      endDate: newEndDate,
      label: 'custom'
    }));
  };
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "p-0 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col sm:flex-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700 p-4"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
  }, "Quick Filters"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: dateRange.label === 'daily' ? 'primary' : 'outline',
    onClick: function onClick() {
      return handleRangeChange('daily');
    }
  }, "Today"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: dateRange.label === 'weekly' ? 'primary' : 'outline',
    onClick: function onClick() {
      return handleRangeChange('weekly');
    }
  }, "This Week"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: dateRange.label === 'monthly' ? 'primary' : 'outline',
    onClick: function onClick() {
      return handleRangeChange('monthly');
    }
  }, "This Month"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 p-4"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
  }, "Custom Range"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1"
  }, "Start Date"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "date",
    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white text-sm",
    value: (0, _dateFns.format)(dateRange.startDate, 'yyyy-MM-dd'),
    onChange: handleStartDateChange,
    max: (0, _dateFns.format)(dateRange.endDate, 'yyyy-MM-dd')
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1"
  }, "End Date"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "date",
    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white text-sm",
    value: (0, _dateFns.format)(dateRange.endDate, 'yyyy-MM-dd'),
    onChange: handleEndDateChange,
    min: (0, _dateFns.format)(dateRange.startDate, 'yyyy-MM-dd')
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-3 bg-gray-50 dark:bg-gray-800 flex items-center border-t border-gray-200 dark:border-gray-700"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.CalendarRange, {
    className: "h-4 w-4 text-gray-500 dark:text-gray-400 mr-2"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm text-gray-700 dark:text-gray-300"
  }, (0, _dateFns.format)(dateRange.startDate, 'MMM d, yyyy'), " - ", (0, _dateFns.format)(dateRange.endDate, 'MMM d, yyyy'))));
};