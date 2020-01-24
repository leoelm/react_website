import React from 'react';
import Slider from 'react-slick';

class Slide extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
        };
        return (
            <Slider {...settings} id="slider">
                <div className="container">
                    <section id="home">
                    <div className="row">
                        <div className="col" />
                        <div id="slide1" className="col-12">
                            <div className="desc">
                                <h1>Hi! <br />My name is Leo.</h1>
                                <p><a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/leo-elmecker-plakolm-635895192/" target="_blank" rel="noopener noreferrer">View CV<i className="/" /></a></p>
                            </div>
                        </div>
                        <div className="col" />
                    </div>
                    </section>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col" />
                        <div id="slide2" className="col-12">
                            <div className="desc">
                            <h1>I often <br />do stuff.</h1>
                            <p><a className="btn btn-primary btn-learn" href="https://github.com/leoelm" target="_blank" rel="noopener noreferrer">View Stuff <i className="icon-book" /></a></p>
                            </div>
                        </div>
                        <div className="col" />
                    </div>
                </div>
            </Slider>
        );
    }
}

export default Slide;