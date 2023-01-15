import React from 'react'
import Nav from '../Nav/Nav.jsx'
import './Body.css'
import COVER from '../../assets/page1_cover.jpg'
import ICON from '../../assets/icon_nobg.png'
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Body = () => {
  const { t } = useTranslation();
  return (
    <div className='body__container'>
        <div className='body__left'>
            <img className='body__icon' src={ICON} alt=''></img>
            <p className='body__desc'> {t("p1.desc1")} </p>
            <p className='body__desc'> {t("p1.desc2")} </p>
            <div className="body__buttons">
                <Link to='/register'>
                            <button className='body__button1'> {t("p1.button1")} </button>
                </Link>
                <br />
                <br />
                <Link to='/login'>
                    <button className='body__button2'> {t("p1.button2")} </button>
                </Link>
            </div>
        </div>
        <div className='body__right'>
            <Nav />
            <img className='body__cover' src={COVER} alt='' />
        </div>
    </div>
  )
}

export default Body