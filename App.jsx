import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/products";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature into your home with beautiful and healthy plants.
        </p>

        <button className="shop-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
