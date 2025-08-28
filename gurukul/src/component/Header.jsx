import { Link } from 'react-router-dom';
import '../css/header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo1.png"
import Home from "../Pages/Home"
import Event from "../Pages/Event"
import Team from "../Pages/Team"    
const Header = () => {
  const [user] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className="navbar">
      
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>Gurukul Navigation</h2>
      </div>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

   
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/Home">Home</Link>
        <Link to="/Event" >Events</Link>
        <Link to="/College">Colleges</Link>
        <Link to="/Team">Team</Link>
        
        {user ? (
          <button className="profile-btn" onClick={handleLogout}>
            {user.displayName || user.email}
          </button>
        ) : (
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="profile-btn">👤</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
