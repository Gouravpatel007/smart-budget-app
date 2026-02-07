"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Card = require("../ui/Card");
var _Input = require("../ui/Input");
var _Button = require("../ui/Button");
var _Select = require("../ui/Select");
var _lucideReact = require("lucide-react");
var _formatters = require("../../utils/formatters");

function _interopRequireWildcard(e, t) { 
             if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); 
                    return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { 
                            if (!t && e && e.__esModule) return e; 
                              var o, i, f = { __proto__: null, "default": e }; 
                      
                      if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; 
                      if (o = t ? n : r) { 
                                  if (o.has(e)) return o.get(e); o.set(e, f); 
                      } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); 
}
function _slicedToArray(r, e) { 
            return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); 
}
function _nonIterableRest() { 
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); 
}
function _unsupportedIterableToArray(r, a) { 
            if (r) { if ("string" == typeof r) 
              return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); 
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } 
}
function _arrayLikeToArray(r, a) { 
  (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; 
}
function _iterableToArrayLimit(r, l) { 
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; }
}
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useEffect, useState } from 'react';

var BudgetForm = exports.BudgetForm = function BudgetForm(_ref) {
  var onSubmit = _ref.onSubmit,
    categories = _ref.categories,
    editingBudget = _ref.editingBudget,
    userId = _ref.userId,
    month = _ref.month,
    year = _ref.year,
    existingBudgets = _ref.existingBudgets;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    amount = _useState2[0],
    setAmount = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    categoryId = _useState4[0],
    setCategoryId = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  var eligibleCategories = categories.filter(function (cat) {
    return cat.name !== 'Income';
  });
  var availableCategories = eligibleCategories.filter(function (cat) {
    if (editingBudget && editingBudget.categoryId === cat.id) {
      return true;
    }
    return !existingBudgets.some(function (budget) {
      return budget.categoryId === cat.id && budget.month === month && budget.year === year;
    });
  });
  (0, _react.useEffect)(function () {
    if (editingBudget) {
      setAmount(editingBudget.amount.toString());
      setCategoryId(editingBudget.categoryId);
    } else {
      setAmount('');
      setCategoryId(availableCategories.length > 0 ? availableCategories[0].id : '');
    }
  }, [editingBudget, availableCategories]);
  var validateForm = function validateForm() {
    var newErrors = {};
    if (!amount) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number';
    }
    if (!categoryId) {
      newErrors.categoryId = 'Category is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    onSubmit({
      amount: parseFloat(amount),
      month: month,
      year: year,
      categoryId: categoryId,
      userId: userId
    });
    if (!editingBudget) {
      setAmount('');
      if (availableCategories.length > 0) {
        setCategoryId(availableCategories[0].id);
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    title: editingBudget ? 'Edit Budget' : 'Add Budget'
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    type: "text",
    label: "Month",
    value: (0, _formatters.formatMonth)(month, year),
    disabled: true,
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Calendar, {
      className: "h-5 w-5 text-gray-400"
    })
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    label: "Category",
    value: categoryId,
    onChange: function onChange(e) {
      return setCategoryId(e.target.value);
    },
    options: editingBudget ? eligibleCategories.filter(function (cat) {
      return cat.id === editingBudget.categoryId;
    }).map(function (cat) {
      return {
        value: cat.id,
        label: cat.name
      };
    }) : availableCategories.map(function (cat) {
      return {
        value: cat.id,
        label: cat.name
      };
    }),
    error: errors.categoryId,
    disabled: editingBudget !== null || availableCategories.length === 0,
    required: true
  }), availableCategories.length === 0 && !editingBudget && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs text-amber-600 dark:text-amber-500 mt-1"
  }, "All categories already have budgets for this month")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    type: "number",
    label: "Budget Amount",
    placeholder: "0.00",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    step: "0.01",
    min: "0",
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.DollarSign, {
      className: "h-5 w-5 text-gray-400"
    }),
    error: errors.amount,
    disabled: availableCategories.length === 0 && !editingBudget,
    required: true
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end space-x-2"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    type: "submit",
    leftIcon: editingBudget ? /*#__PURE__*/_react["default"].createElement(_lucideReact.Archive, null) : /*#__PURE__*/_react["default"].createElement(_lucideReact.Plus, null),
    disabled: availableCategories.length === 0 && !editingBudget
  }, editingBudget ? 'Update Budget' : 'Add Budget'))));
};
