// src/components/ExpensesChart.tsx
import type { Expense } from "../types/expense";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

interface Props {
  expenses: Expense[];
}

export const ExpensesChart: React.FC<Props> = ({ expenses }) => {
  const categories = ["Їжа", "Транспорт", "Розваги", "Інше"];

  const data = categories.map((category) => {
    const total = expenses
      .filter(e => e.category === category)
      .reduce((sum, e) => sum + e.amount, 0);
    return { category, total };
  });

  return (
    <div className="chart-container" style={{ height: 300 }}>
      <h3>Статистика по категоріях</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
