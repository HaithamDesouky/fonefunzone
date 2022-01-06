import React, { Component } from 'react';
import { listPhones } from '../services/phone';
import PhoneList from '../components/Common/PhoneList'
import LoadingScreen from './../components/LoadingScreen';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      phones: [],
      loading: true
    };
  }

  componentDidMount() {
    listPhones()
      .then((phones) => {
        this.setState({ phones, loading: false });
      })
      .catch((error) => {
        alert('Something went wrong loading your phones');
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        {(!this.state.loading && (
          <><section className="home-section">
            <div className="home-wrapper">
              <h1>Welcome to FunFoneZone!</h1>
              <h3>
                Show off your fone for some reason, check out everyone else's...or delete them all, the choice is yours!
                <br />
                I also apologise for the pixelated background image, it was the best I could find in such short time!
              </h3>
            </div>
          </section><section class="community-section">
              <div class="community-header">
                <h2>Our Phones</h2>
              </div>
              <div class="phone-container">
                <PhoneList phones={this.state.phones} expandDisabled={true} />
              </div>
            </section></>
        )) || <LoadingScreen />}
      </React.Fragment>

    );
  }
}

export default HomeView;
