import React from 'react';

import SearchContainer from '../nav/search_container'
import logo from '../nav/assets/logo.png'

import NavMainContainer from './navbar_main_container';

import './footer.css'
import dogwalkers from '../nav/assets/dog-walkers.png'

class MainPage extends React.Component {

  render() {
    return (
        <div className="landing-page-container">
          <div>
            <NavMainContainer />
          </div>
          <div className="landing-page-logo-container">
            <div className="landing-page-logo-items">
              <img src={logo} alt="logo" />
            </div>
            <SearchContainer />
          </div>
            <div className="footer">
              <div className='footer-container'>
                <div className= 'footer-info'>

                  <div className='footer-section'>
                    <li>About</li>
                    <li>Yipp</li>
                    <li>Press</li>
                    <li>Terms of service</li>
                  </div>

                  <div className='footer-section'>
                    <li>Discover</li>
                    <li>The Local Dogs</li>
                    <li>Events</li>
                    <li>Collections</li>
                  </div>

                    <div className='footer-section'>
                    <li>Yelp for Dog Owners</li>
                    <li>Claim your Dog Page</li>
                    <li>Support</li>
                    <li>Dog Reservations</li>
                  </div>
              </div>
              <img src={dogwalkers} alt="" />
              <div className='copyright'>
                &copy; 2019 Yipp
                </div> 
            </div>
          </div>
        </div>

    );
  }
}

export default MainPage;