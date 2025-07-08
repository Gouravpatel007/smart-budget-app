"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BudgetSummary = require("../components/dashboard/BudgetSummary");
var _SpendingChart = require("../components/dashboard/SpendingChart");
var _RecentTransactions = require("../components/dashboard/RecentTransactions");
var _DateRangeFilter = require("../components/transactions/DateRangeFilter");
var _BudgetContext = require("../context/BudgetContext");
var _AuthContext = require("../context/AuthContext");
var _localStorage = require("../utils/localStorage");
var _fakeData = require("../utils/fakeData");
var _Card = require("../components/ui/Card");
var _Button = require("../components/ui/Button");
var _lucideReact = require("lucide-react");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DashboardPage = exports.DashboardPage = function DashboardPage() {
  var _useAuth = (0, _AuthContext.useAuth)(),
    user = _useAuth.user;
  var _useBudget = (0, _BudgetContext.useBudget)(),
    transactions = _useBudget.transactions,
    budgets = _useBudget.budgets,
    categories = _useBudget.categories,
    filterOptions = _useBudget.filterOptions,
    setFilterOptions = _useBudget.setFilterOptions,
    refreshData = _useBudget.refreshData;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasDemoData = _useState4[0],
    setHasDemoData = _useState4[1];

  // Check if user has any transactions
  (0, _react.useEffect)(function () {
    if (user) {
      var userTransactions = (0, _localStorage.getTransactions)(user.id);
      setHasDemoData(userTransactions.length > 0);
    }
  }, [user, transactions]);

  // Generate demo data for new users
  var generateDemoData = function generateDemoData() {
    if (!user) return;
    setIsLoading(true);
    try {
      // Generate fake transactions
      var fakeTransactions = (0, _fakeData.generateFakeTransactions)(user.id, 30);

      // Add fake transactions to localStorage
      fakeTransactions.forEach(function (transaction) {
        (0, _localStorage.createTransaction)({
          amount: transaction.amount,
          description: transaction.description,
          date: transaction.date,
          categoryId: transaction.categoryId,
          type: transaction.type,
          userId: user.id
        });
      });

      // Generate fake budgets
      var fakeBudgets = (0, _fakeData.generateFakeBudgets)(user.id);

      // Add fake budgets to localStorage
      fakeBudgets.forEach(function (budget) {
        (0, _localStorage.createBudget)({
          amount: budget.amount,
          month: budget.month,
          year: budget.year,
          categoryId: budget.categoryId,
          userId: user.id
        });
      });

      // Refresh data
      refreshData();
      setHasDemoData(true);
    } catch (error) {
      console.error('Error generating demo data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold text-gray-900 dark:text-white mb-2"
  }, "Dashboard"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 dark:text-gray-400"
  }, "Welcome back! Here's an overview of your finances.")), !hasDemoData && /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "mb-8 bg-amber-50 dark:bg-amber-900 dark:bg-opacity-20 border border-amber-200 dark:border-amber-800"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col sm:flex-row items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4 sm:mb-0"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-medium text-amber-800 dark:text-amber-500 mb-1"
  }, "No transactions yet"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-amber-700 dark:text-amber-400"
  }, "Add your first transaction or generate demo data to see how your dashboard will look.")), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Zap, {
      className: "h-5 w-5"
    }),
    onClick: generateDemoData,
    loading: isLoading
  }, "Generate Demo Data"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lg:col-span-3"
  }, /*#__PURE__*/_react["default"].createElement(_DateRangeFilter.DateRangeFilter, {
    dateRange: filterOptions.dateRange,
    onChange: function onChange(dateRange) {
      return setFilterOptions(_objectSpread(_objectSpread({}, filterOptions), {}, {
        dateRange: dateRange
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lg:col-span-3"
  }, /*#__PURE__*/_react["default"].createElement(_BudgetSummary.BudgetSummary, {
    transactions: transactions,
    budgets: budgets,
    dateRange: filterOptions.dateRange
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lg:col-span-2 space-y-8"
  }, /*#__PURE__*/_react["default"].createElement(_SpendingChart.SpendingChart, {
    transactions: transactions,
    categories: categories,
    dateRange: filterOptions.dateRange
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/_react["default"].createElement(_RecentTransactions.RecentTransactions, {
    transactions: transactions,
    categories: categories
  }))));
};