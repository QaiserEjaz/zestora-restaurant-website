import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";
import Navbar from "./Navbar";
import Cart from "../Cart/Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MainHeader>
      <div className="header-content">
        {/* Logo on the left */}
        <NavLink to="/">
          <div className="logo">
            <FaPizzaSlice className="logo-icon" /> Zestora
          </div>
        </NavLink>

        {/* Navbar in the middle (desktop) */}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Right Actions: Cart and Hamburger */}
        <div className="right-actions">
          <div
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
          <span className="cart-icon" onClick={() => setShowCart(true)}>
            <BsHandbagFill className="bag" />
            <span>6</span>
          </span>
        </div>
      </div>

      {showCart && <Cart setShowCart={setShowCart} />}
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.bg};

  .header-content {
    display: flex;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
    height: 6rem;
    padding: 0 2.5rem;
    /* Adjust layout to ensure logo, navbar, and right-actions are positioned correctly */
    justify-content: space-between;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    .logo {
      display: flex;
      gap: 0.6rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      .logo-icon {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .right-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .hamburger {
    cursor: pointer;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    display: none; /* Hidden by default, controlled by GlobalStyle */
  }

  .bag {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;
    cursor: pointer;
  }

  .cart-icon {
    position: relative;
    display: flex;
    span {
      min-width: 20px;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.helper};
      padding: 2.5px;
      position: absolute;
      top: -5px;
      right: -12px;
      font-size: 12px;
      line-height: 1;
      border-radius: 10px;
    }
  }

  /* Responsive adjustments for header */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    .header-content {
      height: 5.5rem;
      padding: 0 1.5rem;
    }
    .logo {
      font-size: 1.8rem;
    }
    .bag {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    .header-content {
      height: 6rem;
      padding: 0 2rem;
    }
    .logo {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    .header-content {
      padding: 0 2.5rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    .header-content {
      height: 7rem;
    }
    .logo {
      font-size: 2.2rem;
    }
    .bag {
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .header-content {
      height: 8rem;
      padding: 0 1.5rem;
    }
    .logo {
      font-size: 2.5rem;
    }
    .bag {
      font-size: 2.5rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    .header-content {
      max-width: 130rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    .header-content {
      max-width: 150rem;
    }
  }
`;

export default Header;