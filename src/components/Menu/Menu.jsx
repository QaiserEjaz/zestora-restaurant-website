import React from "react";
import Menuitems from "./Menuitems";
import Mdata from "./Mdata";
import styled from "styled-components";

const Menu = ({ innerPage }) => {
  return (
    <Wrapper>
      {!innerPage && (
        <h1 className="menu-heading wrapper-background">
          Food <span className="menu-sub-heading">Menu</span>
        </h1>
      )}
      <div className="container">
        <div className="products-container">
          <div className="products">
            {Mdata.map((menu) => (
              <Menuitems
                key={menu.id}
                id={menu.id}
                imgsrc={menu.imgsrc}
                pname={menu.pname}
                price={menu.price}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Override wrapper-background padding (minimized as in About and Newsletter) */
  .wrapper-background {
    padding: 3rem 0; /* Base padding, will scale up slightly on larger screens */
  }

  .menu-heading {
    text-transform: uppercase;
    font-size: 2.5rem;
    text-align: center;

    .menu-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  .products-container {
    margin: 3rem 0;

    .sec-heading {
      margin-bottom: 15px;
      font-size: 1.6rem;
      font-weight: 500;
      text-transform: uppercase;
    }

    .products {
      display: flex;
      flex-flow: wrap;
      align-items: flex-start;
      justify-content: center;
      row-gap: 2rem;
      column-gap: 1rem;
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    &.wrapper-background {
      padding: 1.5rem 0;
    }

    .menu-heading {
      font-size: 2.2rem;
    }

    .products-container {
      margin: 2rem 0;

      .sec-heading {
        font-size: 1.4rem;
        margin-bottom: 10px;
      }

      .products {
        row-gap: 1.5rem;
        column-gap: 0.8rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    &.wrapper-background {
      padding: 1.8rem 0;
    }

    .menu-heading {
      font-size: 2.5rem;
    }

    .products-container {
      margin: 3rem 0;

      .sec-heading {
        font-size: 1.6rem;
        margin-bottom: 12px;
      }

      .products {
        row-gap: 2rem;
        column-gap: 1rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    &.wrapper-background {
      padding: 2rem 0;
    }

    .menu-heading {
      font-size: 3rem;
    }

    .products-container {
      margin: 4rem 0;

      .sec-heading {
        font-size: 1.8rem;
        margin-bottom: 15px;
      }

      .products {
        row-gap: 2.5rem;
        column-gap: 1.5rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    &.wrapper-background {
      padding: 2.5rem 0;
    }

    .menu-heading {
      font-size: 3.5rem;
    }

    .products-container {
      margin: 7rem 0;

      .sec-heading {
        font-size: 2rem;
        margin-bottom: 20px;
      }

      .products {
        row-gap: 3rem;
        column-gap: 2rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .wrapper-background {
      padding: 2rem 0;
    }

    .menu-heading {
      font-size: 4rem;
    }

    .products-container {
      margin: 4rem 0;

      .sec-heading {
        font-size: 2.2rem;
        margin-bottom: 25px;
      }

      .products {
        row-gap: 4rem;
        column-gap: 3rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    &.wrapper-background {
      padding: 3.5rem 0;
    }

    .menu-heading {
      font-size: 4.5rem;
    }

    .products-container {
      margin: 11rem 0;

      .sec-heading {
        font-size: 2.4rem;
        margin-bottom: 30px;
      }

      .products {
        row-gap: 5rem;
        column-gap: 4rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    &.wrapper-background {
      padding: 4rem 0;
    }

    .menu-heading {
      font-size: 5rem;
    }

    .products-container {
      margin: 13rem 0;

      .sec-heading {
        font-size: 2.6rem;
        margin-bottom: 35px;
      }

      .products {
        row-gap: 6rem;
        column-gap: 5rem;
      }
    }
  }
`;

export default Menu;