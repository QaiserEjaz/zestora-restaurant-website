// import React from "react";
// import HeroSection from "./HeroSection";
// import Menu from "../Menu/Menu";
// import styled from "styled-components";

// const Home = () => {
//   const data = {
//     heading: "BREAKFAST SPECIAL",
//     meal: "MEAL",
//     para: "Real Delicious Food Straight To Your Door. Enjoy this delicious meal with our 1 plus 1 offer & get 2 personal pizzas starting @ Rs.499. Order Zestora 1 plus 1 San Francisco Style Pizza & get 2 Personal pizza starting @ Rs.499.",
//     button: "Order Online",
//     image: "images/hero-img.png",
//   };

//   return (
//     <Wrapper>
//       <HeroSection {...data} />
//       <Menu innerPage={true} />
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .heading {
//     margin: 5rem 0 0;
//     text-transform: uppercase;
//     font-size: 2.5rem;
//     text-align: left;
//     font-weight: 500;
//     &:after {
//       background-color: ${({ theme }) => theme.colors.bg};
//       content: "";
//       display: block;
//       height: 3px;
//       margin-top: 5px;
//       width: 50px;
//     }
//   }
//   @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
//     .heading {
//       font-size: 3rem;
//       margin: 10rem 0 0;
//     }
//   }
// `;

// export default Home;


import React from "react";
import HeroSection from "./HeroSection";
import Menu from "../Menu/Menu";
import styled from "styled-components";

const Home = () => {
  const data = {
    heading: "BREAKFAST SPECIAL",
    meal: "MEAL",
    para: "Real Delicious Food Straight To Your Door. Enjoy this delicious meal with our 1 plus 1 offer & get 2 personal pizzas starting @ Rs.499. Order Zestora 1 plus 1 San Francisco Style Pizza & get 2 Personal pizza starting @ Rs.499.",
    button: "Order Online",
    image: "images/hero-img.png",
  };

  return (
    <Wrapper>
      <HeroSection {...data} />
      <Menu innerPage={true} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Base styles for the section */
  padding: 2rem 0;

  .heading {
    margin: 3rem 0 0;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: left;
    font-weight: 500;
    &:after {
      background-color: ${({ theme }) => theme.colors.bg};
      content: "";
      display: block;
      height: 3px;
      margin-top: 5px;
      width: 40px;
    }
  }

  /* Responsive adjustments for Wrapper and children */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    padding: 0;

    .heading {
      font-size: 2rem;
      margin: 3rem 0 0;
      &:after {
        width: 40px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    padding: 0;

    .heading {
      font-size: 2.2rem;
      margin: 4rem 0 0;
      &:after {
        width: 45px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    padding:0;

    .heading {
      font-size: 2.5rem;
      margin: 5rem 0 0;
      &:after {
        width: 50px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding: 0;

    .heading {
      font-size: 3rem;
      margin: 8rem 0 0;
      &:after {
        width: 60px;
        height: 4px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    padding: 0 ;

    .heading {
      font-size: 3.5rem;
      margin: 10rem 0 0;
      &:after {
        width: 70px;
        height: 4px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    padding: 0;

    .heading {
      font-size: 4rem;
      margin: 12rem 0 0;
      &:after {
        width: 80px;
        height: 5px;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    padding: 0;
    .heading {
      font-size: 4.5rem;
      margin: 15rem 0 0;
      &:after {
        width: 100px;
        height: 6px;
      }
    }
  }
`;

export default Home;