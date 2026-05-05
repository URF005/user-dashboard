import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import UserCard from './components/UserCard';
import SearchBar from './components/SearchBar';
import UserModal from './components/UserModal';
import Layout from './components/Layout';
import StatusHandler from './components/StatusHandler';
import { Loader2, Users } from 'lucide-react';

function App() {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <header className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Staff<span className="text-sky-500">Flow</span>
          </h1>
          <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">2026 Directory</p>
        </div>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </header>

      <StatusHandler 
        loading={loading} 
        error={error} 
        isEmpty={filteredUsers.length === 0 && !loading}
        searchTerm={searchTerm}
        onClear={() => setSearchTerm('')}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} onClick={setSelectedUser} />
          ))}
        </div>
      </StatusHandler>

      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </Layout>
  );
}

export default App;