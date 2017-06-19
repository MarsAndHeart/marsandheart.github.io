/* @flow */
import React from 'react'

const Hello = (props) => (
  <div>id:{props.id}</div>
)


const Home = () => {
  return(
    <div>
      <h2>homePage</h2>
      <Hello id={3}/>
    </div>
  )
}
export default Home