import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './test/reduxTest/components/App'
import reducers from './test/reduxTest/reducers'

const store = createStore(reducers)

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('app')
)