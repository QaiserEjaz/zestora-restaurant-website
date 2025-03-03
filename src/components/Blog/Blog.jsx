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
            <Blogpost
              id={Bdata[0].id}
              imgsrc={Bdata[0].imgsrc}
              pname={Bdata[0].pname}
              description={Bdata[0].description}
            />
            <Blogpost
              id={Bdata[1].id}
              imgsrc={Bdata[1].imgsrc}
              pname={Bdata[1].pname}
              description={Bdata[1].description}
            />
            <Blogpost
              id={Bdata[2].id}
              imgsrc={Bdata[2].imgsrc}
              pname={Bdata[2].pname}
              description={Bdata[2].description}
            />
            <Blogpost
              id={Bdata[3].id}
              imgsrc={Bdata[3].imgsrc}
              pname={Bdata[3].pname}
              description={Bdata[3].description}
            />
            <Blogpost
              id={Bdata[4].id}
              imgsrc={Bdata[4].imgsrc}
              pname={Bdata[4].pname}
              description={Bdata[4].description}
            />
            <Blogpost
              id={Bdata[5].id}
              imgsrc={Bdata[5].imgsrc}
              pname={Bdata[5].pname}
              description={Bdata[5].description}
            />
            <Blogpost
              id={Bdata[6].id}
              imgsrc={Bdata[6].imgsrc}
              pname={Bdata[6].pname}
              description={Bdata[6].description}
            />
            <Blogpost
              id={Bdata[7].id}
              imgsrc={Bdata[7].imgsrc}
              pname={Bdata[7].pname}
              description={Bdata[7].description}
            />
            <Blogpost
              id={Bdata[8].id}
              imgsrc={Bdata[8].imgsrc}
              pname={Bdata[8].pname}
              description={Bdata[8].description}
            />
            <Blogpost
              id={Bdata[9].id}
              imgsrc={Bdata[9].imgsrc}
              pname={Bdata[9].pname}
              description={Bdata[9].description}
            />
            <Blogpost
              id={Bdata[10].id}
              imgsrc={Bdata[10].imgsrc}
              pname={Bdata[10].pname}
              description={Bdata[10].description}
            />
            <Blogpost
              id={Bdata[11].id}
              imgsrc={Bdata[11].imgsrc}
              pname={Bdata[11].pname}
              description={Bdata[11].description}
            />
            <Blogpost
              id={Bdata[12].id}
              imgsrc={Bdata[12].imgsrc}
              pname={Bdata[12].pname}
              description={Bdata[12].description}
            />
            <Blogpost
              id={Bdata[13].id}
              imgsrc={Bdata[13].imgsrc}
              pname={Bdata[13].pname}
              description={Bdata[13].description}
            />
            <Blogpost
              id={Bdata[14].id}
              imgsrc={Bdata[14].imgsrc}
              pname={Bdata[14].pname}
              description={Bdata[14].description}
            />
            <Blogpost
              id={Bdata[15].id}
              imgsrc={Bdata[15].imgsrc}
              pname={Bdata[15].pname} 
              description={Bdata[15].description}
            />
            <Blogpost
              id={Bdata[16].id}
              imgsrc={Bdata[16].imgsrc}
              pname={Bdata[16].pname}
              description={Bdata[16].description}
            />
            <Blogpost
              id={Bdata[17].id}
              imgsrc={Bdata[17].imgsrc}
              pname={Bdata[17].pname}
              description={Bdata[17].description}
            />
            <Blogpost
              id={Bdata[18].id}
              imgsrc={Bdata[18].imgsrc}
              pname={Bdata[18].pname}
              description={Bdata[18].description}
            />
            <Blogpost
              id={Bdata[19].id}
              imgsrc={Bdata[19].imgsrc}
              pname={Bdata[19].pname}
              description={Bdata[19].description}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .blog-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .blog-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .blog-container {
    margin: 5rem 0;
    .sec-heading {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
    }
    .blogs {
      display: flex;
      flex-flow: wrap;
      align-items: flex-start;
      justify-content: center;
      column-gap: 2.5rem;
      row-gap: 4.5rem;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .blog-heading {
      font-size: 4rem;
    }
    .blog-container {
      margin: 5rem 0 12rem;
    }
  }
`;

export default Blog;
