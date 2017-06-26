import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'

import reducers from './reducers'
import Navigator from './Navigator'

injectTapEventPlugin()

const store = createStore(reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Navigator />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)