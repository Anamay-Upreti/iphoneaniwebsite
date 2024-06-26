import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-black relative">
      <div className="flex flex-col items-center text-center">
        <p id="hero" className="hero-title text-white text-4xl mb-4">iPhone 15 Pro</p>
        <div className="w-full flex justify-center items-center">
          <video className="pointer-events-none" autoPlay muted playsInline key={videoSrc} style={{ width: '100%', maxWidth: '800px' }}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 mt-10">
        <a href="#highlights" className="btn bg-blue-500 text-white px-4 py-2 rounded">Buy</a>
        <p className="font-normal text-xl text-white mt-2">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
