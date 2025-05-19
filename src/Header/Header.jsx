import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ appName }) => {
  return (
    <header>
      <div>
        <Link to = '/'>
         <h1>{appName}</h1>
        </Link>
        </div>
        <nav>
          <ul className="nav-NavLinks">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/person">Employee List</NavLink></li>
            <li><NavLink to="/add">Add Employee</NavLink></li>
            
          </ul>
        </nav>
     
    </header>
  );
};

export default Header;



