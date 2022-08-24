import { useState, useContext } from "react";

import { GlobalContext } from "../context/Global";

const Cart = () => {
  let { cart } = useContext(GlobalContext);
  console.log(cart);
  return (
    <div>
      {/* <div className="items">
        {cart?.map((item) => (
          <h2>{item.name}</h2>
        ))}
      </div> */}
    </div>
  );
};

export default Cart;
