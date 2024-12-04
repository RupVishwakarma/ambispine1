import React, { useRef, useEffect } from 'react';
import { FaUsers, FaStar, FaRocket } from 'react-icons/fa';
import { FaLandmarkFlag } from "react-icons/fa6";
import "./CareerWithUs.css"
const CareerWithUs = () => {
  const contentRef = useRef(null);

  const contentItems = [
    {
      icon: <FaLandmarkFlag size={30}/>, 
      num: 1,
      heading: "Culture",
      description: "Our culture fosters individual talent, mutual trust and lifelong learning. We support our people so they can master their career journeys, go further, reach higher, and realize their greatest potential."
    },
    {
      icon: <FaUsers size={30}/>, 
      num: 2,
      heading: "Values",
      description: "We truly believe that if we grow together, we achieve more as a society. At Digital Janet, we let every individual shape the journey."
    },
    {
      icon: <FaRocket size={30}/>, 
      num: 3,
      heading: "Work at the Latest Frontier",
      description: "From cloud to AI and everything in between, our people work with today’s most cutting-edge technologies to bring innovative solutions to solve complex challenges facing our clients—and our communities."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    const elements = contentRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div>
      <section ref={contentRef} className="ai-features-section">
        <h2 className="section-title">Why Career with Us</h2>
        <div className="features-grid">
          {contentItems.map((item, index) => (
            <div key={index} className="feature-card animate-on-scroll">
             <div className='c-container'>
             <div className='big-icons-circle-relative'>
                {item.icon}
                <div className='small-num-circle-absolute'>
                  {item.num}
                </div>
              </div>
             </div>
              <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{item.heading}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerWithUs;
