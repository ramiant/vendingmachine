import React, { Component } from 'react'
import KeypadContainer from './containers/KeypadContainer'

// Redux
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

// Reducers
import MachineReducer from './reducers/MachineReducer'
import KeypadReducer from './reducers/KeypadReducer'
import MachineContainer from './containers/MachineContainer'

// Styles
import './App.css'

// Stores
const store = createStore(combineReducers({
  KeypadReducer,
  MachineReducer
}), applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="Main">
          <Provider store={store}>
            <KeypadContainer />
            <MachineContainer />
          </Provider>
        </main>
      </div>
    );
  }
}

export default App
