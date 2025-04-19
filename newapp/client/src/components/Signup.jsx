import { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      alert("Signup successful!");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-grey-100 p-8 rounded shadow-md w-96 bac" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center colo">Sign Up</h2>
        <label className="fieldset-label colo">User Name</label>
        <input className="w-full p-2 mb-3 border rounded" required placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <label className="fieldset-label colo">Email</label>
        <input className="w-full p-2 mb-3 border rounded" required placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <label className="fieldset-label colo">Password</label>
        <input className="w-full p-2 mb-3 border rounded" required type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <div className='help w-full flex colo'><p className="link link-hover">Do you have Account?</p><p><a href="/">Sign In</a></p></div>
        <button className="w-full color text-white p-2 rounded hover:bg-blue-600 mt-4" type="submit">Sign Up</button>
        
      </form>
    </div>
  );
}

export default Signup;
