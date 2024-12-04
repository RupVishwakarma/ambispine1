
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ImageCarousel.css";
import carousel_1 from "../../Images/carousel-1.jpg";
import carousel_2 from "../../Images/carousel-2.jpg";
import carousel_3 from "../../Images/carousel-3.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    src: carousel_1,
    alt: "Image 1",
    text: "Implies that a stronger network can provide valuable support and tools highlights the potential for new experiences and possibilities",
    headText: "Access the resources",
  },
  {
    src: carousel_2,
    alt: "Image 2",
    text: "Emphasizes the importance of accessing valuable resources and support through a strong network and follow your passion with following your choices.",
    headText: "Empower your life",
  },
  {
    src: carousel_3,
    alt: "Image 3",
    headText: "Learn new skills",
    text: "Expand your network, and soar to new heights! By spreading your wings and expanding your network, you can unlock your full potential and achieve your dreams!",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="carousel-content">
              <h2 className="carousel-head-text">{image.headText}</h2>
              <p style={{ color: "#fff" }} className="carousel-text">
                {image.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={goToPrevious}>
        <ChevronLeft size={24} />
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        <ChevronRight size={24} />
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

     <Link to="/product">
     <button className="btn-learn">Learn More</button>
     </Link>
    </div>
  );
};

export default ImageCarousel;
