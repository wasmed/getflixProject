import React, { useState } from 'react';
import axios from 'axios';

function Signout() {
const handleSignout = async () => {
try {
const response = await axios.post('/api/logout');
console.log(response.data);
// You may want to redirect to the home page or perform some other action
} catch (error) {
console.error(error);
}
};

return (
<button
   className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
   onClick={handleSignout}
 >
Sign out
</button>
);
}

export default Signout;



