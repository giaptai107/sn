import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import AuthService from "../services/auth.service";
import ProfileService from "../services/profile.service";
import Status from "./Status";



const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [currentProfile, setCurrentProfile] = useState([]);
  console.log(currentUser);
  console.log(currentProfile);

  useEffect(() => {
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    retrieveProfiles(1);
  }, []);

  const retrieveProfiles = (profileId) => {
    ProfileService.get(profileId)
      .then(response => {
        setCurrentProfile(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <img src={currentProfile.cover} class="img-fluid" alt="profile" />
          
        </h3>
      </header>
      <p>
        <strong>Name: </strong>
        {currentProfile.name}
      </p>
      <p>
        <strong>Birthday: </strong>
        {currentProfile.birthday}
      </p>
      <Status />

    </div>
  );
};

export default Profile;