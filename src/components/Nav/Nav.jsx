import React from 'react'
import './Nav.css'
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <div className='nav__container'>
      <div className='nav__section'>
        {t("p1.label1")}
      </div>
      <div className='nav__section'>
        {t("p1.label2")}
      </div>
      <div className='nav__section'>
        {t("p1.label3")}
      </div>
      <div className='nav__section'>
        {t("p1.label4")}
      </div>
      <div className='nav__section'>
        {t("p1.label5")}
      </div>
    </div>
  )
}

export default Nav