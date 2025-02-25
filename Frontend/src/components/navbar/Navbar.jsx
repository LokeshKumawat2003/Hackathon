import "./nav.css";
import { TbCategory } from "react-icons/tb";

import { FaHome, FaBars, FaComments, FaUsers, FaBell, FaSearch  } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">SimpliTrain</div>

            <div className="search-container">
                <button className="search-button" aria-label="Search">
                    <FaSearch size={16} />
                </button>
                <input
                    type="text"
                    placeholder="What would you like to learn?"
                    className="search-input"
                />
            </div>

            <div className="nav-icons">
                {[
                    { label: "Home", icon: <FaHome size={20} /> },
                    { label: "Categories", icon: <TbCategory  size={20} /> },
                    { label: "Chat", icon: <FaComments size={20} /> },
                    { label: "Forum", icon: <FaUsers size={20} /> },
                    { label: "Notifications", icon: <FaBell size={20} /> },
                ].map((item, index) => (
                    <button key={index} className="nav-icon" aria-label={item.label} title={item.label}>
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}

                <button className="nav-icon profile" aria-label="Profile">
                    <div className="profile-image">
                        <img
                            src="https://localo.com/assets/img/definitions/what-is-google-translate.webp"
                            alt="User Profile"
                        />
                    </div>
                    <FaBars size={20} />
                </button>
            </div>
        </nav>
    );
}
