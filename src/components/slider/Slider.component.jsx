import React from 'react'
import './Slider.style.css'
import product from '../../assets/images/product.png'

function Slider() {
  return (
      <div className="slider">
        <div className="container m-auto flex flex-row items-center px-[23.2rem]">
            {/* Slider Content */}
            <div className="slider__content relative">
                <h1>Die Revolution <br/>der Gewürze</h1>
                <p>Jeden Tag eine gute Tat. Mit unserem direkten Gewürzhandel kommt mehr Geld bei den Erzeuger*innen im Nahen Osten an und soziale Projekte in der Region erhalten 20% vom Umsatz. Zusammen machen wir den Unterschied!</p>
                <button className='mt-9'>Jetzt Welt retten!</button>
            </div>
            {/* Slider Images */}
            <div className="slider__images">
                <img src={product} alt="Product" />
            </div>
        </div>
      </div>
  )
}

export default Slider