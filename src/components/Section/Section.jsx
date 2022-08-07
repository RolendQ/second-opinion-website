import React from 'react'
import './Section.css'

import CHINESE1 from '../../assets/chinese1.jpg'
import CHINESE2 from '../../assets/chinese2.jpg'
import CHINESE3 from '../../assets/chinese3.jpg'
import CHINESE4 from '../../assets/chinese4.jpg'

import JAPANESE1 from '../../assets/japanese1.jpg'
import JAPANESE2 from '../../assets/japanese2.jpg'

import AMERICAN1 from '../../assets/american1.jpg'
import AMERICAN2 from '../../assets/american2.jpg'
import AMERICAN3 from '../../assets/american3.jpg'

const Container = () => {
  return (
    <div className='section__container'>
      <div className='section__area1'>
        <span className='section__title'> Section Title 1 </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={CHINESE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={CHINESE2} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={CHINESE3} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={CHINESE4} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </div>

      <div className='section__area2'>
        <span className='section__title'> Section Title 2 </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={JAPANESE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={JAPANESE2} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </div>

      <div className='section__area3'>
        <span className='section__title'> Section Title 3 </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={AMERICAN1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={AMERICAN2} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={AMERICAN3} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container