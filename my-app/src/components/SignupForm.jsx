import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error('Les mots de passe ne correspondent pas.');
      return;
    }
    const newUser = { nom: lastName, prenom: firstName, mail: email, password: password };
    fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          console.log('User created successfully!');
        } else {
          console.error('Failed to create user:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('An error occurred while creating user:', error);
      });
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="h-16 flex items-center justify-center bg-gray-900">
        <span className="text-white font-bold text-3xl">My<span className="text-red-500">-MZ</span></span>
      </div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-16 p-6 rounded-lg shadow-md bg-gray-800">
        <h1 className="mb-4 text-center font-bold text-2xl text-white">Inscription</h1>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold mb-2 text-sm" htmlFor="firstName">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
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
type="email"
id="email"
value={email}
onChange={(event) => setEmail(event.target.value)}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
/>


</div>
<div className="flex items-center justify-between">
  <button
    type="submit"
    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
  >
    S'inscrire
  </button>
  <Link
    to="/login"
    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
  >
    Déjà inscrit ? Connectez-vous.
  </Link>
</div>
</form>
</div>
);
}
export default SignupForm;