import React, { useState } from "react";
// import "./presinfo.css";

const EditPersonalInfo = () => {
    const [formData, setFormData] = useState({
        firstName: "Rohan",
        lastName: "Roshan",
        email: "rohan.roshan@gmail.com",
        gender: "Male",
        age: "36",
        address1: "No 10, Office no 1",
        address2: "Koramangala",
        city: "Bengaluru",
        state: "Karnataka",
        pincode: "560095",
        country: "India",
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        onClose(); // Close modal after saving
    };

    if (!isOpen) return null;

    return (
        <div className="modal-container">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2 className="modal-title">Edit Personal Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Age</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Address Line 1</label>
                        <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Address Line 2</label>
                        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>State</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Pincode</label>
                        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Country</label>
                        <select name="country" value={formData.country} onChange={handleChange}>
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Canada</option>
                        </select>
                    </div>
                    <button className="button-save" type="submit">SAVE</button>
                </form>
            </div>
        </div>
    );
};

export default EditPersonalInfo;
