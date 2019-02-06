import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'

import Notes from './components/notes';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <Notes/>
        </div>
      </Provider>
    );
  }
}

export default App;
