import React from 'react'
import "./MobileNav.css"

const MobileNav = ({isOpen , toggleMenu}) => {
  return (
    <>
        <div 
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
                <img className='logo' src='' alt=''/>

                <ul>
                    <li>
                        <a className='menu-item' href='#home'>Home</a>
                    </li>

                    <li>
                    <a className='menu-item' href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item' href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a className='menu-item' href='#contact'>Contact Me</a>
                    </li>

                    <button className='contact-btn' href='#contact'>
                       <a className='anchor' href='https://docs.google.com/document/d/e/2PACX-1vSLDlWiGOSMfshIyrD3VQR6GXHlkDHVgTXk-OgVfxat1h9hZnZ5Hs2rgzUuNE3tNK-pG7gXAhxH4e88/pub'>Resume</a>
                    </button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav
