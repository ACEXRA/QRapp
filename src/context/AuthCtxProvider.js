import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthCtx = React.createContext();

const AuthCtxProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState();

  const naviagate = useNavigate();
  const login = () => setAuthenticated(true);

  const logout = () => {
    setAuthenticated(false);
    naviagate("/");
  };

  return (
    <AuthCtx.Provider
      value={{
        authenticated,
        login,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

export default AuthCtxProvider;
