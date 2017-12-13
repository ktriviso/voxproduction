import React from 'react'
export const Footer = () => (
    <footer>

    <div className="footer-main">

        <div className="row">

            <div className="col-four tab-full mob-full footer-info">

                <h4>Vox Felis</h4>

                   <p>
                    "Empowering and enlightening our community"<br/>All rights reserved. Trademark 2017.
                    </p>

              </div>

            <div className="col-two tab-1-3 mob-1-2 site-links">

                <h4>Contact</h4>

                <ul>
                    <li><a href="#">123 Manhattan Street</a></li>
                    <li><a href="#">New York, NY 11211</a></li>
                    <li><a href="#">P. (406) - 750 - 3376</a></li>
                </ul>

            </div>

            <div className="col-two tab-1-3 mob-1-2 social-links">

                <h4>Social</h4>

                <ul>
                    <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Dribbble</a></li>
                        <li><a href="#">Google+</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>

            </div>
            <div className="col-four tab-1-3 mob-full footer-subscribe">

                <h4>Reach Out</h4>

                <p>Send your email address and we will contact you.</p>

                <div className="subscribe-form">

                    <form id="mc-form" className="group" novalidate="true">

                            <input type="email" value="" name="dEmail" className="email" id="mc-email" placeholder="Type &amp; press enter" required=""/>

                        <input type="submit" name="subscribe" />

                        <label for="mc-email" className="subscribe-message"></label>

                        </form>

                </div>

            </div>

          </div>

    </div>

      <div className="footer-bottom">
        <div className="row">

            <div className="col-twelve">
                <div className="copyright">
                    <span>© Copyright Abstract 2016</span>
                 </div>

                 <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon icon-arrow-up"></i></a>
                 </div>
            </div>

        </div>
      </div>

   </footer>

)
