import { useState } from 'react';
import API from '../api';

export default function SearchForm({ setResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await API.get(`/search/media?q=${query}`);
    setResults(res.data.results);
  };

  return (
    <form onSubmit={handleSearch}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
}
