import React, { useRef, useEffect, useState } from "react";
import Homeimg from "../../Images/Homeimg.jpg";
import ImageCarousel from "./ImageCarousel";
import ambiup from '../../Images/ambiup.mp4';
import unlock1 from '../../Images/unlock1.png';
import unlock2 from '../../Images/unlock2.jpg';

import product3 from '../../Images/product3.png'
import product4 from '../../Images/product4.png'
import product5 from '../../Images/product5.png'
import product6 from '../../Images/product6.png'
import product8 from '../../Images/product8.png'
import product9 from '../../Images/product9.png'
import { motion } from 'framer-motion';

import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = ({ mousePosition }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const contentRef = useRef(null);

  const contentItems = [
    "AI-powered chatbots automate customer interactions, providing instant responses and support.",
    "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
    "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
    "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
  ];
  const service_product=[
    {
      id: 1,
      name: "Mobile Solution",
      description: "transform your business with our innovative mobile solutions, Explore our services",
      link: "mobile-solution",
      img : product8,
    },
    {
      id: 2,
      name: "website Solution",
      description: "Enhance your online visiblity, drive more traffic. Check our services today!",
      link: "website-solution",
      img : product9,
    },
    {
      id: 3,
      name: "Business Solution",
      description: "Elevate your business with Our expert solutions & accelerate your business growth.",
      link: "business-solution",
      img : product3,
    },
    {
      id: 4,
      name: "Web Designing Solution",
      description: "Boost Online Engagement with Our Responsive Web Design Services. Transform your digital landscape and captivate your audience with our expert web designing solutions. Explore our services today!",
      link: "web-designe-solution",
      img : product4,
    }, 
    {
      id: 5,
      name: "Cloud Solution",
      description: "Accelerate Business Growth with Our Scalable Cloud Solutions. Streamline operations, secure data, and unlock efficiency with our cloud services. Discover how our cloud solutions can transform your business!",
      link: "cloud-solution",
      img : product5,
    },
    {
      id: 6,
      name: "Digital Marketing Solution",
      description: "Maximize Online Visibility with Our Data-Driven Digital Marketing Strategies. Reach, engage, and convert your target audience with our expert digital marketing solutions. Boost your online presence now!",
      link: "digital-marketing-solution",
      img : product6,
    }

  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero" style={{padding:"0px"}} >

        <div className="video-container">
        <video autoPlay loop muted className="background-video">
            <source src={ambiup} type="video/mp4" ></source>
        </video>
        </div>
        <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-left">

            <h1 className="hero-title" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              Embracing The Future OF <br /> Technology
            </h1>

            <p className="hero-description"  data-aos="fade-right" >
            Join us to discover the latest advancements in cloud. Computing artificial intelligence, and data analytics and be part of the transformation. 
            </p>

            <div className="cta-container">
              <button className="primary-btn">
                <Link
                  to="/services/web-app-development"
                  style={{ textDecoration: "none", color:"white" }}
                >
                  Explore Technologies <FaLongArrowAltRight className="explore_tech_icon"/>
                </Link>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      <div className="home-body-section">
      <section>
        <div className="row justify-content-center py-5">
            <div className="col-lg-4 px-4 ">
            <h2 data-aos="fade-up-right" className="section-title mt-5">Maximize effeciency with intelligent automation</h2>
            <p data-aos="fade-up-right" className="section-description">Unlock the Power of Community, Creativity, and Connection with Ambispine Technologies Experience the difference and elevate your business with our community-driven approach. </p>
            <img data-aos="fade-right" src={unlock1} className="intel_auto" alt="Feature" />
            </div>
            <div className="col-lg-7 px-4" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" >
            <img  src={unlock2} className="dasboard" alt="Feature" />
            </div>
        </div>
      </section>

      <section ref={contentRef} className="ai-features-section">
        <h2 className="section-title">AI-Powered Solutions</h2>
        <div className="features-grid">
          {contentItems.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card ${
                visibleCards.has(index) ? "visible" : ""
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="network-section">
        <h2 className="section-title text-center">
          Spread Your Wings, Expand Your Network
        </h2>
        <p className="section-description">
          Expand your reach and influence. Grow your connections, increase your
          opportunities, and access to resources. Make a bond with new
          possibilities and horizons.
        </p>
        <ImageCarousel />
      </section>
      </div>


      <section className="product-service-section">
      <div className="container">
        <h2 className="head-tile">
          Empowering Innovation: unleashing digital potential.
        </h2>
        <p className="subt-title">
          Discover the power of cutting-edge technology solutions & services.
        </p>
        <div className="row justify-content-center" >
          {service_product.map((service, index) => (
             <div
              key={service.id}
              className="col-lg-4 service_product_con"
              data-aos="fade-right"
              data-aos-delay={index * 300} // Staggered delay (200ms between items)
            >
              <div className="ser_pro_con_img">
                <img
                  src={service.img}
                  className="product_image"
                  alt={`${service.name}`}
                />
              </div>
              <div>
                <h4 className="">{service.name}</h4>
                <p className="text-light ">{service.description}</p>
                <Link
                  to={`/${service.link}`}
                  className="service_link"
                >
                  {service.name} explore
                  <FaLongArrowAltRight className="service_arro_link_icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default HeroSection;
