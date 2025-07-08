"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportDownload = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Card = require("../ui/Card");
var _Button = require("../ui/Button");
var _lucideReact = require("lucide-react");
var _formatters = require("../../utils/formatters");
var _exportPdf = require("../../utils/exportPdf");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ReportDownload = exports.ReportDownload = function ReportDownload(_ref) {
  var transactions = _ref.transactions,
    categories = _ref.categories,
    budgets = _ref.budgets,
    user = _ref.user,
    month = _ref.month,
    year = _ref.year;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDownloading = _useState2[0],
    setIsDownloading = _useState2[1];

  // Filter transactions for the selected month
  var monthlyTransactions = transactions.filter(function (t) {
    var transactionDate = new Date(t.date);
    return transactionDate.getMonth() === month && transactionDate.getFullYear() === year;
  });
  var downloadReport = function downloadReport() {
    setIsDownloading(true);
    try {
      (0, _exportPdf.exportTransactionsAsPdf)(monthlyTransactions, categories, user, month, year);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.FileText, {
    className: "h-6 w-6 text-gray-600 dark:text-gray-400 mr-3"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-medium text-gray-900 dark:text-white"
  }, "Monthly Report"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-400"
  }, "Download your financial report for ", (0, _formatters.formatMonth)(month, year)))), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.DownloadCloud, {
      className: "h-5 w-5"
    }),
    onClick: downloadReport,
    loading: isDownloading,
    disabled: monthlyTransactions.length === 0
  }, "Download PDF")));
};