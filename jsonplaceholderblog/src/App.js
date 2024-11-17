import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Home from "./components/Home";
import Newsletter from "./components/Newsletter";
import Overview from "./components/Overview";
import PreLoader from "./components/PreLoader";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import Trainer from "./components/Trainer";
import "./App.css";
import { useEffect } from "react";
function App() {
  /* global $ */
  function initParallax() {
    $("#home").parallax("100%", 0.1);
    $("#overview").parallax("100%", 0.3);
    $("#trainer").parallax("100%", 0.2);
    $("#newsletter").parallax("100%", 0.3);
    $("#blog").parallax("100%", 0.1);
    $("#price").parallax("100%", 0.2);
    $("#testimonial").parallax("100%", 0.2);
  }
  useEffect(() => {
    $(document).ready(function () {
      initParallax();

      $("#owl-testimonial").owlCarousel({
        autoPlay: 6000,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
      });
    });

    /* wow
    -------------------------------*/
    /*global WOW */
    new WOW({ mobile: false }).init();
  });

  return (
    <>
      <PreLoader />
      <Header />
      <Home />
      <Overview />
      <Trainer />
      <Newsletter />
      <Blog />
      <Price />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
