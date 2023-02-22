import React, { useState } from 'react';
import axios from 'axios';
import { HiOutlineMail } from 'react-icons/hi';





function ForgotPassword() {
const [email, setEmail] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');

const handleSubmit = async (event) => {
event.preventDefault();
try {
const response = await axios.post('/api/forgot-password', { email });
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
<h2 className="text-2xl font-bold mb-6 text-white">Forgot password</h2>
{errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
{successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2 text-white" htmlFor="email">
Email
</label>
<div className="flex items-center border-b-2 border-gray-200 py-2">
<HiOutlineMail className="w-6 h-6 text-white" />
<input
className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
id="email"
type="email"
placeholder="Email"
value={email}
onChange={(event) => setEmail(event.target.value)}
/>
</div>
</div>
<div className="flex items-center justify-center">
<button
         className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
         type="submit"
       >
Send password reset email
</button>
</div>
</form>
</div>
);
}

export default ForgotPassword;


