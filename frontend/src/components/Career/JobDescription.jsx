
import React, { useState } from "react";
import "./JobDescription.css";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineWallet } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { PiToolboxFill } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import CareerForm from "./CareerForm";
import AmbiSpineLogo from "../../Images/AmbiSpine_logo.png";

export default function JobDescription({ job, onBack }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleApplyNow = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="job_description">
      <div className="w-75">
        <div className="job_title_container">
          <img
            src={job.companyLogo || AmbiSpineLogo}
            width="90"
            height="90"
            className="img-fluid company_logo"
            alt="Company Logo"
          />
          <div>
            <h4 className="fw-semibold fs-1 text-dark">{job.title}</h4>
            <h6 className="text-secondary fw-bolder fs-5 my-2">
              {job.companyName || "Company Name"}
            </h6>
            <p>
              <span>
                <a
                  href={job.companyWebsite || "#"}
                  className="text-secondary fw-semibold fs-6 text-decoration-none"
                >
                  {job.companyWebsite || "Company Website"}
                </a>
              </span>{" "}
              <span className="text-secondary fw-semibold">
                <RxDotFilled /> Posted {job.postedDate || "Date: 18/10/2024"}
              </span>
            </p>
          </div>
          <hr className="text-dark fw-bold" />
        </div>
        <div className="fw-semibold fs-6">
          <h3 className="fw-semibold text-dark fs-3 ">Job Description</h3>
          <p>{job.description || "Job description goes here."}</p>
          {/* Add more job details here */}
        </div>
      </div>
      <div className="w-25" style={{ marginTop: "0px" }}>
        <div
          className="card"
          style={{
            border: "none",
            background: "rgba(245,245,247,255)",
            width: "400px",
          }}
        >
          <div className="card-body">
            <p>
              <AiOutlineWallet className="job_descript_top_icon" />
              <span className="fw-semibold text-secondary-emphasis ms-3">
                {job.salary || "Salary not disclosed"}
              </span>
            </p>
            <div className="d-flex">
              <div>
                <IoLocationOutline className="job_descript_top_icon" />
              </div>
              <div className="mt-2 ms-3">
                <p className="fw-semibold text-secondary-emphasis ms-1">
                  {job.locationType || "On-site"}
                </p>
                <p
                  className="text-body-tertiary"
                  style={{ marginTop: "-1rem" }}
                >
                  <span>
                    <RxDotFilled />
                    {job.location}
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <PiToolboxFill className="job_descript_top_icon" />
              </div>
              <div className="mt-2 ms-3">
                <p className="fw-semibold text-secondary-emphasis ms-1">
                  {job.type}
                </p>
                <p
                  className="text-body-tertiary"
                  style={{ marginTop: "-1rem" }}
                >
                  {job.experience}
                </p>
              </div>
            </div>

            <button
              className="border-0 rounded-1 mt-2 py-2 w-100 text-white fw-semibold"
              style={{ background: "rgb(24,116,44)" }}
              onClick={handleApplyNow}
            >
              Apply Now
            </button>

            <p className="mt-2">
              <FiInfo className="text-primary fs-5" />{" "}
              <span className="text-body-tertiary ms-3">
                Last Date to Apply: {job.lastDateToApply || "Not specified"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <button onClick={onBack} className="back-button">
        Back to Positions
      </button>
      {isFormOpen && <CareerForm position={job} onClose={handleCloseForm} />}
    </div>
  );
}
