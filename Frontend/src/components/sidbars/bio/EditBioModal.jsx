import './bio.css';
import { useState } from "react";

const EditBioModal = ({ initialBio, onClose, onSave }) => {
    const [bio, setBio] = useState(initialBio || "");

    const handleSave = () => {
        onSave(bio); // Call onSave with the updated bio
        onClose();
    };

    return (
        <div className="edit-bio-modal-overlay">
            <div className="edit-bio-modal-content">
                <div className="edit-bio-header">
                    <h2>Edit Bio</h2>
                    <h1 className="edit-bio-close" onClick={onClose}>X</h1>
                </div>
                <textarea
                    className="edit-bio-textarea"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows="5"
                />
                <div className="edit-bio-button-group">
                    <button className="edit-bio-save-btn" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditBioModal;
