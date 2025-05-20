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
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/person">Employees</NavLink></li>
            <li><NavLink to="/add">Add new employee</NavLink></li>
            
          </ul>
        </nav>
     
    </header>
  );
};

export default Header;



