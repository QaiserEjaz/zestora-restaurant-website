import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="error-inner">
          <h1>404</h1>
          <span>
            We're sorry, but we can't find the page you are looking for. It's
            probably something went wrong but now we know about it and we'll try
            to fix it as soon as possible.
          </span>
          <Button className="btn">
            <NavLink to="/">
              Go Home <BsFillArrowRightCircleFill />
            </NavLink>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .error-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 5rem auto;

    h1 {
      color: ${({ theme }) => theme.colors.bg};
      font-size: 8rem;
      line-height: 1.2;
    }

    span {
      color: ${({ theme }) => theme.colors.black};
      font-size: 1.4rem;
      text-align: center;
      line-height: 1.5;
      margin: 1rem 0;
    }

    .btn {
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 4rem;
      margin: 2rem 0;
      padding: 1.2rem 2rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      font-size: 1.2rem;

      svg {
        font-size: 1.2rem;
      }
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    .error-inner {
      margin: 4rem auto;

      h1 {
        font-size: 6rem;
      }

      span {
        font-size: 1.2rem;
        margin: 0.8rem 0;
      }

      .btn {
        margin: 1.5rem 0;
        padding: 1rem 1.8rem;
        border-radius: 3.5rem;
      }

      a {
        font-size: 1.1rem;
        gap: 0.5rem;

        svg {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    .error-inner {
      margin: 5rem auto;

      h1 {
        font-size: 8rem;
      }

      span {
        font-size: 1.4rem;
      }

      .btn {
        padding: 1.2rem 2rem;
      }

      a {
        font-size: 1.2rem;

        svg {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    .error-inner {
      margin: 6rem auto;

      h1 {
        font-size: 10rem;
      }

      span {
        font-size: 1.6rem;
        margin: 1rem 0;
      }

      .btn {
        margin: 2rem 0;
        padding: 1.4rem 2.5rem;
      }

      a {
        font-size: 1.4rem;
        gap: 0.8rem;

        svg {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    .error-inner {
      width: 60rem;
      margin: 8rem auto;

      h1 {
        font-size: 15rem;
      }

      span {
        font-size: 1.8rem;
        margin: 1.5rem 0;
      }

      .btn {
        margin: 3rem 0;
        padding: 1.5rem 3rem;
        border-radius: 5rem;
      }

      a {
        font-size: 1.5rem;
        gap: 1rem;

        svg {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .error-inner {
      width: 70rem;
      margin: 10rem auto;

      h1 {
        font-size: 18rem;
      }

      span {
        font-size: 2rem;
      }

      .btn {
        padding: 1.8rem 3.5rem;
      }

      a {
        font-size: 1.8rem;

        svg {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    .error-inner {
      width: 80rem;
      margin: 12rem auto;

      h1 {
        font-size: 20rem;
      }

      span {
        font-size: 2.2rem;
      }

      .btn {
        padding: 2rem 4rem;
      }

      a {
        font-size: 2rem;

        svg {
          font-size: 2rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    .error-inner {
      width: 90rem;
      margin: 14rem auto;

      h1 {
        font-size: 22rem;
      }

      span {
        font-size: 2.4rem;
        margin: 2rem 0;
      }

      .btn {
        padding: 2.2rem 4.5rem;
      }

      a {
        font-size: 2.2rem;
        gap: 1.2rem;

        svg {
          font-size: 2.2rem;
        }
      }
    }
  }
`;

export default Error;