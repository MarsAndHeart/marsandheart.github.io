import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { testReduxAction,setUser } from '../actions'
import { getApi } from '../utils/api'

let dataRedux={}

const TestRedux = (props) => {
  const getData=()=>{
    let data={
      'name':'mingming',
      'age':22
    }
    let url = 'http://' + window.location.host + '/data.json';
    //let url = 'http://192.168.1.100/myAjax.php';
    let params = {
      url:url,
      dataType:'json',
      timeout:5000,
      success:(result)=>{
        console.log(result)
        props.setUser(result)
      },
      error:(e)=>{
        console.log(e)
      }
    }
    getApi(params)
    // props.setUser(data)
  }
  return(
    <div style={{paddingTop:10,paddingLeft:10}}>
      <h3>test ajax {props.testReduxReducer}</h3>
      <div style={{height:20}}/>
      <div onClick={()=>{props.testReduxAction(props.testReduxReducer + 1)}}>dispatch</div>
      <div style={{height:20}}/>
      <div>
        {props.userData.name + ' ' + props.userData.age}
      </div>
      <div onClick={getData}>set user</div>
      <div style={{height:20}}/>
      <div onClick={()=>{console.log(dataRedux)}}>console dataRedux</div>
    </div>
  )
}

function propsMapping(props) {
  dataRedux.props=props
  const { testReduxReducer,userData } = props
  return {
    testReduxReducer: testReduxReducer,
    userData: userData
  }
}

function actionMaping(dispatch) {
  dataRedux.dispatch=dispatch
  return {
    testReduxAction: compose(dispatch, testReduxAction),
    setUser: compose(dispatch, setUser),
  }
}

export default connect(propsMapping, actionMaping)(TestRedux)