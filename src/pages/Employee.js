import { QRCodeCanvas } from "qrcode.react";
import React, { useContext, useEffect, useState } from "react";
import { employeeMockService } from "../services/MockServer";
import { AuthCtx } from "../context/AuthCtxProvider";

const Employee = () => {
  const { user } = useContext(AuthCtx);

  const [data, setData] = useState("");

  useEffect(() => {
    setData(employeeMockService(user));
  }, [user]);
  return (
    <div>
      <h1>QR code</h1>
      <br />
      <QRCodeCanvas value={data} />
    </div>
  );
};

export default Employee;
