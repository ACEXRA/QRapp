import React from "react";

const Button = ({ name, clickhandler }) => {
  return (
    <button onClick={clickhandler ? clickhandler : undefined} className="btn">
      {name}
    </button>
  );
};

export default Button;
