import { combineReducers } from 'redux'
import actionTypes from '../actions/actionTypes'

const defaultState={
  testReduxReducer:0,
  userData:{
    'name':'no name',
    'age':1
  }
}

const testReduxReducer = (state = defaultState.testReduxReducer, action) => {
  switch (action.type) {
    case actionTypes.testRedux:
      return action.params
    default:
      return state
  }
}
const userData = (state = defaultState.userData, action) => {
  switch (action.type) {
    case actionTypes.setUser:
      return action.params
    default:
      return state
  }
}

const reducers = combineReducers({
  testReduxReducer,
  userData
})

export default reducers
