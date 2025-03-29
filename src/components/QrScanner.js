import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";

const QrScanner = () => {
  const webcamRef = useRef(null);
  const [qrData, setQrData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scanQRCode();
    }, 1000); // Scan every second

    return () => clearInterval(interval);
  }, []);

  const scanQRCode = async () => {
    if (webcamRef.current) {
      const video = webcamRef.current.video;
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          setQrData(code.data);
        }
      }
    }
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <Webcam ref={webcamRef} width={300} height={300} />
      {qrData && <p>Scanned QR Code: {qrData}</p>}
    </div>
  );
};

export default QrScanner;
