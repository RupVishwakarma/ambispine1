import React from "react";
import "./VisionSlider.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import VisionSection2 from "../../Images/VisionSection2.jpg";
import VisionSection1 from "../../Images/VisionSection1.jpg";

function VisionSlider() {
  return (
    <div className="">
      <div id="visionSlider" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              className=""
              style={{ width: "80%", height: "80vh", margin: "auto" }}
            >
              <div className="vision_image_container">
                <img src={VisionSection1} class="vision_img" alt="..." />
              </div>
              <div className="vision_content">
                <p>
                  We are working on digital potential with our end-to-end
                  website and application solutions. From initial concept to
                  final launch, we cover every step of the process. Our services
                  include strategic planning, custom design, development, and
                  optimization, ensuring a seamless user experience. We
                  implement the latest technologies to create responsive,
                  high-performance websites tailored to your specific needs
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              className=""
              style={{ width: "80%", height: "80vh", margin: "auto" }}
            >
              <div className="vision_image_container">
                <img src={VisionSection2} class="vision_img" alt="..." />
              </div>
              <div className="vision_content">
                <p>
                  we believe in the power of human connection and the
                  transformative potential of technology. Our mission is to
                  bridge gaps and bring people together, solving real-world
                  problems with innovative solutions. Whether it's through our
                  cutting-edge software, intuitive platforms, or personalized
                  support, we are dedicated to making a positive impact on lives
                  around the globe. Join us in creating a better, more connected
                  future, where technology meets human ingenuity to overcome
                  challenges and unlock new opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#visionSlider"
          data-bs-slide="prev"
        >
          <FaLongArrowAltLeft
            className="fs-2 text-white  border border-3 rounded-circle p-1"
            style={{ marginTop: "-25%" }}
          />
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#visionSlider"
          data-bs-slide="next"
        >
          <FaLongArrowAltRight
            className="fs-2 text-white  border border-3 rounded-circle p-1"
            style={{ marginTop: "-25%" }}
          />
        </button>
      </div>
    </div>
  );
}

export default function VisionAbout() {
  return (
    <div className="positon-relative">
      <div className="vision_slider_section">
        <div className="vision_slider_heading">
          <h2
            className="border-bottom border-3 ms-4 mt-2 fs-1"
            style={{ width: "200px" }}
          >
            Our Vision
          </h2>
          <p className=" ms-4 fs-5 ">
            Empowering Tomorrow: Innovating Today for a Smarter Future.
          </p>
        </div>
        <div className="mt-1">
          <VisionSlider />
        </div>
      </div>
    </div>
  );
}
