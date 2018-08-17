import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <section id="works" className="s-works target-section">

                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full">
                        <h3>Portfolio</h3>
                        <h1>See Some of my Projects.</h1>

                        <p className="lead">Here are some of the projects designed and developed by me.</p>
                    </div>
                </div>

                <div className="row masonry-wrap">
                    <div className="masonry">

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/g/g-jobsite.PNG" className="thumb-link" title="Job Site" data-size="1050x700">
                                        <img src="images/portfolio/jobsite1x.PNG"
                                            srcset="images/portfolio/jobsite.PNG, images/portfolio/jobsite@2x.PNG" alt="" />
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">Job Site HomePage</h3>
                                    <p className="item-folio__cat">Web Design</p>
                                </div>

                                <a href="https://temilolakutelu.github.io/jobsite-webpage/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <div className="item-folio__caption">
                                    <p>This is a non-responsive home page design of a job site. </p>
                                </div>

                            </div>
                        </div>

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/g/g-roulette.PNG" className="thumb-link" title="roulette" data-size="1050x700">
                                        <img src="images/portfolio/roulette.PNG"
                                            srcset="images/portfolio/roulette.PNG, images/portfolio/roulette@2x.PNG" alt="" />
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">Russian-Roulette Game</h3>
                                    <p className="item-folio__cat">Web Development</p>
                                </div>

                                <a href="https://temilolakutelu.github.io/russian-roulette-game/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <div className="item-folio__caption">
                                    <p>A Game developed with HTML5, CSS and Bootstrap.</p>
                                </div>

                            </div>
                        </div>

                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/g/g-wordgame.PNG" className="thumb-link"
                                        title="wordgame" data-size="1050x700">
                                        <img src="images/portfolio/wordgame.PNG"
                                            srcset="images/portfolio/wordgame@2x.PNG" alt="" />
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">The Word Game</h3>
                                    <p className="item-folio__cat">Web Development, Game</p>
                                </div>

                                <a href="https://temilolakutelu.github.io/word-game/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <span className="item-folio__caption">
                                    <p>A Game developed using Html5, Javascript & Jquery .</p>
                                </span>

                            </div>
                        </div>






                        <div className="masonry__brick">
                            <div className="item-folio">

                                <div className="item-folio__thumb">
                                    <a href="images/portfolio/g/g-weather App.PNG" className="thumb-link"
                                        title="weatherApp" data-size="1050x700">
                                        <img src="images/portfolio/weather App.PNG"
                                            srcset="images/portfolio/weather App.PNG, images/portfolio/weather App@2x.PNG" alt="" />
                                        <span className="shadow-overlay"></span>
                                    </a>
                                </div>

                                <div className="item-folio__text">
                                    <h3 className="item-folio__title">
                                        Weather App
                            </h3>
                                    <p className="item-folio__cat">
                                        Software Development
                            </p>
                                </div>

                                <a href="https://temilolakutelu.github.io/Weather-App/" className="item-folio__project-link" title="Project link">
                                    <i className="im im-link"></i>
                                </a>

                                <span className="item-folio__caption">
                                    <p>This app is built using html, css and bootstrap to make it responsive. jQuery Ajax is used to make Api calls.</p>
                                </span>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
        );
    }
}


