// components/CareerHero.jsx
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./Career.css";
import careerImage from "../../Images/careerImage.jpg";

export default function CareerHero() {
  return (
    <div className="career-hero">
      <div className="hero-content-career">
        <span className="company-label">CAREERS AT MOTHERSHIP</span>
        <h1>Build what the world needs.</h1>
        <p>
          We're shaping the future of freight and logistics. If you're excited
          by the prospect of unlocking the world's potential by speeding up the
          way goods move, join us.
        </p>
        <a href="#positions" className="cta-link">
          See Open roles <FaChevronRight className="icon" />
        </a>
      </div>
      <div className="hero-image-opportunity">
        {/* Replace with your actual image */}
        <img src={careerImage} alt="Career opportunities" />
      </div>
    </div>
  );
}
