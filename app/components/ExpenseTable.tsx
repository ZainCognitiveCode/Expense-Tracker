import React from 'react';

interface ExpenseTableProps {
    expenses: Expense[];
    deleteExpense: (id: string) => void;
    updateExpense: (expense: Expense) => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, deleteExpense, updateExpense }) => {
    return (
        <table>
            {/* Table headers */}
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        {/* Display expense data */}
                        <td>
                            <button onClick={() => updateExpense(expense)}>Update</button>
                            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseTable;