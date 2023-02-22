import React, { useState } from "react";

const Payment = () => {
  const [cardType, setCardType] = useState("Mastercard");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer le paiement ici
    console.log("Paiement effectué !");
  };

  return (
    <div className="container mx-auto">
      <div className="h-screen bg-gray-900">
      <div className="h-16 flex items-center justify-center bg-gray-900">
        <span className="text- font-bold text-3xl">My<span className="text-red-500">-MZ</span></span>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
  <div className="mb-4">
    <label htmlFor="card-type" className="block font-bold mb-2">
      Type de carte
    </label>
    <select
      id="card-type"
      name="card-type"
      value={cardType}
      onChange={(e) => setCardType(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      style={{color: '#333333'}}
    >
      <option value="Mastercard">Mastercard</option>
      <option value="Visa">Visa</option>
      <option value="Visa">Paypal</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="card-number" className="block font-bold mb-2">
      Numéro de carte
    </label>
    <input
      id="card-number"
      type="text"
      name="card-number"
      value={cardNumber}
      onChange={(e) => setCardNumber(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="1234 5678 9012 3456"
      style={{color: '#333333'}}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="expiration-date" className="block font-bold mb-2">
      Date d'expiration
    </label>
    <input
      id="expiration-date"
      type="text"
      name="expiration-date"
      value={expirationDate}
      onChange={(e) => setExpirationDate(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="MM/AA"
      style={{color: '#333333'}}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="security-code" className="block font-bold mb-2">
      Code de sécurité
    </label>
    <input
      id="security-code"
      type="text"
      name="security-code"
      value={securityCode}
      onChange={(e) => setSecurityCode(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="123"
      style={{color: '#333333'}}
    />
  </div>
  <button
    type="submit"
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Payer
  </button>
</form>

    </div>
    </div>
  );
};

export default Payment;
