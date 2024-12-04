import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { submitContactMessage } from "../../redux/slices/contactSlice";
import Feedback from "./Feedback";
import contact1 from "../../Images/home.jpg";
import "./Contact.css";
import OurTeam from "../About/OurTeam";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";

export default function Contact() {
  const dispatch = useDispatch();
  const {teamMembers}=useSelector((state)=>state.team)
 
  

  useEffect(()=>{
    dispatch(fetchTeamMembers())
  },[dispatch])
 
  const [formData, setFormData] = useState({
    name: "",
    email_or_phone: "",
    company: "",
    position: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email_or_phone)
      newErrors.email_or_phone = "Email or phone is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(submitContactMessage(formData))
        .then(() => {
          toast.success("Contact submitted successfully!");
          setFormData({
            name: "",
            email_or_phone: "",
            company: "",
            position: "",
            message: "",
          });
        })
        .catch((error) => {
          toast.error(
            error?.response?.data?.message ||
              "Failed to submit contact. Please try again."
          );
        });
    }
  };

  

  return (
    <div className="contact">
      <header className="contact-header">
        <div className="contact-header-content">
          <h1>Connect with us</h1>
          <p style={{ color: "#fff" }}>
            Tap into our solutions to empower clients globally to forge a more
            resilient, secure, and sustainable path forward. Contact us for
            better solutions.
          </p>
          <h2>We'd Love to Hear from You</h2>
        </div>
        <img src={contact1} alt="Contact" className="contact-image" />
      </header>

      <section className="contact-services">
        <h2>Connect For Services And Support</h2>
        <div className="contact-buttons">
          <a href="#contactus1" className="connect">
            Connect With Us
          </a>

          <button
            onClick={() =>
              document.getElementById("feedback-modal").showModal()
            }
          >
            Feedback
          </button>
          <a
            href="mailto:ambispinetechnologies@gmail.com"
            className="mail-button"
          >
            Mail for queries
          </a>

          <a href="#office" className="office1">
            Offices
          </a>
        </div>
      </section>

      
      <section className="contact-form" id="contactus1">
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div
            className={`form-group ${
              focusedField === "name" || formData.name ? "focused" : ""
            }`}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className={errors.name ? "error" : ""}
            />
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div
            className={`form-group ${
              focusedField === "email_or_phone" || formData.email_or_phone
                ? "focused"
                : ""
            }`}
          >
            <input
              type="text"
              id="email_or_phone"
              name="email_or_phone"
              value={formData.email_or_phone}
              onChange={handleChange}
              onFocus={() => handleFocus("email_or_phone")}
              onBlur={handleBlur}
              className={errors.email_or_phone ? "error" : ""}
            />
            <label htmlFor="email_or_phone">
              Email/Phone <span className="required">*</span>
            </label>
            {errors.email_or_phone && (
              <span className="error-message">{errors.email_or_phone}</span>
            )}
          </div>

          <div className="form-row">
            <div
              className={`form-group ${
                focusedField === "company" || formData.company ? "focused" : ""
              }`}
            >
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => handleFocus("company")}
                onBlur={handleBlur}
                className={errors.company ? "error" : ""}
              />
              <label htmlFor="company">
                Company <span className="required">*</span>
              </label>
              {errors.company && (
                <span className="error-message">{errors.company}</span>
              )}
            </div>

            <div
              className={`form-group ${
                focusedField === "position" || formData.position
                  ? "focused"
                  : ""
              }`}
            >
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                onFocus={() => handleFocus("position")}
                onBlur={handleBlur}
                className={errors.position ? "error" : ""}
              />
              <label htmlFor="position">
                Position <span className="required">*</span>
              </label>
              {errors.position && (
                <span className="error-message">{errors.position}</span>
              )}
            </div>
          </div>

          <div
            className={`form-group ${
              focusedField === "message" || formData.message ? "focused" : ""
            }`}
          >
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              className={errors.message ? "error" : ""}
            ></textarea>
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
      <div className="team-page">
        {/* <h2 className="com-title">OUR COMPANY</h2> */}
        <h1 className="com-subtitle">Meet Our Team</h1>
        <div className="com-text">
          Even the best technology needs the best people with the right spirit
          behind it. Right across the world, we have a team of dreamers and
          doers just like you, ready to help bring your ideas to life. Here are
          the folks leading the charge.
        </div>
        <div className="com-team">
          {teamMembers.map((member, index) => (
            <OurTeam key={index} {...member} />
          ))}
        </div>
      </div>

      <section className="contact-map" id="office">
        <div className="map-container">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.613142072125!2d84.68419245096531!3d26.11839063406912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c4a67d9da019%3A0x7ccd6ca41721c6dd!2sBrahmasthan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1728999843445!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.6658513961215!2d81.3268811!3d24.5662067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398459d048188763%3A0x8300d47552e235d5!2sDISTANCE%20EDUCATION%20DEPARTMENT%20APSU!5e0!3m2!1sen!2sin!4v1729351862454!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map-info">
          <h2>Our Offices</h2>
          <p style={{ color: "#fff" }}>District Rewa, Village Bidawa (M.P.)</p>
          <a
            href="https://www.google.com/maps?ll=24.566207,81.326881&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9439778419335378389"
            target="_blank"
            className="map-link"
          >
            Try Google Maps
          </a>
          <a href="mailto:ambispinetechnologies@gmail.com" className="map-link">
            Mail Us For More Queries
          </a>
        </div>
      </section>

      <section className="contact-motto">
        <h2>Embracing innovation today</h2>
        <p>prepares us for the challenges and opportunities of tomorrow!</p>
      </section>

      {/* <dialog id="feedback-modal">
        <Feedback />
      </dialog> */}
      <dialog id="feedback-modal">
        <Feedback
          onClose={() => document.getElementById("feedback-modal").close()}
        />
      </dialog>
    </div>
  );
}

