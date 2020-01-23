import React from 'react';
import SideBar from './components/sidebar_2';
import Introduction from './components/introduction';
import Slide from './components/slider';
import About from './components/about';
import './App.css';
import './style/sidebar.css';
import './style/slider.css';
import './style/about.css';

class App extends React.Component {
  render() {
    return (
      <div className="colorlib-page">
        <div className="container-wrap">
          <SideBar />
            <div id="colorlib-main">
              <Slide />
              {/* <Introduction></Introduction> */}
              <About></About>
              {/*<Timeline></Timeline> */}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
