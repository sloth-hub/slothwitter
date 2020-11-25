import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "images/sloth_black.png";

const Navigation = ({ userObj }) => {

    const linkStyle = {
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fonStize: 12
    }

    return (
        <nav>
            <ul className="nav">
                <li className="navHome">
                    <Link to="/" style={linkStyle}>
                        <img src={homeIcon} alt="home icon" />
                        <span className="navTitle">Home</span>
                    </Link>
                </li>
                <li className="navProfile">
                    <Link to="/profile" style={linkStyle}>
                        <img src={userObj.photoUrl} alt="profileImage" />
                        <span className="navTitle">
                            Profile
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;