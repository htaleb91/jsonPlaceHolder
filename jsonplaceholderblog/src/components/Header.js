import { useEffect } from "react";
import "../css/navigation.css";

function Header() {
  /* global $ */
  function mainNav() {
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (top > 40)
      $(".sticky-navigation").stop().animate({
        opacity: "1",
        top: "0",
      });
    else
      $(".sticky-navigation").stop().animate({
        opacity: "0",
        top: "-75",
      });
  }

  useEffect(() => {
    $(document).ready(function () {
      /* template navigation
      -----------------------------------------------*/
      $(".main-navigation").onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ":not(.external)",
        changeHash: true,
      });

      /* Navigation visible on Scroll */
      mainNav();
      $(window).scroll(function () {
        mainNav();
      });

      /* Hide mobile menu after clicking on a link
        -----------------------------------------------*/
      $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide");
      });

      /*  smoothscroll
      ----------------------------------------------*/
      $(function () {
        $(".navbar-default a, #home a, #overview a").bind(
          "click",
          function (event) {
            var $anchor = $(this);
            $("html, body")
              .stop()
              .animate(
                {
                  scrollTop: $($anchor.attr("href")).offset().top - 49,
                },
                1000
              );
            event.preventDefault();
          }
        );
      });
    });
  });

  return (
    <div
      className="navbar navbar-default navbar-fixed-top sticky-navigation"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand">
            Fitness
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right main-navigation">
            <li>
              <a href="#home" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#overview" className="smoothScroll">
                About
              </a>
            </li>
            <li>
              <a href="#trainer" className="smoothScroll">
                Trainers
              </a>
            </li>
            <li>
              <a href="#blog" className="smoothScroll">
                Blog
              </a>
            </li>
            <li>
              <a href="#price" className="smoothScroll">
                Prices
              </a>
            </li>
            <li>
              <a href="#testimonial" className="smoothScroll">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
