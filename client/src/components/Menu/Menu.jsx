import React from 'react'
import './Menu.css'
import { AiFillHome } from "react-icons/ai";

const Menu = ({toggle}) => {
  return (
    < >
     {
      toggle?
       (<>
         <div className="navbar-profile-pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-HF0AqSEm4h0ZL4CxKjG1-vDxjHGe73azSy8gkMMDOC71Kye5MwFmEtjGf1mfMdFYuo&usqp=CAU" alt="profile picture" />
         </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <AiFillHome />
                Home
              </div>
              <div className="nav-link">
              <AiFillHome />
                About
              </div>
              <div className="nav-link">
              <AiFillHome />
                Work Experience
              </div>
              <div className="nav-link">
              <AiFillHome />
                Tech Stack
              </div>
              <div className="nav-link">
              <AiFillHome />
                Education
              </div>
              <div className="nav-link">
              <AiFillHome />
                Projects
              </div>
              <div className="nav-link">
              <AiFillHome />
                Testimonials
              </div>
              <div className="nav-link">
              <AiFillHome />
                Contact
              </div>
            </div>
          </div>
        </>) 
       :
       (<>       
       <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <AiFillHome title='Home' />   {  /*title :add attribute here to show name of the icon while clicking */}
              </div>
              <div className="nav-link">
              <AiFillHome />
              </div>
              <div className="nav-link">
              <AiFillHome />
                
              </div>
              <div className="nav-link">
              <AiFillHome />
                
              </div>
              <div className="nav-link">
              <AiFillHome />
                
              </div>
              <div className="nav-link">
              <AiFillHome />
                
              </div>
              <div className="nav-link">
              <AiFillHome />
                
              </div>
              <div className="nav-link">
              <AiFillHome />
                
              </div>
            </div>
          </div>
       </>)
     }
    </>
  )
}

export default Menu
