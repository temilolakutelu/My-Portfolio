import React, { Component } from 'react';
export default class ContactUs extends Component {
    render() {
        return (
            <section id="contact" className="s-contact target-section">

                <div className="overlay"></div>

                <div className="row narrow section-intro">
                    <div className="col-full">
                        <h3>Contact</h3>
                        <h1>Say Hello.</h1>

                        <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
                    </div>
                </div>

                <div className="row contact__main">
                    <div className="col-eight tab-full contact__form">
                        <form name="contactForm" id="contactForm" method="post" action="">
                            <fieldset>

                                <div className="form-field">
                                    <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required="" aria-required="true" className="full-width" />
                                </div>
                                <div className="form-field">
                                    <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="" aria-required="true" className="full-width" />
                                </div>
                                <div className="form-field">
                                    <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" className="full-width" />
                                </div>
                                <div className="form-field">
                                    <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                                </div>
                                <div className="form-field">
                                    <button className="full-width btn--primary">Submit</button>
                                    <div className="submit-loader">
                                        <div className="text-loader">Sending...</div>
                                        <div className="s-loader">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </form>

                        <div className="message-warning">
                            Something went wrong. Please try again.
                </div>


                        <div className="message-success">
                            Your message was sent, thank you!<br />
                        </div>

                    </div>
                    <div className="col-four tab-full contact__infos">
                        <h4 className="h06">Phone</h4>
                        <p>Phone: (+234) 809 384 6405<br />
                            Mobile: (+234) 902 401 7029<br />

                        </p>

                        <h4 className="h06">Email</h4>
                        <p>Temilolakutelu@gmail.com<br />
                            Temilol.kutelu@hotmail.com
                </p>

                        <h4 className="h06">Address</h4>
                        <p>
                            Lagos, Nigeria
                </p>
                    </div>

                </div>

            </section>
        );
    }
}