import React from 'react';

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar-parent">
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/Leo.jpeg)'}} />
                            <h1 id="colorlib-logo"><a href="index.html">Leo Elmecker</a></h1>
                            <span className="email"><i className="icon-mail"></i>leo.elmecker@gmail.com</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.facebook.com/leo.elm.9" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square" /></a></li>
                                {/* <li><a href="/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li> */}
                                <li><a href="https://www.instagram.com/leo_elm/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
                                <li><a href="https://www.linkedin.com/in/leo-elmecker-plakolm-635895192/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://github.com/leoelm" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>
                                This is a website    
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default SideBar;