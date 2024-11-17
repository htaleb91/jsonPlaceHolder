import "../css/footer.css";
import "../css/socialmedia.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">
            <h2>About Fitness</h2>
            <p>
              Nunc id turpis tincidunt dui volutpat hendrerit et efficitur
              dolor. Morbi quis tempor felis, ut dictum ipsum. Praesent
              venenatis rutrum interdum.
            </p>
          </div>

          <div className="wow fadeInUp col-md-5 col-sm-4" data-wow-delay="0.9s">
            <h2>Sessions</h2>
            <div>
              <h5>Morning</h5>
              <h4>6:00 AM - 11:00 PM</h4>
            </div>
            <div>
              <h5>Evening</h5>
              <h4>4:00 PM - 9:00 PM</h4>
            </div>
          </div>

          <div className="wow fadeInUp col-md-3 col-sm-4" data-wow-delay="1s">
            <h2>Follow us</h2>
            <ul className="social-icon">
              <li>
                <a
                  href="#"
                  className="fa fa-facebook wow fadeIn"
                  data-wow-delay="1s"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="fa fa-twitter wow fadeInUp"
                  data-wow-delay="1.3s"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="fa fa-dribbble wow fadeIn"
                  data-wow-delay="1.6s"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="fa fa-behance wow fadeInUp"
                  data-wow-delay="1.9s"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="fa fa-google-plus wow fadeIn"
                  data-wow-delay="2s"
                ></a>
              </li>
            </ul>
          </div>

          <div className="clearfix"></div>

          <div className="col-md-12 col-sm-12">
            <p className="copyright-text">
              Copyright &copy; 2016 Your Company | Design:{" "}
              <a
                rel="nofollow"
                href="http://www.templatemo.com/page/1"
                target="_parent"
              >
                Templatemo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
