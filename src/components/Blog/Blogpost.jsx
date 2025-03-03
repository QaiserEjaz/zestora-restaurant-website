import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

const Blogpost = (props) => {
  return (
    <Wrapper>
      <div className="product-card">
        <div className="thumbnail">
          <img src={props.imgsrc} alt={props.pname} />
        </div>
        <div className="prod-details">
          <span className="name">{props.pname}</span>
          <span className="description">{props.description}</span>
        </div>
      </div>
      <a className="read-btn">
        Read More <FiArrowRight />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%; /* Default to 1 column on mobileS */

  .product-card {
    margin-bottom: 0.8rem;

    .thumbnail {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.05);
      margin-bottom: 8px;
      padding: 8px;
      display: flex;
      align-items: center;
      border-radius: 0.8rem;

      img {
        transition: all ease 0.3s;
        display: block;
        width: 100%;
        height: 16rem;
        object-fit: cover;
        border-radius: 0.6rem;
      }
    }

    .prod-details {
      .name {
        font-size: 1.6rem;
        margin: 1.2rem 0 0.6rem;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #232223;
      }

      .description {
        font-size: 1.4rem;
        color: #575457;
        font-weight: 400;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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

  .read-btn {
    color: ${({ theme }) => theme.colors.bg};
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.4rem;
    cursor: pointer;

    svg {
      font-size: 1.4rem;
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    width: 100%; /* 1 column on smallest screens */

    .product-card {
      margin-bottom: 0.6rem;

      .thumbnail {
        margin-bottom: 6px;
        padding: 6px;
        border-radius: 0.6rem;

        img {
          height: 14rem;
          border-radius: 0.4rem;
        }
      }

      .prod-details {
        .name {
          font-size: 1.4rem;
          margin: 1rem 0 0.4rem;
        }

        .description {
          font-size: 1.2rem;
          -webkit-line-clamp: 2;
        }
      }
    }

    .read-btn {
      font-size: 1.2rem;
      gap: 0.3rem;

      svg {
        font-size: 1.2rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    width: 47%; /* 2 columns on mobileM */

    .product-card {
      .thumbnail {
        padding: 8px;

        img {
          height: 16rem;
        }
      }

      .prod-details {
        .name {
          font-size: 1.6rem;
          margin: 1.2rem 0 0.6rem;
        }

        .description {
          font-size: 1.4rem;
          -webkit-line-clamp: 3;
        }
      }
    }

    .read-btn {
      font-size: 1.4rem;

      svg {
        font-size: 1.4rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    width: 46%; /* Adjusted for spacing */

    .product-card {
      margin-bottom: 0.8rem;

      .thumbnail {
        margin-bottom: 8px;
        padding: 10px;
        border-radius: 0.8rem;

        img {
          height: 18rem;
          border-radius: 0.6rem;
        }
      }

      .prod-details {
        .name {
          font-size: 1.8rem;
          margin: 1.4rem 0 0.8rem;
        }

        .description {
          font-size: 1.5rem;
        }
      }
    }

    .read-btn {
      font-size: 1.5rem;
      gap: 0.5rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 31%; /* 3 columns on tablet */

    .product-card {
      margin-bottom: 1rem;

      .thumbnail {
        padding: 12px;
        border-radius: 1rem;

        img {
          height: 20rem;
          border-radius: 0.8rem;
        }
      }

      .prod-details {
        .name {
          font-size: 2rem;
          margin: 1.6rem 0 1rem;
        }

        .description {
          font-size: 1.6rem;
        }
      }
    }

    .read-btn {
      font-size: 1.6rem;
      gap: 0.6rem;

      svg {
        font-size: 1.6rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    width: 23%; /* 4 columns on laptop */

    .product-card {
      .thumbnail {
        img {
          height: 20rem;
        }
      }

      .prod-details {
        .name {
          font-size: 2rem;
          margin: 1.8rem 0 1.2rem;
        }

        .description {
          font-size: 1.4rem;
        }
      }
    }

    .read-btn {
      font-size: 1.5rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    width: 18.5%; /* 5 columns on laptopL */

    .product-card {
      .thumbnail {
        img {
          height: 24rem;
        }
      }

      .prod-details {
        .name {
          font-size: 2.4rem;
          margin: 2rem 0 1.4rem;
        }

        .description {
          font-size: 2rem;
        }
      }
    }

    .read-btn {
      font-size: 2rem;
      gap: 0.8rem;

      svg {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 18%; /* Adjusted for spacing on desktop */

    .product-card {
      margin-bottom: 1.2rem;

      .thumbnail {
        padding: 15px;

        img {
          height: 26rem;
          border-radius: 1rem;
        }
      }

      .prod-details {
        .name {
          font-size: 2.6rem;
          margin: 2.2rem 0 1.6rem;
        }

        .description {
          font-size: 2.2rem;
        }
      }
    }

    .read-btn {
      font-size: 2.2rem;

      svg {
        font-size: 2.2rem;
      }
    }
  }
`;

export default Blogpost;