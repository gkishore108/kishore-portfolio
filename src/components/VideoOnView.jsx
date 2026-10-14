
import { useEffect, useRef, useState } from "react";

export const VideoOnView = ({ src, thumbnail }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    // Load the video shortly before it enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-muted"
    >
      {/* Thumbnail stays visible while the video loads */}
      <img
        src={thumbnail}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover
          transition-opacity duration-500
          ${isLoaded ? "opacity-0" : "opacity-100"}`}
      />

      {/* Mount the video only when it is near the viewport */}
      {isVisible && !hasError && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover
            transition-opacity duration-500
            ${isLoaded ? "opacity-100" : "opacity-0"}
            pointer-events-none`}
        />
      )}
    </div>
  );
};