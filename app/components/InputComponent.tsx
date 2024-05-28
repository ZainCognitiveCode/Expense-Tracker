import React, { useState } from 'react';

interface InputComponentProps {
    addExpense: (expense: Expense) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ addExpense }) => {
    const [expense, setExpense] = useState<Expense>({
        id: '', // Define other properties for an expense
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddExpense = (e: React.FormEvent) => {
        e.preventDefault();
        addExpense(expense);
        // Clear form after adding expense
        setExpense({
            id: '',
            // Reset other expense properties
        });
    };

    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleAddExpense}>
                {/* Form fields */}
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={expense.description || ''}
                        onChange={handleInputChange}
                    />
                </label>
                {/* Add other fields like amount, category, etc. */}
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
};

export default InputComponent;