
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Dashboard from './Component/Dashboard';
import Landing from './Component/Landing';
import PostAuction from './Component/PostAuction';
import AuctionItem from './Component/AuctionItem';

import './App.css';

function App() {
  
return(
  <Router>
  <div className="app">
    
    <header>
     
      
      <nav>
      <img id="logo" src="r3.png" alt="hello" />
        
        {/* <Link to="/" className="nav-link">Landing</Link> */}
        {/* <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/postauction" className="nav-link">Post Auction</Link>
        <Link to="/auctionItem" className="nav-link">AuctionItem</Link> */}

      </nav>
    </header>
    <main>
      <p>"Welcome to Auction House – Where Every Bid Counts! 🏆✨
      Join us to explore exciting auctions, place your bids, and win amazing deals. Sign in or sign up to start your journey today!"</p>
      <div id='home1'>
    <Link to="/signup" className="nav-link1"><button>Signup</button></Link>
    <Link to="/signin" className="nav-link1"><button>Signin</button></Link>
    </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/postauction" element={<PostAuction />} />
        <Route path="/auctionitem" element={<AuctionItem />} />
      </Routes>
    </main>
    <footer>
      <Link  id='foot2' to="/dashboard">
              <button>Back to Dashboard</button>
            </Link>
      <p>&copy; 2024 Signup App. All rights reserved.</p>
    </footer>
  </div>
</Router>
);
}

export default App
