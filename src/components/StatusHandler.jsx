import React from 'react';
import { Loader2, AlertCircle, SearchX } from 'lucide-react';

const StatusHandler = ({ loading, error, isEmpty, searchTerm, onClear, children }) => {
  // 1. Loading State: Centered spinner
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-slate-400">
        <Loader2 className="animate-spin mb-4 text-sky-500" size={48} />
        <p className="text-lg font-medium animate-pulse">Syncing user directory...</p>
      </div>
    );
  }

  // 2. Error State: Clear feedback if API fails
  if (error) {
    return (
      <div className="max-w-md mx-auto bg-red-50 border border-red-100 text-red-600 p-8 rounded-3xl text-center shadow-sm">
        <AlertCircle size={40} className="mx-auto mb-4 opacity-50" />
        <p className="font-bold text-xl mb-2">Network Error</p>
        <p className="text-sm opacity-80">{error}</p>
      </div>
    );
  }

  // 3. Empty State: Shown when search filters out everything
  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200">
        <SearchX size={64} className="text-slate-200 mb-4" />
        <p className="text-slate-400 text-xl font-medium">No results found for "{searchTerm}"</p>
        <button 
           onClick={onClear}
           className="mt-6 px-8 py-2 bg-slate-100 text-slate-600 rounded-full font-bold hover:bg-sky-500 hover:text-white transition-all duration-300"
        >
          Clear Search
        </button>
      </div>
    );
  }

  // 4. Success State: Just render the actual grid
  return <>{children}</>;
};

export default StatusHandler;