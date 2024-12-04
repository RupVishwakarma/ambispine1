import React from 'react';
import ReactStars from "react-rating-stars-component";
import { BiLogoInstagram } from "react-icons/bi";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiMapPinLight } from "react-icons/pi";
import TeamMemberImg1 from "../../Images/admin.png";
const OurTeam = ({ name, role, contactInfo, rating, imgSrc, socialMedia }) => {
    const imgUrl = imgSrc || TeamMemberImg1;
    return (
        <div className="team-card-scale">
            <img src={imgUrl} alt={`${name}'s profile`} className="imgCard-round" />
            <h3 className="team-name">{name}</h3>
            <p style={{ fontWeight: "bold", fontSize: "0.8rem" }}>{role}</p>
            <div className="rating">
                <ReactStars count={5} size={24} activeColor="#ffd700" value={rating} edit={false} />
                <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>({rating})</span>
            </div>
            {contactInfo?.location && (
                <p style={{ fontWeight: "normal", fontSize: "0.8rem" }}>
                    <PiMapPinLight className="icon" /> {contactInfo.location}
                </p>
            )}
            <div className="social-media">
                {socialMedia.instagram && (
                    <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <BiLogoInstagram size={23} className="m-1 text-dark" />
                    </a>
                )}
                {socialMedia.facebook && (
                    <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <LiaFacebook size={23} className="m-1 text-dark" />
                    </a>
                )}
                {socialMedia.twitter && (
                    <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <TiSocialTwitterCircular size={23} className="m-1 text-dark" />
                    </a>
                )}
                {socialMedia.linkedin && (
                    <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <TiSocialLinkedinCircular size={23} className="m-1 text-dark" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default OurTeam;
