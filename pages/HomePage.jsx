"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Button = require("../components/ui/Button");
var _lucideReact = require("lucide-react");
var _Card = require("../components/ui/Card");
var _ThemeContext = require("../context/ThemeContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HomePage = exports.HomePage = function HomePage() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var features = [{
    title: 'Expense Tracking',
    description: 'Easily record and categorize your daily expenses and income',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.DollarSign, {
      className: "h-6 w-6 text-emerald-600 dark:text-emerald-500"
    })
  }, {
    title: 'Budget Management',
    description: 'Set monthly budgets for different categories and track your progress',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.PieChart, {
      className: "h-6 w-6 text-indigo-600 dark:text-indigo-500"
    })
  }, {
    title: 'Visual Reports',
    description: 'Understand your spending habits with interactive charts and reports',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.BarChart2, {
      className: "h-6 w-6 text-amber-600 dark:text-amber-500"
    })
  }, {
    title: 'Secure Data',
    description: 'Your financial data is securely stored and private',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Shield, {
      className: "h-6 w-6 text-red-600 dark:text-red-500"
    })
  }, {
    title: 'Downloadable Reports',
    description: 'Export your financial summaries as PDF documents',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.BookOpen, {
      className: "h-6 w-6 text-blue-600 dark:text-blue-500"
    })
  }, {
    title: 'Smart Insights',
    description: 'Get personalized tips to improve your financial health',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Zap, {
      className: "h-6 w-6 text-purple-600 dark:text-purple-500"
    })
  }];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "relative flex-1 bg-gradient-to-br from-emerald-500 to-indigo-700 dark:from-emerald-900 dark:to-indigo-900"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 opacity-10",
    style: {
      backgroundImage: "url('https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "block"
  }, "Take Control of Your"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "block text-yellow-400"
  }, "Financial Future")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-6 max-w-xl mx-auto text-xl text-gray-100"
  }, "Smart Budget helps you track expenses, manage budgets, and reach your financial goals with intuitive tools and insightful reports."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/register"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "lg",
    className: "px-8"
  }, "Get Started")), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/login"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "lg",
    variant: "outline",
    className: "px-8 bg-white/10 text-white border-white/30 hover:bg-white/20"
  }, "Login")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute bottom-0 left-0 right-0 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 1200 120",
    preserveAspectRatio: "none",
    className: "relative block w-full h-16 text-white dark:text-gray-900",
    fill: "currentColor"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
  })))), /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-white dark:bg-gray-900 py-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center mb-16"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-3xl font-bold text-gray-900 dark:text-white"
  }, "Features that Empower Your Finances"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-4 text-lg text-gray-600 dark:text-gray-400"
  }, "Everything you need to manage your money more effectively")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, features.map(function (feature, index) {
    return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
      key: index,
      hover: true,
      className: "h-full transition-all duration-300 transform hover:-translate-y-1"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col h-full"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "p-3 rounded-full bg-gray-100 dark:bg-gray-800 self-start mb-4"
    }, feature.icon), /*#__PURE__*/_react["default"].createElement("h3", {
      className: "text-xl font-medium text-gray-900 dark:text-white mb-2"
    }, feature.title), /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-600 dark:text-gray-400 flex-1"
    }, feature.description)));
  })))), /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-gray-100 dark:bg-gray-800 py-16"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-800 dark:to-emerald-800 rounded-xl shadow-xl overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-3xl font-extrabold text-white sm:text-4xl"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "block"
  }, "Ready to start?"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "block"
  }, "Create your account today")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-4 text-lg leading-6 text-indigo-100"
  }, "Join thousands of users who are taking control of their finances with Smart Budget.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-8 lg:mt-0 lg:ml-8 flex flex-shrink-0"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/register"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "lg",
    className: "px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-700"
  }, "Sign Up Now"))))))), /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-white dark:bg-gray-900 py-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center mb-16"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-3xl font-bold text-gray-900 dark:text-white"
  }, "What Our Users Say"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-4 text-lg text-gray-600 dark:text-gray-400"
  }, "Smart Budget has helped thousands take control of their finances")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "bg-gray-50 dark:bg-gray-800"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 dark:text-gray-400 italic mb-6"
  }, "\"Smart Budget has completely changed how I manage my money. I've saved more in the last 3 months than I did all last year!\""), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-auto"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-medium text-gray-900 dark:text-white"
  }, "Sarah J."), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-400"
  }, "Marketing Specialist")))), /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "bg-gray-50 dark:bg-gray-800"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 dark:text-gray-400 italic mb-6"
  }, "\"The visual reports make it so easy to see where my money is going. I was able to cut unnecessary expenses and save for a vacation!\""), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-auto"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-medium text-gray-900 dark:text-white"
  }, "Mark T."), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-400"
  }, "Software Engineer")))), /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "bg-gray-50 dark:bg-gray-800"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 dark:text-gray-400 italic mb-6"
  }, "\"As a freelancer with variable income, Smart Budget helps me plan ahead and ensure I'm prepared for slower months.\""), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-auto"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-medium text-gray-900 dark:text-white"
  }, "Lisa M."), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500 dark:text-gray-400"
  }, "Freelance Designer"))))))));
};