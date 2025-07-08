"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Card = require("../ui/Card");
var _formatters = require("../../utils/formatters");
var _lucideReact = require("lucide-react");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var BudgetList = exports.BudgetList = function BudgetList(_ref) {
  var budgets = _ref.budgets,
    categories = _ref.categories,
    transactions = _ref.transactions,
    onEdit = _ref.onEdit,
    onDelete = _ref.onDelete,
    month = _ref.month,
    year = _ref.year;
  // Filter budgets for the current month/year
  var currentBudgets = (0, _react.useMemo)(function () {
    return budgets.filter(function (budget) {
      return budget.month === month && budget.year === year;
    });
  }, [budgets, month, year]);

  // Calculate total budget
  var totalBudget = (0, _react.useMemo)(function () {
    return currentBudgets.reduce(function (total, budget) {
      return total + budget.amount;
    }, 0);
  }, [currentBudgets]);

  // Calculate expenses for each category
  var getCategoryExpenses = function getCategoryExpenses(categoryId) {
    var startDate = new Date(year, month, 1);
    var endDate = new Date(year, month + 1, 0);
    return transactions.filter(function (t) {
      return t.categoryId === categoryId && t.type === 'expense' && new Date(t.date) >= startDate && new Date(t.date) <= endDate;
    }).reduce(function (sum, t) {
      return sum + t.amount;
    }, 0);
  };

  // Calculate total expenses
  var totalExpenses = (0, _react.useMemo)(function () {
    var startDate = new Date(year, month, 1);
    var endDate = new Date(year, month + 1, 0);
    return transactions.filter(function (t) {
      return t.type === 'expense' && new Date(t.date) >= startDate && new Date(t.date) <= endDate;
    }).reduce(function (sum, t) {
      return sum + t.amount;
    }, 0);
  }, [transactions, month, year]);

  // Get category by ID
  var getCategoryById = function getCategoryById(id) {
    return categories.find(function (cat) {
      return cat.id === id;
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    title: "Budget for ".concat((0, _formatters.formatMonth)(month, year))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("thead", {
    className: "bg-gray-50 dark:bg-gray-800"
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Category"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Budget"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Spent"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Remaining"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Progress"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Actions"))), /*#__PURE__*/_react["default"].createElement("tbody", {
    className: "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800"
  }, currentBudgets.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, currentBudgets.map(function (budget) {
    var category = getCategoryById(budget.categoryId);
    var spent = getCategoryExpenses(budget.categoryId);
    var remaining = Math.max(0, budget.amount - spent);
    var percentage = budget.amount > 0 ? Math.min(100, spent / budget.amount * 100) : 0;
    var progressColor = percentage < 60 ? 'bg-green-600' : percentage < 90 ? 'bg-amber-500' : 'bg-red-600';
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: budget.id,
      className: "hover:bg-gray-50 dark:hover:bg-gray-800"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
      style: {
        backgroundColor: category ? "".concat(category.color, "20") : '#e5e7eb',
        color: category ? category.color : '#4b5563'
      }
    }, category ? category.name : 'Unknown')), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white text-right"
    }, (0, _formatters.formatCurrency)(budget.amount)), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white text-right"
    }, (0, _formatters.formatCurrency)(spent)), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white text-right"
    }, (0, _formatters.formatCurrency)(remaining)), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center space-x-2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "h-2 rounded-full ".concat(progressColor),
      style: {
        width: "".concat(percentage, "%")
      }
    })), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-xs"
    }, Math.round(percentage), "%"))), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 text-right"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center justify-end space-x-2"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return onEdit(budget);
      },
      className: "text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-300"
    }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Edit2, {
      className: "h-4 w-4"
    })), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return onDelete(budget.id);
      },
      className: "text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-300"
    }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Trash2, {
      className: "h-4 w-4"
    })))));
  }), /*#__PURE__*/_react["default"].createElement("tr", {
    className: "bg-gray-50 dark:bg-gray-800 font-medium"
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white"
  }, "Total"), /*#__PURE__*/_react["default"].createElement("td", {
    className: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white text-right"
  }, (0, _formatters.formatCurrency)(totalBudget)), /*#__PURE__*/_react["default"].createElement("td", {
    className: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white text-right"
  }, (0, _formatters.formatCurrency)(totalExpenses)), /*#__PURE__*/_react["default"].createElement("td", {
    className: "px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white text-right"
  }, (0, _formatters.formatCurrency)(Math.max(0, totalBudget - totalExpenses))), /*#__PURE__*/_react["default"].createElement("td", {
    className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-2 rounded-full ".concat(totalBudget > 0 ? totalExpenses / totalBudget < 0.6 ? 'bg-green-600' : totalExpenses / totalBudget < 0.9 ? 'bg-amber-500' : 'bg-red-600' : 'bg-gray-400'),
    style: {
      width: totalBudget > 0 ? "".concat(Math.min(100, totalExpenses / totalBudget * 100), "%") : '0%'
    }
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs"
  }, totalBudget > 0 ? Math.round(totalExpenses / totalBudget * 100) : 0, "%"))), /*#__PURE__*/_react["default"].createElement("td", {
    className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 text-right"
  }))) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: 6,
    className: "px-4 py-6 text-center text-gray-500 dark:text-gray-400"
  }, "No budgets set for this month"))))));
};