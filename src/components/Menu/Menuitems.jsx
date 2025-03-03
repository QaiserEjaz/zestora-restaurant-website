import React from "react";
import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";

const Menuitems = (props) => {
  return (
    <Wrapper>
      <div className="product-card">
        <div className="thumbnail">
          <img src={props.imgsrc} alt={props.pname} />
        </div>
        <div className="prod-details">
          <span className="name">{props.pname}</span>
          <span className="price">Rs.{props.price}</span>
        </div>
        <div className="cart-buttons">
          {/* Uncomment if you want to include quantity buttons */}
          {/* <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div> */}
          <button className="add-to-cart-button">
            <BsPlusCircleFill size={15} />
            ADD TO CART
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 47%; /* 2 columns on mobile */

  .product-card {
    margin-bottom: 1rem;

    .thumbnail {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.05);
      margin-bottom: 8px;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.8rem;

      img {
        transition: all ease 0.3s;
        display: block;
        width: 100%;
        border-radius: 0.8rem;
        object-fit: cover;
        height: 8rem;
      }
    }

    .prod-details {
      .name {
        font-size: 1.3rem;
        margin: 1.2rem 0 0.2rem;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #232223;
      }

      .price {
        font-size: 1.6rem;
        color: #575457;
        font-weight: 400;
        line-height: 1.5;
      }
    }

    &:hover {
      .thumbnail {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .cart-buttons {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-top: 1rem;

    .quantity-buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      border: 0.15rem solid rgba(0, 0, 0, 0.2);
      border-radius: 0.4rem;
      margin-right: 0.8rem;
      height: 3.2rem;

      span {
        font-size: 1.6rem;
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #6b6b6b;

        &:nth-child(1) {
          border-right: 0.15rem solid rgba(0, 0, 0, 0.2);
        }

        &:nth-child(2) {
          width: 3.5rem;
        }

        &:nth-child(3) {
          border-left: 0.15rem solid rgba(0, 0, 0, 0.2);
        }
      }
    }

    .add-to-cart-button {
      background-color: ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 4rem;
      width: 100%;
      height: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      cursor: pointer;
      border: none;
      outline: none;

      svg {
        font-size: 1.2rem;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.btnHover};
      }
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    width: 48%;

    .product-card {
      margin-bottom: 0.8rem;

      .thumbnail {
        margin-bottom: 6px;
        padding: 3px;
        border-radius: 0.6rem;

        img {
          height: 7rem;
          border-radius: 0.6rem;
        }
      }

      .prod-details {
        .name {
          font-size: 1.2rem;
          margin: 1rem 0 0.1rem;
        }

        .price {
          font-size: 1.4rem;
        }
      }
    }

    .cart-buttons {
      gap: 0.8rem;
      margin-top: 0.8rem;

      .quantity-buttons {
        height: 3rem;

        span {
          font-size: 1.4rem;
          width: 4.5rem;

          &:nth-child(2) {
            width: 3rem;
          }
        }
      }

      .add-to-cart-button {
        height: 3rem;
        font-size: 1.1rem;
        border-radius: 3.5rem;

        svg {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    width: 47%;

    .product-card {
      .thumbnail {
        padding: 4px;

        img {
          height: 8rem;
        }
      }

      .prod-details {
        .name {
          font-size: 1.3rem;
        }

        .price {
          font-size: 1.6rem;
        }
      }
    }

    .cart-buttons {
      .quantity-buttons {
        height: 3.2rem;

        span {
          font-size: 1.6rem;
          width: 5rem;

          &:nth-child(2) {
            width: 3.5rem;
          }
        }
      }

      .add-to-cart-button {
        height: 3.2rem;
        font-size: 1.2rem;

        svg {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    width: 46%;

    .product-card {
      .thumbnail {
        padding: 5px;

        img {
          height: 9rem;
        }
      }

      .prod-details {
        .name {
          font-size: 1.4rem;
          margin: 1.2rem 0 0.2rem;
        }

        .price {
          font-size: 1.8rem;
        }
      }
    }

    .cart-buttons {
      gap: 1rem;
      margin-top: 1rem;

      .quantity-buttons {
        height: 3.5rem;

        span {
          font-size: 1.8rem;
          width: 5.5rem;

          &:nth-child(2) {
            width: 4rem;
          }
        }
      }

      .add-to-cart-button {
        height: 3.5rem;
        font-size: 1.3rem;

        svg {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 23%; /* 4 columns on tablet */

    .product-card {
      margin-bottom: 1.5rem;

      .thumbnail {
        padding: 8px;
        border-radius: 1rem;

        img {
          height: 16rem;
          border-radius: 1rem;
        }
      }

      .prod-details {
        .name {
          font-size: 1.6rem;
          margin: 1.4rem 0 0.3rem;
        }

        .price {
          font-size: 2rem;
        }
      }
    }

    .cart-buttons {
      display: flex;
      flex-direction: row;
      margin-top: 1.5rem;
      gap: 0;

      .quantity-buttons {
        width: fit-content;
        border: 0.2rem solid rgba(0, 0, 0, 0.2);
        border-radius: 0.5rem;
        margin-right: 1rem;
        height: 4rem;

        span {
          font-size: 1.8rem;
          width: 4rem;

          &:nth-child(2) {
            width: 4rem;
          }
        }
      }

      .add-to-cart-button {
        flex-grow: 1;
        height: 4rem;
        font-size: 1.4rem;
        border-radius: 5rem;

        svg {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    width: 22.5%; /* Slightly adjusted for spacing */

    .product-card {
      .thumbnail {
        padding: 10px;

        img {
          height: 18rem;
        }
      }

      .prod-details {
        .name {
          font-size: 1.8rem;
          margin: 1.6rem 0 0.4rem;
        }

        .price {
          font-size: 2.2rem;
        }
      }
    }

    .cart-buttons {
      margin-top: 2rem;

      .quantity-buttons {
        height: 4.5rem;

        span {
          font-size: 2rem;
          width: 4.5rem;

          &:nth-child(2) {
            width: 4.5rem;
          }
        }
      }

      .add-to-cart-button {
        height: 4.5rem;
        font-size: 1.6rem;

        svg {
          font-size: 1.6rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    width: 22%; /* Adjusted for larger screens */

    .product-card {
      .thumbnail {
        padding: 12px;

        img {
          height: 20rem;
        }
      }

      .prod-details {
        .name {
          font-size: 2rem;
          margin: 1.8rem 0 0.5rem;
        }

        .price {
          font-size: 2.4rem;
        }
      }
    }

    .cart-buttons {
      margin-top: 2.5rem;

      .quantity-buttons {
        height: 5rem;

        span {
          font-size: 2.2rem;
          width: 5rem;

          &:nth-child(2) {
            width: 5rem;
          }
        }
      }

      .add-to-cart-button {
        height: 5rem;
        font-size: 1.8rem;

        svg {
          font-size: 1.8rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 21.5%; /* Adjusted for larger screens */

    .product-card {
      .thumbnail {
        padding: 15px;

        img {
          height: 22rem;
        }
      }

      .prod-details {
        .name {
          font-size: 2.2rem;
          margin: 2rem 0 0.6rem;
        }

        .price {
          font-size: 2.6rem;
        }
      }
    }

    .cart-buttons {
      margin-top: 3rem;

      .quantity-buttons {
        height: 5.5rem;

        span {
          font-size: 2.4rem;
          width: 5.5rem;

          &:nth-child(2) {
            width: 5.5rem;
          }
        }
      }

      .add-to-cart-button {
        height: 5.5rem;
        font-size: 2rem;

        svg {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default Menuitems;