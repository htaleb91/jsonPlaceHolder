import "../css/blog.css";

function Blog() {
  return (
    <section id="blog" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h2>Fitness Blog</h2>
            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
          </div>

          <div
            className="wow fadeInUp col-md-6 col-sm-12"
            data-wow-delay="0.9s"
          >
            <div className="blog-thumb">
              <span className="blog-date">Body Fitness / July 2, 2016</span>
              <h3 className="blog-title">
                <a href="blog-single.html">How to get a fitness model body?</a>
              </h3>
              <h5 id="blog-author">by David Walker</h5>
            </div>
          </div>

          <div
            className="wow fadeInUp col-md-6 col-sm-12"
            data-wow-delay="1.3s"
          >
            <div className="blog-thumb">
              <span className="blog-date">Healthy Fit / June 8, 2016</span>
              <h3 className="blog-title">
                <a href="blog-single.html">Personal Fitness Tips</a>
              </h3>
              <h5 id="blog-author">by George</h5>
            </div>
          </div>

          <div
            className="wow fadeInUp col-md-6 col-sm-12"
            data-wow-delay="1.6s"
          >
            <div className="blog-thumb">
              <span className="blog-date">Gym Services / May 9, 2016</span>
              <h3 className="blog-title">
                <a href="blog-single.html">Efficient Workout Plans</a>
              </h3>
              <h5 id="blog-author">by Mary Louis</h5>
            </div>
          </div>

          <div
            className="wow fadeInUp col-md-6 col-sm-12"
            data-wow-delay="1.9s"
          >
            <div className="blog-thumb">
              <span className="blog-date">
                Practice Aerobics / April 18, 2016
              </span>
              <h3 className="blog-title">
                <a href="blog-single.html">How to practice Aerobics?</a>
              </h3>
              <h5 id="blog-author">by Michael Fit</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
