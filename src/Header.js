import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header__items'>
                <a className='header__logo'></a>
                <a className='header__item'>Mac</a>
                <a className='header__item'>iPad</a>
                <a className='header__item'>iPhone</a>
                <a className='header__item'>Watch</a>
                <a className='header__item'>TV</a>
                <a className='header__item'>Music</a>
                <a className='header__item'>Wsparcie</a>
                <a className='header__search'></a>
                <a className='header__basket'></a>
            </div>
        </div>
    )
}

export default Header
