import React, {useState} from 'react'
import '../../styles/Navbar.css'

const Navbar = () => {

  return (
    <div className='header'>
        <div className='wrapper'>
          <div className='logo'>
            <h1>omerelmas</h1>
          </div>
          <div className='navs_container'>
            {['ANA SAYFA', 'HAKKIMDA', 'ILGILI ALANLARIM'].map((nav, index) => (
              <a key={index} className='navs' href={`#${nav.replace(/\s+/g, '')}`}>
                {nav}
              </a>
            ))}
          </div>
          <div className='buttons'>
            <a href='#Cv'>CV</a>
            <a href='#ŞEHRİM'>ŞEHRİM</a>
          </div>
        </div>
    </div>
  )
}

export default Navbar