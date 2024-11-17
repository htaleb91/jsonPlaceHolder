import "../css/overview.css";

function Overview() {
  return (
    <section id="overview" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              src="../images/overview-img.jpg"
              className="img-responsive"
              alt="Overview"
            />
            <blockquote className="wow fadeInUp" data-wow-delay="1.9s">
              Fitness is free website template that can be used for any company.
              You may download, modify and use this layout for your website.
            </blockquote>
          </div>

          <div className="col-md-1"></div>

          <div className="wow fadeInUp col-md-4 col-sm-12" data-wow-delay="1s">
            <div className="overview-detail">
              <h2>About Fitness</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                aliquam erat.
              </p>
              <p>
                Fitness web template includes total 2 pages. This is an index
                (main) page and another is a{" "}
                <a href="blog-single.html">blog page</a>.
              </p>
              <a href="#trainer" className="btn btn-default smoothScroll">
                Let us begin
              </a>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
