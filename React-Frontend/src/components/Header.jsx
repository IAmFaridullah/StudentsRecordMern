import "./Header.css";

import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function Header() {


    return (
        <div className="header">
            <div className="logo"><h3>STUDENTS RECORD</h3></div>
            <div className="menu">
                <ul>
                    <Link to="/" style={{color: "white", textDecoration: "none"}} >
                    <li><HomeIcon style={{marginRight: "1px", marginBottom: "3px"}} />HOME</li>
                    </Link>
                    <Link to="/CreateStudent" style={{color: "white", textDecoration: "none"}} >
                    <li><PersonAddIcon style={{marginRight: "3px", marginBottom: "3px"}} />CREATE STUDENT</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;

