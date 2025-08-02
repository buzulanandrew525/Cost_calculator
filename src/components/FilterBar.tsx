// src/components/FilterBar.tsx
interface Props {
  selectedCategory: string;
  onChange: (category: string) => void;
}

const categories = ["Усі", "Їжа", "Транспорт", "Розваги", "Інше"];

export const FilterBar: React.FC<Props> = ({ selectedCategory, onChange }) => {
  return (
    <div className="filter-bar">
      <label>Категорія: </label>
      <select value={selectedCategory} onChange={e => onChange(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>
    </div>
  );
};
