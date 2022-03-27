import React from 'react'
import './MobileNav.style.css'

function MobileNav({visible}) {
    return (        
        <div className={`mobileNav flex items-center justify-start ${visible===true ? 'slide': ''}`}>
            <div className='flex flex-col items-start'>
                <h1 className={`mobileNav__heading uppercase ${visible===true ? 'fade-in': 'opacity-0'}`}>Menü</h1>
                <a href="/" className={`uppercase mb-[6px] font-bold whitespace-nowrap ml-[35px] ${visible===true ? 'fade-in' : 'opacity-0 '}`}>Philosophie</a>
                <a href="/" className={`uppercase mb-[6px] font-bold whitespace-nowrap ml-[35px] ${visible===true ? 'fade-in' : 'opacity-0 '}`}>Über Uns</a>
                <a href="/" className={`uppercase mb-[6px] font-bold whitespace-nowrap ml-[35px] ${visible===true ? 'fade-in' : 'opacity-0 '}`}>Blog</a>
                <a href="/" className={`uppercase mb-[6px] font-bold whitespace-nowrap ml-[35px] ${visible===true ? 'fade-in' : 'opacity-0 '}`}>shop</a>
            </div>
        </div>
    )
}

export default MobileNav