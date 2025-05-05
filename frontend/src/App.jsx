import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import SearchForm from './components/SearchForm';
import MediaResults from './components/MediaResults';
import HistoryList from './components/HistoryList';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const [results, setResults] = useState([]);

  if (!loggedIn)
    return (
      <>
        <RegisterForm />
        <LoginForm onLogin={() => setLoggedIn(true)} />
      </>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Open Media Search</h1>
      <SearchForm setResults={setResults} />
      <MediaResults results={results} />
      <h2 className="mt-6 font-bold">Recent Searches</h2>
      <HistoryList />
    </div>
  );
}

export default App;
