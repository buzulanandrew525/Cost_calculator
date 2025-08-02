export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: 'Їжа' | 'Транспорт' | 'Розваги' | 'Інше';
}