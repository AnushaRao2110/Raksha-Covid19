import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = () => {
    return(
        <div>
            <div id="footer" className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 col-xl-6 offset-xl-0 col-lg-4 text-change item social">
                <h2>Raksha</h2>
                <ul></ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  malesuada iaculis felis. Phasellus interdum ante fermentum,
                  suscipit ante vitae, consectetur diam. Sed eu purus et urna
                  hendrerit congue semper et enim.&nbsp;
                  <br />
                </p>
                {/* <a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a> */}
              </div>
              <div className="col-xl-2 item col-lg-2 text-change">
                <h4>Quick Links</h4>
                {/* <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Signup</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul> */}
              </div>
              <div className="col-sm-4 col-md-3 col-xl-4 text-change">
                <form>
                  <h4 className="text-center font-weight-normal">Contact us</h4>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control is-invalid"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <small className="form-text text-danger">
                      Please enter a correct email address.
                    </small>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                      send{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
        </div>
    );
}

export default withRouter(Footer);