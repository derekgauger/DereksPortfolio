import React, { useState, useEffect, useRef } from "react";
import "./Slideshow.css";

interface SlideshowProps {
  images: string[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({
  images,
  autoScroll = false,
  autoScrollInterval = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    if (!autoScroll) {
      return;
    }
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      autoScrollInterval
    );

    return () => {
      resetTimeout();
    };
  }, [index, autoScroll, autoScrollInterval, images.length]);

  return (
    <div className="slideshow rounded-sm">
      <div className="sliderContainer">
        <div
          className="slideshowSlider text-green-400"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, idx) => (
            <div key={idx} className="slide">
              <img src={image} alt={`project ${idx + 1}`} className="slide-image object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;