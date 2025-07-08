"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _lucideReact = require("lucide-react");
var _ThemeToggle = require("../ui/ThemeToggle");
var _AuthContext = require("../../context/AuthContext");
var _Button = require("../ui/Button");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Header = exports.Header = function Header() {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isMenuOpen = _React$useState2[0],
    setIsMenuOpen = _React$useState2[1];
  var _useAuth = (0, _AuthContext.useAuth)(),
    isAuthenticated = _useAuth.isAuthenticated,
    user = _useAuth.user,
    logout = _useAuth.logout;
  var location = (0, _reactRouterDom.useLocation)();
  var toggleMenu = function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  };
  var closeMenu = function closeMenu() {
    setIsMenuOpen(false);
  };
  var handleLogout = function handleLogout() {
    logout();
    closeMenu();
  };
  var navLinks = [{
    path: '/dashboard',
    label: 'Dashboard',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.BarChart2, {
      className: "h-5 w-5"
    })
  }, {
    path: '/transactions',
    label: 'Transactions',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.DollarSign, {
      className: "h-5 w-5"
    })
  }, {
    path: '/budgets',
    label: 'Budgets',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.PieChart, {
      className: "h-5 w-5"
    })
  }, {
    path: '/profile',
    label: 'Profile',
    icon: /*#__PURE__*/_react["default"].createElement(_lucideReact.User, {
      className: "h-5 w-5"
    })
  }];
  var isActive = function isActive(path) {
    return location.pathname === path;
  };
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10 transition-colors duration-200"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between h-16"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/",
    className: "flex-shrink-0 flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.DollarSign, {
    className: "h-8 w-8 text-emerald-600 dark:text-emerald-500"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2 text-xl font-bold text-gray-900 dark:text-white"
  }, "SmartBudget"))), isAuthenticated && /*#__PURE__*/_react["default"].createElement("nav", {
    className: "hidden md:flex space-x-8 items-center"
  }, navLinks.map(function (link) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      key: link.path,
      to: link.path,
      className: "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ".concat(isActive(link.path) ? 'text-emerald-600 dark:text-emerald-500 border-b-2 border-emerald-500' : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500')
    }, link.icon, /*#__PURE__*/_react["default"].createElement("span", {
      className: "ml-1"
    }, link.label));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-4 flex items-center space-x-4"
  }, /*#__PURE__*/_react["default"].createElement(_ThemeToggle.ThemeToggle, null), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "ghost",
    size: "sm",
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.LogOut, {
      className: "h-5 w-5"
    }),
    onClick: handleLogout
  }, "Logout"))), !isAuthenticated && /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden md:flex items-center space-x-4"
  }, /*#__PURE__*/_react["default"].createElement(_ThemeToggle.ThemeToggle, null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/login"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "ghost",
    size: "sm"
  }, "Login")), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/register"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "primary",
    size: "sm"
  }, "Sign Up"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center md:hidden"
  }, /*#__PURE__*/_react["default"].createElement(_ThemeToggle.ThemeToggle, null), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleMenu,
    className: "inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Open main menu"), isMenuOpen ? /*#__PURE__*/_react["default"].createElement(_lucideReact.X, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /*#__PURE__*/_react["default"].createElement(_lucideReact.Menu, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))))), isMenuOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full transition-all duration-200 transform ease-in-out"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-2 pb-3 space-y-1"
  }, isAuthenticated ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, navLinks.map(function (link) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      key: link.path,
      to: link.path,
      onClick: closeMenu,
      className: "block pl-3 pr-4 py-2 text-base font-medium ".concat(isActive(link.path) ? 'text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-900 dark:bg-opacity-10 border-l-4 border-emerald-500' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800')
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center"
    }, link.icon, /*#__PURE__*/_react["default"].createElement("span", {
      className: "ml-2"
    }, link.label)));
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleLogout,
    className: "w-full text-left block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.LogOut, {
    className: "h-5 w-5"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2"
  }, "Logout")))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/login",
    onClick: closeMenu,
    className: "block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
  }, "Login"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/register",
    onClick: closeMenu,
    className: "block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
  }, "Sign Up")))));
};