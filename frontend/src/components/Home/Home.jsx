import React, { useRef, useEffect, useState } from "react";
import Homeimg from "../../Images/Homeimg.jpg";
import ImageCarousel from "./ImageCarousel";
import ambiup from '../../Images/ambiup.mp4';
import product3 from '../../Images/product3.png'
import product4 from '../../Images/product4.png'
import product5 from '../../Images/product5.png'
import product6 from '../../Images/product6.png'
import product8 from '../../Images/product8.png'
import product9 from '../../Images/product9.png'
import carousel_1 from "../../Images/carousel-1.jpg";
import carousel_2 from "../../Images/carousel-2.jpg";
import carousel_3 from "../../Images/carousel-3.jpg";
import carousel_4 from "../../Images/carousel-4.jpg";
import dashboar from '../../Images/dashboar.avif';
import clouddata1 from '../../Images/clouddata1.jpg';

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

  const spreadsServices = [
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
    {
      src: carousel_4,
      alt: "Image 4",
      headText: "Connect, Capture And Share",
      text: "The art of connection is here connecting you to the world, one person at a time intentional networking and connection and it's potential impact, let's connect to the world.",
    },
  ];
  const clouddata = [
    {
      id: 1,
      content: "Embrace the booster of Cloud Computing",
      hoverContent2: "Ambispine Technologies' Cloud Services provide a secure, scalable, and reliable infrastructure for your business applications. Our cloud solutions enable you to reduce costs, increase agility, and improve collaboration.",
      src: clouddata1,
     
    },
    {
      id: 2,
      content: "Elevate Your Business with Cloud Expertise",
      hoverContent2: "Transform your business with Ambispine Technologies' Cloud Services. Our secure, scalable, and reliable infrastructure boosts agility, collaboration, and cost savings. Discover the power of cloud computing with us.",
      src: carousel_2,
    },
    {
      id: 3,
      content: "Conversion Rate Optimization (CRO)",
      hoverContent2: "CRO is crucial for a successful digital marketing strategy, as it increases the likelihood of visitors turning into customers.",
      src: carousel_2
    },
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
      <section style={{paddingTop:"120px"}}>
        <div className="text-center mx-auto"style={{width:"70%"}}>
        <h2 data-aos="fade-up-right" className="section-title mt-5">Maximize effeciency with <br />intelligent automation</h2>
        <p data-aos="fade-up-right" className="section-description">Unlock the Power of Community, Creativity, and Connection with Ambispine Technologies Experience the difference and elevate your business with our community-driven approach. </p>
        <img  src={dashboar} className="dasboard" alt="Feature" />

        </div>
      </section>
      
      <div className="container mt-5">
      <div className="row  justify-content-center">
      {
      clouddata.map((data, index)=>(
        <div className="col-lg-4 wrapper-container" key={index}
        data-aos="fade-right"
        data-aos-delay={index * 100} >
          <div className="wrapper-img">
            <img src={data.src}  alt={data.alt} />
            <div className="content ">
              <h4 className=" content-header">{data.content}</h4>
              <p className="content-subtitle">{data.hoverContent2}</p>
            </div>
          </div>
        </div>
      ))
      }

      </div>
      </div>
      

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

      
      </div>


      <section className="product-service-section">
      <div className="">
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
              className=" col-lg-4 service_product_con"
              data-aos="fade-right"
              data-aos-delay={index * 300} // Staggered delay (200ms between items)
            >
              <div className="ser_pro_con_img">
                <img
                  src={service.img}
                  className="product_image"
                  alt={`${service.name}`}
                />
                <div>
                <h4 className=" mt-4">{service.name}</h4>
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

              
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="network-section" >
        <div className="row justify-content-evenly">
          <div className="col-md-5" data-aos="fade-right">
          <h2 className="section-title text-start">
          Spread Your Wings, Expand Your Network
        </h2>
        <p className="section-description text-start mt-3 pt-4">
          Expand your reach and influence. Grow your connections, increase your
          opportunities, and access to resources. Make a bond with new
          possibilities and horizons.
        </p>
          </div>
          <div className="col-md-5" data-aos="fade-left">
          <img src={carousel_2} className="w-100 h-100 img-fluid" />
          </div>

        </div>    
        {/* <ImageCarousel /> */}
        <div className="row" style={{marginTop:"50px"}}>
          {
         spreadsServices.map((data, index)=>{
          return(<div key={index}  data-aos="fade-right"
            data-aos-delay={index * 200} className="col-lg-3 spreads-services-container">
            <div className="spreads-service-img">
              <img src={data.src} alt={data.alt} />
            </div>
            <h4 className="text-dark mt-2 p ">{data.headText}</h4>
            <p>{data.text}</p>
        </div>)
         })
          }
        </div>
      </section>
    </>
  );
};

export default HeroSection;