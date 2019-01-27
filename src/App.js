import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';

import SampleComp1 from "./components/SampleComp1";

import store from './store';

class App extends Component {
  // init for the Materialize framework
  // componentDidMount() {
  //   window.M.AutoInit();
  // }

  render() {
    return (
      <Provider store={store}>
        <SampleComp1 />
      </Provider>
    );
  }
}

export default App;
