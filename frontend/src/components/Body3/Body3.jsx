import React from 'react';
import './Body3.css'

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UploadImages from "./UploadFile.js"

const Body3 = () => {
  const { t } = useTranslation();  
  return (
    <div className='body__container'>
        <div className='body__left'>
            <button className='body__back'>{t("p2.button1")}</button>
            <p className='body__desc'></p>
        </div>
        <div className='body__right'>
            <div className='body__loginpanel'>
                <UploadImages/>
                <Link to="/results">
                    <button className='login__submit'>{t("p2.button2")}</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Body3