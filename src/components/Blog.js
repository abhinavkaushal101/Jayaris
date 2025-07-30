import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import vide from './image/vide.mp4';

// import video06 from './image/Testimonialvideo/video06.mp4'
// import video07 from './image/Testimonialvideo/video07.mp4'
// import video08 from './image/Testimonialvideo/video08.mp4'

// import HoverVideoCard from './HoverVideoCard';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Blog.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Blog_Data = [
  {
    id: 0,
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-4.png?w=683",
    title:
      "Hello Techies: Why Cybersecurity is the Unsung Hero of Modern Web...",

    description: `Hello Techies, When we talk about web and app development, the spotlight often falls on the visual brilliance of the...`,
  },
  {
    id: 1,
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-3.png",
    title: "Hello Techies: The Evolution of Web 3.0 – A New Digital Era...",

    description: `Hello Techies, The internet is undergoing a profound transformation, and we’re standing on the threshold...`,
  },
  {
    id: 2,
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-2.png?w=1024",
    title: "Hello Techies: Why AI Will Revolutionize Web & App...",

    description: `Hello Techies, The world of web and app development is undergoing one of the most exciting transformations in its...`,
  },
  {
    id: 3,
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris-1-1.png?w=1024",
    title: "Hello Techies: The Rise of Next-Gen Web Experiences...",

    description: `The digital landscape is evolving faster than ever, and Techies like you are at the heart of this transformation...`,
  },
  {
    id: 4,
    img: "https://jayarissolution.wordpress.com/wp-content/uploads/2025/07/jayaris.png?w=1024",
    title: "The Future of Web & App Development: Why Techies ...",

    description: `Hello Techies, In today’s digital-first world, web and app development is no longer just about coding—it’s about...`,
  },
];

export default function Blog() {
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
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {Blog_Data.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="title-img">
              <img src={data.img} />
            </div>
            <div className="title-description">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              {/* <div> */}
              <Link className="Readmore_btn" to={`/blog/${data.id}`}>
                Read
              </Link>
              {/* </div> */}
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide> <HoverVideoCard img="https://images.pexels.com/photos/13190042/pexels-photo-13190042.jpeg" video={video08} title="Provide" /></SwiperSlide>
        <SwiperSlide><HoverVideoCard img='https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg' video={video06} title="Quality" /></SwiperSlide> */}
      </Swiper>
    </>
  );
}
