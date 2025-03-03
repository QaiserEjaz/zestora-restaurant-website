import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/account", label: "Account" },
  ];

  const handleLinkClick = () => {
    if (setIsMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Nav className={isMenuOpen ? "open" : ""}>
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              className="navbar-link"
              to={item.path}
              onClick={handleLinkClick}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  /* Ensure navbar takes up remaining space between logo and right-actions */
  flex: 1;
  display: flex;
  justify-content: center;

  /* Desktop layout: visible by default */
  .navbar-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;

    /* Initially hidden on mobile */
    @media only screen and (max-width: 767px) {
      display: none;
    }

    /* Desktop layout: horizontal */
    @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }

    @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
      gap: 4.2rem;
    }

    .navbar-link {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      transition: color 0.3s ease-in-out;

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }

      /* Adjust font size across breakpoints */
      font-size: 1.5rem;

      @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
        font-size: 1.6rem;
      }

      @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
        font-size: 1.7rem;
      }

      @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
        font-size: 1.8rem;
      }

      @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
        font-size: 2rem;
      }
    }
  }

  /* Mobile layout: hidden by default, shown when .open */
  &.open {
    @media only screen and (max-width: 767px) {
      .navbar-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1.5rem;

        .navbar-link {
          padding: 1.5rem 0;
        }
      }
    }
  }
`;

export default Navbar;