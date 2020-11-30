import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const EditProfile = ({ userObj, refreshUser }) => {

    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const history = useHistory();

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
            }).then(() => {
                alert("변경이 완료되었습니다.");
                history.push("/");
            });
            refreshUser();
        }
    }

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
                <Link to="/profile">
                <span className="formBtn cancelBtn"
                style={{ display: "block" }}>Cancel</span>
                </Link>
            </form>
        </div>
    );
}

export default EditProfile;