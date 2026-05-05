import { Mail, Building2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const UserCard = ({ user, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={() => onClick(user)}
      className="glass-card p-6 rounded-2xl cursor-pointer hover:shadow-xl hover:border-brand-500/30 group"
    >
      <div className="flex justify-between items-start mb-4">

        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner shrink-0"
          style={{ backgroundColor: '#0ea5e9', minWidth: '48px', minHeight: '48px' }}
        >
          {user.name.charAt(0)}
        </div>
        <ChevronRight className="text-slate-300 group-hover:text-brand-500 transition-colors" />
      </div>

      <h3 className="text-lg font-bold text-slate-800 leading-tight">{user.name}</h3>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-slate-500 text-sm">
          <Mail size={16} className="mr-2" />
          {user.email}
        </div>
        <div className="flex items-center text-slate-500 text-sm">
          <Building2 size={16} className="mr-2" />
          {user.company.name}
        </div>
      </div>
    </motion.div>
  );
};

export default UserCard;