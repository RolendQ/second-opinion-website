import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__top'>
        <div className='footer__left'>
          <span className='footer__text'> Left Text 1 </span>
          <span className='footer__text'> Left Text 2 </span>
          <span className='footer__text'> Left Text 3 </span>
        </div>
        <div className='footer__right'>
          <span className='footer__text'> Right Text 1 </span>
          <span className='footer__text'> Right Text 2 </span>
          <span className='footer__text'> Right Text 3 </span>
        </div>
      </div>
      <div className='footer__bottom'>
        <span className='footer__text'> Copyright(c) PinkRibbon.us (2022) All rights reserved </span>
      </div>
    </div>
  )
}

export default Footer