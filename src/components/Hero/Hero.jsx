import React from 'react'
import '../../styles/Hero.css'
import { omer } from '../../assets'
import {motion} from 'framer-motion'
import {AppWrap} from '../../wrapper'

const Hero = () => {

  return (
    <div className='hero__header' id='ANASAYFA'>
<div className='hero__wrapper'>
<div className='header__me'>
<h1>ÖMER ELMAS</h1>
  <h2>COMPUTER ENG. STUDENT</h2>
<p>B221210582</p>
</div>
<div className='header__img'>
<img src={omer} alt='self__png'/>
</div>
</div>
<div className='header__svg'>
<motion.svg
whileInView={{y: [0,-20,0,20,0]}}
transition={{repeat:Infinity,duration:3,ease:'easeInOut'}}
 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
<path
 style={{fill:'black'}} d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"/>
</motion.svg>
</div>
    </div>
  )
}

export default AppWrap(Hero)