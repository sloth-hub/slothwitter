import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
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
        <>
            <form onSubmit={onSubmit}>
                <input type="text"
                onChange={onChange}
                placeholder="Display Name" 
                defaultValue={newDisplayName} />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
}

export default Profile;