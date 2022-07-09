import React from 'react'
import './Body.css'
import COVER from '../../assets/page1_cover.jpg'
import ICON from '../../assets/icon.jpg'

const Gallery = () => {
  return (
    <div className='body__container'>
        <img className='body__icon' src={ICON} alt=''></img>
        <div className='body__middle'>
            <img className='body__cover' src={COVER} alt=''></img>
            <p className='body__desc'> According to statistics, more than 40,000 breast cancer patients are missed
                each year in the United States, due to manual interpretation errors. Through our
                second opinion service of human–machine integration service, you can avoid the 
                worry of missed diagnosis, all of which does not take more than 24 hours</p>
            <button className='body__button'> Button Text </button>
        </div>
    </div>
  )
}

export default Gallery