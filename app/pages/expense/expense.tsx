"use client"

import React, { useState } from 'react';
import InputComponent from '../../components/InputComponent';
import ExpenseTable from '../../components/ExpenseTable';
import { getExpenses, addExpense, updateExpense, deleteExpense } from "../../utils/expenseService";


const Expenses: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>(getExpenses());

    const handleAddExpense = (expense: Expense) => {
        addExpense(expense);
        setExpenses(getExpenses());
    };

    const handleUpdateExpense = (updatedExpense: Expense) => {
        updateExpense(updatedExpense);
        setExpenses(getExpenses());
    };

    const handleDeleteExpense = (id: string) => {
        deleteExpense(id);
        setExpenses(getExpenses());
    };

    return (
        <div>
            <InputComponent addExpense={handleAddExpense} />
            <ExpenseTable
                expenses={expenses}
                deleteExpense={handleDeleteExpense}
                updateExpense={handleUpdateExpense}
            />
        </div>
    );
};

export default Expenses;