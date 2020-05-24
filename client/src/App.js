import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
// import Alert from "./components/layout/Alert";
// Redux
import { Provider } from "react-redux";
import store from "./store";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            {/* <Alert /> */}
            <Switch>
              {/* <Route exact path="/contact" component={Contact} /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
