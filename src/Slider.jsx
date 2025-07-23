import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
  {
    image: 'https://static.wixstatic.com/media/0bb83114d47e4ca0a9fa5a9ea6a16530.jpg/v1/fill/w_414,h_527,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mountain%20Landscape.jpg',
    title: 'Welcome to Our Website',
    description: 'We provide the best services for your needs.'
  },
  {
    image: 'https://static.wixstatic.com/media/11062b_2acbd6eaea3d43b98b40d28b8838464e~mv2.jpg/v1/fill/w_414,h_527,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mountain.jpg',
    title: 'Innovative Solutions',
    description: 'Our solutions are tailored for your success.'
  },
  {
    image: 'https://static.wixstatic.com/media/11062b_4c10b593035143bda767c755c09bb406~mv2.jpg/v1/fill/w_414,h_527,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mountain.jpg',
    title: 'Let’s Work Together',
    description: 'Join us to achieve your goals with ease.'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="overlays">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].description}</p>
        </div>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slider;
