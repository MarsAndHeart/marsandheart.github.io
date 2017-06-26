import React from 'react'
import {
  HashRouter,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'

// import About from './test/About'
// import Topics from './test/Topics'
// import Report from './test/Report'
// import Greeter from './test/Greeter'
import MaterialDemo from './test/MaterialDemo'
import TestRedux from './test/TestRedux'


const ROUTES=[
  {
    path:'/test/MaterialDemo',
    component:MaterialDemo,
  },
  {
    path:'/test/testRedux',
    component:TestRedux,
  }
]

const Navigator = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home}/>
      {
        ROUTES.map((item, i) =>
          <Route key={i} path={item.path} component={item.component} />
        )
      }
    </div>
  </HashRouter>
)
export default Navigator