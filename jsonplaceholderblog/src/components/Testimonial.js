import "../css/testimonial.css";

function Testimonial() {
  return (
    <section id="testimonial" className="parallax-section">
      <div className="container">
        <div className="row">
          <div id="owl-testimonial" className="owl-carousel">
            <div
              className="item col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <i className="fa fa-quote-left"></i>
              <h3>
                Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                imperdiet, wisi risus purus augue vulputate.
              </h3>
              <h4>Sandar ( Fashion Designer )</h4>
            </div>

            <div
              className="item col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <i className="fa fa-quote-left"></i>
              <h3>
                Yes! Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                imperdiet, wisi risus purus augue.
              </h3>
              <h4>James Job ( Social Assistant )</h4>
            </div>

            <div
              className="item col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <i className="fa fa-quote-left"></i>
              <h3>
                Sed dapibus rutrum lobortis. Sed nec interdum nunc, quis sodales
                ante. Maecenas volutpat congue.
              </h3>
              <h4>Mark Otto ( New Cyclist )</h4>
            </div>

            <div
              className="item col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <i className="fa fa-quote-left"></i>
              <h3>
                Lorem ipsum dolor sit amet, maecenas eget vestibulum justo
                imperdiet, wisi risus purus.
              </h3>
              <h4>David Moore ( Pro Boxer )</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
