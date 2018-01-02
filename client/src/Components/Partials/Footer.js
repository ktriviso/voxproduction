import React from 'react'
export const Footer = () => (
    <footer>
        <div className="footer-main">
            <div className="row">
                <div className="col-four tab-full mob-full footer-info">
                    <h4>Vox Felis</h4>
                    <p>"Empowering and enlightening our community"<br/>All rights reserved. Trademark 2017.</p>
                </div>

                <div className="col-four tab-full mob-full  site-links">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="#">123 Manhattan Street</a></li>
                        <li><a href="#">New York, NY 11211</a></li>
                        <li><a href="#">P. (406) - 750 - 3376</a></li>
                    </ul>
                </div>

                <div className="col-four tab-full mob-full social-links">
                    <h4>Social</h4>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Dribbble</a></li>
                        <li><a href="#">Google+</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
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
