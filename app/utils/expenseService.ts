// This is a placeholder for a data source; in a real app, this would be a database or API calls
let expenses: Expense[] = [];

// Define the Expense interface
interface Expense {
    id: string;
    // Define other properties for an expense
}

// Function to retrieve all expenses
export const getExpenses = (): Expense[] => {
    return expenses;
};

// Function to add a new expense
export const addExpense = (newExpense: Expense): void => {
    const updatedExpenses = [...expenses, { ...newExpense, id: generateId() }];
    expenses = updatedExpenses;
};

// Function to update an existing expense
export const updateExpense = (updatedExpense: Expense): void => {
    expenses = expenses.map((expense) =>
        expense.id === updatedExpense.id ? { ...expense, ...updatedExpense } : expense
    );
};

// Function to delete an expense by ID
export const deleteExpense = (id: string): void => {
    expenses = expenses.filter((expense) => expense.id !== id);
};

// Helper function to generate a unique ID (you can use libraries like uuid for production)
const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

// You might also want to initialize expenses from a backend or local storage on app load
// For instance, if using localStorage:
// const storedExpenses = localStorage.getItem('expenses');
// if (storedExpenses) {
//   expenses = JSON.parse(storedExpenses);
// }