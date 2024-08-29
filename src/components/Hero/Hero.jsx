import './Hero.css'
import React, { useState, useEffect } from 'react';
import img1 from './../../assets/images/banner-01.jpg'
import img2 from './../../assets/images/banner-02.jpg'
import img3 from './../../assets/images/banner-03.jpg'
function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        img1,img2,img3
    ];
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval);
    }, [currentSlide]);
  return (
    <div className="slider-container">
        <div className="slider-text">
            <div className="text-box">
                <p>Toronto <span>Canada</span></p>
            </div>
            <h2>HURRY! GET THE BEST VILLA FOR YOU</h2>
        </div>
    <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
    <div className="slide">
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
    </div>
    <button className="next-btn" onClick={nextSlide}>&#10095;</button>
    <div className="indicators">
    {slides.map((slide, index) => (
        <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
        ></span>
    ))}
</div>
</div>
  )
}

export default Hero