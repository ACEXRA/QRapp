import { encryptData } from "../config/Common";
import { data } from "../misc/Database";

export const loginHandler = (e) => {
  const user = data.find(
    (item) => item.name === e.name && item.password === e.password
  );

  if (user) {
    console.log("Login successful");
    return user;
  } else {
    console.log("Error: Invalid credentials");
    return null;
  }
};

export const employeeMockService = (e) => {
  const user = data.find(
    (item) => item.name === e.name && item.password === e.password
  );
  return encryptData(user);
};
