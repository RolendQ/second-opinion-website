import React from 'react'
import './Footer.css'
import { useTranslation } from "react-i18next";


const Footer = ({full}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

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
        <div onChange={changeLanguage}>
          <p> {i18n.language} </p>
          <input type="radio" value="en" name="language" defaultChecked={i18n.language === 'en'} /> English
          <input type="radio" value="cn" name="language" defaultChecked={i18n.language === 'cn'} /> Chinese
        </div>
      </div>
      {full === 'true' &&
        <div className='footer__bottom'>
          <span className='footer__text'> Copyright(c) PinkRibbon.us (2022) All rights reserved </span>
        </div>
      }
    </div>
  )
}

export default Footer