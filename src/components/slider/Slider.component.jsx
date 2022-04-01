import React, { useState } from 'react'
import './Slider.style.css'
import {slider} from './slider.data';
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";


function Slider() {
  const length = slider.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [direction, setDirection] = useState('right');

  const prevSlide = (event) => {
    event.preventDefault();
    setDirection('left')
    setPrevIndex(currentSlide);
    setCurrentSlide((currentSlide+1)%length);
  }

  const nextSlide = (event) => {
    event.preventDefault();
    setDirection('right')
    setPrevIndex(currentSlide)
    setCurrentSlide((currentSlide===0)? length-1:currentSlide-1);
  }

  return (
    <div className='parent'>
      {
        slider.map(({heading, paragraph, image, button, background, size, buttonColor, font, imageWidth, indicatorColor}, index) => (
          <div className={`slider ${index===currentSlide? 'active': ''}`} key={index} style={{background: `${background}`}}>
            <div className='container m-auto flex flex-row items-stretch px-[23.2rem] relative'>
                {/* Slider Content */}
                <div className={`slider__content flex flex-col justify-center ${index===currentSlide? direction==='right' ? 'fadeRightIn' : 'fadeLeftIn': ''} 
                    ${index===prevIndex? direction==='right' ? 'fadeRightOut' : 'fadeLeftOut': ''} `}>
                    <h1 style={{fontSize: `${size}`, fontFamily: `"${font}", sans-serif`, fontWeight: `${font==="Inter" ? '700' : '500'}`}} className={`${index!==0? 'uppercase': ''}`}>{heading.split("\n").map((str, i) => <p key={i}>{str}</p>)}</h1>
                    <p>{paragraph}</p>
                    <button className='mt-9' style={{backgroundColor: `${buttonColor}`}}>{button}</button>
                </div>
                {/* Slider Images */}
                <div className="slider__images relative">
                    <img src={image} alt="Product" className={`${index===currentSlide? direction==='right' ? 'fadeRightIn' : 'fadeLeftIn': ''} 
                          ${index===prevIndex? direction==='right' ? 'fadeRightOut' : 'fadeLeftOut': ''} `} style={{maxWidth: `${imageWidth}%`}} />
                    <div className="indicators flex flex-row items-center jutify-center">
                      <a href="/" className='flex items-center justify-center' onClick={nextSlide} style={{backgroundColor: `${indicatorColor}`}}><FaArrowLeft /></a>
                      <a href="/" className='flex items-center justify-center' onClick={prevSlide} style={{backgroundColor: `${indicatorColor}`}}><FaArrowRight /></a>
                    </div>
                </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Slider