import { useState } from "react";
import "./interst.css";

export default function InterestedTopicsModal({ onClose }) {
    const [selectedTags, setSelectedTags] = useState([
        "IT", "Web Development", "Mobile Development", "Programming Languages",
        "Leadership", "Career Development", "Digital Marketing"
    ]);

    const suggestedTags = ["Design", "Marketing", "Sales", "Finance", "Dance", "Business"];
    const maxTags = 20;

    // Function to add a tag
    const addTag = (tag) => {
        if (!selectedTags.includes(tag) && selectedTags.length < maxTags) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    // Function to remove a tag
    const removeTag = (tag) => {
        setSelectedTags(selectedTags.filter(t => t !== tag));
    };

    return (
        <div className="interested-modal-overlay">
            <div className="interested-modal-container">
                <div className="interested-modal-header">
                    <h2>Interested Topic</h2>
                    <button className="interested-close-btn" onClick={onClose}>✕</button>
                </div>
                <div className="interested-tag-container">
                    {selectedTags.map(tag => (
                        <span className="interested-tag" key={tag}>
                            {tag} <button onClick={() => removeTag(tag)}>✕</button>
                        </span>
                    ))}
                </div>
                <div className="interested-suggested-tags">
                    {suggestedTags.map(tag => (
                        <button key={tag} onClick={() => addTag(tag)} className="interested-suggested-btn">
                            + {tag}
                        </button>
                    ))}
                </div>
                <button className="interested-save-btn">SAVE</button>
            </div>
        </div>
    );
}
