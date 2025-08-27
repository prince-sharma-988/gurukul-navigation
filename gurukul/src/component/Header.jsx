
import img from '../assets/logo.png';
import '../css/nav.css'
import Event from "../Pages/Event.jsx";
import About from "../Pages/About.jsx";
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
//  import Login from "./pages/Login";  
// import Register from "./pages/Resgister";
import Navigation from "../Pages/Navigation.jsx";


const Header = () => {
     const location = useLocation();
  console.log(location);
  return (
           <header className="header">
      <div className="logo">
        <img src={img} alt="Gurukul Navigation" />
        
      </div>
      <nav  >
      
        <ul >
            <li><NavLink to="/Home" end>Home</NavLink></li>
          <li><NavLink to="/Navigation">Navigation</NavLink></li>
          <li><NavLink to="/Event">Events</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {/* <button className="/signin">Sign in</button>
        <button className="/login">Login</button> */}
      </div>
    </header>
  )
}

export default Header;