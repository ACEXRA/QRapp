import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { AuthCtx } from "../context/AuthCtxProvider";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../services/MockServer";

const Login = () => {
  const { login, setUser } = useContext(AuthCtx);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      password: password,
    };
    const user = loginHandler(data);
    if (user != null) {
      login();
      setUser(user);
      navigate(user.role === "Employee" ? "/employee" : "employer");
    }
  };

  return (
    <form className="form" onSubmit={handler}>
      <h3>Login</h3>
      <div className="form_grp">
        <label>Username</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form_grp">
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-btn">
        <Button name={"Login"} />
      </div>
    </form>
  );
};

export default Login;
