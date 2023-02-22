import React from 'react';
import { Link } from 'react-router-dom';

function Abonnement() {
  const handleSubscription = (months, price) => {
    // Appeler une fonction qui traite l'abonnement de l'utilisateur
    console.log(`Abonnement de ${months} mois pour ${price} euros`);
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="h-16 flex items-center justify-center bg-gray-900">
        <span className="text-white font-bold text-3xl">My<span className="text-red-500">-MZ</span></span>
      </div>
      <div className="max-w-sm mx-auto mt-16 p-6 rounded-lg shadow-md bg-gray-800">
        <h1 className="mb-4 text-center font-bold text-2xl text-white">Abonnement</h1>
        <div className="mb-4">
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2"
            onClick={() => handleSubscription(3, 20)}
          >
            3 mois pour 20€
          </button>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2"
            onClick={() => handleSubscription(6, 50)}
          >
            6 mois pour 50€
          </button>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => handleSubscription(9, 90)}
          >
            9 mois pour 90€
          </button>
        </div>
        <div className="text-center">
          <Link
            to="/signin"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Retour à la page de connexion.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Abonnement;
