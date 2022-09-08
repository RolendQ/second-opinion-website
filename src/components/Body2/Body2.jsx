import React, { useState } from 'react';
import './Body2.css'
import QRCODECORNER from '../../assets/qr_code_corner.png'
import PHONECORNER from '../../assets/phone_corner.png'
import QRCODE from '../../assets/qr_code.png'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Body2 = ({mode}) => {
  const [qrmode, setQrmode] = useState(0);
  const { t } = useTranslation();

  if (qrmode === 0) {
  return (
    <div className='body__container'>
        <div className='body__left'>
            <button className='body__back'> {t("p2.button1")} </button>
            <p className='body__desc'> {t("p2.desc")} </p>
        </div>
        <div className='body__right'>
            <div className='body__loginpanel'>
                <form className='login__form'>
                <img className='body__corner' 
                    onClick={() => setQrmode(1)}
                    src={QRCODECORNER} alt="" />
                <h2> {t("p2.label1")} </h2>
                {mode === 'register' &&
                <div>
                    <input className='login__input' type="text" name='call' placeholder={t("p2.label2")} required />
                </div>
                }
                <div>
                    <input className='login__input' type="email" name="number" placeholder={t("p2.label3")} required />
                    <label type="submit" className='login__code'>{t("p2.label4")}</label>
                </div>
                <div>
                    <input className='login__input' type="password" name="code" placeholder={t("p2.label5")} required />
                </div>
                <Link to="/upload">
                    <button type="submit" className='login__submit'>{t("p2.button2")}</button>
                </Link>
                <button className='login__button2'>{t("p2.button3")}</button>
            </form>
            </div>
        </div>
    </div>
  )
  } else {
    return (
        <div className='body__container'>
            <div className='body__left'>
                <button className='body__back'> {t("p2.button1")} </button>
                <p className='body__desc'> {t("p2.desc")} </p>
            </div>
            <div className='body__right'>
                <div className='body__loginpanel'>
                    <form className='login__form'>
                    <img className='body__corner' 
                        onClick={() => setQrmode(0)}
                        src={PHONECORNER} alt="" />
                    <h2> {t("p2.label6")} </h2>
                    <img className='body__qr' src={QRCODE} alt="" />
                    <button type="submit" className='login__submit'> {t("p2.button2")} </button>
                    <button className='login__button2'> {t("p2.button3")} </button>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}

export default Body2