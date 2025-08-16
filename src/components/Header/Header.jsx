import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Fresh, tasty meals made with love and delivered fast. 
          Choose from your favorite dishes and enjoy great food anytime.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
