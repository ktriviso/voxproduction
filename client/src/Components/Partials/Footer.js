import React from 'react'
export const Footer = () => (
    <footer>
        <div className="footer-main">
            <div className="row">
                <div className="col-four tab-full mob-full footer-info">
                    <h4>Vox Felis</h4>
                    <p>"Empowering and enlightening our community"<br/>All rights reserved. Trademark 2018.</p>
                </div>

                <div className="col-four tab-full mob-full  site-links">
                    <h4>Contact</h4>
                    <ul>
                        <li>123 Manhattan Street</li>
                        <li>New York, NY 11211</li>
                        <li><a href="#">aleka@email.com</a></li>
                    </ul>
                </div>

                <div className="col-four tab-full mob-full social-links">
                    <h4>Social</h4>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="row">
                <div className="col-twelve">
                    <div className="">
                        <a href="https://github.com/ktriviso" target="_blank">
                            <div className="logo">
                                <div className="icon animate">
                                    <span>K</span>
                                    <span>T</span>
                                </div>
                                <div className="pipe animate">|</div>
                                <div className="name animate">Krista Triviso</div>
                            </div>
                        </a>
                        <span id="">©  Vox Felis 2018</span> Design by <a href="https://www.styleshout.com/">Styleshout</a>.
                    </div>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon icon-arrow-up"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
