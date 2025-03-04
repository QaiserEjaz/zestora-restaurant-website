import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper className="wrapper-background">
      <div className="container">
        <div className="newsletter-section">
          <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">
              Sign up for latest updates and offers
            </span>
            <div className="form">
              <input type="text" placeholder="Email Address" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
            <div className="text">
              Will be used in accordance with our Privacy Policy
            </div>
            <div className="social-icons">
              <div className="icon">
                <FaFacebookF size={14} />
              </div>
              <div className="icon">
                <FaTwitter size={14} />
              </div>
              <div className="icon">
                <FaInstagram size={14} />
              </div>
              <div className="icon">
                <FaLinkedinIn size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .newsletter-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .newsletter-content {
      width: fit-content;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
      text-align: center;
    }
    .small-text {
      margin-bottom: 15px;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.5rem;
    }
    .big-text {
      margin-bottom: 20px;
      font-size: 22px;
      line-height: 30px;
      font-weight: 500;
      text-transform: uppercase;
      padding: 0 30px;
    }
    .form {
      display: flex;
      gap: 5px;
      margin-bottom: 10px;
      input {
        width: 20rem;
        height: 4rem;
        border-radius: 0;
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 0 12px;
        outline: none;
      }
      .newsletter-btn {
        outline: none;
        border: none;
        height: 40px;
        width: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.bg};
      }
    }
    .text {
      margin-bottom: 20px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
    .social-icons {
      display: flex;
      gap: 10px;
      .icon {
        width: 30px;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .form {
      .newsletter-btn {
        width: 10rem;
      }
      input {
        width: 30rem;
      }
    }
  }
`;

export default Newsletter;

