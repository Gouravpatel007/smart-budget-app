"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _chart = require("chart.js");
var _reactChartjs = require("react-chartjs-2");
var _Card = require("../components/ui/Card");
var _MonthPicker = require("../components/budget/MonthPicker");
var _ReportDownload = require("../components/reports/ReportDownload");
var _BudgetContext = require("../context/BudgetContext");
var _AuthContext = require("../context/AuthContext");
var _helpers = require("../utils/helpers");
var _formatters = require("../utils/formatters");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_chart.Chart.register(_chart.CategoryScale, _chart.LinearScale, _chart.BarElement, _chart.Title, _chart.Tooltip, _chart.Legend);
var ReportPage = exports.ReportPage = function ReportPage() {
  var _useAuth = (0, _AuthContext.useAuth)(),
    user = _useAuth.user;
  var _useBudget = (0, _BudgetContext.useBudget)(),
    transactions = _useBudget.transactions,
    categories = _useBudget.categories,
    budgets = _useBudget.budgets;

  // Set current month and year
  var today = new Date();
  var _useState = (0, _react.useState)(today.getMonth()),
    _useState2 = _slicedToArray(_useState, 2),
    month = _useState2[0],
    setMonth = _useState2[1];
  var _useState3 = (0, _react.useState)(today.getFullYear()),
    _useState4 = _slicedToArray(_useState3, 2),
    year = _useState4[0],
    setYear = _useState4[1];

  // Go to previous month
  var goToPreviousMonth = function goToPreviousMonth() {
    setMonth(function (prevMonth) {
      if (prevMonth === 0) {
        setYear(function (prevYear) {
          return prevYear - 1;
        });
        return 11;
      }
      return prevMonth - 1;
    });
  };

  // Go to next month
  var goToNextMonth = function goToNextMonth() {
    setMonth(function (prevMonth) {
      if (prevMonth === 11) {
        setYear(function (prevYear) {
          return prevYear + 1;
        });
        return 0;
      }
      return prevMonth + 1;
    });
  };

  // Reset to current month
  var resetToCurrentMonth = function resetToCurrentMonth() {
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  };

  // Filter transactions for the selected month
  var monthlyTransactions = transactions.filter(function (t) {
    var transactionDate = new Date(t.date);
    return transactionDate.getMonth() === month && transactionDate.getFullYear() === year;
  });

  // Calculate total income and expenses for the month
  var totalIncome = monthlyTransactions.filter(function (t) {
    return t.type === 'income';
  }).reduce(function (sum, t) {
    return sum + t.amount;
  }, 0);
  var totalExpenses = monthlyTransactions.filter(function (t) {
    return t.type === 'expense';
  }).reduce(function (sum, t) {
    return sum + t.amount;
  }, 0);

  // Calculate expenses by category
  var expensesByCategory = categories.reduce(function (acc, category) {
    var amount = monthlyTransactions.filter(function (t) {
      return t.categoryId === category.id && t.type === 'expense';
    }).reduce(function (sum, t) {
      return sum + t.amount;
    }, 0);
    if (amount > 0) {
      acc[category.name] = amount;
    }
    return acc;
  }, {});

  // Calculate monthly comparison data
  var generateMonthlyData = function generateMonthlyData() {
    var labels = (0, _helpers.generateMonthlyLabels)();
    var incomeData = Array(12).fill(0);
    var expenseData = Array(12).fill(0);
    transactions.forEach(function (transaction) {
      var date = new Date(transaction.date);
      var monthIndex = date.getMonth();
      if (date.getFullYear() === year) {
        if (transaction.type === 'income') {
          incomeData[monthIndex] += transaction.amount;
        } else {
          expenseData[monthIndex] += transaction.amount;
        }
      }
    });
    return {
      labels: labels,
      datasets: [{
        label: 'Income',
        data: incomeData,
        backgroundColor: '#10B981'
      }, {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: '#EF4444'
      }]
    };
  };
  var monthlyData = generateMonthlyData();
  var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function label(context) {
            var label = context.dataset.label || '';
            var value = context.raw || 0;
            return "".concat(label, ": ").concat((0, _formatters.formatCurrency)(value));
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function callback(value) {
            return (0, _formatters.formatCurrency)(value, 'en-US', 'USD', 0);
          }
        }
      }
    }
  };

  // Calculate top spending categories
  var topCategories = Object.entries(expensesByCategory).sort(function (a, b) {
    return b[1] - a[1];
  }).slice(0, 5);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold text-gray-900 dark:text-white mb-2"
  }, "Reports"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 dark:text-gray-400"
  }, "View and download your financial reports")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 gap-8"
  }, /*#__PURE__*/_react["default"].createElement(_MonthPicker.MonthPicker, {
    month: month,
    year: year,
    onPrevious: goToPreviousMonth,
    onNext: goToNextMonth,
    onReset: resetToCurrentMonth
  }), user && /*#__PURE__*/_react["default"].createElement(_ReportDownload.ReportDownload, {
    transactions: transactions,
    categories: categories,
    budgets: budgets,
    user: user,
    month: month,
    year: year
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-8"
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "lg:col-span-2"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-medium text-gray-900 dark:text-white mb-4"
  }, "Income vs Expenses (", year, ")"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-80"
  }, /*#__PURE__*/_react["default"].createElement(_reactChartjs.Bar, {
    data: monthlyData,
    options: chartOptions
  }))), /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-medium text-gray-900 dark:text-white mb-4"
  }, "Monthly Summary"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-400"
  }, "Total Income"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xl font-semibold text-green-600 dark:text-green-500"
  }, (0, _formatters.formatCurrency)(totalIncome))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-400"
  }, "Total Expenses"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xl font-semibold text-red-600 dark:text-red-500"
  }, (0, _formatters.formatCurrency)(totalExpenses))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-400"
  }, "Net Savings"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xl font-semibold ".concat(totalIncome - totalExpenses >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500')
  }, (0, _formatters.formatCurrency)(totalIncome - totalExpenses))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-4 border-t border-gray-200 dark:border-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "text-base font-medium text-gray-900 dark:text-white mb-2"
  }, "Top Spending Categories"), topCategories.length > 0 ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: "space-y-2"
  }, topCategories.map(function (_ref, index) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      amount = _ref2[1];
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: "flex justify-between items-center"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-sm text-gray-700 dark:text-gray-300"
    }, name), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-sm font-medium text-gray-900 dark:text-white"
    }, (0, _formatters.formatCurrency)(amount)));
  })) : /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-400"
  }, "No expenses recorded for this month")))))));
};