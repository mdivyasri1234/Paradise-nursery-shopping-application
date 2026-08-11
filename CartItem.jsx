```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total cost of each plant
  const getItemTotal = (item) => {
    return item.price * item.quantity;
  };

  return (
    <div className="cart-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          Paradise Nursery
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )})
          </Link>
        </div>
      </nav>

      {/* Cart Heading */}
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <Link to="/plants">
              <button className="continue-button">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>

                  {/* Plant Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  {/* Plant Details */}
                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: ${item.price}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p className="item-total">
                      Total: ${getItemTotal(item).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>

                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <h2>
                Total Cart Amount: ${totalAmount.toFixed(2)}
              </h2>

              {/* Checkout */}
              <button
                className="checkout-button"
                onClick={() => alert("Coming Soon!")}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link to="/plants">
                <button className="continue-button">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
```
