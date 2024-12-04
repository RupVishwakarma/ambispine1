
import React, { useState } from "react";
import CareerHero from "./CareerHero";
import CareerBenefits from "./CareerBenefits";
import CareerPositions from "./CareerPositions";
import CareerForm from "./CareerForm";
import "./Career.css";
import JobDescriptions from "./JobDescriptions";
import CareerWithUs from "./CareerWithUs"

export default function Career() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showJobDescription, setShowJobDescription] = useState(false); // New state
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleApply = (position) => {
    setSelectedPosition(position);
    setShowJobDescription(true); 
  };

  const handleApplyFromDescription = () => {
    setShowJobDescription(false);
    setShowApplicationForm(true);
  };

  return (
    <div className="career-container">
      <CareerHero />
      <CareerBenefits />
      {!showJobDescription && <CareerPositions onApply={handleApply} />}

      {showJobDescription && (
        <JobDescriptions
          job={selectedPosition}
          onApply={handleApplyFromDescription}
          onBack={() => setShowJobDescription(false)}
        />
      )}

      {showApplicationForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CareerForm
              position={selectedPosition}
              onClose={() => setShowApplicationForm(false)}
            />
          </div>
        </div>
      )}

      <div>
        <CareerWithUs/>
      </div>
    </div>
  );
}
