```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./CartSlice";
import "./ProductList.css";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb5",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Money Plant",
    price: 12,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594575924-7d9f7e2f6b8f",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 14,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 20,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1632207691144-9e9a9c6d8c8a",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 22,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
  },

  // Flowering Plants
  {
    id: 7,
    name: "Rose Plant",
    price: 16,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 8,
    name: "Orchid",
    price: 25,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1566907225470-6c9f2b4b8c1e",
  },
  {
    id: 9,
    name: "Jasmine",
    price: 17,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19d7e7d8c0c",
  },
  {
    id: 10,
    name: "Hibiscus",
    price: 15,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19d7e7d8c0c",
  },
  {
    id: 11,
    name: "Lavender",
    price: 19,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
  },
  {
    id: 12,
    name: "Marigold",
    price: 10,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19d7e7d8c0c",
  },

  // Succulents
  {
    id: 13,
    name: "Aloe Vera",
    price: 13,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 14,
    name: "Echeveria",
    price: 11,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 16,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 16,
    name: "Haworthia",
    price: 14,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 17,
    name: "Cactus",
    price: 12,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
  {
    id: 18,
    name: "Burro's Tail",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          Paradise Nursery
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      {/* Page Heading */}
      <div className="product-header">
        <h1>Our Plants</h1>
        <p>
          Discover beautiful plants for your home and garden.
        </p>
      </div>

      {/* Product Categories */}
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>

                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p className="plant-price">
                    ${plant.price}
                  </p>

                  <button
                    className="add-cart-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
```
