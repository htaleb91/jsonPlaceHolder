import "../css/price.css";

function Price() {
  return (
    <section id="price" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="0.9s">
            <h2>Our Prices</h2>
            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
          </div>

          <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="1s">
            <div className="pricing__item">
              <h3 className="pricing__title">Healthy</h3>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>350
              </div>
              <ul className="pricing__feature-list">
                <li className="pricing__feature">One General Trainer</li>
                <li className="pricing__feature">Gym Services</li>
                <li className="pricing__feature">5 Yoga Courses</li>
                <li className="pricing__feature">10 Thai Massages</li>
                <li className="pricing__feature">15 Aerobics</li>
              </ul>
              <button className="pricing__action">Sign Up Now</button>
            </div>
          </div>

          <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="1.3s">
            <div className="pricing__item">
              <h3 className="pricing__title">Best Fit</h3>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>550
              </div>
              <ul className="pricing__feature-list">
                <li className="pricing__feature">Two General Trainers</li>
                <li className="pricing__feature">Gym Services</li>
                <li className="pricing__feature">10 Yoga Courses</li>
                <li className="pricing__feature">20 Thai Massages</li>
                <li className="pricing__feature">25 Aerobics</li>
              </ul>
              <button className="pricing__action">Sign Up Now</button>
            </div>
          </div>

          <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="1.6s">
            <div className="pricing__item">
              <h3 className="pricing__title">Rigid Body</h3>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>750
              </div>
              <ul className="pricing__feature-list">
                <li className="pricing__feature">Three Personal Trainers</li>
                <li className="pricing__feature">Gym Services</li>
                <li className="pricing__feature">15 Yoga Courses</li>
                <li className="pricing__feature">20 Thai Massages</li>
                <li className="pricing__feature">35 Aerobics</li>
              </ul>
              <button className="pricing__action">Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
