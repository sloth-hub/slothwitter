import Sweet from "components/Sweet";
import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {

    const [sweets, setSweets] = useState([]);
    const history = useHistory();

    const onLogOutClick = () => {
        const ok = window.confirm("Are you sure you want to log out?");
        if (ok) {
            authService.signOut();
            history.push("/");
        }
    }

    const getMySweet = async () => {
        const mySweets = await dbService.collection("sweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt", "desc")
            .get();
        const sweetArray = mySweets.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        setSweets(sweetArray);
    }

    useEffect(() => {
        getMySweet();
    }, []);

    return (
        <div className="container">
            <div className="profile__header">
                <img src={userObj.photoUrl} alt="profile" />
                <span className="nickname">{userObj.displayName}</span>
                <div className="profileBtn__container">
                    <span onClick={onLogOutClick}
                        className="formBtn">
                        Log Out
            </span>
                    <Link to="/editprofile">
                        <span className="formBtn">Edit Profile</span>
                    </Link>
                </div>
            </div>
            <div>
                {sweets.map(sweet =>
                    <Sweet key={sweet.id}
                        sweetObj={sweet}
                        isOwner={sweet.creatorId === userObj.uid} />
                )}
            </div>
        </div>
    );
}

export default Profile;