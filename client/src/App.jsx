import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './views/Home';
import PhoneView from './views/Phone';
import PhoneCreateView from './views/PhoneCreate';
import PhoneListView from './views/PhoneListView';
import Navigation from './components/Navigation/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route
              path="/phone/list"
              exact
              component={PhoneListView}
            />
            <Route
              path="/phone/create"
              component={PhoneCreateView}
            />
            <Route path="/phone/:id" component={PhoneView} exact />
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </>
    );
  }
}

export default App;
