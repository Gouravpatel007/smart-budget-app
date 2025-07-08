"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lucideReact = require("lucide-react");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var Modal = exports.Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    footer = _ref.footer;
  var modalRef = (0, _react.useRef)(null);

  // Handle Escape key press
  (0, _react.useEffect)(function () {
    var handleEscape = function handleEscape(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return function () {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Handle clicks outside the modal
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Modal size classes
  var sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  };
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 z-50 overflow-y-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), /*#__PURE__*/_react["default"].createElement("div", {
    ref: modalRef,
    className: "inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ".concat(sizeClasses[size], " w-full")
  }, title && /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-medium leading-6 text-gray-900 dark:text-white"
  }, title), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "text-gray-400 hover:text-gray-500 dark:hover:text-gray-300",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Close"), /*#__PURE__*/_react["default"].createElement(_lucideReact.X, {
    className: "h-5 w-5"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-5 sm:p-6"
  }, children), footer && /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-4 sm:px-6 border-t border-gray-200 dark:border-gray-700"
  }, footer))));
};