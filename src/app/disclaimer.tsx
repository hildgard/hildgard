"use client";

import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem("disclaimerAccepted");
    if (!acknowledged) {
      setShowModal(true);
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com"; // Redirect if declined
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 disclaimer-fade bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4">Over 21 Disclaimer</h2>
        <p className="mb-4">
          You must be over 21 years old to access this site. <br />
          Please confirm that you are of legal age.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleAccept}
            className="bg-primary active:bg-primary-dark hover:bg-primary-light text-white px-6 py-2 rounded"
          >
            I am over 21
          </button>
          <button
            onClick={handleDecline}
            className="text-primary border border-solid border-primary px-6 py-2 rounded hover:bg-gray-100"
          >
            I am under 21
          </button>
        </div>
      </div>
    </div>
  );
}
