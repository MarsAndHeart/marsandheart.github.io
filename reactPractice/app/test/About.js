import React from 'react'

let strUrl = location.href
const About = () => {
  return(
    <div>
      <h2>AboutPage</h2>
      <h3>{strUrl.split('?')[1]}</h3>
      <a onClick={()=>{location.href='/topics'}} >hello</a>
    </div>
  )
}
export default About