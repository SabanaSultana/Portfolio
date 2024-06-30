import React from 'react'
import Home from '../../pages/Home/Home'
import { AiOutlineDoubleRight,AiOutlineDoubleLeft } from "react-icons/ai";
import './Layout.css'
import { useState } from 'react';

const Layout = () => {
    const [toggle,setToggle]=useState(true)
    const toggleHandler=()=>{
        setToggle(!toggle)
    }

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle?"sidebar-toggle sidebar " : "sidebar"}>
            <div className="sidebar-toggle-icons">
                <p onClick={toggleHandler}>
                {
                    toggle? (<AiOutlineDoubleLeft size={30} />):(<AiOutlineDoubleRight size={30} />)
                }
                
                </p>
            </div>
        </div>
        <div className="container">
            <Home/>
        </div>
      </div>
    </>
  )
}

export default Layout
