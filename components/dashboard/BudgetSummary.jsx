"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetSummary = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = require("../ui/Card");
var _lucideReact = require("lucide-react");
var _helpers = require("../../utils/helpers");
var _formatters = require("../../utils/formatters");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var BudgetSummary = exports.BudgetSummary = function BudgetSummary(_ref) {
  var transactions = _ref.transactions,
    budgets = _ref.budgets,
    dateRange = _ref.dateRange;
  // Calculate totals
  var totalIncome = (0, _helpers.calculateTotalIncome)(transactions, dateRange);
  var totalExpenses = (0, _helpers.calculateTotalExpense)(transactions, dateRange);
  var balance = totalIncome - totalExpenses;

  // Calculate total budget
  var totalBudget = budgets.reduce(function (sum, budget) {
    return sum + budget.amount;
  }, 0);
  var budgetUsage = totalBudget > 0 ? Math.min(100, totalExpenses / totalBudget * 100) : 0;

  // Style classes
  var getBalanceColorClass = function getBalanceColorClass() {
    if (balance > 0) return 'text-green-600 dark:text-green-500';
    if (balance < 0) return 'text-red-600 dark:text-red-500';
    return 'text-gray-500 dark:text-gray-400';
  };
  var getBudgetStatusClass = function getBudgetStatusClass() {
    if (budgetUsage < 60) return 'text-green-600 dark:text-green-500';
    if (budgetUsage < 90) return 'text-amber-600 dark:text-amber-500';
    return 'text-red-600 dark:text-red-500';
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-4"
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "flex flex-col justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-700 dark:text-gray-300"
  }, "Income"), /*#__PURE__*/_react["default"].createElement(_lucideReact.ArrowUpRight, {
    className: "h-5 w-5 text-green-600 dark:text-green-500"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-2xl font-semibold text-gray-900 dark:text-white"
  }, (0, _formatters.formatCurrency)(totalIncome))), /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "flex flex-col justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-700 dark:text-gray-300"
  }, "Expenses"), /*#__PURE__*/_react["default"].createElement(_lucideReact.ArrowDownRight, {
    className: "h-5 w-5 text-red-600 dark:text-red-500"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-2xl font-semibold text-gray-900 dark:text-white"
  }, (0, _formatters.formatCurrency)(totalExpenses))), /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "flex flex-col justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-700 dark:text-gray-300"
  }, "Balance"), /*#__PURE__*/_react["default"].createElement(_lucideReact.Wallet, {
    className: "h-5 w-5 text-gray-600 dark:text-gray-400"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-2xl font-semibold ".concat(getBalanceColorClass())
  }, (0, _formatters.formatCurrency)(balance))), /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "md:col-span-3"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
  }, "Budget Status"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col space-y-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-700 dark:text-gray-300"
  }, "Overall Budget"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm font-medium ".concat(getBudgetStatusClass())
  }, (0, _formatters.formatPercentage)(budgetUsage))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-2.5 rounded-full ".concat(budgetUsage < 60 ? 'bg-green-600' : budgetUsage < 90 ? 'bg-amber-500' : 'bg-red-600'),
    style: {
      width: "".concat(budgetUsage, "%")
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between text-xs text-gray-500 dark:text-gray-400"
  }, /*#__PURE__*/_react["default"].createElement("span", null, (0, _formatters.formatCurrency)(totalExpenses)), /*#__PURE__*/_react["default"].createElement("span", null, (0, _formatters.formatCurrency)(totalBudget))))));
};