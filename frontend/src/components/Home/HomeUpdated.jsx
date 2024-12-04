import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import HeroSection from "./HeroSection";
import "./HomeUpdated.css";
import HeroSection from "./Home";
import Header from "../Header/Header";

const HomeUpdated = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app1">
      <Header isScrolled={isScrolled} />
      <HeroSection mousePosition={mousePosition} />
    </div>
  );
};

export default HomeUpdated;
