import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import vide from './image/vide.mp4';
import vide from './image/Testimonialvideo/vide.mp4';
import video06 from './image/Testimonialvideo/video06.mp4'
import video07 from './image/Testimonialvideo/video07.mp4'
import video08 from './image/Testimonialvideo/video08.mp4'

import HoverVideoCard from './HoverVideoCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './HorizontalSlider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {

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
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><HoverVideoCard img='https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg' video={video07} title="WE" /></SwiperSlide>
        <SwiperSlide> <HoverVideoCard img="https://images.pexels.com/photos/13190042/pexels-photo-13190042.jpeg" video={video08} title="Provide" /></SwiperSlide>
        <SwiperSlide><HoverVideoCard img='https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg' video={video06} title="Quality" /></SwiperSlide>
      
      </Swiper>
    </>
  );
}
