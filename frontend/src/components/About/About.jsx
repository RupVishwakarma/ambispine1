import React, { Fragment, useEffect, useState } from "react";
import "./About.css";
import Counting from "./Counting";
import TeamMemberImg1 from "../../Images/admin.png";
import TeamMemberImg2 from "../../Images/user.png";

import OurTeam from "./OurTeam";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
// TeamMember component

const AboutMe = () => {
  const dispatch = useDispatch();
  const { teamMembers } = useSelector((state) => state.team);
  console.log(teamMembers);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  return (
    <>
      <section>
        <div className="main">
          <img
            src="https://images.javatpoint.com/difference/images/difference-between-firm-and-company.png"
            alt="Company Banner"
          />
          <div className="main-content">
            <div>
              <h1>About Us</h1>
              <p style={{ color: "#fff" }}>
                Get the latest news, updates, and tips
              </p>
            </div>
            {/* <div>
              <div className="anchor-btn">
                <a href="/home">Home</a>
                <MdOutlineArrowForwardIos className="arrow-icon" size={16} />
                <a href="/about">About Us</a>
              </div>
            </div> */}
          </div>
        </div>

        <div className="about-page">
          <h2 className="about-subtitle">OUR COMPANY</h2>
          <h1 className="about-title">About Our Company</h1>
          <div className="about-text">
            In a world where technology bridges gaps and brings people closer,
            we stand at the forefront. We specialize in enhancing business
            health through robust IT support and innovative SaaS applications.
            Solutions are designed to connect people, streamline processes, and
            empower companies to reach their full potential. With personalized
            support and cutting-edge technology, we ensure your business runs
            smoothly and efficiently. Connecting People, Empowering Success.
          </div>
          <div className="about-content">
            <div>
              <img
                src="https://images.ctfassets.net/pdf29us7flmy/4C1SDkpwtqI2xy9GWabT42/af92a6a302d118c09f2686c22af3d9a8/shutterstock_796329814-red__1_.jpg?w=720&q=100&fm=jpg"
                alt="Our Services"
              />
            </div>
            <div className="about-me">
              <h1 className="" style={{ color: "blue", fontWeight: "bold" }}>
                Who we are ?
              </h1>
              <p style={{ fontSize: "1rem" }}>
                Connect, grow and succeed with us! <br /> Empower individual to
                achieve their goals expand their network and find new
                opportunity ""
              </p>
              <p>
                We are a dynamic community empowering individuals to achieve
                their goals, expand their network, and discover new
                opportunities. Through connection, growth, and support, we
                unlock potential, foster meaningful relationships, and create a
                ripple effect of success. Join us and transform your life!
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>

        <div className="team-page">
          {/* <h2 className="com-title">OUR COMPANY</h2> */}
          <h1 className="com-subtitle">Meet Our Team</h1>
          <div className="com-text">
            Even the best technology needs the best people with the right spirit
            behind it. Right across the world, we have a team of dreamers and
            doers just like you, ready to help bring your ideas to life. Here
            are the folks leading the charge.
          </div>
          <div className="com-team">
            {teamMembers.map((member, index) => (
              <OurTeam key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
