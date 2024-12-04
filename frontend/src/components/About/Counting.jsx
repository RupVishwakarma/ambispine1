import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./About.css";

export default function Counting() {
  const [countOn, setCountOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div className="couting-trigger">
        <div className="row justify-content-evenly">
          <div className="col-3">
            <p className="">
              We always provide people a complete solution upon focused of any
              business
            </p>
            <h5 className="text-primary-emphasis fs-4 fw-bolder">
              Complete Clases
            </h5>
            {countOn && (
              <h3 className="fw-bold text-primary">
                <CountUp start={0} end={25} duration={2} delay={1} />
                <span className="ms-2 fs-3 fw-bold">K+</span>
              </h3>
            )}
          </div>
          <div className="col-3">
            <p>
              We always provide people a complete solution upon focused of any
              business
            </p>
            <h5 className="text-primary-emphasis fs-4 fw-bolder">Our Office</h5>
            {countOn && (
              <h3 className="fw-bold text-primary">
                <CountUp start={0} end={17} duration={2} delay={1} />
                <span className="ms-2 fs-3 fw-bold">+</span>
              </h3>
            )}
          </div>
          <div className="col-3">
            <p>
              We always provide people a complete solution upon focused of any
              business
            </p>
            <h5 className="text-primary-emphasis fs-4 fw-bolder">
              Skilled people
            </h5>
            {countOn && (
              <h3 className="fw-bold text-primary">
                <CountUp start={0} end={50} duration={2} delay={1} />
                <span className="ms-2 fs-3 fw-bold">+</span>
              </h3>
            )}
          </div>
          <div className="col-3">
            <p>
              We always provide people a complete solution upon focused of any
              business
            </p>
            <h5 className="text-primary-emphasis fs-4 fw-bolder">
              Complete Happy Clients
            </h5>
            {countOn && (
              <h3 className="fw-bold text-primary">
                <CountUp start={0} end={80} duration={2} delay={1} />
                <span className="ms-2 fs-3 fw-bold">+</span>
              </h3>
            )}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
