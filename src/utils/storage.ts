
import type { Expense } from "../types/expense";

const STORAGE_KEY = "expenses";

export function saveExpenses(expenses: Expense[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

export function loadExpenses(): Expense[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
