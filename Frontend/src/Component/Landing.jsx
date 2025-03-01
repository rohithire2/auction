import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
    <p>"Welcome to Auction House – Where Every Bid Counts! 🏆✨
          Join us to explore exciting auctions, place your bids, and win amazing deals. Sign in or sign up to start your journey today!"</p>
          <div id='home1'>
        <Link to="/signup" className="nav-link1"><button>Signup</button></Link>
        <Link to="/signin" className="nav-link1"><button>Signin</button></Link>
        </div>
        </div>
  );
}

export default Landing;
