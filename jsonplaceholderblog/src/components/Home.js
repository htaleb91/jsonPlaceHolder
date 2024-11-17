import "../css/home.css";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    /* global $ */
    $("#home").backstretch(
      ["/images/home-bg-slider-img1.jpg", "/images/home-bg-slider-img2.jpg"],
      { duration: 2000, fade: 750 }
    );
  }, []);
  return (
    <section id="home" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10 col-sm-12">
            <h3 className="wow bounceIn" data-wow-delay="0.9s">
              Hello! you are welcome to
            </h3>
            <h1 className="wow fadeInUp" data-wow-delay="1.6s">
              Professional
              <br />
              Fitness Club
            </h1>
            <a
              href="#overview"
              className="wow fadeInUp smoothScroll btn btn-default"
              data-wow-delay="2s"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
