import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <section id="about" className="s-about target-section">

                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full text-center">
                        <h3>About</h3>
                        <h1>More About Me</h1>
                        <p className="lead">I'm a highly-motivated, productive and client-focused team player with good communication,
                        interpersonal, organizational and time management skills. Reliable and dedicated with the
                        ability to grasp and apply new technology quickly.</p>
                    </div>
                </div>

                <div className="row about-content">

                    <div className="col-six tab-full left">
                        <h3>Howdy!</h3>


                        <p>
                            I Possess a sound knowledge in Software
                            development(using React Framework), a good background knowledge of C#. Experienced in working with MIT App inventor, Arduino,
                            Raspberry pi, 3CX phone system, CRM, PABX, OBD(On-board Diagnosis. Installation of GPS, CCTV, IP-CCTV,
                            Strong PC software troubleshooting skills, as well as software installation and support
                            abilities. Experience in Installation and maintenance of QuickBooks Accounting software.
                        </p>
                    </div>

                    <div className="col-six tab-full right">
                        <h3>I've Got Some skills.</h3>

                        <ul className="skill-bars">
                            <li>
                                <div className="progress percent95"><span>95%</span></div>
                                <strong>HTML5</strong>
                            </li>
                            <li>
                                <div className="progress percent95"><span>95%</span></div>
                                <strong>CSS</strong>
                            </li>

                            <li>
                                <div className="progress percent90"><span>90%</span></div>
                                <strong>Javascript</strong>
                            </li>
                            <li>
                                <div className="progress percent85"><span>85%</span></div>
                                <strong>JQuery</strong>
                            </li>
                            <li>
                                <div className="progress percent90"><span>90%</span></div>
                                <strong>React JS</strong>
                            </li>
                            <li>
                                <div className="progress percent85"><span>85%</span></div>
                                <strong>Express JS</strong>
                            </li>
                            <li>
                                <div className="progress percent85"><span>85%</span></div>
                                <strong>Firebase</strong>
                            </li>
                            <li>
                                <div className="progress percent85"><span>85%</span></div>
                                <strong>MongoDB</strong>
                            </li>
                            <li>
                                <div className="progress percent80"><span>80%</span></div>
                                <strong>Travis CI/CD</strong>
                            </li>
                            <li>
                                <div className="progress percent70"><span>70%</span></div>
                                <strong>C#</strong>
                            </li>
                        </ul>
                    </div>

                </div>


            </section>
        );
    }
}

