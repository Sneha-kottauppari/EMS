import React,{useState} from 'react';
import './Navbar.css';

const Navbar = () => {
  const [gender, setGender] = useState('all');

  const handleChange = (event) => {
    setGender(event.target.value);
  }
  return (
    <nav className="navbar">
      <img src="images/empl.png" alt="EMS" />
      <div className="search-container">
        <select value={gender} onChange={handleChange}>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Other">other</option>
        </select>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;
