import React from "react";
import QrScanner from "../components/QrScanner";
import { decryptData } from "../config/Common";

const Employer = () => {
  const onScan = (data) => {
    console.log(decryptData(data));
  };
  return <QrScanner onScan={onScan} />;
};

export default Employer;
