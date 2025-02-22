import React from 'react'; 
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Auction Dashboard</h2>

      <div id='home2'>
        <Link to="/postauction">
        <button>Post New Auction</button>
      </Link>

      <Link to="/auctionitem">
      <button>Auction Items</button>
      </Link>
      </div>

      <ul>
        <li>
          <Link to="/auction/1">Vintage Watch - Current Bid: $150</Link>
        </li>
        <li>
          <Link to="/auction/2">Antique Vase - Current Bid: $250 (Closed)</Link>
        </li>
        <li>
          <Link to="/auction/3">Rare Comic Book - Current Bid: $300</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
