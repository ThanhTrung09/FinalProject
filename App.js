import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './src/reducers'

import AppNavigation from './src/appNavigation/router'


let store = createStore(allReducers)

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppNavigation />
      </Provider>
    );
  }
}