import React, { useState } from 'react'
import "./Navbar.css"
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {

    const [openMenu , setOpenMenu] = useState(false);

    const toggleMenu= () =>{
        setOpenMenu(!openMenu)
    }

  return (
    
    <>
        
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className="nav-wrapper">
        <div className="nav-content" >
            <img className="logo" src="" alt=""/>

            <ul>
                <li>
                    <a className='menu-item' href='#home'>Home</a>
                </li>
                <li>
                    <a className='menu-item' href='#skills' style={{scrollBehavior: 'smooth'}}>Skills</a>
                </li>
                <li>
                    <a className='menu-item' href='#projects' style={{scrollBehavior: 'smooth'}}>Projects</a>
                </li>
                <li>
                    <a className='menu-item' href='#contact' style={{scrollBehavior: 'smooth'}}>Contact Me</a>
                </li>

                {/* <button className='contact-btn' onClick={() =>{}}>
                    Hire Me
                </button> */}

                
            </ul>
            <button className='menu-btn' onClick={toggleMenu}>
                    <span>
                        {openMenu ? "=" : "="}
                    </span>
                </button>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar
