import React from 'react';
import './Body4.css'
import RCC from '../../assets/rcc.png'
import RMLO from '../../assets/rmlo.png'
import LCC from '../../assets/lcc.png'
import LMLO from '../../assets/lmlo.png'
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Body4 = () => {
  const { t } = useTranslation();  
  return (
    <div className='body4__container'>
        <Link to="/">
            <button className='body__backbutton'> {t("p3.button1")} </button>
        </Link>
        <div className='body__panels'>
            <div className='body__panel'>
                <h1 className='body__paneltitle'> {t("p3.label1")} </h1>
                <div className='body__panelbody'>
                    <div className="body__panelframe">
                        <span className='body__panelframetitle'>R-CC </span>
                        <img className='body__panelframeimg' src={RCC} alt='' />
                    </div>
                    <div className="body__panelframe">
                        <span className='body__panelframetitle'>R-MLO </span>
                        <img className='body__panelframeimg' src={RMLO} alt='' />
                    </div>
                </div>
            </div>
            <div className='body__panel'>
                <h1 className='body__paneltitle'> {t("p3.label2")} </h1>
                <div className='body__panelbody'>
                    <div className="body__panelframe">
                        <span className='body__panelframetitle'>L-CC </span>
                        <img className='body__panelframeimg' src={LCC} alt='' />
                    </div>
                    <div className="body__panelframe">
                        <span className='body__panelframetitle'>L-MLO </span>
                        <img className='body__panelframeimg' src={LMLO} alt='' />
                    </div>
                </div>
            </div>
            <div className='body__panel'>
                <h2 className='body__panelsubtitle'> {t("p3.label3")} </h2>
                <textarea className='body__paneltext' id='text1' rows='4' columns='50'>  </textarea>
                <h2 className='body__panelsubtitle'> {t("p3.label4")} </h2>
                <textarea className='body__paneltext' id='text1' rows='4' columns='50'>  </textarea>
                <h2 className='body__panelsubtitle'> {t("p3.label5")} </h2>
                <br />
                <br />
            </div>
        </div>
        <button className='body__lastbutton'> {t("p3.button2")} </button>
    </div>
  )
}

export default Body4