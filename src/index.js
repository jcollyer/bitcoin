import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './store'
import router from './router';
import { startListeningToToshi } from './actions/bitcoins'
import { Circuit } from './circuit'
import { TimerWatch } from './timer'

import './style.less'


ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);

// setup toshi listeners
setTimeout(function(){
	store.dispatch( startListeningToToshi() );
});
