import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/AmbiSpine_logo.png";
import { AiFillAndroid } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { DiDigitalOcean } from "react-icons/di";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCloudUpload } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import './Header.css';
const Header = ({ isScrolled }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ mobileView, setMobileView] = useState(false);

  const handleMobileView = () =>{
    setMobileView(!mobileView);
  }

  const servicesdrop = [
    {
      id: 1,
      icon: <AiFillAndroid />,
      name:"Mobile App Development",
      feature: [
        {
          name:"IOS App Development",
        },
        {
          name:"Android App Development",
        },
        {
          name:"Hybrid App Development",
        },
      ]
    },
    {
      id: 2,
      icon: <CgWebsite />,
      name:"Website Development",
      feature: [
        {
          name:"Website App Development",
        },
        {
          name:"Content Management System",
        },
        {
          name:"Software Development Services",
        },

      ]
    },
    {
      id: 3,
      icon: <FaBusinessTime />,
      name:"Bussiness Solution",
      feature: [
        {
          name:"CRM Bussiness Solution",
        },
        {
          name:"ERP Bussiness Solution",
        }
      ]
    },
    {
      id: 4,
      icon: <MdOutlineDesignServices />,
      name:"Responsive web designing",
      feature: [
        {
          name:"Website degine",
        },
        {
          name:"logo degine",
        }
      ]
    },    
    {
      id: 5,
      icon: <IoIosCloudUpload />,
      name:"Cloud Solution",
      feature: [
        {
          name:"Cloud Solution and Data Migration",
        }
      ]
    },   
    {
      id: 6,
      icon: <DiDigitalOcean />,
      name:"Digital Marketing Services",
      feature: [
        {
          name:"SEO Servicest",
        },
        {
          name:"Content Writing Service",
        },
      ]
    },
  ]

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="AmbiSpine Logo" className="header__logo-img" />
        </Link>
        <nav className={`nav-menu ${mobileView ? "showMobileHeader": ""} `}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              to="/services"
              className="nav-link with-arrow"
            >
              Services
              <span
                className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              >
                ▼
              </span>
            </Link>

            <div className={`dropdown-mega ${isDropdownOpen ? "show" : ""}`}>
              <div className="dropdown-grid">
                {servicesdrop.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="service-card"
          >
            <span className="service-icon">{service.icon}</span>
            <div className="service-content">
              <h3 className="service-title">{service.name}</h3>
              <div className="feature-tags">
                {service.feature.map((feature, idx) => (
                  <Link
                    key={idx}
                    to={`/services/${feature.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="feature-tag"
                  >
                    {feature.name} <FaArrowRightLong className="service_header_arrow"/>
                  </Link>
                ))}
              </div>
            </div>
          </Link>
        ))}
          </div>
            </div>
          </div>
          {/* <Link to="/service" className="nav-link">
            Services
          </Link> */}
          <Link to="/product" className="nav-link">
            Product
          </Link>
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
          <Link to="/career" className="nav-link">
            Career
          </Link>
          <Link
            to="/contact"
            className="contact-btn"
            style={{ textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </nav>

        <IoReorderThreeOutline onClick={handleMobileView} className="mobile-toggle" />
      </div>
    </header>
  );
};

export default Header;
