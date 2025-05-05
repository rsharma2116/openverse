import { useEffect, useState } from 'react';
import API from '../api';

export default function HistoryList() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.get('/search/history').then(res => setHistory(res.data));
  }, []);

  return (
    <ul>
      {history.map((h, i) => (
        <li key={i}>{h.query} ({new Date(h.timestamp).toLocaleString()})</li>
      ))}
    </ul>
  );
}
