import React from 'react';
import logo from '../../images/logo.png';
import github_logo from '../../images/github.svg';
import language_icon from '../../images/language.png'
import './Header.css';

export default function Header() 
{
    return(
        <header>
            <div className='header_block-left'>
                <img className='header_block-left_image' src={logo} alt="Logo" />
                <h4>Filterify</h4>
            </div>

            <div className='header_block-right'>
                <a href='' className='account-action'>Log in</a>
                <img className='header_block-right_image' src={language_icon} alt="" />
                <a className='header_block-right_image' href="https://github.com/tupaban123/filterify" target='_blank'><img src={github_logo} alt="GitHub" /></a>
            </div>
        </header>
    )
}