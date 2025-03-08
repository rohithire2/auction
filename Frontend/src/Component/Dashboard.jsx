import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Dashboard() {
  const [items, setItems] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      nav('/signin'); // Redirect to signin if not authenticated
      return;
    }

    const fetchItems = async () => {
      try {
        const res = await axios.get('http://localhost:5001/auctions');
        setItems(res.data);
      } catch (error) {
        console.error('Error fetching auctions:', error);
      }
    };

    fetchItems();
  }, []); // Runs only once when the component mounts

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

        <Link to="/deleteauction">
          <button>Delete Items</button>
        </Link>
      </div>


    </div>
  );
}

export default Dashboard;
