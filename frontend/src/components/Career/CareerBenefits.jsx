// components/CareerBenefits.jsx
import React from "react";
import {
  BsBriefcase,
  BsPeople,
  BsGear,
  BsGraphUp,
  BsHeart,
  BsStar,
} from "react-icons/bs";
import "./Career.css";

function CareerBenefits() {
  const benefits = [
    {
      icon: <BsBriefcase />,
      title: "Your Work Matters",
      description: "Make a real impact on global logistics and transportation.",
    },
    {
      icon: <BsPeople />,
      title: "Great Team",
      description: "Work with talented and passionate individuals.",
    },
    {
      icon: <BsGear />,
      title: "Latest Technology",
      description: "Access to cutting-edge tools and technologies.",
    },
    {
      icon: <BsGraphUp />,
      title: "Growth Opportunities",
      description: "Clear career progression and learning paths.",
    },
    {
      icon: <BsHeart />,
      title: "Health Benefits",
      description: "Comprehensive health and wellness coverage.",
    },
    {
      icon: <BsStar />,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options.",
    },
  ];

  return (
    <div className="benefits-section">
      <h2>Supported by exceptional benefits.</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <span className="benefit-icon">{benefit.icon}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CareerBenefits;
