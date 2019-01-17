import React, { Component } from 'react';
import { combineReducers } from 'redux';
import './App.css';
import KeypadContainer from './containers/KeypadContainer';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Reducers
import MachineReducer from './reducers/MachineReducer';
import KeypadReducer from './reducers/KeypadReducer';
import MachineContainer from './containers/MachineContainer';

// Stores
const store = createStore(combineReducers({
  KeypadReducer,
  MachineReducer
}));

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Provider store={store}>
            <KeypadContainer />
            <MachineContainer />
          </Provider>
        </main>
      </div>
    );
  }
}

export default App;
