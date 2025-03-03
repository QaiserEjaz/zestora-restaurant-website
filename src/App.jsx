import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Newsletter from "./components/Footer/Newsletter";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Account from "./components/Account/Account";
import Error from "./components/Error/Error";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgb(24, 24, 29)",
      white: "rgb(255, 255, 255)",
      black: "rgb(33, 37, 41)",
      // helper: "rgb(237, 228, 47)",
      // bg: "rgb(184, 0, 31)",
      bg: "rgb(237, 148, 47)",
      helper: "rgba(184, 58, 0, 0.64)",
      btn: "rgb(76, 154, 42)",
      btnHover: "rgb(59, 129, 28)",
      footer_bg: "rgb(10, 20, 53)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "rgb(255, 255, 255)",
      gradient:
        "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    }
    ,
    media: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
      desktop: "2560px",

      // mobile: "768px",
      // tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
