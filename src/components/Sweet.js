import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

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
                        <h4>{sweetObj.text}</h4>
                        { sweetObj.fileUrl && <img src={sweetObj.fileUrl} />}
                        { isOwner && (
                            <div className="sweet__actions">
                                <span onClick={onDeleteClick}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                                <span onClick={toggleEditing}>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </span>
                            </div>
                        )}
                    </>
                )}
        </div>
    );
}

export default Sweet;