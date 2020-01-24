import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about" id="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Me</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <p>I am a first year Computer Science student at the University of Manchester. <br /> I am originally from Vienna, Austria. I would describe myself as a sports enthusiast with a love for coding.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about" data-section="about" id="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">Skills</span>
                                    <h2 className="colorlib-heading">What do I do?</h2>
                                
                            <div id="project-wrapper" className="row">
                                <div id="project-box" className="col-md-12 text-center">
                                    <div className="services color-1">
                                        <span className="icon">
                                            <i className="fa fa-python"></i>
                                        </span>
                                        <div className="desc">
                                            <h3>App Development</h3>
                                            <p>I have skills in App Development, with a focus on frontend skills in Flutter and ReactNative and backend NodeJS knowledge.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="project-box" className="col-md-12 text-center">
                                    <div className="services color-1">
                                        <span className="icon">
                                            <i className="fa fa-python"></i>
                                        </span>
                                        <div className="desc">
                                            <h3>Web Development</h3>
                                            <p>I have worked on picking up web development skills in order to create websites with HTML, CSS, ReactJS and Bootstrap.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="project-box" className="col-md-12 text-center">
                                    <div className="services color-1">
                                        <span className="icon">
                                            <i className="fa fa-python"></i>
                                        </span>
                                        <div className="desc">
                                            <h3>Python</h3>
                                            <p>From webscrapers, over simple games to automating processes, I am familiar with and confident in Python programming.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
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