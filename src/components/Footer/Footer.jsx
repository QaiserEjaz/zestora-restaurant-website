import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <footer className="footer">
          <div className="footer-content">
            <div className="col">
              <div className="title">About</div>
              <div className="text">
                At Zestora, we don’t just make pizza. We make people happy.
                Zestora was built on the belief that pizza night should be
                special, and we carry that belief into everything we do. With
                more than 15 years of experience under our belts.
              </div>
            </div>
            <div className="col">
              <div className="title">Contact</div>
              <div className="c-item">
                <FaLocationArrow />
                <div className="text">Karachi, Sindh, Pakistan</div>
              </div>
              <div className="c-item">
                <FaMobileAlt />
                <div className="text">Phone: 090878601</div>
              </div>
              <div className="c-item">
                <FaEnvelope />
                <div className="text">Email: qaiserejaz125@gmail.com</div>
              </div>
            </div>
            <div className="col">
              <div className="title">Menu</div>
              <span className="text">Pizza</span>
              <span className="text">Pasta</span>
              <span className="text">Burgers</span>
              <span className="text">Desserts</span>
              <span className="text">Drinks</span>
            </div>
            <div className="col">
              <div className="title">Pages</div>
              <span className="text">Home</span>
              <span className="text">About</span>
              <span className="text">Menu</span>
              <span className="text">Blog</span>
              <span className="text">Contact</span>
            </div>
          </div>
        </footer>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text"> © 2023 Zestora. All Rights Reserved BY Qaiser Ejaz</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer {
    width: 100%;

    .footer-content {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .col {
        width: 100%;
        max-width: 100%; /* Full width on mobile */
        text-align: center;

        .title {
          margin-bottom: 15px;
          font-size: 1.6rem;
          font-weight: 600;
        }

        .text {
          color: rgba(0, 0, 0, 0.5);
          font-size: 1.2rem;
          line-height: 1.5;
        }

        .c-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;

          svg {
            flex-shrink: 0;
            font-size: 1.2rem;
            margin-right: 8px;
            color: rgba(0, 0, 0, 0.5);
          }
        }

        span {
          &.text {
            display: block;
            margin-bottom: 10px;
            cursor: pointer;
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  .bottom-bar {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f7f5f5;

    .bottom-bar-content {
      padding: 15px;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 10px;
      .text {
        font-size: 1.1rem;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    .footer {
      .footer-content {
        padding: 20px 0;
        gap: 15px;

        .col {
          .title {
            font-size: 1.4rem;
            margin-bottom: 10px;
          }

          .text {
            font-size: 1.1rem;
          }

          .c-item {
            margin-bottom: 10px;

            svg {
              font-size: 1.1rem;
              margin-right: 6px;
            }
          }

          span.text {
            font-size: 1.1rem;
            margin-bottom: 8px;
          }
        }
      }
    }

    .bottom-bar {
      .bottom-bar-content {
        padding: 10px;

        .text {
          font-size: 1rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    .footer {
      .footer-content {
        padding: 25px 0;
        gap: 20px;

        .col {
          .title {
            font-size: 1.5rem;
            margin-bottom: 12px;
          }

          .text {
            font-size: 1.2rem;
          }

          .c-item {
            svg {
              font-size: 1.2rem;
              margin-right: 8px;
            }
          }

          span.text {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }
        }
      }
    }

    .bottom-bar {
      .bottom-bar-content {
        padding: 12px;

        .text {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    .footer {
      .footer-content {
        padding: 30px 0;
        gap: 25px;

        .col {
          .title {
            font-size: 1.6rem;
            margin-bottom: 15px;
          }

          .text {
            font-size: 1.3rem;
          }

          .c-item {
            svg {
              font-size: 1.3rem;
            }
          }

          span.text {
            font-size: 1.3rem;
          }
        }
      }
    }

    .bottom-bar {
      .bottom-bar-content {
        padding: 15px;

        .text {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    .footer {
      .footer-content {
        padding: 40px 0;
        flex-direction: row; /* Switch to row layout */
        justify-content: space-between;
        gap: 30px;

        .col {
          width: 22%; /* Four columns */
          max-width: 300px;
          text-align: left; /* Align text to the left for better readability */

          .title {
            font-size: 1.8rem;
            margin-bottom: 20px;
          }

          .text {
            font-size: 1.4rem;
          }

          .c-item {
            justify-content: flex-start;
            margin-bottom: 15px;

            svg {
              font-size: 1.4rem;
              margin-right: 10px;
            }
          }

          span.text {
            font-size: 1.4rem;
            margin-bottom: 12px;
          }
        }
      }
    }

    .bottom-bar {
      .bottom-bar-content {
        padding: 0;
        height: 50px;
        max-width: 1200px;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
        text-align: left;

        .text {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .footer {
      .footer-content {
        padding: 50px 0;
        gap: 40px;

        .col {
          .title {
            font-size: 2rem;
            margin-bottom: 25px;
          }

          .text {
            font-size: 1.5rem;
          }

          .c-item {
            margin-bottom: 20px;

            svg {
              font-size: 1.5rem;
            }
          }

          span.text {
            font-size: 1.5rem;
            margin-bottom: 15px;
          }
        }
      }
    }

    .bottom-bar {
      .bottom-bar-content {
        height: 60px;

        .text {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    .footer {
      .footer-content {
        padding: 60px 0;
        gap: 50px;

        .col {
          .title {
            font-size: 2.2rem;
            margin-bottom: 30px;
          }

          .text {
            font-size: 1.6rem;
          }

          .c-item {
            svg {
              font-size: 1.6rem;
              margin-right: 12px;
            }
          }

          span.text {
            font-size: 1.6rem;
          }
        }
      }
    }

    .bottom-bar {
      .bottom-bar-content {
        height: 70px;

        .text {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    .footer {
      .footer-content {
        padding: 70px 0;
        gap: 60px;

        .col {
          .title {
            font-size: 2.4rem;
            margin-bottom: 35px;
          }

          .text {
            font-size: 1.8rem;
          }

          .c-item {
            svg {
              font-size: 1.8rem;
              margin-right: 15px;
            }
          }

          span.text {
            font-size: 1.8rem;
            margin-bottom: 18px;
          }
        }
      }
    }

    .bottom-bar {
      .bottom-bar-content {
        height: 80px;

        .text {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Footer;