export default (state, action) => {
  switch (action.type) {
    case 'Add_Income':
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions]
      };

    case 'Add_Expense':
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions]
      };

    case 'DELETE_Transaction':
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(income => income.id !== action.payload),
        expenseTransactions: state.expenseTransactions.filter(expense => expense.id !== action.payload),
      };



    default:
      return state;
  }
}