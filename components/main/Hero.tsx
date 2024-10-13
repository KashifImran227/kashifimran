import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 top-0 left-0 z-0 h-full w-full object-cover"
      >
        <source src="space video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-end z-10 text-center p-4">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
