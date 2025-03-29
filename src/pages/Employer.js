import React, { useState } from "react";
import QrScanner from "../components/QrScanner";
import { decryptData } from "../config/Common";

const Employer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const onScan = (qrData) => {
    try {
      const decryptedData = decryptData(qrData);
      if (decryptedData?.name) {
        setData(decryptedData);
        setError(""); // Clear previous errors
        setIsScanning(false); // Stop scanning
      } else {
        setError("Invalid QR Code: No employee data found.");
        setData(null);
      }
    } catch (err) {
      setError("Error reading QR Code. Try again.");
      setData(null);
    }
  };

  const startScanning = () => {
    setIsScanning(true);
    setData(null);
    setError("");
  };

  return (
    <div>
      <h2>Employer QR Scanner</h2>
      {!isScanning && <button onClick={startScanning}>Scan QR Code</button>}
      {isScanning && <QrScanner onScan={onScan} />}

      {data && <p>Welcome to Sportzz, {data.name}!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data || error ? (
        <button onClick={startScanning}>Scan Again</button>
      ) : null}
    </div>
  );
};

export default Employer;
