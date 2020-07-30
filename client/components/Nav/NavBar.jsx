import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #252834;

  .logo {
    padding: 15px 0;
  }
  @media (max-width: 768px) {
    letter-spacing: 5px;
    font-family: sans-serif;
    font-size: 22px;
    color: #818b63;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Matcha
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
