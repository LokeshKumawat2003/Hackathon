import '../../../pages/home.css';
import { LuPencil } from "react-icons/lu";
import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './ProfileContent';

export default function ProfilePage() {
    return (
        <div className="home-container">
            <div className="profile-container">
                <ProfileSidebar />
                <ProfileContent />
            </div>
        </div>
    );
}
