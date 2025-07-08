"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecentTransactions = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = require("../ui/Card");
var _formatters = require("../../utils/formatters");
var _lucideReact = require("lucide-react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var RecentTransactions = exports.RecentTransactions = function RecentTransactions(_ref) {
  var transactions = _ref.transactions,
    categories = _ref.categories,
    _ref$limit = _ref.limit,
    limit = _ref$limit === void 0 ? 5 : _ref$limit;
  // Sort transactions by date (newest first) and limit
  var recentTransactions = _toConsumableArray(transactions).sort(function (a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, limit);

  // Find category by ID
  var getCategoryById = function getCategoryById(id) {
    return categories.find(function (cat) {
      return cat.id === id;
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    title: "Recent Transactions"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-hidden"
  }, recentTransactions.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("thead", {
    className: "bg-gray-50 dark:bg-gray-800"
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Date"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Description"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Category"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Amount"))), /*#__PURE__*/_react["default"].createElement("tbody", {
    className: "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800"
  }, recentTransactions.map(function (transaction) {
    var category = getCategoryById(transaction.categoryId);
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: transaction.id,
      className: "hover:bg-gray-50 dark:hover:bg-gray-800"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
    }, (0, _formatters.formatDate)(transaction.date)), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"
    }, (0, _formatters.truncateText)(transaction.description, 20)), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
      style: {
        backgroundColor: category ? "".concat(category.color, "20") : '#e5e7eb',
        color: category ? category.color : '#4b5563'
      }
    }, category ? category.name : 'Unknown')), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm font-medium text-right"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center justify-end"
    }, transaction.type === 'income' ? /*#__PURE__*/_react["default"].createElement(_lucideReact.ArrowUpRight, {
      className: "h-3 w-3 text-green-600 dark:text-green-500 mr-1"
    }) : /*#__PURE__*/_react["default"].createElement(_lucideReact.ArrowDownRight, {
      className: "h-3 w-3 text-red-600 dark:text-red-500 mr-1"
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: transaction.type === 'income' ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'
    }, (0, _formatters.formatCurrency)(transaction.amount)))));
  })))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-8 text-center text-gray-500 dark:text-gray-400"
  }, "No recent transactions")));
};