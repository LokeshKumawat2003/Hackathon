import { useState } from "react";
import { LuPencil } from "react-icons/lu";


export default function SocialMediaLinks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [links, setLinks] = useState([
        { name: "LinkedIn", url: "https://www.linkedin.com/in/raushan", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s" },
        { name: "X", url: "https://x.com/raushan07", icon: "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" },
        { name: "Google", url: "https://google.com", icon: "https://png.pngtree.com/png-vector/20211027/ourmid/pngtree-letter-g-logo-png-image_4000891.png" },
        { name: "Instagram", url: "https://instagram.com/raushan", icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" }
    ]);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleSave = (updatedLinks) => {
        setLinks(updatedLinks);
        setIsModalOpen(false);
    };

    return (
        <section className="info-section">
            <div className="section-header">
                <h2>Social Media</h2>
                <button className="edit-button" onClick={handleEditClick}>Edit <LuPencil /> </button>
            </div>
            <div className="social-links">
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={link.icon} alt={link.name} />
                    </a>
                ))}
            </div>
            {isModalOpen && <SocialMediaModal links={links} onSave={handleSave} onClose={() => setIsModalOpen(false)} />}
        </section>
    );
}

function SocialMediaModal({ links, onSave, onClose }) {
    const [editedLinks, setEditedLinks] = useState([...links]);

    const handleChange = (index, field, value) => {
        const newLinks = [...editedLinks];
        newLinks[index][field] = value;
        setEditedLinks(newLinks);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>Edit Social Media Links</h2>
                {editedLinks.map((link, index) => (
                    <div key={index} className="input-group">
                        <label>{link.name}</label>
                        <input
                            type="text"
                            value={link.url}
                            onChange={(e) => handleChange(index, "url", e.target.value)}
                        />
                    </div>
                ))}
                <button className="save-btn" onClick={() => onSave(editedLinks)}>Save</button>
            </div>
        </div>
    );
}
