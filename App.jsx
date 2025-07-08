"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _HomePage = require("./pages/HomePage");
var _LoginPage = require("./pages/LoginPage");
var _RegisterPage = require("./pages/RegisterPage");
var _DashboardPage = require("./pages/DashboardPage");
var _TransactionsPage = require("./pages/TransactionsPage");
var _BudgetsPage = require("./pages/BudgetsPage");
var _ReportPage = require("./pages/ReportPage");
var _ProfilePage = require("./pages/ProfilePage");
var _Header = require("./components/layout/Header");
var _Footer = require("./components/layout/Footer");
var _ThemeContext = require("./context/ThemeContext");
var _AuthContext = require("./context/AuthContext");
var _BudgetContext = require("./context/BudgetContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Protected route component
var ProtectedRoute = function ProtectedRoute(_ref) {
  var children = _ref.children;
  var _useAuth = (0, _AuthContext.useAuth)(),
    isAuthenticated = _useAuth.isAuthenticated,
    isLoading = _useAuth.isLoading;
  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 dark:border-emerald-500"
    }));
  }
  if (!isAuthenticated) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
      to: "/login",
      replace: true
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};

// App component with context providers
function AppWithProviders() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
  }, /*#__PURE__*/_react["default"].createElement(_Header.Header, null), /*#__PURE__*/_react["default"].createElement("main", {
    className: "flex-1"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_HomePage.HomePage, null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/login",
    element: /*#__PURE__*/_react["default"].createElement(_LoginPage.LoginPage, null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/register",
    element: /*#__PURE__*/_react["default"].createElement(_RegisterPage.RegisterPage, null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/_react["default"].createElement(ProtectedRoute, null, /*#__PURE__*/_react["default"].createElement(_DashboardPage.DashboardPage, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/transactions",
    element: /*#__PURE__*/_react["default"].createElement(ProtectedRoute, null, /*#__PURE__*/_react["default"].createElement(_TransactionsPage.TransactionsPage, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/budgets",
    element: /*#__PURE__*/_react["default"].createElement(ProtectedRoute, null, /*#__PURE__*/_react["default"].createElement(_BudgetsPage.BudgetsPage, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/reports",
    element: /*#__PURE__*/_react["default"].createElement(ProtectedRoute, null, /*#__PURE__*/_react["default"].createElement(_ReportPage.ReportPage, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/profile",
    element: /*#__PURE__*/_react["default"].createElement(ProtectedRoute, null, /*#__PURE__*/_react["default"].createElement(_ProfilePage.ProfilePage, null))
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "*",
    element: /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Navigate, {
      to: "/"
    })
  }))), /*#__PURE__*/_react["default"].createElement(_Footer.Footer, null));
}

// Main App component
function App() {
  return /*#__PURE__*/_react["default"].createElement(_ThemeContext.ThemeProvider, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_AuthContext.AuthProvider, null, /*#__PURE__*/_react["default"].createElement(_BudgetContext.BudgetProvider, null, /*#__PURE__*/_react["default"].createElement(AppWithProviders, null)))));
}
var _default = exports["default"] = App;