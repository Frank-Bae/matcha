import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <nav>
        <div className="logo">
          <h4>Matcha</h4>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Best Seller</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
  }
}
