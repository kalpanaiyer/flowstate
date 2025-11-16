import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import ProfileComponent from '../components/ProfileComponent';
import Badges from '../components/Badges';
import Inventory from '../components/Inventory';
import './Profile.css';
import Navbar from '../components/NavBar';

const Profile: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || 'User');
        setUserEmail(user.email || '');
      } else {
        setUserName('Guest');
        setUserEmail('');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="profile-page">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="profile-page">
      <div className="profile-layout">
        <div className="left-section">
          <h1 className="page-title">PROFILE</h1>
          
          <div className="badges-container">
            <h3>Your Badges</h3>
            <div className='badges-list'>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
              <Badges image='/images/coffee.png'/>
            </div>
          </div>

          <div className="inventory-container">
            <h3>Inventory</h3>
            <Inventory />
          </div>
          
        </div>
        
        <div className="right-section">
          <ProfileComponent 
            name={userName} 
            email={userEmail} 
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;