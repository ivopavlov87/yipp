import React from 'react';

import SearchContainer from '../nav/search_container'
import logo from '../nav/assets/logo.png'

class MainPage extends React.Component {

  render() {
    return (
      <div className="landing-page-container">
        <div className="landing-page-logo-container">
          <div className="landing-page-logo-items">
            <img src={logo} alt="logo" />
          </div>
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;