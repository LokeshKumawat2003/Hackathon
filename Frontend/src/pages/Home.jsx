
// import './home.css';
// import { LuPencil } from "react-icons/lu";
// export default function ProfilePage() {
//     return (
//         <div className="home-container">
//             <div className="profile-container">
//                 <div className="sidebar">
//                     <div className="profile-card">
//                         <div className="profile-image-container">
//                             <img src="https://cdn3.pixelcut.app/7/18/profile_photo_maker_hero_100866f715.jpg" alt="Profile" className="profile-image" />
//                             <div className="edit-icon"><LuPencil /></div>
//                         </div>
//                         <h2>Rakesh Raushan</h2>
//                         <nav className="profile-nav">
//                             <button className="nav-item active">Profile</button>
//                             <button className="nav-item">Education</button>
//                             <button className="nav-item">Work Experience</button>
//                         </nav>
//                     </div>
//                 </div>

//                 <div className="main-content">
//                     <h1>Profile</h1>
//                     <div className="main-box1">


//                         <section className="info-section">
//                             <div className="section-header">
//                                 <h2>Personal Information</h2>
//                                 <button className="edit-button">Edit <LuPencil /></button>
//                             </div>

//                             <div className="info-grid">
//                                 <div className="info-item">
//                                     <span className="label">First Name</span>
//                                     <span className="value">Rakesh</span>
//                                 </div>
//                                 <div className="info-item">
//                                     <span className="label">Last Name</span>
//                                     <span className="value">Raushan</span>
//                                 </div>
//                                 <div className="info-item">
//                                     <span className="label">Age</span>
//                                     <span className="value">20</span>
//                                 </div>
//                                 <div className="info-item">
//                                     <span className="label">Gender</span>
//                                     <span className="value">Male</span>
//                                 </div>
//                                 <div className="info-item full-width">
//                                     <span className="label">Address</span>
//                                     <span className="value">
//                                         2nd Floor, 99, 5th Cross Rd, 4th Block, Koramangala, Bengaluru, Karnataka 560095
//                                     </span>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>

//                     <section className="info-section  ">
//                         <div className="section-header">
//                             <h2>Contact Information</h2>
//                         </div>
//                         <div className="info-grid  ">
//                             <div className="info-item">
//                                 <span className="label">Email</span>
//                                 <span className="value">RakeshRaushan@Email.Com</span>
//                             </div>
//                             <div className="info-item ct-border">
//                                 <span className="label">Phone Number</span>
//                                 <span className="value">+91 9922004466</span>
//                             </div>
//                         </div>
//                     </section>

//                     <section className="info-section">
//                         <div className="section-header">
//                             <h2>Bio</h2>
//                             <button className="edit-button">Edit <LuPencil /></button>
//                         </div>
//                         <p className="bio-text">
//                             I'm a recent graduate with a passion for data. I'm eager to learn data analysis techniques and build a
//                             strong foundation in this exciting field. I'm excited to explore the courses offered on SimpliLearn and gain
//                             the necessary skills to establish my data analyst career.
//                         </p>
//                     </section>

//                     <section className="info-section">
//                         <div className="section-header he-f-t">
//                             <h2>Preferred Language</h2>
//                             <button className="edit-button">Edit <LuPencil /></button>
//                         </div>
//                         <div className="language-list">
//                             <span className="language-item">English</span>
//                             <span className="language-item">Hindi</span>
//                         </div>
//                     </section>

//                     <section className="info-section">
//                         <div className="section-header he-f-t">
//                             <h2>Interested Topic</h2>
//                             <button className="edit-button">Edit <LuPencil /></button>
//                         </div>
//                         <div className="topics-list">
//                             <span className="topic-item">Web Development</span>
//                             <span className="topic-item">Mobile Development</span>
//                             <span className="topic-item">Programming Languages</span>
//                             <span className="topic-item">Leadership</span>
//                             <span className="topic-item">Career Development</span>
//                             <span className="topic-item">Digital Marketing</span>
//                         </div>
//                     </section>

//                     <section className="info-section">
//                         <div className="section-header">
//                             <h2>Social Media</h2>
//                             <button className="edit-button">Edit <LuPencil /></button>
//                         </div>
//                         <div className="social-links">
//                             <a href="#" className="social-icon linkedin">
//                                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAd7X///8Ac7NGlMRGk8QAdrUAbLAAbrDZ7PXV6fPy+fw9ir/p9Pkugbo0hr3D2umz0ORUnMh3q9C72eplocoIe7dsps6dxN6lyeCDs9TL4u+WwNzg7vVTmMYhg7uy1OcLxWtDAAABaklEQVRIie3W7Y6CMBAFUBxohwIK8qEIgu//lltou7TortNu9p83MRGSIzgzlEaHwETyU51jr5wrBWsODDzCgNcLrHjkHV5JOIE/hEnCOATGEiYhMHGgLBELgdi1lxlJ1IH8uvS17CjShtiriRCekM1mlm7oBaE2sCEMhA1vBg5+kCUG9n63GmGqXJYTqmNDlhcrrAkXdPsIx3FI+4TidpPDkHNOm7ndrP6U9TH/5VZxDewPsEvaS5t0CK8h9qXKSd4tq9T3EaC73rOl2EVp/X0bcqcddzMMU7YtbFuHHShsqH+lnJwlsUIqFIW7mLZAhPuYOfaGh5nR4fBotgLVQIWik+PE+11h38NCLUGmV+Ypfw9HdQU0j/lAhfr9AKafggizXHc81/VJibA4qvKzk4HE4nzgB/4jfLU8UiA26RqxQn0wfEOhTjTPMEIdZh9EOsw9QXzpPOdvMHgTGLztDN7oBm+twzfzYfkCChobmnKthiYAAAAASUVORK5CYII=" alt="" />
//                             </a>
//                             <a href="#" className="social-icon twitter">
//                                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC" alt="" />
//                             </a>
//                             <a href="#" className="social-icon google">
//                                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC" alt="" />
//                             </a>
//                             <a href="#" className="social-icon instagram">
//                                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABWVBMVEVyHVFHcEx0Fvp8Fv1yFP1/FfyLCOyfBOmtAeS7AuDHAd3UANjZAs7rD6xyFvzjANTqAMHoA7l2F/yPFfx8GPmfD/zFF/XVWujoZuLyZt3pRt/yGdHyA8j1AKTViPj/9Pr////8g9f9A7r3DZz5vO794Pf+ruj9B6uzFPv7JLv+AJr+BI/+YMP/1vD+AIThG+n9GZn/vd3/YZz+AXP+GoT/r8r+AmT/b5z+HHH+I3f+G2P/ur7+FFD+Klb+fYv/wcr+LUf+LWX+AFn+Nzr+Ohz+RT7+inP+Si7/ztD+TxL/zbv+Wy//9fH+WgL+c1X+ZyX+PUv+Bzv+VXD+cxr/6eL+aQT+eAX+nDj+gwD+gxH+fSL+rYn+jwD+iwL+XhX/3rn/1bH9ZR/+lwP+nwH+xHH8ZC3+qAH+sAD+wAP+x1P+zGb+pl79mQn+uAD9J3T+ygD9O1n8pRL9twuaEkMNAAAAc3RSTlMBAF3G///////////GW9j//9nY/1r///////////7//////8b/////////////////////////////////////////////////////////////////////////////////xf///1v////////Y/9j/2VzGSus+GgAAAeNJREFUeAFFjEWiU0EQRc/tqu74V9wZ4TBiB6wG3wpzVoQ7zHCXeELypHH+KVchJAESaEs0IUv0Zv+7fwLgSAOk9ZFghcnfDw4AAg18cyhWCKNVob9NCZjQLWVrEGhJbJGDoCBpMwCrJTETAKBWgdeRGb4dmJW56PdI/KU1K4X15N+AFsW0+3/WVm7Pa0Pmu4Fh7HcbRIjMIhr3FItUGAH4SNZKjK32YjKpK3Iv0yUY0b8g0Vs0oK+8wbeyMBAQwVeo44R1z7XWq6rqpn5jiTmAeQO3iceg9zkYzKvc71iEmMFbqCJJ4tDcKFrLjX5D/MEdq8GpIUUgd/tgGboTgiUDPDZ44SXNpr0gWRcAgqEmEPJRNVPOxYaOth0oAHdCxWoOzslH+RCvlafYMgFUHvAIHoCjz16io80BrH/j0AAcJ9KWKkhn5sRyGjsDtr/sqyrsWNO1cW9/cDNLZgHLSzVvn+wMq9qbKKwy7TiIaKTW56pzW6Oa+N1OKEQdvvl2RyOE4DEOZurd1cHNeab27tyjOPfhFlucXP04ovF97B6jTOzdJwFLaNAff7N6c8incH1VpiSR67q2VgjzUU7JgbMTiQtFKmgAsCAuczlflmVZn7iGBFc1awB/p4tqUS3LDb8OPwBrSrZIO/KHZwAAAABJRU5ErkJggg==" alt="" />
//                             </a>
//                         </div>
//                     </section>
//                 </div>
//             </div>



//             <div className="container-b">
//                 <div className="section-b">
//                     <div className="sectionHeader-b">
//                         <h2>Education</h2>
//                         <button className="addButton-b">ADD</button>
//                     </div>
//                     <div className="box-edu">
//                         <div className="card-b">
//                             <div className="cardContent-b">
//                                 <div className='ft-imge'>
//                                     <div className="img-b-x">
//                                         <img
//                                             src="https://localo.com/assets/img/definitions/what-is-google-translate.webp"
//                                             alt="Imperial College London"
//                                         />
//                                     </div>
//                                     <div className="t-x">
//                                         <h3>Imperial College London</h3>
//                                         <p className="subtitle-b">
//                                             Masters in Marketing, graduated on March 2020
//                                         </p>
//                                         <p className="date-b">March 2016 - June 2018</p>
//                                     </div>
//                                 </div>
//                                 <button className="editButton-b">
//                                     <button className="edit-button">Edit <LuPencil /></button>
//                                 </button>
//                             </div>

//                         </div>
//                         <div className="card-b">
//                             <div className="cardContent-b">
//                                 <div className='ft-imge'>
//                                     <div className="img-b-x">
//                                         <img
//                                             src="https://localo.com/assets/img/definitions/what-is-google-translate.webp"
//                                             alt="MIT University"
//                                         />
//                                     </div>
//                                     <div className="t-x">
//                                         <h3>MIT University</h3>
//                                         <p className="subtitle-b">
//                                             Bachelor's degree in Engineering and Technology, graduated on
//                                             March 2020
//                                         </p>
//                                         <p className="date-b">March 2012 - June 2016</p>
//                                     </div>
//                                 </div>
//                                 <button className="editButton-b">
//                                     <button className="edit-button">Edit <LuPencil /></button>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="section-b">
//                     <div className="sectionHeader-b">
//                         <h2>Work Experience</h2>
//                         <button className="addButton-b">ADD</button>
//                     </div>
//                     <div className="box-edu">
//                         <div className="card-b">
//                             <div className="cardContent-b">
//                                 <div className='ft-imge'>
//                                     <div className="img-b-x">
//                                         <img
//                                             src="https://localo.com/assets/img/definitions/what-is-google-translate.webp"
//                                             alt="Amazon"
//                                         />
//                                     </div>
//                                     <div className="t-x">
//                                         <h3>Software Engineer</h3>
//                                         <p className="subtitle-b">Amazon</p>
//                                         <p className="date-b">July 2018 - Present</p>
//                                     </div>
//                                 </div>
//                                 <button className="editButton-b">
//                                     <button className="edit-button">Edit <LuPencil /></button>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

