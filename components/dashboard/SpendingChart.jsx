"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpendingChart = void 0;
var _react = _interopRequireDefault(require("react"));
var _chart = require("chart.js");
var _reactChartjs = require("react-chartjs-2");
var _Card = require("../ui/Card");
var _helpers = require("../../utils/helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_chart.Chart.register(_chart.ArcElement, _chart.Tooltip, _chart.Legend);
var SpendingChart = exports.SpendingChart = function SpendingChart(_ref) {
  var transactions = _ref.transactions,
    categories = _ref.categories,
    dateRange = _ref.dateRange;
  var _getCategoryData = (0, _helpers.getCategoryData)(transactions, categories, dateRange),
    labels = _getCategoryData.labels,
    data = _getCategoryData.data,
    backgroundColor = _getCategoryData.backgroundColor;
  var chartData = {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: backgroundColor,
      borderColor: backgroundColor.map(function () {
        return '#ffffff';
      }),
      borderWidth: 1
    }]
  };
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 11
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function label(context) {
            var label = context.label || '';
            var value = context.raw || 0;
            var total = context.chart.data.datasets[0].data.reduce(function (a, b) {
              return a + b;
            }, 0);
            var percentage = Math.round(value / total * 100);
            return "".concat(label, ": $").concat(value.toFixed(2), " (").concat(percentage, "%)");
          }
        }
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    title: "Spending by Category"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-64"
  }, data.length > 0 ? /*#__PURE__*/_react["default"].createElement(_reactChartjs.Pie, {
    data: chartData,
    options: options
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-full flex items-center justify-center text-gray-500 dark:text-gray-400"
  }, "No data available for the selected period")));
};