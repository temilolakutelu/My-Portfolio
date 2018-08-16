import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        return (
            <section id="blog" className="s-blog target-section">

                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full">
                        <h3>Journal</h3>
                        <h1>Latest blog.</h1>
                        <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute.
                        Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum
                ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
                    </div>
                </div>

                <div className="row blog-content">
                    <div className="col-full">

                        <div className="blog-list block-1-2 block-tab-full">
                            <article className="col-block">

                                <div className="blog-date">
                                    <a href="https://medium.com/@temilolakutelu/web-development-with-nesabymakers-fbafd3842554">May 23, 2018</a>
                                </div>

                                <h2 className="h01"><a href="https://medium.com/@temilolakutelu/web-development-with-nesabymakers-fbafd3842554">Web Development With NESA By Makers.</a></h2>
                                <p>
                                    After years of anticipating and building a career in software engineering, I was selected as one of the recipients of the NESA by Makers and TECHADVANCE Scholarship...</p>

                                <div className="blog-cat">
                                    <a href="https://medium.com/@temilolakutelu/web-development-with-nesabymakers-fbafd3842554">Web Development</a><a href="https://medium.com/@temilolakutelu/web-development-with-nesabymakers-fbafd3842554">Web Development</a>
                                </div>


                            </article>

                            <article className="col-block">

                                <div className="blog-date">
                                    <a href="https://medium.com/@temilolakutelu/essential-guide-to-sass-1a685d2fa416">June 8, 2018</a>
                                </div>

                                <h2 className="h01"><a href="https://medium.com/@temilolakutelu/essential-guide-to-sass-1a685d2fa416">Essential Guide To SASS.</a></h2>
                                <p>
                                    SASS is a preprocessor or scripting language compiled into CSS. It enriches CSS with some special features known from traditional programming languages that are not available in a regular CSS such as variables, multilevel-nesting, mixins, extending/inheritance and import...
                        </p>

                                <div className="blog-cat">
                                    <a href="https://medium.com/@temilolakutelu/essential-guide-to-sass-1a685d2fa416">Web Development</a><a href="https://medium.com/@temilolakutelu/essential-guide-to-sass-1a685d2fa416">CSS Preprocessor</a>
                                </div>
                            </article>

                        </div>

                    </div>
                </div>

            </section>
        )
    }
}