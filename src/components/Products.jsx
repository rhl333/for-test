import { useState, useContext } from "react";
import { GlobalContext } from "../context/Global";
import "./products.css";

// let newarr = [1,2,3]
// newarr.includes

const Products = () => {
  let { cart, products, setCart } = useContext(GlobalContext);
  let [value, setValue] = useState(() => 0);

  function clickHandleAdd(product) {
    console.log(product);
    setValue((prev) => (prev += 1));
    if (cart.length === 0 || !cart.includes(product)) {
      setCart(() => cart.push(product));
      console.log(cart);
    } else {
      product.qty += 1;
    }
  }
  // function clickHandleAdd(product) {
  //   setValue((prev) => (prev -= 1))
  //   if (cart) {
  //     cart.push(product);
  //   } else {
  //     product.qty+=1
  //   }
  // }
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="main">
        {products.map((product) => (
          <div key={product.name} className="child">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <div className="btn">
              <span className="minus">-</span>
              <span>{value}</span>
              <span className="plus" onClick={() => clickHandleAdd({ ...product, qty: value })}>
                +
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
