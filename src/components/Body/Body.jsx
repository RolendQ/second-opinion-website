import React from 'react'
import Nav from '../Nav/Nav.jsx'
import './Body.css'
import COVER from '../../assets/page1_cover.jpg'
import ICON from '../../assets/icon_nobg.png'

const Gallery = () => {
  return (
    <div className='body__container'>
        <div className='body__left'>
            <img className='body__icon' src={ICON} alt=''></img>
            <p className='body__desc'> According to statistics, more than 40,000 breast cancer patients are missed
                each year in the United States, due to manual interpretation errors. Through our
                second opinion service of human–machine integration service, you can avoid the 
                worry of missed diagnosis, all of which does not take more than 24 hours</p>
            <div className="body__buttons">
                <button className='body__button1'> Button 1 Text </button>
                <br />
                <br />
                <button className='body__button2'> Button 2 Text </button>
            </div>
        </div>
        <div className='body__right'>
            <Nav />
            <img className='body__cover' src={COVER} alt=''></img>
        </div>
    </div>
  )
}

export default Gallery