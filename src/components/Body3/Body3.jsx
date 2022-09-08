import React from 'react';
import './Body3.css'
import UPLOAD from '../../assets/upload_button.png'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
                <form className='upload__form'>
                    <h2> {t("p2.label7")} </h2>
                    <input type="file" id="actual-btn" name="filename" hidden/>
                    <label class="body__upload" for="actual-btn"><img src={UPLOAD} alt=""/></label>
                    <Link to="/results">
                        <button type="submit" className='login__submit'>{t("p2.button2")}</button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Body3