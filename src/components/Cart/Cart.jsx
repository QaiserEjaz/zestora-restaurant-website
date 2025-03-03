import { MdClose } from "react-icons/md";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <Wrapper>
      <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={() => setShowCart(false)}>
              <MdClose />
              <span className="text">close</span>
            </span>
          </div>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <div className="text">Subtotal:</div>
              <div className="text total">Rs.2,374</div>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cart-panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 99;

    .opac-layer {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .cart-content {
      width: 100%;
      height: 100%;
      background: #fff;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      animation: slideCartWindow 0.3s ease forwards;

      .cart-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 15px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .heading {
          flex-grow: 1;
          margin-bottom: 0;
          font-size: 1.8rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .close-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;

          svg {
            font-size: 1.6rem;
          }

          .text {
            text-transform: uppercase;
            font-size: 1.2rem;
          }

          &:hover {
            opacity: 0.5;
          }
        }
      }

      .empty-cart {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-top: 80px;

        svg {
          font-size: 80px;
          opacity: 0.1;
        }

        .return-cta {
          outline: 0;
          border: 0;
          height: 35px;
          width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          font-size: 1.2rem;
          color: #fff;
          background-color: #047352;
          border-bottom: 2px solid #003021;
        }
      }

      .cart-footer {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: auto; /* Push footer to the bottom */

        .subtotal {
          padding: 15px 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;

          .text {
            margin-bottom: 0;
            font-size: 1.8rem;
            font-weight: 700;
            text-transform: uppercase;

            &.total {
              color: ${({ theme }) => theme.colors.bg};
            }
          }
        }

        .button {
          padding: 15px 10px;

          .checkout-cta {
            outline: 0;
            border: 0;
            height: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
            font-size: 1.4rem;
            color: #fff;
            background-color: ${({ theme }) => theme.colors.bg};
            border-radius: 0.8rem;
          }
        }
      }
    }
  }

  @keyframes slideCartWindow {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    .cart-panel {
      .cart-content {
        width: 100%; /* Full width on mobile */

        .cart-header {
          padding: 10px 8px;

          .heading {
            font-size: 1.6rem;
          }

          .close-btn {
            svg {
              font-size: 1.4rem;
            }

            .text {
              font-size: 1rem;
            }
          }
        }

        .empty-cart {
          gap: 10px;
          margin-top: 60px;

          svg {
            font-size: 60px;
          }

          .return-cta {
            height: 30px;
            width: 120px;
            font-size: 1.1rem;
            gap: 5px;
          }
        }

        .cart-footer {
          .subtotal {
            padding: 10px 8px;

            .text {
              font-size: 1.6rem;
            }
          }

          .button {
            padding: 10px 8px;

            .checkout-cta {
              height: 35px;
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    .cart-panel {
      .cart-content {
        .cart-header {
          padding: 12px 10px;

          .heading {
            font-size: 1.8rem;
          }

          .close-btn {
            svg {
              font-size: 1.6rem;
            }

            .text {
              font-size: 1.2rem;
            }
          }
        }

        .empty-cart {
          gap: 15px;
          margin-top: 80px;

          svg {
            font-size: 80px;
          }

          .return-cta {
            height: 35px;
            width: 130px;
            font-size: 1.2rem;
            gap: 6px;
          }
        }

        .cart-footer {
          .subtotal {
            padding: 12px 10px;

            .text {
              font-size: 1.8rem;
            }
          }

          .button {
            padding: 12px 10px;

            .checkout-cta {
              height: 40px;
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    .cart-panel {
      .cart-content {
        .cart-header {
          padding: 15px 12px;

          .heading {
            font-size: 2rem;
          }

          .close-btn {
            svg {
              font-size: 1.8rem;
            }

            .text {
              font-size: 1.3rem;
            }
          }
        }

        .empty-cart {
          gap: 20px;
          margin-top: 100px;

          svg {
            font-size: 100px;
          }

          .return-cta {
            height: 40px;
            width: 150px;
            font-size: 1.3rem;
            gap: 8px;
          }
        }

        .cart-footer {
          .subtotal {
            padding: 15px 12px;

            .text {
              font-size: 2rem;
            }
          }

          .button {
            padding: 15px 12px;

            .checkout-cta {
              height: 45px;
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    .cart-panel {
      .cart-content {
        width: 34rem; /* Fixed width for tablet */

        .cart-header {
          padding: 20px 15px;

          .heading {
            font-size: 2.2rem;
          }

          .close-btn {
            svg {
              font-size: 2rem;
            }

            .text {
              font-size: 1.4rem;
            }
          }
        }

        .empty-cart {
          gap: 25px;
          margin-top: 120px;

          svg {
            font-size: 120px;
          }

          .return-cta {
            height: 45px;
            width: 160px;
            font-size: 1.4rem;
          }
        }

        .cart-footer {
          .subtotal {
            padding: 20px 15px;

            .text {
              font-size: 2.2rem;
            }
          }

          .button {
            padding: 20px 15px;

            .checkout-cta {
              height: 50px;
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .cart-panel {
      .cart-content {
        width: 38rem; /* Slightly larger for laptop */

        .cart-header {
          padding: 25px 20px;

          .heading {
            font-size: 2.4rem;
          }

          .close-btn {
            svg {
              font-size: 2.2rem;
            }

            .text {
              font-size: 1.5rem;
            }
          }
        }

        .empty-cart {
          gap: 30px;
          margin-top: 140px;

          svg {
            font-size: 140px;
          }

          .return-cta {
            height: 50px;
            width: 180px;
            font-size: 1.5rem;
          }
        }

        .cart-footer {
          .subtotal {
            padding: 25px 20px;

            .text {
              font-size: 2.4rem;
            }
          }

          .button {
            padding: 25px 20px;

            .checkout-cta {
              height: 55px;
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    .cart-panel {
      .cart-content {
        width: 42rem; /* Larger for laptopL */

        .cart-header {
          padding: 30px 25px;

          .heading {
            font-size: 2.6rem;
          }

          .close-btn {
            svg {
              font-size: 2.4rem;
            }

            .text {
              font-size: 1.6rem;
            }
          }
        }

        .empty-cart {
          gap: 35px;
          margin-top: 160px;

          svg {
            font-size: 160px;
          }

          .return-cta {
            height: 55px;
            width: 200px;
            font-size: 1.6rem;
          }
        }

        .cart-footer {
          .subtotal {
            padding: 30px 25px;

            .text {
              font-size: 2.6rem;
            }
          }

          .button {
            padding: 30px 25px;

            .checkout-cta {
              height: 60px;
              font-size: 2rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    .cart-panel {
      .cart-content {
        width: 48rem; /* Largest for desktop */

        .cart-header {
          padding: 35px 30px;

          .heading {
            font-size: 2.8rem;
          }

          .close-btn {
            svg {
              font-size: 2.6rem;
            }

            .text {
              font-size: 1.8rem;
            }
          }
        }

        .empty-cart {
          gap: 40px;
          margin-top: 180px;

          svg {
            font-size: 180px;
          }

          .return-cta {
            height: 60px;
            width: 220px;
            font-size: 1.8rem;
          }
        }

        .cart-footer {
          .subtotal {
            padding: 35px 30px;

            .text {
              font-size: 2.8rem;
            }
          }

          .button {
            padding: 35px 30px;

            .checkout-cta {
              height: 65px;
              font-size: 2.2rem;
            }
          }
        }
      }
    }
  }
`;

export default Cart;