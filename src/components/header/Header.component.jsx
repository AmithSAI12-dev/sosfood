import React, { useState } from 'react'
import './Header.style.css'
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import cart from '../../assets/images/cart.png';
import MobileNav from '../mobileNav/MobileNav.component';

function Header() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <header className='header'>
                <nav className="flex flex-row items-center justify-center px-[40rem] py-[2.1rem]">
                    <div className="flex flex-row items-center jusify-start basis-1/2">
                        <div className='hamburger block sm:block md:hidden' onClick={() => setVisible(!visible)}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                        <a href="/" className='uppercase px-[3rem] font-bold whitespace-nowrap hidden sm:hidden md:block'>Philosophie</a>
                        <a href="/" className='uppercase px-[3rem] font-bold whitespace-nowrap hidden sm:hidden md:block'>Über Uns</a>
                        <a href="/" className='uppercase px-[3rem] font-bold whitespace-nowrap hidden sm:hidden md:block'>Blog</a>
                    </div>
                <a href="/" className='basis-1/3 flex flex-row items-center justify-center'><Logo className='w-[8rem] md:w-[13rem]' /></a>
                    <div className="flex flex-row items-center justify-end basis-1/2">
                        <a href="/" className='uppercase px-[3rem] font-bold whitespace-nowrap hidden sm:hidden md:block'>Shop</a>
                        <a href="/" className='uppercase px-[3rem] font-bold flex items-center justify-between whitespace-nowrap hidden sm:hidden md:flex'>Warenkorb <span className='ml-3 count flex items-center justify-center'>0</span></a>
                        <a href="/" className='uppercase font-bold whitespace-nowrap block md:hidden sm:block'>
                            <img src={cart} alt="Cart Icon" />
                        </a>
                    </div>
                </nav>
            </header>
            <MobileNav visible={visible}/>
        </>
    )
}

export default Header