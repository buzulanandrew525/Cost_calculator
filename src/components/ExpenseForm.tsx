import { useState } from "react";
import type { Expense } from "../types/expense";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onAdd: (expense: Expense) => void;
}

const categories = ["Їжа", "Транспорт", "Розваги", "Інше"];

export const ExpenseForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Їжа");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: uuidv4(),
      title,
      amount,
      date,
      category: category as Expense["category"],
    };
    onAdd(newExpense);
    setTitle("");
    setAmount(0);
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Назва" required />
      <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} placeholder="Сума" required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => <option key={cat}>{cat}</option>)}
      </select>
      <button type="submit">Додати</button>
    </form>
  );
};
