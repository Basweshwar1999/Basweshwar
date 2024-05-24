import React from 'react';
import image1 from './r1.png'; // Replace with your logo path (profile picture)
import image2 from '../Images/662223285e627.png'; // Replace with your image path
import image3 from '../Images/66222302abbb2.png'; // Replace with your image path

function Profile() {

  
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-info">
          <img src={image1} alt="Your Profile " className="profile-picture" /> {/* Profile picture */}
          <h2>Basweshwar Madhavrao Gubge</h2> {/* Replace with your name */}
          <p>Date of Birth: 19-Jun-1999</p> {/* Replace with your date of birth */}
          <p>Job Position: Software Developer</p> {/* Replace with your job title */}
          <p>Degree: B.Tech in Information Technology</p> {/* Replace with your degree name */}
          {/* Add more info sections as needed */}
        </div>
        <div className="profile-image-slider">
         
            <img
              src={image1} // Use the src property from the copied image object
              alt="Additional"
              className={`slider-image `}
            />
             <img
              src={image2} // Use the src property from the copied image object
              alt="Additional"
              className={`slider-image`}
            />
             <img
              src={image3} // Use the src property from the copied image object
              alt="Additional"
              className={`slider-image`}
            />
       
        </div>
      </div>
    </div>
  );
}

export default Profile;
