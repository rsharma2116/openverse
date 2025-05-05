import { useState } from 'react';
import API from '../api';

export default function RegisterForm() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/auth/register', form);
    alert('Registered! You can log in.');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
}
