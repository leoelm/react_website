import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{backgroundImage: 'url(https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6)'}}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div classname="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="desc">
                                                <h1>Hi! <br />My name is Leo.</h1>
                                                <p><a className="btn btn-primary btn-learn" href="/" target="_blank" rel="noopener noreferrer">View CV<i className="/" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{backgroundImage: 'url(https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6)'}}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>I often <br />do stuff.</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="/" target="_blank" rel="noopener noreferrer">View Stuff <i className="icon-book" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Introduction;