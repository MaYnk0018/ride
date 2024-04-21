// HomePage.js

import React from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import RegisterButton from '../registerButton/RegisterButton';
import CompanyCard from '../company/CompanyCard';
import myContext from '../../context/myContext';
import StudentCard from '../student/StudentCard';
import './HomePage.css'; // Import the CSS file 
import hero from './2.png';

function HomePage() {
  const user = JSON.parse(localStorage.getItem('users'));
  console.log("ffd", user);
  return (
    <Layout>
      <div className="homepage-container"> {/* Apply styles to the main container */}
        {!user ? (
          <div className="card-container">
            <div className="left-content">
              <RegisterButton />
            </div>
            <div className="right-content">
              {/* Your image goes here */}
              <img src={hero} alt="Your Image" />
            </div>
          </div>
        ) : (
          <div className="card-container"> {/* Apply styles to the card container */}
            <div className="left-content">
              {user?.role === "student" ? (
                <CompanyCard />
              ) : (
                <StudentCard />
              )}
            </div>
            
          </div>
        )}
      </div>
    </Layout>
  );
}

export default HomePage;
