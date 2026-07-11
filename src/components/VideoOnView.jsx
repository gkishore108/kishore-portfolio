import { useEffect, useRef, useState } from "react";

export const VideoOnView = ({ src }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // load only once
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className="w-full h-full">
      {isVisible ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover pointer-events-none"
        />
      ) : (
        // fallback (optional)
        <div className="w-full h-full bg-muted animate-pulse" />
      )}
    </div>
  );
};