import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { CgSoftwareDownload } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { PiBuildingApartment } from "react-icons/pi";
import { RiSuitcaseLine } from "react-icons/ri";
import { MdOutlinePerson4 } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { TbClockMinus } from "react-icons/tb";
import "./team.css";
const TeamDetails = () => {
  const [formData, setFormData] = useState({
    rating: 4,
  });
  const [activeSection, setActiveSection] = useState("about");
  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, rating: newRating });
  };
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  return (
    <section className="team-container">
      <div className="team-wrapper">
        <main className="cover-container">
          <img
            src="https://timelinecovers.pro/facebook-cover/download/life-facebook-cover.jpg"
            alt="cover"
          />
        </main>
        <div className="profile-container">
          <div className="profil-column">
            <div className="avatar">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppnisRTTMYzmuxfszbp8p3MLEYzdfivnSwFd0TTJ3j8p37Q8bGCgfidsAx_Tx2hcU5gE&usqp=CAU"
                alt="avatar"
              />
            </div>
            <div className="profile-details">
              <div className="p-title flex">
                <h1>Jeo Coooper</h1>
                <p style={{ fontSize: "0.8rem", color: "gray" }}>
                  <IoLocationOutline />
                  Chicago, 60601, USA
                </p>
              </div>
              <h6
                style={{
                  fontSize: "0.8rem",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Python Developer
              </h6>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ReactStars
                  count={5}
                  size={20}
                  activeColor="#ffd700"
                  value={4}
                  onChange={handleRatingChange}
                />
                <span style={{ fontSize: "0.8rem", color: "gray" }}>(67)</span>
              </div>
            </div>

            <div className="proffessional-container">
              <button onClick={() => handleSectionChange("about")}>
                <PiBuildingApartment /> About Us
              </button>
              <button onClick={() => handleSectionChange("recruitments")}>
                <RiSuitcaseLine /> Recruitments
              </button>
              <button onClick={() => handleSectionChange("people")}>
                <MdOutlinePerson4 /> People
              </button>
            </div>
          </div>
          <div>
            <button>
              <CgSoftwareDownload /> Download CV
            </button>
          </div>
        </div>
        <hr />

        <div className="resume-container-grid ">
          <div className="proffessional-content">
            {activeSection === "about" && (
              <div className="about-me" id="about-me">
                <h1>About Me</h1>
                <p>
                  Hello there! My name is Jeo Cooper. I am a graphic designer,
                  and I’m very passionate and dedicated to my work. With 20
                  years experience as a professional graphic designer, I have
                  acquired the skills and knowledge necessary to make your
                  project a success.
                </p>
                <div className="skill">
                  <h2 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    Skills
                  </h2>
                  <div className="skill-bar">
                    <p>HTML</p>
                    <div className="progress-bar">
                      <div className="progress html"></div>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <p>CSS</p>
                    <div className="progress-bar">
                      <div className="progress css"></div>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <p>JavaScript</p>
                    <div className="progress-bar">
                      <div className="progress javascript"></div>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <p>Python</p>
                    <div className="progress-bar">
                      <div className="progress python"></div>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <p>Figma</p>
                    <div className="progress-bar">
                      <div className="progress figma"></div>
                    </div>
                  </div>

                  <div className="skill-bar">
                    <p>Photoshop</p>
                    <div className="progress-bar">
                      <div className="progress photoshop"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "recruitments" && (
              <div className="Recruitments" id="Recruitments">
                <h1>Skills</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis illum fuga eveniet. Deleniti asperiores, commodi quae
                  ipsum quas est itaque, ipsa, dolore beatae voluptates nemo
                  blanditiis iste eius officia minus. Id nisi, consequuntur sunt
                  impedit quidem, vitae mollitia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis illum fuga eveniet. Deleniti asperiores, commodi quae
                  ipsum quas est itaque, ipsa, dolore beatae voluptates nemo
                  blanditiis iste eius officia minus. Id nisi, consequuntur sunt
                  impedit quidem, vitae mollitia!
                </p>
              </div>
            )}
            {activeSection === "people" && (
              <div className="People" id="People">
                <h1>Work Experiences</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis illum fuga eveniet. Deleniti asperiores, commodi quae
                  ipsum quas est itaque, ipsa, dolore beatae voluptates nemo
                  blanditiis iste eius officia minus. Id nisi, consequuntur sunt
                  impedit quidem, vitae mollitia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis illum fuga eveniet. Deleniti asperiores, commodi quae
                  ipsum quas est itaque, ipsa, dolore beatae voluptates nemo
                  blanditiis iste eius officia minus. Id nisi, consequuntur sunt
                  impedit quidem, vitae mollitia!
                </p>
              </div>
            )}
          </div>

          <div className="card-review">
            <h2>Overview</h2>
            <hr />
            <div className="">
              <p
                style={{
                  display: "flex",
                  color: "gray",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                <PiSuitcaseSimpleLight /> Experience
              </p>
              <p className="p-2">2 Years</p>
            </div>
            <div>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "gray",
                  fontSize: "1rem",
                }}
              >
                <IoLocationOutline /> Language
              </p>
              <p className="p-2">English</p>
            </div>
            <div>
              <p
                style={{
                  display: "flex",
                  color: "gray",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                <TbClockMinus />
                Education Level
              </p>
              <p className="p-2">Bachelor's Degree</p>
            </div>
            <hr />
            <ul>
              <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: contact@Evara.com</li>
            </ul>
            <div className="btn">
              <button>
                <FaRegEnvelope /> Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="about-contact-container">
          <div className="about-wrapper-1">
            <h1 className="heading">New Things Will Always Update Regularly</h1>
            <form action="" className="subscription-form bg-white">
              <div className="input-group">
                <FaEnvelope size={30} />
                <input
                  type="text"
                  placeholder="Enter Your email.."
                  className="email-input"
                />
                <button className="subscribe-btn">
                  <BsPatchCheck className="icon" /> Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetails;
