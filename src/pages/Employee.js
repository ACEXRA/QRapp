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
  return <QRCodeCanvas value={data} />;
};

export default Employee;
