import React from "react";
import Blogpost from "./Blogpost";
import Bdata from "./Bdata";
import styled from "styled-components";

const Blog = () => {
  return (
    <Wrapper>
      <h1 className="blog-heading wrapper-background">
        Read <span className="blog-sub-heading">Our Blogs</span>
      </h1>
      <div className="container">
        <div className="blog-container">
          <div className="blogs">
            {Bdata.map((blog) => (
              <Blogpost
                key={blog.id}
                id={blog.id}
                imgsrc={blog.imgsrc}
                pname={blog.pname}
                description={blog.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrapper-background {
    padding: 2rem 0; /* Base padding, will scale up slightly on larger screens */
  }

  .blog-heading {
    text-transform: uppercase;
    font-size: 2.5rem;
    text-align: center;

    .blog-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  .blog-container {
    margin: 3rem 0;

    .sec-heading {
      margin-bottom: 15px;
      font-size: 1.6rem;
      font-weight: 500;
      text-transform: uppercase;
    }

    .blogs {
      display: flex;
      flex-flow: wrap;
      align-items: flex-start;
      justify-content: center;
      column-gap: 1.5rem;
      row-gap: 2rem;
    }
  }

  /* Responsive adjustments */
  @media only screen and (min-width: ${({ theme }) => theme.media.mobileS}) {
    .wrapper-background {
      padding: 1.5rem 0;
    }

    .blog-heading {
      font-size: 2.2rem;
    }

    .blog-container {
      margin: 2rem 0;

      .sec-heading {
        font-size: 1.4rem;
        margin-bottom: 10px;
      }

      .blogs {
        column-gap: 1rem;
        row-gap: 1.5rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileM}) {
    .wrapper-background {
      padding: 1.8rem 0;
    }

    .blog-heading {
      font-size: 2.5rem;
    }

    .blog-container {
      margin: 3rem 0;

      .sec-heading {
        font-size: 1.6rem;
        margin-bottom: 12px;
      }

      .blogs {
        column-gap: 1.5rem;
        row-gap: 2rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.mobileL}) {
    .wrapper-background {
      padding: 2rem 0;
    }

    .blog-heading {
      font-size: 3rem;
    }

    .blog-container {
      margin: 4rem 0;

      .sec-heading {
        font-size: 1.8rem;
        margin-bottom: 15px;
      }

      .blogs {
        column-gap: 2rem;
        row-gap: 2.5rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    .wrapper-background {
      padding: 2.5rem 0;
    }

    .blog-heading {
      font-size: 3.5rem;
    }

    .blog-container {
      margin: 5rem 0 8rem;

      .sec-heading {
        font-size: 2rem;
        margin-bottom: 20px;
      }

      .blogs {
        column-gap: 2.5rem;
        row-gap: 3rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptop}) {
    .wrapper-background {
      padding: 2rem 0;
    }

    .blog-heading {
      font-size: 4rem;
    }

    .blog-container {
      margin: 4rem 0 10rem;

      .sec-heading {
        font-size: 2.2rem;
        margin-bottom: 25px;
      }

      .blogs {
        column-gap: 3rem;
        row-gap: 4rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.laptopL}) {
    .wrapper-background {
      padding: 3.5rem 0;
    }

    .blog-heading {
      font-size: 4.5rem;
    }

    .blog-container {
      margin: 9rem 0 12rem;

      .sec-heading {
        font-size: 2.4rem;
        margin-bottom: 30px;
      }

      .blogs {
        column-gap: 4rem;
        row-gap: 5rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    &.wrapper-background {
      padding: 4rem 0;
    }

    .blog-heading {
      font-size: 5rem;
    }

    .blog-container {
      margin: 11rem 0 14rem;

      .sec-heading {
        font-size: 2.6rem;
        margin-bottom: 35px;
      }

      .blogs {
        column-gap: 5rem;
        row-gap: 6rem;
      }
    }
  }
`;

export default Blog;