import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => (
  <div className="relative max-w-md w-full">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
    <input
      type="text"
      placeholder="Search users by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all shadow-sm"
    />
  </div>
);

export default SearchBar;