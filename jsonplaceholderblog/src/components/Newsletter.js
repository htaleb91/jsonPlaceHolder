import "../css/newsletter.css";

function Newsletter() {
  return (
    <section id="newsletter" className="parallax-section">
      <div className="container">
        <div className="row">
          <div
            className="wow fadeInUp col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10"
            data-wow-delay="0.9s"
          >
            <h2>Signup Newsletter</h2>
            <p>Get discounts for your personal fitness and gym services now.</p>
            <div className="newsletter_detail">
              <form action="#" method="post" id="newsletter-signup">
                <div className="col-md-6 col-sm-6">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                  <input
                    name="submit"
                    type="submit"
                    className="form-control"
                    id="submit"
                    value="SEND MESSAGE "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
