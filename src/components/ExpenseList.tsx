import type { Expense } from "../types/expense";

interface Props {
  expenses: Expense[];
}

export const ExpenseList: React.FC<Props> = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="expense-list">
      <h2>Витрати</h2>
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            <strong>{e.title}</strong> — {e.amount} грн, {e.category}, {e.date}
          </li>
        ))}
      </ul>
      <p><strong>Загальна сума:</strong> {total} грн</p>
    </div>
  );
};
