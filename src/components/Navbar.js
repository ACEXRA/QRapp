import React, { useContext } from "react";
import { AuthCtx } from "../context/AuthCtxProvider";
import Button from "./Button";

const Navbar = () => {
  const { logout } = useContext(AuthCtx);
  return (
    <nav>
      <Button name={"Logout"} clickhandler={logout} />
    </nav>
  );
};

export default Navbar;
