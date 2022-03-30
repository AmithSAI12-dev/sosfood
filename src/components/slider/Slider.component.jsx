import React from 'react'
import './Slider.style.css'
import {slider} from './slider.data';
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";


function Slider() {
  return (
    <>
      {
        slider.map(({heading, paragraph, image, button, background, size, buttonColor, font}, index) => (
          <div className="slider" key={index} style={{background: `${background}`}}>
            <div className={`container m-auto flex flex-row items-stretch px-[23.2rem] relative ${index===0? 'active': ''}`}>
                {/* Slider Content */}
                <div className="slider__content flex flex-col justify-center">
                    <h1 style={{fontSize: `${size}`, fontFamily: `"${font}", sans-serif`, fontWeight: `${font==="Inter" ? '700' : '500'}`}} className={`${index!==0? 'uppercase': ''}`}>{heading.split("\n").map((str, i) => <p key={i}>{str}</p>)}</h1>
                    <p>{paragraph}</p>
                    <button className='mt-9' style={{backgroundColor: `${buttonColor}`}}>{button}</button>
                </div>
                {/* Slider Images */}
                <div className="slider__images relative">
                    <img src={image} alt="Product" />
                    <div className="indicators flex flex-row items-center jutify-center">
                      <a href="" className='flex items-center justify-center'><FaArrowLeft /></a>
                      <a href="" className='flex items-center justify-center'><FaArrowRight /></a>
                    </div>
                </div>
            </div>
          </div>
        ))
      }
      
    </>
  )
}

export default Slider