import React from 'react'
import './Footer.css'
import { useTranslation } from "react-i18next";


const Footer = ({full}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className='footer__container'>
      <div className='footer__top'>
        <div className='footer__left'>
          <span className='footer__text'> {t("ft.label1")} </span>
          <span className='footer__textindent'> {t("ft.label2")} </span>
          <span className='footer__textindent'> {t("ft.label3")} </span>
        </div>
        <div className='footer__right'>
          <span className='footer__text'> {t("ft.label4")} </span>
          <span className='footer__textindent'> {t("ft.label5")} </span>
          <span className='footer__textindent'> {t("ft.label6")} </span>
        </div>
        <div className='footer__lang' onChange={changeLanguage}>
          <p> Selected Language: {i18n.language} </p>
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