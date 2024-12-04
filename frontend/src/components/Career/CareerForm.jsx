import React, { useState, useEffect, useRef } from "react";
import "./CareerForm.css";
import { toast } from 'react-toastify';
import {createJobApplication} from "../../redux/slices/jobSlice"
import { useDispatch } from "react-redux";
const CareerForm = ({ position, onClose }) => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    resume: null,
    skills: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.education) newErrors.education = "Education is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (formData.skills.length === 0)
      newErrors.skills = "At least one skill is required";
    if (!formData.message) newErrors.message = "Cover message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    switch (stepNumber) {
      case 1:
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Email is invalid";
        if (!formData.phone) newErrors.phone = "Phone is required";
        break;
      case 2:
        if (!formData.experience)
          newErrors.experience = "Experience is required";
        if (!formData.education) newErrors.education = "Education is required";
        if (!formData.resume) newErrors.resume = "Resume is required";
        break;
      case 3:
        if (formData.skills.length === 0)
          newErrors.skills = "At least one skill is required";
        if (!formData.message) newErrors.message = "Cover message is required";
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const jobData = new FormData();
      jobData.append('name', formData.name);
      jobData.append('email', formData.email);
      jobData.append('phone', formData.phone);
      jobData.append('experience', formData.experience);
      jobData.append('education', formData.education);
      jobData.append('resume', formData.resume);
      jobData.append('skills', JSON.stringify(formData.skills));
      jobData.append('message', formData.message);
  
      dispatch(createJobApplication(jobData))
        .then((response) => {
          toast.success('Job application submitted successfully!');
          onClose();
        })
        .catch((error) => {
          toast.error('Failed to submit job application. Please try again.');
        });
    }
  };
  
  

  const renderFormGroup = (name, label, type = "text", required = true) => (
    <div className="form-group">
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
        placeholder=" "
      />
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      {errors[name] && <div className="error-message">{errors[name]}</div>}
    </div>
  );

  const renderPersonalDetails = () => (
    <div className="form-step">
      <h3>Personal Details</h3>
      {renderFormGroup("name", "Full Name")}
      {renderFormGroup("email", "Email", "email")}
      {renderFormGroup("phone", "Phone", "tel")}
    </div>
  );

  const renderProfessionalDetails = () => (
    <div className="form-step">
      <h3>Professional Details</h3>
      {renderFormGroup("experience", "Experience (years)", "number")}
      <div className="form-group">
        <select
          id="education"
          value={formData.education}
          onChange={(e) =>
            setFormData({ ...formData, education: e.target.value })
          }
        >
          <option value="">Select Education</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>
        <label htmlFor="education">Education</label>
        {errors.education && (
          <div className="error-message">{errors.education}</div>
        )}
      </div>
      <div className="form-group">
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setFormData({ ...formData, resume: e.target.files[0] })
          }
        />
        <label htmlFor="resume">Resume</label>
        {errors.resume && <div className="error-message">{errors.resume}</div>}
      </div>
    </div>
  );

  const renderAdditionalDetails = () => (
    <div className="form-step">
      <h3>Additional Details</h3>
      {renderFormGroup("skills", "Skills (comma-separated)")}
      <div className="form-group">
        <textarea
          id="message"
          placeholder=" "
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <label htmlFor="message">Cover Message</label>
        {errors.message && (
          <div className="error-message">{errors.message}</div>
        )}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderPersonalDetails();
      case 2:
        return renderProfessionalDetails();
      case 3:
        return renderAdditionalDetails();
      default:
        return null;
    }
  };

  // const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const nextStep = () => {
    if (validateStep(step)) {
      setCompletedSteps([...completedSteps, step]);
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderStepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3].map((num) => (
        <div
          key={num}
          className={`step ${step >= num ? "active" : ""} ${
            completedSteps.includes(num) ? "completed" : ""
          }`}
        >
          <div className="step-number">
            {completedSteps.includes(num) ? "✓" : num}
          </div>
          <div className="step-label">
            {num === 1 ? "Personal" : num === 2 ? "Professional" : "Additional"}
          </div>
          {num < 3 && <div className="step-line" />}
        </div>
      ))}
    </div>
  );
  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <h2>Apply for {position?.title || "Position"}</h2>
        </div>
        {renderStepIndicator()}
        <form onSubmit={handleSubmit}>
          {renderStep()}
          <div className="form-actions">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button type="button" onClick={nextStep} className="btn-primary">
                Next
              </button>
            ) : (
              <button type="submit" className="btn-primary">
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
