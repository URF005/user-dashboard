import { X, MapPin, Phone, Globe } from 'lucide-react';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full">
          <X size={20} />
        </button>

        <div className="text-center mb-6">
        
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto mb-4 shadow-lg"
            style={{ backgroundColor: '#0ea5e9', minWidth: '96px', minHeight: '96px' }}
          >
            {user.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-brand-500 font-medium">@{user.username}</p>
        </div>

        <div className="space-y-4 border-t pt-6 text-slate-600">
          <div className="flex items-center"><MapPin size={18} className="mr-3 text-slate-400" /> {user.address.city}, {user.address.street}</div>
          <div className="flex items-center"><Phone size={18} className="mr-3 text-slate-400" /> {user.phone}</div>
          <div className="flex items-center"><Globe size={18} className="mr-3 text-slate-400" /> {user.website}</div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;