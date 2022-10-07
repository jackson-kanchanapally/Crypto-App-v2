import { createContext, useContext, useState, useEffect } from "react";
const Crypto = createContext();
export default function CryptoContext({ children }) {
  const [cur, setCur] = useState("INR");
  const [sym, setSym] = useState("₹");
  useEffect(() => {
    if (cur === "INR") setSym("₹");
    else if (cur === "USD") setSym("$");
  }, [cur]);

  return (
    <Crypto.Provider value={{ cur, sym, setCur }}>{children}</Crypto.Provider>
  );
}

export const CryptoState = () => {
  return useContext(Crypto);
};
