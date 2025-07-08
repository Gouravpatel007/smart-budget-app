"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
var _Card = require("../ui/Card");
var _Button = require("../ui/Button");
var _Input = require("../ui/Input");
var _formatters = require("../../utils/formatters");
var _Select = require("../ui/Select");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TransactionList = exports.TransactionList = function TransactionList(_ref) {
  var transactions = _ref.transactions,
    categories = _ref.categories,
    dateRange = _ref.dateRange,
    onEdit = _ref.onEdit,
    onDelete = _ref.onDelete;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0, _react.useState)('all'),
    _useState4 = _slicedToArray(_useState3, 2),
    typeFilter = _useState4[0],
    setTypeFilter = _useState4[1];
  var _useState5 = (0, _react.useState)('all'),
    _useState6 = _slicedToArray(_useState5, 2),
    categoryFilter = _useState6[0],
    setCategoryFilter = _useState6[1];
  var _useState7 = (0, _react.useState)('date'),
    _useState8 = _slicedToArray(_useState7, 2),
    sortField = _useState8[0],
    setSortField = _useState8[1];
  var _useState9 = (0, _react.useState)('desc'),
    _useState0 = _slicedToArray(_useState9, 2),
    sortDirection = _useState0[0],
    setSortDirection = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isFilterOpen = _useState10[0],
    setIsFilterOpen = _useState10[1];

  // Filter and sort transactions
  var filteredTransactions = (0, _react.useMemo)(function () {
    var results = _toConsumableArray(transactions).filter(function (transaction) {
      var isInDateRange = new Date(transaction.date) >= dateRange.startDate && new Date(transaction.date) <= dateRange.endDate;
      var matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
      var matchesType = typeFilter === 'all' ? true : transaction.type === typeFilter;
      var matchesCategory = categoryFilter === 'all' ? true : transaction.categoryId === categoryFilter;
      return isInDateRange && matchesSearch && matchesType && matchesCategory;
    });

    // Sort results
    results.sort(function (a, b) {
      if (sortField === 'date') {
        return sortDirection === 'desc' ? new Date(b.date).getTime() - new Date(a.date).getTime() : new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortField === 'amount') {
        return sortDirection === 'desc' ? b.amount - a.amount : a.amount - b.amount;
      }
      if (sortField === 'category') {
        var _categories$find, _categories$find2;
        var catA = ((_categories$find = categories.find(function (c) {
          return c.id === a.categoryId;
        })) === null || _categories$find === void 0 ? void 0 : _categories$find.name) || '';
        var catB = ((_categories$find2 = categories.find(function (c) {
          return c.id === b.categoryId;
        })) === null || _categories$find2 === void 0 ? void 0 : _categories$find2.name) || '';
        return sortDirection === 'desc' ? catB.localeCompare(catA) : catA.localeCompare(catB);
      }
      return 0;
    });
    return results;
  }, [transactions, dateRange, searchTerm, typeFilter, categoryFilter, sortField, sortDirection, categories]);

  // Get category by ID
  var getCategoryById = function getCategoryById(id) {
    return categories.find(function (cat) {
      return cat.id === id;
    });
  };

  // Toggle sort direction
  var toggleSort = function toggleSort(field) {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Get sort icon
  var getSortIcon = function getSortIcon(field) {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? '↑' : '↓';
  };
  var toggleFilters = function toggleFilters() {
    setIsFilterOpen(!isFilterOpen);
  };
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4 flex flex-col md:flex-row gap-4 justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex-1"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    placeholder: "Search transactions...",
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    },
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Search, {
      className: "h-5 w-5 text-gray-400"
    })
  })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "outline",
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Filter, {
      className: "h-5 w-5"
    }),
    onClick: toggleFilters
  }, "Filters")), isFilterOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    label: "Type",
    value: typeFilter,
    onChange: function onChange(e) {
      return setTypeFilter(e.target.value);
    },
    options: [{
      value: 'all',
      label: 'All Transactions'
    }, {
      value: 'income',
      label: 'Income Only'
    }, {
      value: 'expense',
      label: 'Expenses Only'
    }]
  }), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    label: "Category",
    value: categoryFilter,
    onChange: function onChange(e) {
      return setCategoryFilter(e.target.value);
    },
    options: [{
      value: 'all',
      label: 'All Categories'
    }].concat(_toConsumableArray(categories.map(function (cat) {
      return {
        value: cat.id,
        label: cat.name
      };
    })))
  }), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    label: "Sort By",
    value: "".concat(sortField, "-").concat(sortDirection),
    onChange: function onChange(e) {
      var _e$target$value$split = e.target.value.split('-'),
        _e$target$value$split2 = _slicedToArray(_e$target$value$split, 2),
        field = _e$target$value$split2[0],
        direction = _e$target$value$split2[1];
      setSortField(field);
      setSortDirection(direction);
    },
    options: [{
      value: 'date-desc',
      label: 'Date (Newest First)'
    }, {
      value: 'date-asc',
      label: 'Date (Oldest First)'
    }, {
      value: 'amount-desc',
      label: 'Amount (Highest First)'
    }, {
      value: 'amount-asc',
      label: 'Amount (Lowest First)'
    }, {
      value: 'category-asc',
      label: 'Category (A-Z)'
    }, {
      value: 'category-desc',
      label: 'Category (Z-A)'
    }]
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("thead", {
    className: "bg-gray-50 dark:bg-gray-800"
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",
    onClick: function onClick() {
      return toggleSort('date');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Date"), getSortIcon('date') && /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-1"
  }, getSortIcon('date')))), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Description"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",
    onClick: function onClick() {
      return toggleSort('category');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Category"), getSortIcon('category') && /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-1"
  }, getSortIcon('category')))), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",
    onClick: function onClick() {
      return toggleSort('amount');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-end"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Amount"), getSortIcon('amount') && /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-1"
  }, getSortIcon('amount')))), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
  }, "Actions"))), /*#__PURE__*/_react["default"].createElement("tbody", {
    className: "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800"
  }, filteredTransactions.length > 0 ? filteredTransactions.map(function (transaction) {
    var category = getCategoryById(transaction.categoryId);
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: transaction.id,
      className: "hover:bg-gray-50 dark:hover:bg-gray-800"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
    }, (0, _formatters.formatDate)(transaction.date)), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"
    }, (0, _formatters.truncateText)(transaction.description, 30)), /*#__PURE__*/_react["default"].createElement("td", {
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
    }, (0, _formatters.formatCurrency)(transaction.amount)))), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 text-right"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center justify-end space-x-2"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return onEdit(transaction);
      },
      className: "text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-300"
    }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Edit2, {
      className: "h-4 w-4"
    })), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return onDelete(transaction.id);
      },
      className: "text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-300"
    }, /*#__PURE__*/_react["default"].createElement(_lucideReact.Trash2, {
      className: "h-4 w-4"
    })))));
  }) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: 5,
    className: "px-4 py-6 text-center text-gray-500 dark:text-gray-400"
  }, "No transactions found"))))));
};