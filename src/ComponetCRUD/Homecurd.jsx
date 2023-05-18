import React from 'react'
import css from './home.module.css'
import { Link } from 'react-router-dom'
const Homecurd = () => {
  return (
   <div>
   <section>
    <center>
     <h1 style={{color:"gray"}}>Welcome to Page</h1>
     </center>
   </section>
    <div id={css.nav}>
      
      <Link to='/a'>CREATE-USER</Link>
      <Link to='/b'>USER</Link>
    </div>
   </div>
    //STEP=01 = post ()
    //STEP=02 = get ()
    //STEP=03 = get ()
    //STEP=04 = put ()
    //STEP=05 = delete ()
  )
}

export default Homecurd
