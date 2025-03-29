import React, { useContext } from "react";
import { AuthCtx } from "../context/AuthCtxProvider";
import Button from "./Button";

const Navbar = () => {
  const { logout, authenticated } = useContext(AuthCtx);
  return (
    <nav className="navbar">
      <h1>Sportzz</h1>
      {authenticated && <Button name={"Logout"} clickhandler={logout} />}
    </nav>
  );
};

export default Navbar;
