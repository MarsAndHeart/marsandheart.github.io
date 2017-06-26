import React from 'react'

import pageStyle from '../css/page.css';

const styles={
  header:{
    display:'flex',
    flex:3,
    fontSize:24,
    justifyContent:'center',
    alignItems:'center',
  },
  main:{
    display:'flex',
    flex:4,
    fontSize:14,
    justifyContent:'center',
    alignItems:'center',
  },
  footer:{
    display:'flex',
    flex:3,
    fontSize:16,
    justifyContent:'center',
    alignItems:'center',
  }
}

const Home = (props) => {
  return (
    <div className={pageStyle.page} >
      <div style={styles.header}>
        hello react
      </div>
      <div style={styles.main}>
        this is a simple page
      </div>
      <div style={styles.footer}>
        @marsandheart
      </div>
    </div>
  )
}
export default Home