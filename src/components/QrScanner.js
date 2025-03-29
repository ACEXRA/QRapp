import React, { useRef, useEffect, useCallback, useState } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";

const QrScanner = ({ onScan }) => {
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

  const handleClick = useCallback(() => {
    setFacingMode((prevMode) =>
      prevMode === FACING_MODE_USER ? FACING_MODE_ENVIRONMENT : FACING_MODE_USER
    );
  }, []);

  const scanQRCode = useCallback(() => {
    if (webcamRef.current) {
      const video = webcamRef.current.video;

      // ✅ Ensure video is fully loaded
      if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
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
          onScan(code.data);
        }
      }
    }
  }, [onScan]);

  useEffect(() => {
    const interval = setInterval(scanQRCode, 1000);
    return () => clearInterval(interval);
  }, [scanQRCode]); // ✅ Added missing dependency

  return (
    <div className="qrscanner">
      <h2>QR Code Scanner</h2>
      <button onClick={handleClick}>Switch Camera</button>
      <Webcam
        ref={webcamRef}
        width={300}
        height={300}
        videoConstraints={{ facingMode }}
      />
    </div>
  );
};

export default QrScanner;
