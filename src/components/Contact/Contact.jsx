import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h1 className="contact-heading wrapper-background">
        Contact <span className="contact-sub-heading">Our Team</span>
      </h1>

      <div className="container">
        <div className="contact-inner">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mpzelowa"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                autoComplete="off"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Message"
                autoComplete="off"
                required
              ></textarea>

              <input type="submit" value="submit" />
            </form>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d559.7751624293262!2d66.99363157916555!3d24.96530995799503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1740841551753!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zestora Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrapper-background {
    padding: 3rem 0; /* Base padding, will scale up slightly on larger screens */
  }

  .contact-heading {
    text-transform: uppercase;
    font-size: 2.5rem;
    text-align: center;

    .contact-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  .contact-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    margin: 4rem 0;
  }

  .contact-form {
    width: 100%;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      input,
      textarea {
        width: 100%;
        padding: 1.2rem 1.8rem;
        font-size: 1.4rem;
        border-radius: 0.5rem;
      }

      textarea {
        height: 12rem;
      }

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.3s;
        margin-top: 1rem;
        padding: 1.2rem;
        font-size: 1.6rem;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.bg};
          color: ${({ theme }) => theme.colors.bg};
        }
      }
    }
  }

  .map {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 5px 0px #888888;
    padding: 1rem;
    margin: 0 auto;
    border-radius: 0.8rem;

    iframe {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      border-radius: 0.8rem;
      width: 100%;
      height: 300px;
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    &.wrapper-background {
      padding: 1.5rem 0;
    }

    .contact-heading {
      font-size: 2.2rem;
    }

    .contact-inner {
      gap: 2rem;
      margin: 3rem 0;
    }

    .contact-form {
      .contact-inputs {
        gap: 1.5rem;

        input,
        textarea {
          padding: 1rem 1.5rem;
          font-size: 1.2rem;
        }

        textarea {
          height: 10rem;
        }

        input[type="submit"] {
          padding: 1rem;
          font-size: 1.4rem;
        }
      }
    }

    .map {
      padding: 0.8rem;

      iframe {
        height: 250px;
        border-radius: 0.6rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    &.wrapper-background {
      padding: 1.8rem 0;
    }

    .contact-heading {
      font-size: 2.5rem;
    }

    .contact-inner {
      gap: 3rem;
      margin: 4rem 0;
    }

    .contact-form {
      .contact-inputs {
        gap: 2rem;

        input,
        textarea {
          padding: 1.2rem 1.8rem;
          font-size: 1.4rem;
        }

        textarea {
          height: 12rem;
        }

        input[type="submit"] {
          padding: 1.2rem;
          font-size: 1.6rem;
        }
      }
    }

    .map {
      iframe {
        height: 300px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    &.wrapper-background {
      padding: 2rem 0;
    }

    .contact-heading {
      font-size: 3rem;
    }

    .contact-inner {
      gap: 4rem;
      margin: 5rem 0;
    }

    .contact-form {
      .contact-inputs {
        gap: 2.5rem;

        input,
        textarea {
          padding: 1.4rem 2rem;
          font-size: 1.6rem;
        }

        textarea {
          height: 14rem;
        }

        input[type="submit"] {
          padding: 1.4rem;
          font-size: 1.8rem;
        }
      }
    }

    .map {
      padding: 1rem;

      iframe {
        height: 350px;
        border-radius: 0.8rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    &.wrapper-background {
      padding: 2.5rem 0;
    }

    .contact-heading {
      font-size: 3.5rem;
    }

    .contact-inner {
      flex-direction: row;
      gap: 5rem;
      margin: 7rem 0;
    }

    .contact-form {
      width: 40%;

      .contact-inputs {
        gap: 3rem;

        input,
        textarea {
          padding: 1.6rem 2.4rem;
          font-size: 1.8rem;
        }

        textarea {
          height: 16rem;
        }

        input[type="submit"] {
          padding: 1.5rem;
          font-size: 2rem;
        }
      }
    }

    .map {
      width: 60%;
      padding: 1.5rem;

      iframe {
        height: 400px;
        border-radius: 1rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .wrapper-background {
      padding: 2rem 0;
    }

    .contact-heading {
      font-size: 4rem;
    }

    .contact-inner {
      gap: 5rem;
      margin: 3rem;
    }

    .contact-form {
      .contact-inputs {
        input,
        textarea {
          padding: 1rem 1rem;
          font-size: 1.6rem;
        }

        textarea {
          height: 12rem;
        }

        input[type="submit"] {
          padding: 0.8rem;
          font-size: 1.8rem;
        }
      }
    }

    .map {
      padding: 2rem;

      iframe {
        height: 350px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    &.wrapper-background {
      padding: 3.5rem 0;
    }

    .contact-heading {
      font-size: 4.5rem;
    }

    .contact-inner {
      gap: 7rem;
      margin: 11rem 0;
    }

    .contact-form {
      .contact-inputs {
        input,
        textarea {
          padding: 2rem 2.8rem;
          font-size: 2.2rem;
        }

        textarea {
          height: 20rem;
        }

        input[type="submit"] {
          padding: 1.8rem;
          font-size: 2.4rem;
        }
      }
    }

    .map {
      iframe {
        height: 500px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    &.wrapper-background {
      padding: 4rem 0;
    }

    .contact-heading {
      font-size: 5rem;
    }

    .contact-inner {
      gap: 8rem;
      margin: 13rem 0;
    }

    .contact-form {
      .contact-inputs {
        input,
        textarea {
          padding: 2.2rem 3rem;
          font-size: 2.4rem;
        }

        textarea {
          height: 22rem;
        }

        input[type="submit"] {
          padding: 2rem;
          font-size: 2.6rem;
        }
      }
    }

    .map {
      padding: 2.5rem;

      iframe {
        height: 550px;
      }
    }
  }
`;

export default Contact;