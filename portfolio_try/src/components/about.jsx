import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about" id="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Us</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <p>I bin da Leo. Mehr brauchst nd wissen.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div id="projects" className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What do I do?</span>
                                <h2 className="colorlib-heading">Past Projects</h2>
                            </div>
                        </div>
                        <div className="row row-pt-mid">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1"> {/*maybe new package?*/}
                                    <span className="icon">
                                        <i className="fa fa-python"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Flutter Apps</h3>
                                        <p>I program flutter apps, for fun and money</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;