import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { UserInfo } from "../../sidbars/presinfo/UserInfo";
import EditBioModal from "../../sidbars/bio/EditBioModal";
import PreferredLanguageModal from "../../preferredLanguage/PreferredLanguage";
import InterestedTopicsModal from "../../InterestedTopicsModal/InterestedTopicsModal";

export default function InfoSection({ title, editable, children }) {
    const [isEditing, setIsEditing] = useState(false);
    console.log(title)
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleClose = () => {
        setIsEditing(false);
    };

    return (
        <section className="info-section">
            <div className="section-header">
                <h2>{title}</h2>
                {editable && (
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit <LuPencil />
                    </button>
                )}
            </div>
            {children}

            {isEditing && (
                <>

                    {title === "Bio" && <EditBioModal onClose={handleClose} />}
                    {title === "Personal Information" && <UserInfo onClose={handleClose} />}
                    {title === "Preferred Language" && <PreferredLanguageModal onClose={handleClose} />}
                    {title === "Interested Topic" && <InterestedTopicsModal onClose={handleClose} />}
                </>
            )}
        </section>
    );
}
