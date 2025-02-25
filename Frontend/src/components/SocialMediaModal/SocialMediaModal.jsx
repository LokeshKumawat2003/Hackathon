import '../SocialMediaModal/sc.css'
import React, { useState } from "react";
const SocialMediaModal = ({ isOpen, onClose }) => {
  const [links, setLinks] = useState([
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/raushan" },
    { platform: "Instagram", url: "https://instagram.com/raushan" },
    { platform: "Facebook", url: "https://facebook.com/raushan07" },
    { platform: "X", url: "https://x.com/raushan07" },
    { platform: "YouTube", url: "https://youtube.com/@raushan" },
    { platform: "Dribbble", url: "https://dribbble.com/raushan_art" },
  ]);

  const handleChange = (index, value) => {
    setLinks((prevLinks) => {
      const newLinks = [...prevLinks];
      newLinks[index].url = value;
      return newLinks;
    });
  };

  const addNewLink = () => {
    setLinks((prevLinks) => [...prevLinks, { platform: "New Platform", url: "" }]);
  };

  const handleSave = () => {
    console.log("Saved Links:", links);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="social-media-modal-overlay">
      <div className="social-media-modal-container">
        <span className="social-media-close-btn" onClick={onClose}>
          &times;
        </span>
        <div className="social-media-modal-header">Edit Social Media Link</div>
        <div className="social-media-input-group">
          {links.map((link, index) => (
            <div key={index} className="social-media-input-wrapper">
              <label>{link.platform.toUpperCase()}</label>
              <input
                type="text"
                value={link.url}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button className="social-media-add-btn" onClick={addNewLink}>+</button>
        <button className="social-media-save-btn" onClick={handleSave}>SAVE</button>
      </div>
    </div>
  );
};

export default SocialMediaModal;
