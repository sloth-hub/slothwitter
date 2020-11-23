import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navigation = ({ userObj }) => {

    return (
        <nav>
            <ul className="nav">
                <li className="navHome">
                    <Link to="/">
                        <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
                    </Link>
                </li>
                <li className="navProfile">
                    <Link to="/profile"
                        style={{
                            marginLeft: 10,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            fontSize: 12,
                        }}>
                        <img src={userObj.photoUrl} className="profileImg" alt="profileImage" />
                        <span className="profileName">
                            {userObj.displayName
                                ? `${userObj.displayName}의 Profile`
                                : "Profile"}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;