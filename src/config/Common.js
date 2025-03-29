import CryptoJS from "crypto-js";

const SECRET = "Sanji";

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();
};

export const decryptData = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
