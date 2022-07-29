import React from 'react'
import './Section.css'

import FACE1 from '../../assets/face1.jpg'

const Container = () => {
  return (
    <div className='section__container'>
      <div className='section__area1'>
        <span className='section__title'> Section Title 1 </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </div>

      <div className='section__area2'>
        <span className='section__title'> Section Title 2 </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </div>

      <div className='section__area3'>
        <span className='section__title'> Section Title 3 </span>
        <div className='section__grid'>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='section__square'>
            <img className='section__image' src={FACE1} alt=''></img>
            <p> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container