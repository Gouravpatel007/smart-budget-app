"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Card = require("../ui/Card");
var _Input = require("../ui/Input");
var _Button = require("../ui/Button");
var _Select = require("../ui/Select");
var _lucideReact = require("lucide-react");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useEffect, useState } from 'react';
// import { Card } from '../ui/Card';
// import { Input } from '../ui/Input';
// import { Button } from '../ui/Button';
// import { Select } from '../ui/Select';
// import { Category, Transaction } from '../../types';
// import { Calendar, DollarSign, Archive, Plus } from 'lucide-react';
// interface TransactionFormProps {
//   onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
//   categories: Category[];
//   editingTransaction: Transaction | null;
//   userId: string;
// }
// export const TransactionForm: React.FC<TransactionFormProps> = ({
//   onSubmit,
//   categories,
//   editingTransaction,
//   userId,
// }) => {
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [categoryId, setCategoryId] = useState('');
//   const [type, setType] = useState<'income' | 'expense'>('expense');
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   // Fill form with transaction data when editing
//   useEffect(() => {
//     if (editingTransaction) {
//       setAmount(editingTransaction.amount.toString());
//       setDescription(editingTransaction.description);
//       setDate(new Date(editingTransaction.date).toISOString().split('T')[0]);
//       setCategoryId(editingTransaction.categoryId);
//       setType(editingTransaction.type);
//     } else {
//       // Reset form on component mount or when editingTransaction becomes null
//       setAmount('');
//       setDescription('');
//       setDate(new Date().toISOString().split('T')[0]);
//       setCategoryId('');
//       setType('expense');
//     }
//   }, [editingTransaction]);
//   // Filter categories based on transaction type
//   const filteredCategories = categories.filter(category => {
//     if (type === 'income') {
//       return category.name === 'Income';
//     }
//     return category.name !== 'Income';
//   });
//   // Set default category when type changes
//   useEffect(() => {
//     if (filteredCategories.length > 0 && !filteredCategories.find(cat => cat.id === categoryId)) {
//       setCategoryId(filteredCategories[0].id);
//     }
//   }, [type, filteredCategories, categoryId]);
//   const validateForm = (): boolean => {
//     const newErrors: Record<string, string> = {};
//     if (!amount) {
//       newErrors.amount = 'Amount is required';
//     } else if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
//       newErrors.amount = 'Amount must be a positive number';
//     }
//     if (!description) {
//       newErrors.description = 'Description is required';
//     }
//     if (!date) {
//       newErrors.date = 'Date is required';
//     }
//     if (!categoryId) {
//       newErrors.categoryId = 'Category is required';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }
//     onSubmit({
//       amount: parseFloat(amount),
//       description,
//       date: new Date(date).toISOString(),
//       categoryId,
//       type,
//       userId,
//     });
//     // Reset form if not editing
//     if (!editingTransaction) {
//       setAmount('');
//       setDescription('');
//       setDate(new Date().toISOString().split('T')[0]);
//     }
//   };
//   return (
//     <Card title={editingTransaction ? 'Edit Transaction' : 'Add Transaction'}>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <Select
//               label="Transaction Type"
//               value={type}
//               onChange={(e) => setType(e.target.value as 'income' | 'expense')}
//               options={[
//                 { value: 'expense', label: 'Expense' },
//                 { value: 'income', label: 'Income' },
//               ]}
//             />
//           </div>
//           <div>
//             <Input
//               type="number"
//               label="Amount"
//               placeholder="0.00"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               step="0.01"
//               min="0"
//               leftIcon={<DollarSign className="h-5 w-5 text-gray-400" />}
//               error={errors.amount}
//               required
//             />
//           </div>
//         </div>
//         <Input
//           type="text"
//           label="Description"
//           placeholder="What was this transaction for?"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           error={errors.description}
//           required
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <Input
//               type="date"
//               label="Date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               leftIcon={<Calendar className="h-5 w-5 text-gray-400" />}
//               error={errors.date}
//               required
//             />
//           </div>
//           <div>
//             <Select
//               label="Category"
//               value={categoryId}
//               onChange={(e) => setCategoryId(e.target.value)}
//               options={filteredCategories.map((category) => ({
//                 value: category.id,
//                 label: category.name,
//               }))}
//               error={errors.categoryId}
//               required
//             />
//           </div>
//         </div>
//         <div className="flex justify-end space-x-2">
//           <Button
//             type="submit"
//             leftIcon={editingTransaction ? <Archive /> : <Plus />}
//           >
//             {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };
// Sample default categories - normally these would come from props
var defaultCategories = [{
  id: 'cat1',
  name: 'Income',
  color: '#4CAF50'
}, {
  id: 'cat2',
  name: 'Food & Dining',
  color: '#FF5722'
}, {
  id: 'cat3',
  name: 'Transportation',
  color: '#2196F3'
}, {
  id: 'cat4',
  name: 'Housing',
  color: '#9C27B0'
}, {
  id: 'cat5',
  name: 'Entertainment',
  color: '#FFC107'
}, {
  id: 'cat6',
  name: 'Shopping',
  color: '#E91E63'
}, {
  id: 'cat7',
  name: 'Utilities',
  color: '#607D8B'
}, {
  id: 'cat8',
  name: 'Healthcare',
  color: '#00BCD4'
}];
var TransactionForm = exports.TransactionForm = function TransactionForm(_ref) {
  var onSubmit = _ref.onSubmit,
    _ref$categories = _ref.categories,
    categories = _ref$categories === void 0 ? defaultCategories : _ref$categories,
    editingTransaction = _ref.editingTransaction,
    userId = _ref.userId;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    amount = _useState2[0],
    setAmount = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    description = _useState4[0],
    setDescription = _useState4[1];
  var _useState5 = (0, _react.useState)(new Date().toISOString().split('T')[0]),
    _useState6 = _slicedToArray(_useState5, 2),
    date = _useState6[0],
    setDate = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    categoryId = _useState8[0],
    setCategoryId = _useState8[1];
  var _useState9 = (0, _react.useState)('expense'),
    _useState0 = _slicedToArray(_useState9, 2),
    type = _useState0[0],
    setType = _useState0[1];
  var _useState1 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState1, 2),
    errors = _useState10[0],
    setErrors = _useState10[1];

  // Filter categories based on transaction type
  var filteredCategories = categories.filter(function (category) {
    if (type === 'income') {
      return category.name.toLowerCase() === 'income';
    }
    return category.name.toLowerCase() !== 'income';
  });

  // Fill form with transaction data when editing or initialize with defaults
  (0, _react.useEffect)(function () {
    if (editingTransaction) {
      setAmount(editingTransaction.amount.toString());
      setDescription(editingTransaction.description);
      setDate(new Date(editingTransaction.date).toISOString().split('T')[0]);
      setCategoryId(editingTransaction.categoryId);
      setType(editingTransaction.type);
    } else {
      // Reset form on component mount or when editingTransaction becomes null
      setAmount('');
      setDescription('');
      setDate(new Date().toISOString().split('T')[0]);
      setType('expense');

      // Default to first expense category
      var expenseCategories = categories.filter(function (cat) {
        return cat.name.toLowerCase() !== 'income';
      });
      if (expenseCategories.length > 0) {
        setCategoryId(expenseCategories[0].id);
      }
    }
  }, [editingTransaction, categories]);

  // Handle transaction type change
  var handleTypeChange = function handleTypeChange(e) {
    var newType = e.target.value;
    setType(newType);

    // Find appropriate categories for the new type
    var appropriateCategories = categories.filter(function (category) {
      if (newType === 'income') {
        return category.name.toLowerCase() === 'income';
      }
      return category.name.toLowerCase() !== 'income';
    });

    // Set first appropriate category
    if (appropriateCategories.length > 0) {
      setCategoryId(appropriateCategories[0].id);
    } else {
      setCategoryId(''); // No appropriate categories found
    }
  };
  var validateForm = function validateForm() {
    var newErrors = {};
    if (!amount) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number';
    }
    if (!description) {
      newErrors.description = 'Description is required';
    }
    if (!date) {
      newErrors.date = 'Date is required';
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
      description: description,
      date: new Date(date).toISOString(),
      categoryId: categoryId,
      type: type,
      userId: userId
    });

    // Reset form if not editing
    if (!editingTransaction) {
      setAmount('');
      setDescription('');
      setDate(new Date().toISOString().split('T')[0]);
      // Keep the selected category for the current type
    }
  };

  // Debug output - useful for troubleshooting
  console.log('Current type:', type);
  console.log('Filtered categories:', filteredCategories);
  console.log('Selected categoryId:', categoryId);
  return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    title: editingTransaction ? 'Edit Transaction' : 'Add Transaction'
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    label: "Transaction Type",
    value: type,
    onChange: handleTypeChange,
    options: [{
      value: 'expense',
      label: 'Expense'
    }, {
      value: 'income',
      label: 'Income'
    }]
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    type: "number",
    label: "Amount",
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
    required: true
  }))), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    type: "text",
    label: "Description",
    placeholder: "What was this transaction for?",
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    error: errors.description,
    required: true
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    type: "date",
    label: "Date",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    },
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lucideReact.Calendar, {
      className: "h-5 w-5 text-gray-400"
    }),
    error: errors.date,
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    label: "Category",
    value: categoryId,
    onChange: function onChange(e) {
      return setCategoryId(e.target.value);
    },
    options: filteredCategories.map(function (category) {
      return {
        value: category.id,
        label: category.name
      };
    }),
    error: errors.categoryId,
    required: true
  }), filteredCategories.length === 0 && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-red-500 mt-1"
  }, "No categories available for ", type, " transactions"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end space-x-2"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    type: "submit",
    leftIcon: editingTransaction ? /*#__PURE__*/_react["default"].createElement(_lucideReact.Archive, null) : /*#__PURE__*/_react["default"].createElement(_lucideReact.Plus, null)
  }, editingTransaction ? 'Update Transaction' : 'Add Transaction'))));
};

// import React, { useEffect, useState } from 'react';
// import { Card } from '../ui/Card';
// import { Input } from '../ui/Input';
// import { Button } from '../ui/Button';
// import { Select } from '../ui/Select';
// import { Category, Transaction } from '../../types';
// import { Calendar, DollarSign, Archive, Plus } from 'lucide-react';

// // Define your income and expense categories
// const incomeCategoriesList: { id: string; name: string; color: string }[] = [
//   { id: 'inc1', name: 'Salary', color: '#4CAF50' },
//   { id: 'inc2', name: 'Freelance / Side Hustle', color: '#4CAF50' },
//   { id: 'inc3', name: 'Business Income', color: '#4CAF50' },
//   { id: 'inc4', name: 'Investment Returns', color: '#4CAF50' },
//   { id: 'inc5', name: 'Gifts & Bonuses', color: '#4CAF50' },
//   { id: 'inc6', name: 'Refunds / Reimbursements', color: '#4CAF50' },
// ];

// const expenseCategoriesList: { id: string; name: string; color: string }[] = [
//   { id: 'exp1', name: 'Rent / Mortgage', color: '#FF5722' },
//   { id: 'exp2', name: 'Utilities', color: '#FF5722' },
//   { id: 'exp3', name: 'Groceries', color: '#FF5722' },
//   { id: 'exp4', name: 'Transportation', color: '#FF5722' },
//   { id: 'exp5', name: 'Internet / Mobile', color: '#FF5722' },
//   { id: 'exp6', name: 'Dining Out / Coffee', color: '#FF9800' },
//   { id: 'exp7', name: 'Shopping', color: '#FF9800' },
//   { id: 'exp8', name: 'Subscriptions', color: '#FF9800' },
//   { id: 'exp9', name: 'Gym / Fitness', color: '#FF9800' },
//   { id: 'exp10', name: 'Salon / Spa', color: '#FF9800' },
//   { id: 'exp11', name: 'Tuition / Courses', color: '#9C27B0' },
//   { id: 'exp12', name: 'Stationery / Books', color: '#9C27B0' },
//   { id: 'exp13', name: 'Online Tools / Software', color: '#9C27B0' },
//   { id: 'exp14', name: 'Coworking / Study Materials', color: '#9C27B0' },
//   { id: 'exp15', name: 'Medicines', color: '#00BCD4' },
//   { id: 'exp16', name: 'Doctor Visits', color: '#00BCD4' },
//   { id: 'exp17', name: 'Health Insurance', color: '#00BCD4' },
//   { id: 'exp18', name: 'Movies / Shows', color: '#E91E63' },
//   { id: 'exp19', name: 'Travel / Vacations', color: '#E91E63' },
//   { id: 'exp20', name: 'Games', color: '#E91E63' },
//   { id: 'exp21', name: 'Events', color: '#E91E63' },
//   { id: 'exp22', name: 'Loan EMIs', color: '#607D8B' },
//   { id: 'exp23', name: 'Credit Card Payments', color: '#607D8B' },
//   { id: 'exp24', name: 'Investments / Savings', color: '#607D8B' },
//   { id: 'exp25', name: 'Insurance', color: '#607D8B' },
// ];

// interface TransactionFormProps {
//   onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
//   categories?: Category[];
//   editingTransaction: Transaction | null;
//   userId: string;
// }

// export const TransactionForm: React.FC<TransactionFormProps> = ({
//   onSubmit,
//   categories, // Now expecting all categories
//   editingTransaction,
//   userId,
// }) => {
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
//   const [categoryId, setCategoryId] = useState('');
//   const [type, setType] = useState<'income' | 'expense'>('expense');
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   // Filter categories based on the selected transaction type
//   const filteredCategories = React.useMemo(() => {
//     if (type === 'income') {
//       return categories ? categories.filter(cat =>
//         incomeCategoriesList.some(incomeCat => incomeCat.name === cat.name)
//       ) : incomeCategoriesList;
//     } else {
//       return categories ? categories.filter(cat =>
//         expenseCategoriesList.some(expenseCat => expenseCat.name === cat.name)
//       ) : expenseCategoriesList;
//     }
//   }, [type, categories]);

//   // Fill form with transaction data when editing or initialize with defaults
//   useEffect(() => {
//     if (editingTransaction) {
//       setAmount(editingTransaction.amount.toString());
//       setDescription(editingTransaction.description);
//       setDate(new Date(editingTransaction.date).toISOString().split('T')[0]);
//       setCategoryId(editingTransaction.categoryId);
//       setType(editingTransaction.type);
//     } else {
//       setAmount('');
//       setDescription('');
//       setDate(new Date().toISOString().split('T')[0]);
//       setType('expense');
//       // Default to the first expense category if available
//       if (filteredCategories.length > 0) {
//         setCategoryId(filteredCategories[0].id);
//       }
//     }
//   }, [editingTransaction, filteredCategories]);

//   // Handle transaction type change
//   const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const newType = e.target.value as 'income' | 'expense';
//     setType(newType);

//     // Update the category to the first available category for the new type
//     const firstCategoryForType = (newType === 'income' ? incomeCategoriesList : expenseCategoriesList)[0];
//     if (firstCategoryForType) {
//       // If the provided categories prop exists, find the matching category object
//       if (categories) {
//         const matchingCategory = categories.find(cat => cat.name === firstCategoryForType.name);
//         setCategoryId(matchingCategory ? matchingCategory.id : '');
//       } else {
//         setCategoryId(firstCategoryForType.id);
//       }
//     } else {
//       setCategoryId('');
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: Record<string, string> = {};

//     if (!amount) {
//       newErrors.amount = 'Amount is required';
//     } else if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
//       newErrors.amount = 'Amount must be a positive number';
//     }

//     if (!description) {
//       newErrors.description = 'Description is required';
//     }

//     if (!date) {
//       newErrors.date = 'Date is required';
//     }

//     if (!categoryId) {
//       newErrors.categoryId = 'Category is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     onSubmit({
//       amount: parseFloat(amount),
//       description,
//       date: new Date(date).toISOString(),
//       categoryId,
//       type,
//       userId,
//     });

//     if (!editingTransaction) {
//       setAmount('');
//       setDescription('');
//       setDate(new Date().toISOString().split('T')[0]);
//       // Keep the transaction type selected
//       // The category will be reset on the next type change or component re-render
//     }
//   };

//   // Debug output
//   console.log('Current type:', type);
//   console.log('Filtered categories:', filteredCategories);
//   console.log('Selected categoryId:', categoryId);

//   return (
//     <Card title={editingTransaction ? 'Edit Transaction' : 'Add Transaction'}>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <Select
//               label="Transaction Type"
//               value={type}
//               onChange={handleTypeChange}
//               options={[
//                 { value: 'expense', label: 'Expense' },
//                 { value: 'income', label: 'Income' },
//               ]}
//             />
//           </div>

//           <div>
//             <Input
//               type="number"
//               label="Amount"
//               placeholder="0.00"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               step="0.01"
//               min="0"
//               leftIcon={<DollarSign className="h-5 w-5 text-gray-400" />}
//               error={errors.amount}
//               required
//             />
//           </div>
//         </div>

//         <Input
//           type="text"
//           label="Description"
//           placeholder="What was this transaction for?"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           error={errors.description}
//           required
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <Input
//               type="date"
//               label="Date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               leftIcon={<Calendar className="h-5 w-5 text-gray-400" />}
//               error={errors.date}
//               required
//             />
//           </div>

//           <div>
//             <Select
//               label="Category"
//               value={categoryId}
//               onChange={(e) => setCategoryId(e.target.value)}
//               options={filteredCategories.map((category) => ({
//                 value: category.id,
//                 label: category.name,
//               }))}
//               error={errors.categoryId}
//               required
//               disabled={filteredCategories.length === 0}
//             />
//             {filteredCategories.length === 0 && (
//               <p className="text-sm text-red-500 mt-1">No categories available for {type} transactions</p>
//             )}
//           </div>
//         </div>

//         <div className="flex justify-end space-x-2">
//           <Button
//             type="submit"
//             leftIcon={editingTransaction ? <Archive /> : <Plus />}
//             disabled={filteredCategories.length === 0 && type === 'expense'}
//           >
//             {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };