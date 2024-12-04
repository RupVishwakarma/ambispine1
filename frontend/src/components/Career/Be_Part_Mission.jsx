
import React, { useState, useRef, useEffect } from "react";
import "./Career.css";
import { PiToolboxLight } from "react-icons/pi";
import { LuIndianRupee } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { PiCertificateLight } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import CareerForm from "./CareerForm";

export default function Be_Part_Mission() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const hiringButton = [
    "View all",
    "Development",
    "Marketing",
    "Customer",
    "Management",
    "Finance",
  ];

  const jobButton = [
    { name: "Full time", icon: IoMdTime },
    { name: "100% remote", icon: IoMdTime },
  ];

  // Handle click outside modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalClose();
      }
    }

    // Add event listener if modal is open
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const handleBepartButton = (name) => {
    console.log(`Button clicked: ${name}`);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="career_hiring text-start">
      <h3 className="ms-4 mb-3">Be part of our mission</h3>
      <div className="d-flex justify-content-start align-items-center">
        {hiringButton.map((name) => (
          <CareerHireButton
            key={name}
            name={name}
            onClick={handleBepartButton}
          />
        ))}
      </div>

      <div className="job_Section">
        <div className="Job_Details">
          <h5 className="fw-semibold fs-4">Product Designer</h5>
          <h6 className="fw-semibold">
            We're shaping the future of freight and logistics...
          </h6>
          <div className="job_discus" style={{ width: "40%" }}>
            <p className="ps-2">
              <PiToolboxLight className="job_discus_icon" />{" "}
              <span>0-5 Yrs</span>
            </p>
            <p className="">
              <LuIndianRupee className="job_discus_icon" />{" "}
              <span>Not Disclosed</span>
            </p>
            <p className="">
              <IoLocationOutline className="job_discus_icon" />{" "}
              <span>Noida</span>
            </p>
          </div>
          <p className="px-2 pt-1">
            <PiCertificateLight className="job_discus_icon" />{" "}
            <span>Object-Oriented Programming...</span>
          </p>
          <div className="d-flex justify-content-between align-item-center">
            <div>
              {jobButton.map(({ name, icon: Icon }, index) => (
                <CareerHireButton
                  key={index}
                  name={name}
                  icon={Icon}
                  onClick={handleBepartButton}
                />
              ))}
            </div>

            <div>
              <button
                className="career_hiring_button m-2"
                onClick={handleModalOpen}
              >
                Apply <FiArrowUpRight />
              </button>
            </div>
          </div>

          <hr className="border border-2 border-black mx-1" />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" ref={modalRef}>
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose}
                ></button>
              </div>
              <div className="modal-body">
                <CareerForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CareerHireButton({ name, onClick, icon: Icon }) {
  return (
    <button onClick={() => onClick(name)} className="career_hiring_button m-2">
      {Icon && (
        <span>
          <Icon />
        </span>
      )}{" "}
      {name}
    </button>
  );
}
