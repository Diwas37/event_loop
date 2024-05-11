import React, { useState } from "react";
import SearchBox from "../components/searchBox";
import EventCard from "../components/EventCard";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    // Logic to process checkout based on selected payment method
    console.log("Checkout initiated with method:", paymentMethod);
  };

  return (
    <div className="container bg-blue-300 mx-auto min-h-screen">
      <SearchBox />
      <EventCard />
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Choose Payment Method:</h2>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="esewa"
              onChange={() => handlePaymentMethodChange("esewa")}
              checked={paymentMethod === "esewa"}
              className="mr-2"
            />
            Esewa
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              onChange={() => handlePaymentMethodChange("bank")}
              checked={paymentMethod === "bank"}
              className="mr-2"
            />
            Bank
          </label>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        disabled={!paymentMethod}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
