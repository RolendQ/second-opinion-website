import React from 'react'
import Nav from '../Nav/Nav.jsx'
import './Body2.css'

const Gallery = () => {
  return (
    <div className='body__container'>
        <div className='body__left'>
            <button className='body__back'>Back</button>
            <p className='body__desc'> Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
        </div>
        <div className='body__right'>
            <div className='body__loginpanel'>
                <form className='login__form'>
                <div className='triangle-element' />
                <h1> Login Form </h1>
                <div>
                    <input className='login__input' type="text" name='name' placeholder="Your Name" required />
                </div>
                <div>
                    <input className='login__input' type="email" name="email" placeholder="Your Email" required />
                </div>
                <div>
                    <input className='login__input' type="password" name="password" placeholder="Your Password" required />
                </div>
                <button type="submit" className='login__submit'>Login</button>
                <button className='login__button2'>Sample Text</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Gallery