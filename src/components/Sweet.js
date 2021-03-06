import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const Sweet = ({ sweetObj, isOwner }) => {

    const [editing, setEditing] = useState(false);
    const [newSweet, setNewSweet] = useState(sweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this sweet?");
        if (ok) {
            await dbService.doc(`sweets/${sweetObj.id}`).delete();
            if (sweetObj.fileUrl !== "") {
                await storageService.refFromURL(sweetObj.fileUrl).delete();
            }
        }
    }

    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = (evt) => {
        evt.preventDefault();
        dbService.doc(`sweets/${sweetObj.id}`).update({
            text: newSweet // input에 있는 text
        });
        setEditing(false); // editing 모드 off
    }
    const onChange = (evt) => {
        const {
            target: { value }
        } = evt;
        setNewSweet(value);
    }
    const Actions = () => {
        return (
            <div className="sweet__actions">
                <span className="date">{moment(sweetObj.createdAt).format("YY.MM.DD")}</span>
                <span onClick={onDeleteClick}>
                    <FontAwesomeIcon icon={faTrash} />
                </span>
                <span onClick={toggleEditing}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </span>
            </div>
        );
    }


return (
    <div className="sweet">
        {editing ? ( // editing 모드 on이면
            <>
                <form onSubmit={onSubmit} className="container sweetEdit">
                    <input type="text"
                        placeholder="Edit your sweet"
                        value={newSweet}
                        required
                        onChange={onChange}
                        className="formInput" />
                    <input type="submit"
                        value="update sweet"
                        className="formBtn" />
                </form>
                <span onClick={toggleEditing} className="formBtn cancelBtn">
                    cancel
                    </span>
            </>
        ) : (
                <>
                    { sweetObj.fileUrl ? (
                        <>
                            <img src={sweetObj.fileUrl} alt="file" />
                            <div className="sweetContent" style={{ borderRadius: "0 0 10px 10px" }}>
                                <div className="sweet__topcontainer">
                                    <span className="nickname">{sweetObj.creatorName}</span>
                                    {isOwner && <Actions />}
                                </div>
                                <p>{sweetObj.text}</p>
                            </div>
                        </>
                    ) : (
                            <div className="sweetContent">
                                <div className="sweet__topcontainer">
                                    <span className="nickname">{sweetObj.creatorName}</span>
                                    {isOwner && <Actions />}
                                </div>
                                <p>{sweetObj.text}</p>
                            </div>
                        )}
                </>
            )}
    </div>
);
}

export default Sweet;