import React, { Component } from 'react';

class Header extends Component {
    render() {

        return (
            <div>
                <div id="preloader">
                    <div id="loader"></div>
                </div>
                <header className="s-header">

                    <div className="header-logo">
                        <a className="site-logo" href="index.html"><img src="images/sapphire logo.PNG" alt="Homepage" /></a>
                    </div>


                    <nav class="header-nav-wrap">
                        <ul class="header-nav">
                            <li class="current"><a class="smoothscroll" href="#home" title="home">Home</a></li>
                            <li><a class="smoothscroll" href="#about" title="about">About</a></li>
                            <li><a class="smoothscroll" href="#works" title="works">Works</a></li>
                            <li><a class="smoothscroll" href="#blog" title="blog">Blog</a></li>
                            <li><a class="smoothscroll" href="#contact" title="contact">Contact</a></li>
                        </ul>
                    </nav>

                    <a class="header-menu-toggle" href="#0"><span>Menu</span></a>
                </header>



                <div id="home" className="s-home page-hero target-section"
                    data-parallax="scroll"
                    data-image-src="images/sapphire-bg.jpg"
                    data-position-y="center">

                    <div className="overlay"></div>
                    <div className="shadow-overlay"></div>

                    <div className="home-content">

                        <div className="row home-content__main">

                            <h3>Hello There</h3>

                            <h1>
                                I am Temilola Kutelu. <br /> A Software Developer & <br />  an IT Support Engineer.
                            </h1>

                            <div className="home-content__buttons">
                                <a href="#works" className="smoothscroll btn btn--stroke">
                                    Latest Projects
                                </a>
                                <a href="#about" className="smoothscroll btn btn--stroke">
                                    More About Me
                                </a>
                            </div>

                            <div className="home-content__scroll">
                                <a href="#about" className="scroll-link smoothscroll">
                                    <span>Scroll Down</span>
                                </a>
                            </div>

                        </div>

                    </div>

                    <ul className="home-social">
                        <li>
                            <a href="https://web.facebook.com/tksapphire"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Temilolasapphi1"><i className="im im-twitter" aria-hidden="true"></i><span>Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/temilola-kutelu-714761a4/"><i className="im im-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/lolasapphire03/?hl=en"><i className="im im-instagram" aria-hidden="true"></i><span>Instagram</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/temilolakutelu"><i className="im im-github" aria-hidden="true"></i><span>Github</span></a>
                        </li>

                    </ul>

                </div>
            </div>

        );
    }
}

export default Header;

