import React, { useEffect, useState } from "react";
import "./JobDescriptions.css";
import CareerForm from "./CareerForm";
import JobDescriptionImg from "../../Images/JobDescriptoin.jpg";
import { FaUserLarge, FaArrowsRotate, FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BsFillLayersFill } from "react-icons/bs";
import { fetchCareerById } from "../../redux/admin/slice/careerAdminSlice";
import { useDispatch, useSelector } from "react-redux";

export default function JobDescriptions({ job, onBack }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const { selectedCareer, loading, error } = useSelector((state) => state.careerAdmin);

  useEffect(() => {
    if (job) {
      dispatch(fetchCareerById(job)); 
    }
  }, [dispatch, job]);

  const handleApplyNow = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p>Error fetching job details: {error}</p>;

  const {
    jobTitle = "Job Title",
    jobDescription = "Job description goes here.",
    requirements = {},
    openings = "N/A",
    salaryRange = "N/A",
    location = "Location not specified",
    responsibilities = [],
  } = selectedCareer?.data || {};

  return (
    <div className="job_description">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="w-100">
            <h4 className="fw-semibold fs-1 text-dark">{jobTitle}</h4>
            <p>{jobDescription}</p>

            <div>
              <div className="d-flex justify-content-between">
                <div className="title-job">
                  <p>
                    <IoTimeSharp className="job_descript_top_icon" /> Experience
                  </p>
                  <span className="ms-4 ps-2">{requirements.experience || "Not specified"}</span>
                </div>
                <div>
                  <p>
                    <FaUserLarge className="job_descript_top_icon" /> Openings
                  </p>
                  <span className="ms-4 ps-2">{openings}</span>
                </div>
                <div className="me-4">
                  <p>
                    <RiMoneyRupeeCircleFill className="job_descript_top_icon" /> Salary
                  </p>
                  <span className="ms-4 ps-2">{salaryRange}</span>
                </div>
              </div>

              <div>
                <p>
                  <FaArrowsRotate className="job_descript_top_icon" /> Interview Process
                </p>
                <div className="d-flex ms-4 ps-3 " style={{fontSize:"0.8rem"}}>
                  {selectedCareer?.data?.interviewProcess || "Process details not available"}
                </div>
              </div>

              <p>
                <FaLocationDot className="job_descript_top_icon" /> Job Location
              </p>
              <span className="ms-4 ps-2">{location}</span>

              <p>
                <BsFillLayersFill className="job_descript_top_icon" /> Education
              </p>
              <span className="ms-4 ps-2">{requirements.education || "Not specified"}</span>
            </div>
            <br />
            <div className="">
              <h3 style={{fontSize:"1.1rem",fontWeight:"bold"}}>Responsibilities</h3>
              <ul>
                {responsibilities.length > 0 ? (
                  responsibilities.map((resp, index) => <li key={index} style={{fontSize:"0.8rem",}}>{resp}</li>)
                ) : (
                  <li>No specific responsibilities listed</li>
                )}
              </ul>
            </div>

            <div className="ms-lg-4 mt-lg-4 mb-lg-2">
              <button
                className="border-0 rounded-1 mt-2 py-2 w-50 text-white fw-semibold"
                style={{ background: "rgb(24,116,44)" }}
                onClick={handleApplyNow}
              >
                Apply Now
              </button>
              <button onClick={onBack} className="back-button">
                Back to Positions
              </button>
            </div>

            {isFormOpen && <CareerForm position={job} onClose={handleCloseForm} />}
          </div>
        </div>

        <div className="col-12 col-lg-6 my-auto">
          <div style={{ height: "400px", marginTop: "-100px" }}>
            <img src={JobDescriptionImg} alt="Job Description" className="job_description_img" />
          </div>
        </div>
      </div>
    </div>
  );
}
