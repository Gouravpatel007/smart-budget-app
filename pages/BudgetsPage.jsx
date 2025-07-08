"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetsPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BudgetList = require("../components/budget/BudgetList");
var _BudgetForm = require("../components/budget/BudgetForm");
var _MonthPicker = require("../components/budget/MonthPicker");
var _Modal = require("../components/ui/Modal");
var _BudgetContext = require("../context/BudgetContext");
var _AuthContext = require("../context/AuthContext");
var _localStorage = require("../utils/localStorage");
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
var BudgetsPage = exports.BudgetsPage = function BudgetsPage() {
  var _useAuth = (0, _AuthContext.useAuth)(),
    user = _useAuth.user;
  var _useBudget = (0, _BudgetContext.useBudget)(),
    transactions = _useBudget.transactions,
    budgets = _useBudget.budgets,
    categories = _useBudget.categories,
    refreshData = _useBudget.refreshData;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFormOpen = _useState2[0],
    setIsFormOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    editingBudget = _useState4[0],
    setEditingBudget = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    confirmDelete = _useState6[0],
    setConfirmDelete = _useState6[1];

  // Set current month and year
  var today = new Date();
  var _useState7 = (0, _react.useState)(today.getMonth()),
    _useState8 = _slicedToArray(_useState7, 2),
    month = _useState8[0],
    setMonth = _useState8[1];
  var _useState9 = (0, _react.useState)(today.getFullYear()),
    _useState0 = _slicedToArray(_useState9, 2),
    year = _useState0[0],
    setYear = _useState0[1];

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

  // Open form modal for adding new budget
  var openAddForm = function openAddForm() {
    setEditingBudget(null);
    setIsFormOpen(true);
  };

  // Open form modal for editing budget
  var openEditForm = function openEditForm(budget) {
    setEditingBudget(budget);
    setIsFormOpen(true);
  };

  // Close form modal
  var closeForm = function closeForm() {
    setIsFormOpen(false);
    setEditingBudget(null);
  };

  // Open confirm delete modal
  var openConfirmDelete = function openConfirmDelete(id) {
    setConfirmDelete(id);
  };

  // Close confirm delete modal
  var closeConfirmDelete = function closeConfirmDelete() {
    setConfirmDelete(null);
  };

  // Handle form submission
  var handleSubmitBudget = function handleSubmitBudget(budgetData) {
    if (editingBudget) {
      // Update existing budget
      (0, _localStorage.updateBudget)(_objectSpread(_objectSpread({}, budgetData), {}, {
        id: editingBudget.id
      }));
    } else {
      // Create new budget
      (0, _localStorage.createBudget)(budgetData);
    }
    refreshData();
    closeForm();
  };

  // Handle budget deletion
  var handleDeleteBudget = function handleDeleteBudget() {
    if (confirmDelete) {
      (0, _localStorage.deleteBudget)(confirmDelete);
      refreshData();
      closeConfirmDelete();
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold text-gray-900 dark:text-white mb-2"
  }, "Budgets"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 dark:text-gray-400"
  }, "Set and manage your monthly budgets")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 sm:mt-0"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Plus, {
      className: "h-5 w-5"
    }),
    onClick: openAddForm
  }, "Add Budget"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 gap-8"
  }, /*#__PURE__*/_react["default"].createElement(_MonthPicker.MonthPicker, {
    month: month,
    year: year,
    onPrevious: goToPreviousMonth,
    onNext: goToNextMonth,
    onReset: resetToCurrentMonth
  }), /*#__PURE__*/_react["default"].createElement(_BudgetList.BudgetList, {
    budgets: budgets,
    categories: categories,
    transactions: transactions,
    onEdit: openEditForm,
    onDelete: openConfirmDelete,
    month: month,
    year: year
  })), /*#__PURE__*/_react["default"].createElement(_Modal.Modal, {
    isOpen: isFormOpen,
    onClose: closeForm,
    title: editingBudget ? 'Edit Budget' : 'Add Budget',
    size: "md"
  }, user && /*#__PURE__*/_react["default"].createElement(_BudgetForm.BudgetForm, {
    onSubmit: handleSubmitBudget,
    categories: categories,
    editingBudget: editingBudget,
    userId: user.id,
    month: month,
    year: year,
    existingBudgets: budgets.filter(function (b) {
      return b.month === month && b.year === year;
    })
  })), /*#__PURE__*/_react["default"].createElement(_Modal.Modal, {
    isOpen: confirmDelete !== null,
    onClose: closeConfirmDelete,
    title: "Confirm Delete",
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-4"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 dark:text-gray-300"
  }, "Are you sure you want to delete this budget? This action cannot be undone."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-6 flex justify-end space-x-3"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "ghost",
    onClick: closeConfirmDelete
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "danger",
    onClick: handleDeleteBudget
  }, "Delete")))));
};