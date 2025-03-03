import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const HeroSection = (props) => {
  return (
    <Wrapper className="wrapper-background">
      <div className="container">
        <div className="section-inner">
          <div className="section-hero-data">
            <h1 className="heading-text">
              {props.heading} <span className="meal">{props.meal}</span>
            </h1>
            <p className="hero-para">{props.para}</p>
            <Button className="btn">
              <NavLink to="/menu" aria-label="View Menu">
                {props.button} <BsFillArrowRightCircleFill />
              </NavLink>
            </Button>
          </div>
          <div className="section-hero-image">
            <picture>
              <div className="tilt">
                <img
                  className="hero-img"
                  src={props.image}
                  alt="Restaurant Hero Image"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
            </picture>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100vw;
  overflow-x: hidden;

  .container {
    max-width: 100%;
    overflow-x: hidden;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .section-inner {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* Further reduced for smaller screens */
  }

  .heading-text {
    text-transform: uppercase;
     white-space: nowrap;
    font-size: 1.5rem; /* Adjusted for smaller mobile screens */
    line-height: 1.2; /* Prevent text overflow */
    word-break: break-word; /* Prevent text overflow on narrow screens */
    span {
    display: block;
     white-space: normal;
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  .btn {
    max-width: fit-content;
    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Adjusted for smaller screens */
    font-size: 0.9rem; /* Adjusted for smaller screens */
  }

  .hero-para {
    margin-top: 0.6rem;
    margin-bottom: 1.2rem;
    max-width: 100%;
    font-size: clamp(1rem, 2vw, 1.9rem); /* Smooth scaling */
  }

  .section-hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%; /* Constrain parent */
    overflow: hidden; /* Prevent overflow */
  }

  picture {
    text-align: center;
    max-width: 50%;
  }

  .tilt {
    max-width: 100%; /* Constrain parent */
    overflow: hidden; /* Prevent overflow */
  }

  .hero-img {
    width: 90%; /* Scale to parent */
    height: auto;
    max-width: none; /* Remove max-width constraint */
    object-fit: contain; /* Prevent distortion */
  }

  .tilt {
    transition: transform 0.3s ease; /* CSS-based tilt effect */
  }

  .tilt:hover {
    transform: rotate(3deg) scale(1.04); /* Replace react-tilt with CSS */
  }

  /* Small mobile adjustments (320px and above) */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    .heading-text {
      font-size: 2.8rem;
    }

    a {
      font-size: 1rem;
      gap: 0.3rem;
    }
  }

  /* Medium mobile adjustments (375px and above) */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    .heading-text {
      font-size: 2.9rem;
    }

    a {
      font-size: 1.1rem;
      gap: 0.8rem;
    }
  }

  /* Large mobile adjustments (425px and above) */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    .heading-text {
      font-size: 2.5rem;
    }

    a {
      font-size: 1.2rem;
    }
  }

  /* Tablet adjustments (768px and above) */
  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    .heading-text {
      font-size: 3rem; /* Scaled down for better readability on smaller tablets */
    }

    .section-inner {
      flex-direction: row;
      gap: 2rem; /* Adjusted for tablet */
    }

    .hero-para {
      max-width: 35rem; /* Adjusted for tablet */
    }

    a {
      font-size: 1.3rem;
    }
  }

  /* Laptop adjustments (1024px and above) */
  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .heading-text {
      font-size: 6rem; /* Scaled for laptops */
    }

    .section-inner {
     padding-left: 4rem;
      gap: 3rem; /* Adjusted for laptop */
    }

    .hero-para {
      max-width: 50rem;
    }

    a {
      font-size: 1.5rem;
    }
  }

  /* Large laptop adjustments (1440px and above) */
  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    .heading-text {
      font-size: 6.4rem; /* Original size for large screens */
    }

    .section-inner {
     padding-left: 4rem;
      gap: 5rem; /* Original gap for larger screens */
    }
  }
`;

export default HeroSection;



