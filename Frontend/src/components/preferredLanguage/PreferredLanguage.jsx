import { useState } from "react";
// import './leang.css'
const languages = ["English", "Spanish", "Arabic", "Tamil", "Hindi"];

const PreferredLanguageModal = ({ selectedLanguages, onClose, onSave }) => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(selectedLanguages || []);

    const handleToggle = (language) => {
        setSelected((prev) =>
            prev.includes(language)
                ? prev.filter((item) => item !== language)
                : [...prev, language]
        );
    };

    const filteredLanguages = languages.filter((lang) =>
        lang.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Preferred Language</h2>
                    <span className="close-btn" onClick={onClose}>✖</span>
                </div>
                <input
                    type="text"
                    placeholder="🔍 Search language"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
                <ul className="language-list">
                    {filteredLanguages.map((language) => (
                        <li key={language} className="language-item">
                            <input
                                type="checkbox"
                                checked={selected.includes(language)}
                                onChange={() => handleToggle(language)}
                            />
                            <label>{language}</label>
                        </li>
                    ))}
                </ul>
                <button className="save-btn" onClick={() => onSave(selected)}>Save</button>
            </div>
        </div>
    );
};

export default PreferredLanguageModal;
