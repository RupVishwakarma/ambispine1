import React, { useContext, useState } from "react";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { MyContext } from '../../App'; 
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagramSquare,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { PiTrademarkLight } from "react-icons/pi";
import "./Footer.css";
import logo from "../../Images/AmbiSpine_logo.png";
import { RiAdminLine } from "react-icons/ri";
import AdminModal from "../Admin/AdminModal";

const SocialIcon = ({ href, Icon, className }) => (
  <a
    href={href}
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className={`icon ${className}`} />
  </a>
);

const FooterSection = ({ title, links }) => (
  <div className="footer-section">
    <h6 className="footer-title">{title}</h6>
    {links.map((link, index) => (
      <p key={index}>
        <a href={link.href} className="footer-link">
          {link.text}
        </a>
      </p>
    ))}
  </div>
);

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const context = useContext(MyContext);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={logo} alt="AmbiSpine Logo" className="footer-logo" />
          <PiTrademarkLight className="trademark-icon" />
          <div className="social-icons">
            <SocialIcon
              href="https://www.linkedin.com/company/ambispine-technologies/"
              Icon={FaLinkedinIn}
              className="linkedin"
            />
            <SocialIcon
              href="https://www.youtube.com/@AmbiSpineTechnologies/"
              Icon={FaYoutube}
              className="youtube"
            />
            <SocialIcon
              href="https://www.instagram.com/"
              Icon={FaInstagramSquare}
              className="instagram"
            />
            {/* Uncomment when available */}
            {/* <SocialIcon
              href="https://www.x.com/"
              Icon={FaTwitter}
              className="twitter"
            /> */}
            <SocialIcon
              href="https://www.facebook.com/"
              Icon={FaFacebookF}
              className="facebook"
            />
          </div>
        </div>

        <FooterSection
          title="Our Company"
          links={[
            { href: "/aboutus", text: "About Us" },
            { href: "/career", text: "Career" },
            { href: "#", text: "Newsroom" },
          ]}
        />

        <FooterSection
          title="Support"
          links={[
            { href: "/termsandprivacy", text: "Privacy Statement" },
            { href: "/termsandprivacy", text: "Terms and Conditions" },
            { href: "#", text: "Cookie Policy" },
          ]}
        />

        <div className="footer-section">
          <h6 className="footer-title">Contact</h6>
          <p>
            <IoLocationSharp className="contact-icon" /> Rewa(M.P.), India
          </p>
          <p style={{ width: "320px" }}>
            <MdOutlineMailOutline className="contact-icon" />ambispinetechnologies@gmail.com
          </p>
          <p>
            <IoCallSharp className="contact-icon" /> +91 9685221056
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          All Rights Reserved <span onClick={handleOpenModal} style={{ cursor: 'pointer' }}>&copy;</span> 2024 Copyright: Taken by AmbiSpine
          Technologies Private Limited
        </p>
        {/* <RiAdminLine onClick={handleOpenModal} style={{ cursor: 'pointer' }} /> */}
        <AdminModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </footer>
  );
}
