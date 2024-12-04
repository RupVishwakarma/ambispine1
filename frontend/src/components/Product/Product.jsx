import React from "react";
import "./product.css";
import { LiaMobileAltSolid } from "react-icons/lia";
import productCrousel_1 from "../../Images/productcrousel1.mp4";
import productCrousel_2 from "../../Images/productcrousel2.mp4";
import productImage2 from "../../Images/productImage2.jpg";

const Product = () => {
  return (
    <section className="product-section">
      <main className="product-main">
        <img
          className="product-image"
          src={productImage2}
          alt="Skincare Product"
        />
      </main>
      <div className="product-details-container">
        <div className="product-details">
          <h1>Welcome To Spread World</h1>
          <p className="title">
            Spreads is a platform that empowers users to turn their aspirations
            into reality by providing opportunities aligned with their choices.
          </p>
          {/* <h1>Welcome To Spread World</h1> */}
          <div className="product-info">
            <div className="product-feature">
              <p>
                <LiaMobileAltSolid />
                <span>
                  Connect: With like-minded individuals who share your passions
                  and interests
                </span>
              </p>
              <p>
                <LiaMobileAltSolid />
                <span>
                  Discover: New career opportunities and networking
                  possibilities
                </span>
              </p>
              <p>
                <LiaMobileAltSolid />
                <span>
                  Grow: Unlock your full potential and manifest your dreams
                </span>
              </p>
            </div>
            <div className="product-feature">
              <p>
                <LiaMobileAltSolid />
                <span>
                  Success: Join a supportive community that fosters growth,
                  learning, and success
                </span>
              </p>
              <p>
                <LiaMobileAltSolid />
                <span>
                  thrive: Enjoy a sense of belonging, purpose, and fulfillment
                  in your professinal journey.
                </span>
              </p>
              <p>
                <LiaMobileAltSolid />
                <span>
                  Learn: access resources and tools to enhance your skills and
                  knowledge.
                </span>
              </p>
            </div>
          </div>
          <div className="product-description">
            <h5>
              Turn your aspirations into reality - Your gateway to
              endless opportunities!
            </h5>
          </div>
        </div>
      </div>
      {/* Bootstrap Video Carousel */}
      <div
        id="videoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className="d-block w-100" height="300" controls autoPlay>
              <source src={productCrousel_1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video
              className="d-block w-100"
              height="300"
              controls
              autoPlay
              loop
            >
              <source src={productCrousel_2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video
              className="d-block w-100"
              height="300"
              controls
              autoPlay
              loop
            >
              <source src={productCrousel_1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video
              className="d-block w-100"
              height="300"
              controls
              autoPlay
              loop
            >
              <source src={productCrousel_2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video
              className="d-block w-100"
              height="300"
              controls
              autoPlay
              loop
            >
              <source src={productCrousel_1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Carousel Controls */}
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#videoCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
{/* 
      <div className="product-footer">
        <div className="product-footer-info">
          <div className="footer-text">More Details</div>
          <div className="footer-image">
            <img
              src="https://www.shutterstock.com/image-photo/help-here-support-symbol-wooden-260nw-2012364179.jpg"
              alt="Footer Image"
              width="200"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Product;

// -----------------------------
