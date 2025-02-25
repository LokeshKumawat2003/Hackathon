import { LuPencil } from "react-icons/lu";
import { useState } from "react";

export default function ProfileSidebar() {
    const [activeTab, setActiveTab] = useState("Profile");

    return (
        <div className="sidebar">
            <div className="profile-card">
                <div className="profile-image-container">
                    <img
                        src="https://cdn3.pixelcut.app/7/18/profile_photo_maker_hero_100866f715.jpg"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="edit-icon">
                        <LuPencil size={16} />
                    </div>
                </div>
                <h2>Rakesh Raushan</h2>

                <nav className="profile-nav">
                    {["Profile", "Education", "Work Experience"].map((tab) => (
                        <button
                            key={tab}
                            className={`nav-item ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}
