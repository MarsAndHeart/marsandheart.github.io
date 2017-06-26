import actionTypes from './actionTypes'

export const testReduxAction = (params) => ({
  type: actionTypes.testRedux,
  params
})

export const setUser = (params) => ({
  type: actionTypes.setUser,
  params
})

