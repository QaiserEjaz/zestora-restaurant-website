import { MdClose } from "react-icons/md";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <div className="cart-products">
        <div className="cart-product">
          <div className="img-container">
            <img src="/images/pizza-1.jpg" alt="Margherita Pizza" />
          </div>
          <div className="prod-details">
            <span className="name">Margherita</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span>-</span>
              <span>3</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>3</span>
              <span>x</span>
              <span className="highlight">Rs.399</span>
            </div>
          </div>
        </div>
        <div className="cart-product">
          <div className="img-container">
            <img src="/images/burger-3.jpg" alt="Vegan Burger" />
          </div>
          <div className="prod-details">
            <span className="name">Vegan Burger</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span>-</span>
              <span>2</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>2</span>
              <span>x</span>
              <span className="highlight">Rs.249</span>
            </div>
          </div>
        </div>
        <div className="cart-product">
          <div className="img-container">
            <img src="/images/pizza-4.jpg" alt="Original Prosciutto Pizza" />
          </div>
          <div className="prod-details">
            <span className="name">Original Prosciutto</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>1</span>
              <span>x</span>
              <span className="highlight">Rs.679</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;

  .cart-products {
    flex-grow: 1;

    .cart-product {
      padding: 15px 10px;
      display: flex;
      gap: 8px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      .img-container {
        background-color: rgba(0, 0, 0, 0.05);
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;

        img {
          width: 90%;
          height: auto;
          border-radius: 0.5rem;
        }
      }

      .prod-details {
        flex-grow: 1;
        overflow: hidden;
        position: relative;

        .name {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 1.4rem;
          line-height: 1.5;
          margin-bottom: 8px;
          font-weight: 600;
          display: block;
          padding-right: 20px;
        }

        .text {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 1.1rem;
          font-weight: 600;

          .highlight {
            color: ${({ theme }) => theme.colors.bg};
          }
        }

        .close-btn {
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          font-size: 1.4rem;
        }

        .quantity-buttons {
          width: fit-content;
          display: flex;
          border: 1px solid rgba(0, 0, 0, 0.2);
          height: 25px;
          margin-bottom: 6px;

          span {
            font-size: 1.2rem;
            width: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #6b6b6b;

            &:nth-child(1) {
              font-size: 1.6rem;
              border-right: 1px solid rgba(0, 0, 0, 0.2);
            }

            &:nth-child(2) {
              width: 35px;
            }

            &:nth-child(3) {
              font-size: 1.6rem;
              border-left: 1px solid rgba(0, 0, 0, 0.2);
            }
          }
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    .cart-product {
      padding: 10px 8px;
      gap: 6px;

      .img-container {
        width: 50px;
        height: 50px;
        border-radius: 5px;

        img {
          width: 85%;
        }
      }

      .prod-details {
        .name {
          font-size: 1.2rem;
          margin-bottom: 5px;
          padding-right: 15px;
        }

        .text {
          font-size: 1rem;
          gap: 4px;
        }

        .close-btn {
          font-size: 1.2rem;
        }

        .quantity-buttons {
          height: 22px;
          margin-bottom: 5px;

          span {
            font-size: 1rem;
            width: 20px;

            &:nth-child(1) {
              font-size: 1.4rem;
            }

            &:nth-child(2) {
              width: 30px;
            }

            &:nth-child(3) {
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    .cart-product {
      padding: 12px 10px;
      gap: 8px;

      .img-container {
        width: 60px;
        height: 60px;
      }

      .prod-details {
        .name {
          font-size: 1.4rem;
          margin-bottom: 6px;
        }

        .text {
          font-size: 1.1rem;
        }

        .close-btn {
          font-size: 1.4rem;
        }

        .quantity-buttons {
          height: 25px;

          span {
            font-size: 1.2rem;
            width: 25px;

            &:nth-child(1) {
              font-size: 1.6rem;
            }

            &:nth-child(2) {
              width: 35px;
            }

            &:nth-child(3) {
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    .cart-product {
      padding: 15px 12px;
      gap: 10px;

      .img-container {
        width: 70px;
        height: 70px;
        border-radius: 6px;

        img {
          width: 90%;
        }
      }

      .prod-details {
        .name {
          font-size: 1.5rem;
          margin-bottom: 8px;
          padding-right: 20px;
        }

        .text {
          font-size: 1.2rem;
          gap: 5px;
        }

        .close-btn {
          font-size: 1.5rem;
        }

        .quantity-buttons {
          height: 28px;
          margin-bottom: 8px;

          span {
            font-size: 1.3rem;
            width: 28px;

            &:nth-child(1) {
              font-size: 1.8rem;
            }

            &:nth-child(2) {
              width: 38px;
            }

            &:nth-child(3) {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    .cart-product {
      padding: 20px 15px;
      gap: 12px;

      .img-container {
        width: 80px;
        height: 80px;
        border-radius: 8px;
      }

      .prod-details {
        .name {
          font-size: 1.6rem;
          margin-bottom: 10px;
        }

        .text {
          font-size: 1.3rem;
          gap: 6px;
        }

        .close-btn {
          font-size: 1.6rem;
        }

        .quantity-buttons {
          height: 30px;

          span {
            font-size: 1.4rem;
            width: 30px;

            &:nth-child(1) {
              font-size: 18px;
            }

            &:nth-child(2) {
              width: 40px;
            }

            &:nth-child(3) {
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .cart-product {
      padding: 25px 20px;
      gap: 15px;

      .img-container {
        width: 90px;
        height: 90px;
        border-radius: 10px;
      }

      .prod-details {
        .name {
          font-size: 1.8rem;
          margin-bottom: 12px;
          padding-right: 25px;
        }

        .text {
          font-size: 1.4rem;
          gap: 8px;
        }

        .close-btn {
          font-size: 1.8rem;
        }

        .quantity-buttons {
          height: 34px;
          margin-bottom: 10px;

          span {
            font-size: 1.5rem;
            width: 34px;

            &:nth-child(1) {
              font-size: 2rem;
            }

            &:nth-child(2) {
              width: 44px;
            }

            &:nth-child(3) {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    .cart-product {
      padding: 30px 25px;
      gap: 18px;

      .img-container {
        width: 100px;
        height: 100px;
      }

      .prod-details {
        .name {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .text {
          font-size: 1.5rem;
        }

        .close-btn {
          font-size: 2rem;
        }

        .quantity-buttons {
          height: 38px;

          span {
            font-size: 1.6rem;
            width: 38px;

            &:nth-child(1) {
              font-size: 2.2rem;
            }

            &:nth-child(2) {
              width: 48px;
            }

            &:nth-child(3) {
              font-size: 2.2rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    .cart-product {
      padding: 35px 30px;
      gap: 20px;

      .img-container {
        width: 110px;
        height: 110px;
        border-radius: 12px;
      }

      .prod-details {
        .name {
          font-size: 2.2rem;
          margin-bottom: 18px;
          padding-right: 30px;
        }

        .text {
          font-size: 1.6rem;
          gap: 10px;
        }

        .close-btn {
          font-size: 2.2rem;
        }

        .quantity-buttons {
          height: 42px;
          margin-bottom: 12px;

          span {
            font-size: 1.8rem;
            width: 42px;

            &:nth-child(1) {
              font-size: 2.4rem;
            }

            &:nth-child(2) {
              width: 52px;
            }

            &:nth-child(3) {
              font-size: 2.4rem;
            }
          }
        }
      }
    }
  }
`;

export default CartItem;