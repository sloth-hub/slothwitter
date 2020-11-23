import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj, refreshUser }) => {

    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    }
    // const getMySweet = async () => {
    //     const sweets = await dbService.collection("sweets")
    //         .where("creatorId", "==", userObj.uid)
    //         .orderBy("createdAt")
    //         .get();
    //     // console.log(sweets.docs.map(doc => doc.data()));
    // }
    const onChange = (evt) => {
        const {
            target: { value }
        } = evt;
        setNewDisplayName(value);
    }
    const onSubmit = async (evt) => {
        evt.preventDefault();
        if(userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName: newDisplayName
            });
            refreshUser();
        }
    }
    // useEffect(() => {
    //     getMySweet();
    // }, []);

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input type="text"
                onChange={onChange}
                placeholder="Display Name" 
                defaultValue={newDisplayName}
                className="formInput" />
                <input type="submit" 
                value="Update Profile"
                className="formBtn"
                style={{ marginTop: 10 }} />
            </form>
            <span onClick={onLogOutClick}
            className="formBtn cancelBtn logOut">Log Out</span>
        </div>
    );
}

export default Profile;