import { useEffect, useState } from "react";
import type { Expense } from "./types/expense";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { FilterBar } from "./components/FilterBar";
import { loadExpenses, saveExpenses } from "./utils/storage";
import { ExpensesChart } from "./components/ExpensesChart";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Усі");

  // Завантажити з localStorage при старті
  useEffect(() => {
    const saved = loadExpenses();
    setExpenses(saved);
  }, []);

  // Зберігати у localStorage при зміні
  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  // Фільтрація по категорії
  const filteredExpenses =
    selectedCategory === "Усі"
      ? expenses
      : expenses.filter((e) => e.category === selectedCategory);

  return (
    <div className="app">
      <h1>Калькулятор витрат</h1>

      {/* Форма для додавання */}
      <ExpenseForm onAdd={addExpense} />

      {/* Фільтр по категоріях */}
      <FilterBar
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      {/* Список витрат */}
      <ExpenseList expenses={filteredExpenses} />

      <ExpensesChart expenses={filteredExpenses} />

    </div>
  );
}

export default App;
