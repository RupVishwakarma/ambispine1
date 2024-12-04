import React from "react";
import "./VisionSlider.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import WhoWeAre1 from "../../Images/WhoWeAre1.mp4";

function Content_Slider() {
  return (
    <div className="">
      <div id="contentSlider" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              className="vision_content text-center"
              style={{ width: "70%", height: "40vh", margin: "auto" }}
            >
              <p>
                Experience seamless digital transformation with our end-to-end
                cloud and web solutions. We provide comprehensive services—from
                initial consultation and design, through development and
                deployment, to ongoing management and support. Our cloud
                solutions ensure scalability, flexibility, and security,
                enabling your business to thrive in a digital-first world. Our
                web solutions deliver user-friendly, high-performance
                applications that engage and convert. Partner with us to
                streamline your operations, enhance your customer experience,
                and drive growth with cutting-edge technology tailored to your
                unique needs. Embrace the future with confidence and efficiency.
                Your digital journey starts here.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <div
              className="vision_content text-center"
              style={{ width: "70%", height: "40vh", margin: "auto" }}
            >
              <p>
                We are Seamlessly incorporating and working on AI into your
                business processes can propel you to new heights of efficiency
                and innovation. AI can add value, whether it’s automating
                routine tasks, enhancing customer experiences, or providing
                predictive insights. Regularly monitor its performance and make
                adjustments to ensure it continues to meet your evolving
                business needs. Equip our team with the necessary skills and
                knowledge to work alongside AI. Foster a culture that embraces
                innovation and change.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <div
              className="vision_content text-center"
              style={{ width: "70%", height: "40vh", margin: "auto" }}
            >
              <p>
                We are working on Retrieval-Augmented Generation (RAG),
                automated platforms and An Application Tracking System (ATS)
                which is a powerful tool designed to streamline the recruitment
                process. By automating the organization, tracking, and
                evaluation of job applications, an ATS helps HR teams manage
                large volumes of applicants with ease. It provides a centralized
                platform where resumes are parsed, categorized, and matched
                against job requirements, ensuring that only the most qualified
                candidates move forward.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex position-relative  bg-danger">
          <button
            class="carousel-control-prev "
            type="button"
            data-bs-target="#contentSlider"
            data-bs-slide="prev"
          >
            <FaLongArrowAltLeft className="fs-2 text-dark  border border-3 border-dark rounded-circle p-1" />
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#contentSlider"
            data-bs-slide="next"
          >
            <FaLongArrowAltRight className="fs-2 text-dark  border border-3 border-dark  rounded-circle p-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <div className="position-relative" style={{}}>
      <div className="About_Vido_Container">
        <video autoPlay loop muted className="about_backgroun_video">
          <source src={WhoWeAre1} type="video/mp4" />
        </video>
      </div>
      <div className="About_Bridging_Container">
        <h2
          className="border-bottom border-2  fw-semibold ms-2 mt-2 fs-1 ps-3"
          style={{ width: "200px" }}
        >
          About Us
        </h2>
        <p className=" ms-2 fs-5 ">
          Bridging Innovation with Passion—Where Ideas Transform into Reality{" "}
          <br />
          Get Ready To Discover Emerging Trends And Innovations
        </p>
        <div style={{ marginTop: "75px" }}>
          <div className="d-flex my-auto">
            <button className="border-primary border-3 bg-white p-1 text-dark">
              Our Expertise
            </button>
            <button className="border-primary  border-3 bg-white p-1 text-dark">
              Our Missions
            </button>
          </div>
        </div>
      </div>
      <div className="mt-1 py-3">
        <Content_Slider />
      </div>
    </div>
  );
}
