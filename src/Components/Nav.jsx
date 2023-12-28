import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const[show,setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>600){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  })
  console.log(show);
  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png" alt="netflix" />
    </div>
  )
}

export default Nav