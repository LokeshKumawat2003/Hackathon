import { useState } from "react";
import './EducationModal'
const EducationModal = ({ onClose, onSave }) => {
    const [education, setEducation] = useState({
        degree: "",
        college: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
    });

    const degrees = ["Bachelor's", "Master's", "PhD", "Diploma", "Other"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add Education</h2>
                    <span className="close-btn" onClick={onClose}>✖</span>
                </div>

                {/* Degree Dropdown */}
                <select
                    name="degree"
                    value={education.degree}
                    onChange={handleChange}
                    className="input-field"
                >
                    <option value="">Degree</option>
                    {degrees.map((degree) => (
                        <option key={degree} value={degree}>{degree}</option>
                    ))}
                </select>

                {/* College Input */}
                <input
                    type="text"
                    name="college"
                    placeholder="College"
                    value={education.college}
                    onChange={handleChange}
                    className="input-field"
                />

                {/* Field of Study Input */}
                <input
                    type="text"
                    name="fieldOfStudy"
                    placeholder="Field of study"
                    value={education.fieldOfStudy}
                    onChange={handleChange}
                    className="input-field"
                />

                {/* Start Date */}
                <input
                    type="date"
                    name="startDate"
                    value={education.startDate}
                    onChange={handleChange}
                    className="input-field"
                />

                {/* End Date */}
                <input
                    type="date"
                    name="endDate"
                    value={education.endDate}
                    onChange={handleChange}
                    className="input-field"
                />

                {/* Add Button */}
                <button className="add-btn" onClick={() => onSave(education)}>ADD</button>
            </div>
        </div>
    );
};

export default EducationModal;
