import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-full">

                        <div className="footer-logo">
                            <a className="footer-site-logo" href="#0"><img src="images/sapphire logo.PNG" alt="Homepage" /></a>
                        </div>

                        <ul className="footer-social">
                            <li><a href="https://web.facebook.com/tksapphire">
                                <i className="im im-facebook" aria-hidden="true"></i>
                                <span>Facebook</span>
                            </a></li>
                            <li><a href="https://twitter.com/Temilolasapphi1">
                                <i className="im im-twitter" aria-hidden="true"></i>
                                <span>Twitter</span>
                            </a></li>
                            <li><a href="https://www.instagram.com/lolasapphire03/?hl=en">
                                <i className="im im-instagram" aria-hidden="true"></i>
                                <span>Instagram</span>
                            </a></li>
                            <li><a href="https://www.linkedin.com/in/temilola-kutelu-714761a4/">
                                <i className="im im-linkedin" aria-hidden="true"></i>
                                <span>LinkedIn</span>
                            </a></li>
                            <li><a href="https://github.com/temilolakutelu">
                                <i className="im im-github" aria-hidden="true"></i>
                                <span>Github</span>
                            </a></li>

                        </ul>

                    </div>
                </div>

                <div className="row footer-bottom">

                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© Copyright Sapphire 2018</span>

                        </div>

                        <div className="go-top">
                            <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
                        </div>
                    </div>

                </div>
                <div className="go-top">
                            <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
                </div>
            </footer>
        );
    }
}