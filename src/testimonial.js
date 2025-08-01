// src/components/Testimonial.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './testimonial.css'; // Create this new CSS file for testimonial specific styles
import { Link } from 'react-router-dom';
import { useRef, useLayoutEffect, useCallback, useMemo } from "react"; // Import useEffect
import { Container, Nav, Button, Dropdown } from "react-bootstrap";
import client1 from './image/client1.jpeg';
import vide from './image/Testimonialvideo/vide.mp4';
import video01 from './image/Testimonialvideo/video01.mp4'
// import video02 from './image/Testimonialvideo/video02.mp4'
import video03 from './image/Testimonialvideo/video03.mp4'
import video04 from './image/Testimonialvideo/video04.mp4'
import video05 from './image/Testimonialvideo/video05.mp4'
import video06 from './image/Testimonialvideo/video06.mp4'
import video07 from './image/Testimonialvideo/video07.mp4'
import video08 from './image/Testimonialvideo/video08.mp4'
import img04 from './image/testiimages/04.webp'
import img05 from './image/testiimages/05.jpg'
import img06 from './image/testiimages/06.jpg'
import img07 from './image/testiimages/07.jpg'
import img08 from './image/testiimages/08.jpg'
import img09 from './image/testiimages/09.jpg'
import img10 from './image/testiimages/10.avif'
import img11 from './image/testiimages/11.jpg'




import client2 from './image/client2.jpeg';
import client3 from './image/client3.jpeg';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Carousel from './HorizontalSlider';
import HoverVideoCard from './HoverVideoCard';
// import HorizontalSlider from './Slider';

// Data for the testimonials
const feedbackList = [
  {
    name: "Aarav Patel",
    role: "Product Manager at TechNova",
    image: client2, // ✅ Use the imported variable directly (NOT require())
    feedback: "Jayaris helped us scale our MVP in record time. The team was proactive, extremely responsive, and their code quality was exceptional. What impressed me most was their deep understanding of design systems and their ability to adapt to our ever-evolving requirements with zero friction.",
    videeo: { vide }
  },
  {
    name: "Sanya Mehra",
    role: "Founder of DesignSpire",
    image: client1, // ✅ Use the imported variable directly (NOT require())
    feedback: "We needed a UI/UX partner who could think beyond the basics, and Jayaris delivered. They redefined how we looked at user flows and brought a modern, intuitive touch to our app experience. The attention to micro-interactions and consistency was outstanding.",
    videeo: { vide }
  },
  {
    name: "Rohan Desai",
    role: "CTO at DevPeak",
    image: client3, // ✅ Use the imported variable directly (NOT require())
    feedback: "Working with Jayaris was like expanding our core tech team without the overhead. They delivered scalable architecture, handled tight deadlines with ease, and brought valuable suggestions during every sprint. Highly dependable and efficient.",
    videeo: { vide }
  }
];

const Testimonial = () => {
  const [showTestimonialCards, setShowTestimonialCards] = useState(false);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to start
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen(); // Safari
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen(); // IE/Edge
      }
    }
  };

  // Intersection Observer to show cards when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTestimonialCards(true);
        }
      },
      { threshold: 0.4 } // Adjust to trigger later or earlier
    );

    const section = document.getElementById("testimonials");
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <>
      <Navbar />

      <motion.section className="testimonial-glass-section" id="testimonials">
        {/* <div className='testi-box'>
       
          <div
            className="hover-video-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {!isHovered && (
              <div className='testi-wrapper'>
              <img src='https://cdn.pixabay.com/photo/2017/07/27/10/50/wordpress-development-2544896_1280.png' alt="Preview" className="preview-image" />
            <h1 className='content-hover-testi'>WE PROVIDE QUALITY</h1>
            </div>

            )}
            <video
              ref={videoRef}
              src={vide}
              muted
              loop
              className={`hover-video ${isHovered ? "show" : "hide"}`}
            />
            {isHovered && (
              <button className="fullscreen-btn" onClick={handleFullscreen}>
                ⛶
              </button>
            )}
          </div>
        </div> */}
        <div className='testibox-container'>
          <h1>Our Team Projects</h1>
          <p>Web development services encompass the creation, building, and maintenance of websites and web applications. This involves a range of tasks, from initial design .</p>
        </div>

        <Carousel/>
        <div className='wrapper-testing-container'>
          <div className='container-testing'>
        <div className='container-testing-text'>

          <h1>Travel & Hospitality</h1>
          <p>Adventure Brand / Travel Promotion</p>
        </div>
         <div className='testi-box testi-box-1'>
          {/* <div className='testi-right'>
            <h1>WE PROVIDE QUALITY</h1>
          </div> */}
           <HoverVideoCard img={img04} video={video06} title="Hover" />
        </div>
      </div>

        <div className='container-testing'>
           <div className='testi-box testi-box-1'>
          {/* <div className='testi-right'>
            <h1>WE PROVIDE QUALITY</h1>
          </div> */}
           <HoverVideoCard img={img05} video={video07} title="Hover" />
        </div>
        <div className='container-testing-text'>
          <h1>Travel & Hospitality</h1>
          <p>Tourism or Itinerary Planner</p>
        </div>
        
      </div>
      <div className='container-testing'>
        <div className='container-testing-text'>
          <h1>Business & Corporate</h1>
          <p>Company Website / Agency Landing Page</p>
        </div>
         <div className='testi-box testi-box-1'>
          {/* <div className='testi-right'>
            <h1>WE PROVIDE QUALITY</h1>
          </div> */}
           <HoverVideoCard img={img06} video={video01} title="Hover" />
        </div>
      </div>
       <div className='container-testing'>
         <div className='testi-box testi-box-1'>
          {/* <div className='testi-right'>
            <h1>WE PROVIDE QUALITY</h1>
          </div> */}
          <HoverVideoCard img={img07} video={video04} title="Hover" />
        </div>
         <div className='container-testing-text'>
          <h1>Business & Corporate</h1>
          <p>Portfolio Website</p>
        </div>
      </div>
       <div className='container-testing'>
        <div className='container-testing-text'>
          <h1>Creative & Entertainment</h1>
          <p>Photography / Event Showcase</p>
        </div>
         <div className='testi-box testi-box-1'>
          {/* <div className='testi-right'>
            <h1>WE PROVIDE QUALITY</h1>
          </div> */}
           <HoverVideoCard img={img08} video={video05} title="Hover" />
        </div>
      </div>

        <div className='container-testing'>
           <div className='testi-box testi-box-1'>
          {/* <div className='testi-right'>
            <h1>WE PROVIDE QUALITY</h1>
          </div> */}
           <HoverVideoCard img={img09}video={video08} title="Hover" />
        </div>
        <div className='container-testing-text'>
          <h1>Technology & Tools</h1>
          <p>SaaS or Product Landing Page</p>
        </div>
        
      </div>

        <div className='container-testing'>
        <div className='container-testing-text'>
          <h1>Business & Corporate</h1>
          <p>Portfolio Website</p>
        </div>
         <div className='testi-box testi-box-1'>
          {/* <div className='testi-right'>
            <h1>WE PROVIDE QUALITY</h1>
          </div> */}
           <HoverVideoCard img={img10} video={vide} title="Hover" />
        </div>
      </div>

        <div className='container-testing'>
           <div className='testi-box testi-box-1'>
          {/* <div className='testi-right'>
            <h1>WE PROVIDE QUALITY</h1>
          </div> */}
           <HoverVideoCard img={img11} video={video03} title="Hover" />
        </div>
        <div className='container-testing-text'>
          <h1>Business & Corporate</h1>
          <p>Company Website / Agency Landing Page</p>
        </div>
        
      </div>

      

      </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Testimonial;