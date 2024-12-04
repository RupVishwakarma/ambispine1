import "./VisionSlider.css";
import React from "react";
import { GoDotFill } from "react-icons/go";
import WhoWeAreHero1 from "../../Images/WhoWeAreHero1.jpg";
import WhoWeAreHero2 from "../../Images/WhoWeAreHero2.jpg";
import WhoWeAreHero3 from "../../Images/WhoWeAreHero3.jpg";
import WhoWeAreHero4 from "../../Images/WhoWeAreHero4.jpg";
import WhoWeAreHere1 from "../../Images/WhoWeAreHere1.jpg";
function WhoWeAreHeroSlider() {
  return (
    <div id="WhoWreHeroSection" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button
          data-bs-target="#WhoWreHeroSection"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        >
          <GoDotFill className="dot-icon" />
        </button>
        <button
          data-bs-target="#WhoWreHeroSection"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        >
          <GoDotFill className="dot-icon" />
        </button>
        <button
          data-bs-target="#WhoWreHeroSection"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        >
          <GoDotFill className="dot-icon" />
        </button>
        <button
          data-bs-target="#WhoWreHeroSection"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        >
          <GoDotFill className="dot-icon" />
        </button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <div className="WhoWeAreSectionImgContainer">
            <img src={WhoWeAreHero1} class="WhoWeAreSectionImg" alt="..." />
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <div className="WhoWeAreSectionImgContainer">
            <img src={WhoWeAreHero2} class="WhoWeAreSectionImg" alt="..." />
          </div>
        </div>
        <div class="carousel-item">
          <div className="WhoWeAreSectionImgContainer">
            <img src={WhoWeAreHero3} class="WhoWeAreSectionImg" alt="..." />
          </div>
        </div>
        <div class="carousel-item">
          <div className="WhoWeAreSectionImgContainer">
            <img src={WhoWeAreHero4} class="WhoWeAreSectionImg" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhoWeAreHeroSection() {
  return (
    <div className="WhoWeAreTopSection">
      <div className="position-relative">
        <WhoWeAreHeroSlider />
        <div
          className="position-absolute text-white "
          style={{ top: "30%", left: "40px", width: "40%" }}
        >
          <h2 className="border-bottom border-4  fw-semibold ms-2 mt-2 fs-1 ">
            Who We Are
          </h2>
          <p className=" ms-2 fs-5 ">
            Empower Individuals To Achieve Their Goals, Expand Their <br />
            Networks, And Find New Opportunities
          </p>
        </div>
      </div>
      <div className="row my-3 px-4">
        <div className="col-12 col-lg-6 my-auto">
          <div className="p-3 mx-5">
            <h3>Our Company</h3>
            <p>
              In a world where technology bridges gaps and brings people closer,
              we stand at the forefront. We specialize in enhancing business
              health through robust IT support and innovative SaaS applications.
              Solutions are designed to connect people, streamline processes,
              and empower companies to reach their full potential. With
              personalized support and cutting-edge technology, we ensure your
              business runs smoothly and efficiently. Connecting People,
              Empowering Success
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-around">
          <div
            className="position-relative"
            style={{ width: "400px", height: "300px" }}
          >
            <img
              src={WhoWeAreHere1}
              className="w-100 h-100 img-fluid"
              alt="Our Company"
            />
            <span className="img-accent-gradient"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
