import React, { useState } from 'react';
import axios from 'axios';
import { HiOutlineMail } from 'react-icons/hi';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('/api/reset-password', { password });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="h-16 flex items-center justify-center bg-gray-900">
        <span className="text-white font-bold text-3xl">My<span className="text-red-500">-MZ</span></span>
      </div>
      <form
        className="max-w-sm mx-auto mt-16 p-6 rounded-lg shadow-md bg-gray-800"
        onSubmit={handleSubmit}
      >
       
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-white" htmlFor="password">
            New password
          </label>
          <div className="flex items-center border-b-2 border-gray-200 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              id="password"
              type="password"
              placeholder="New password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-white" htmlFor="confirm-password">
            Confirm password
          </label>
          <div className="flex items-center border-b-2 border-gray-200 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              id="confirm-password"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="submit"
          >
            Reset password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
