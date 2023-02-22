import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email: email, password: password };
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          console.log('User logged in successfully!');
        } else {
          console.error('Failed to log in user:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('An error occurred while logging in user:', error);
      });
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="h-16 flex items-center justify-center bg-gray-900">
        <span className="text-white font-bold text-3xl">My<span className="text-red-500">-MZ</span></span>
      </div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-16 p-6 rounded-lg shadow-md bg-gray-800">
        <h1 className="mb-4 text-center font-bold text-2xl text-white">Connexion</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Se connecter
          </button>
          <Link
            to="/signup"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Pas encore inscrit ? S'abonner.
          </Link>
        </div>
      </form>
    </div>
  );
}


export default  SigninForm;
