import { Link } from "react-router-dom";
import './header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <img className='logo' src="https://darshan.ac.in/Content/media/DU_Logo.svg" alt="logo"/>
            <nav>
                <ul className='nav_links'>
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./facultylist">Faculty</Link></li>
                    <li><Link to="./contact">Contact Us</Link></li>
                </ul>
            </nav>
            <Link className='cta' to="#"><button>Login</button></Link>
        </div>
    );
}

export default Header;