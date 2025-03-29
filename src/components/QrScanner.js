import React, { useRef, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";

const QrScanner = ({ onScan }) => {
  const webcamRef = useRef(null);

  // Video constraints to use the back camera
  const videoConstraints = {
    facingMode: { exact: "environment" }, // Forces back camera
  };

  // Memoize scanQRCode to prevent unnecessary re-renders
  const scanQRCode = useCallback(() => {
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
          onScan(code.data); // Pass QR data to parent
        }
      }
    }
  }, [onScan]); // Dependency array includes onScan

  useEffect(() => {
    const interval = setInterval(scanQRCode, 1000); // Scan every second
    return () => clearInterval(interval);
  }, [scanQRCode]); // Now scanQRCode is properly included

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <Webcam ref={webcamRef} width={300} height={300} />
    </div>
  );
};

export default QrScanner;
