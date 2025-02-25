import { LuPencil } from "react-icons/lu";
import InfoSection from './InfoSection';
import SocialMediaLinks from './SocialMediaLinks';

export default function ProfileContent() {
    
    return (
        <div className="main-content">
            <h1>Profile</h1>

            <InfoSection title="Personal Information" editable>
                <div className="info-grid">
                    <div className="info-item"><span className="label">First Name</span><span className="value">Rakesh</span></div>
                    <div className="info-item"><span className="label">Last Name</span><span className="value">Raushan</span></div>
                    <div className="info-item"><span className="label">Age</span><span className="value">20</span></div>
                    <div className="info-item"><span className="label">Gender</span><span className="value">Male</span></div>
                    <div className="info-item full-width">
                        <span className="label">Address</span>
                        <span className="value">2nd Floor, 99, 5th Cross Rd, 4th Block, Koramangala, Bengaluru, Karnataka 560095</span>
                    </div>
                </div>
            </InfoSection>

            <InfoSection title="Contact Information">
                <div className="info-grid">
                    <div className="info-item"><span className="label">Email</span><span className="value">RakeshRaushan@Email.Com</span></div>
                    <div className="info-item ct-border"><span className="label">Phone Number</span><span className="value">+91 9922004466</span></div>
                </div>
            </InfoSection>

            <InfoSection title="Bio" editable>
                <p className="bio-text">
                    I'm a recent graduate with a passion for data. I'm eager to learn data analysis techniques and build a strong foundation in this exciting field.
                </p>
            </InfoSection>

            <InfoSection title="Preferred Language" editable>
                <div className="language-list">
                    <span className="language-item">English</span>
                    <span className="language-item">Hindi</span>
                </div>
            </InfoSection>

            <InfoSection title="Interested Topic" editable>
                <div className="topics-list">
                    <span className="topic-item">Web Development</span>
                    <span className="topic-item">Mobile Development</span>
                    <span className="topic-item">Programming Languages</span>
                    <span className="topic-item">Leadership</span>
                    <span className="topic-item">Career Development</span>
                    <span className="topic-item">Digital Marketing</span>
                </div>
            </InfoSection>

            <SocialMediaLinks/>
        </div>
    );
}
