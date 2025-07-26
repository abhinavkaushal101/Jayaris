import React, { useRef, useState, useEffect } from "react";
import "./HoverVideoCard.css";

const HoverVideoCard = ({ img, video, title }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMouseEnter = () => {
    if (!isFullscreen) {
      setIsHovered(true);
      videoRef.current?.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (!isFullscreen) {  // Don’t stop video if fullscreen
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  const handleFullscreen = async () => {
    if (!videoRef.current) return;

    try {
      // Always make video visible and start playing before fullscreen
      setIsHovered(true);
      await videoRef.current.play();

      // Request fullscreen on the video element
      if (videoRef.current.requestFullscreen) {
        await videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        await videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        await videoRef.current.msRequestFullscreen();
      }

      setIsFullscreen(true);
    } catch (err) {
      console.error("Fullscreen failed:", err);
    }
  };

  // Handle exiting fullscreen
  const handleExitFullscreen = () => {
    setIsFullscreen(false);
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) handleExitFullscreen();
    });
    return () => document.removeEventListener("fullscreenchange", handleExitFullscreen);
  }, []);

  return (
    <div
      className="hover-video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered && !isFullscreen && (
        <div className="testi-wrapper">
          <img src={img} alt={title} className="preview-image" />
          <h1 className="content-hover-testi1">{title}</h1>
        </div>
      )}
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        className={`hover-video ${(isHovered || isFullscreen) ? "show" : "hide"}`}
      />
      <button className="fullscreen-btn" onClick={handleFullscreen}>
        ⛶
      </button>
    </div>
  );
};

export default HoverVideoCard;
