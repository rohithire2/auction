import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
      <img src="r3.png" alt="Auction Logo" className="landing-logo" />
      <div className="landing-buttons">
        <Link to="/signin" className="btn">Sign In</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>
    </div>
  );
}

export default Landing;
