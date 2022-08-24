import { useState, createContext } from "react";

const products = [
  {
    id: 1,
    name: "product-1",
    price: 100,
  },
  {
    id: 1,
    name: "product-2",
    price: 100,
  },
  {
    id: 1,
    name: "product-3",
    price: 100,
  },
];

export let GlobalContext = createContext();

let GlobalProvider = ({ children }) => {
  let [cart, setCart] = useState(() => []);

  let data = {
    products: products,
    cart,
    setCart,
  };
  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
