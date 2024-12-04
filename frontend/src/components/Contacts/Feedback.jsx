import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createFeedback } from "../../redux/slices/feedbackSlice";
import { X } from "lucide-react";
import "./Contact.css";

const Feedback = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    prodSer: "",
    improve: "",
    recommend: false,
    additional: "",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5";
    }
    if (!formData.prodSer) newErrors.prodSer = "This field is required";
    if (!formData.improve) newErrors.improve = "This field is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleRatingChange = (newRating) => {
    setFormData((prev) => ({ ...prev, rating: newRating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(createFeedback(formData))
        .then(() => {
          toast.success("Feedback submitted successfully!");
          onClose();
        })
        .catch(() => {
          toast.error("Failed to submit feedback. Please try again.");
        });
    }
  };

  return (
    <div className="feedback-modal">
      <button onClick={onClose} className="close-button">
        <X size={24} />
      </button>
      <h2 className="feedback-title">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className={`form-group ${focusedField === "name" || formData.name ? "focused" : ""}`}>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            className={errors.name ? "error" : ""}
          />
          <label htmlFor="name">Name</label>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className={`form-group ${focusedField === "email" || formData.email ? "focused" : ""}`}>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            className={errors.email ? "error" : ""}
          />
          <label htmlFor="email">Email</label>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Rating</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                className={formData.rating >= star ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
          </div>
          {errors.rating && <p className="error-message">{errors.rating}</p>}
        </div>

        <div className={`form-group ${focusedField === "prodSer" || formData.prodSer ? "focused" : ""}`}>
          <input
            type="text"
            id="prodSer"
            value={formData.prodSer}
            onChange={handleChange}
            onFocus={() => handleFocus("prodSer")}
            onBlur={handleBlur}
            className={errors.prodSer ? "error" : ""}
          />
          <label htmlFor="prodSer">What did you like most about our product/service?</label>
          {errors.prodSer && <p className="error-message">{errors.prodSer}</p>}
        </div>

        <div className={`form-group ${focusedField === "improve" || formData.improve ? "focused" : ""}`}>
          <textarea
            id="improve"
            value={formData.improve}
            onChange={handleChange}
            onFocus={() => handleFocus("improve")}
            onBlur={handleBlur}
            rows="3"
            className={errors.improve ? "error" : ""}
          ></textarea>
          <label htmlFor="improve">What can we improve?</label>
          {errors.improve && <p className="error-message">{errors.improve}</p>}
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="recommend"
            checked={formData.recommend}
            onChange={handleChange}
          />
          <label htmlFor="recommend">Would you recommend us to others?</label>
        </div>

        <div className={`form-group ${focusedField === "additional" || formData.additional ? "focused" : ""}`}>
          <textarea
            id="additional"
            value={formData.additional}
            onChange={handleChange}
            onFocus={() => handleFocus("additional")}
            onBlur={handleBlur}
            rows="4"
          ></textarea>
          <label htmlFor="additional">Additional Comments</label>
        </div>

        <button type="submit" className="submit-button" disabled={Object.keys(errors).length > 0}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
