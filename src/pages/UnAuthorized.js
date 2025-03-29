import React from "react";

const Unauthorized = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="text-danger">403 - Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
    </div>
  );
};

export default Unauthorized;
