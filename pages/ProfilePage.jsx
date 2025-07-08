"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePage = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = require("../components/ui/Card");
var _Button = require("../components/ui/Button");
var _lucideReact = require("lucide-react");
var _AuthContext = require("../context/AuthContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ProfilePage = exports.ProfilePage = function ProfilePage() {
  var _useAuth = (0, _AuthContext.useAuth)(),
    user = _useAuth.user,
    logout = _useAuth.logout;
  if (!user) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    }, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-center py-6"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-700 dark:text-gray-300"
    }, "You need to be logged in to view your profile."))));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold text-gray-900 dark:text-white mb-2"
  }, "Profile"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 dark:text-gray-400"
  }, "Manage your account settings")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lg:col-span-3"
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col sm:flex-row gap-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-shrink-0 flex items-center justify-center"
  }, user.avatar ? /*#__PURE__*/_react["default"].createElement("img", {
    src: user.avatar,
    alt: user.name,
    className: "h-24 w-24 rounded-full object-cover"
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.User, {
    className: "h-12 w-12 text-emerald-600 dark:text-emerald-400"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold text-gray-900 dark:text-white"
  }, user.name), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 dark:text-gray-400"
  }, user.email), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 flex flex-wrap gap-2"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: "outline"
  }, "Edit Profile"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    size: "sm",
    variant: "outline"
  }, "Change Password")))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lg:col-span-2"
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    title: "Account Settings"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-900 dark:text-white mb-2"
  }, "Personal Information"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
  }, "Full Name"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white text-sm",
    value: user.name,
    readOnly: true
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
  }, "Email"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-900 dark:text-white text-sm",
    value: user.email,
    readOnly: true
  })))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-900 dark:text-white mb-2"
  }, "Preferences"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "email-notifications",
    type: "checkbox",
    className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded",
    defaultChecked: true
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "email-notifications",
    className: "ml-2 block text-sm text-gray-700 dark:text-gray-300"
  }, "Receive email notifications")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "budget-alerts",
    type: "checkbox",
    className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded",
    defaultChecked: true
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "budget-alerts",
    className: "ml-2 block text-sm text-gray-700 dark:text-gray-300"
  }, "Budget limit alerts")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "monthly-reports",
    type: "checkbox",
    className: "h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "monthly-reports",
    className: "ml-2 block text-sm text-gray-700 dark:text-gray-300"
  }, "Receive monthly reports")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Save Changes"))))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    title: "Account Actions"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-900 dark:text-white mb-2"
  }, "Export Data"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-600 dark:text-gray-400 mb-3"
  }, "Download all your financial data as a CSV file."), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "outline",
    size: "sm"
  }, "Export Data")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-4 border-t border-gray-200 dark:border-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-900 dark:text-white mb-2"
  }, "Delete Account"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-600 dark:text-gray-400 mb-3"
  }, "Permanently delete your account and all your data."), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "danger",
    size: "sm"
  }, "Delete Account")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-4 border-t border-gray-200 dark:border-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-base font-medium text-gray-900 dark:text-white mb-2"
  }, "Logout"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-600 dark:text-gray-400 mb-3"
  }, "Sign out from your account."), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: logout,
    size: "sm"
  }, "Logout")))))));
};