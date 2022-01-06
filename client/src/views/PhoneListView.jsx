import React, { Component } from 'react';
import { listPhones } from '../services/phone';
import PhoneList from '../components/Common/PhoneList'
import LoadingScreen from './../components/LoadingScreen';

class PhoneListView extends Component {
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
        alert('There was an error loading all of your phones.');
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        {(!this.state.loading && (
          <>
            <section class="community-section">
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

export default PhoneListView;
