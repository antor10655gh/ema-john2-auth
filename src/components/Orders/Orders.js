import React from "react";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="cart-review-container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;