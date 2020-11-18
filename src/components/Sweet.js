import { dbService } from 'fbase';
import React, { useState } from 'react';

const Sweet = ({ sweetObj, isOwner }) => {

    const [editing, setEditing] = useState(false);
    const [newSweet, setNewSweet] = useState(sweetObj.text);

    const onDeleteClick = () => {
        const ok = window.confirm("Are you sure you want to delete this sweet?");
        if (ok) {
            dbService.doc(`sweets/${sweetObj.id}`).delete();
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
        <div>
            {editing ? ( // editing 모드 on이면
                <>
                    {isOwner && // 작성자가 맞으면
                        <>
                            <form onSubmit={onSubmit}>
                                <input type="text"
                                    placeholder="Edit your sweet"
                                    value={newSweet}
                                    required
                                    onChange={onChange} />
                                <input type="submit" value="update sweet" />
                            </form>
                            <button onClick={toggleEditing}>cancel</button>
                        </>
                    }
                </>
            ) : (
                    <>
                        <h4>{sweetObj.text}</h4>
                        { isOwner && (
                            <>
                                <button onClick={onDeleteClick}>delete</button>
                                <button onClick={toggleEditing}>edit</button>
                            </>
                        )}
                    </>
                )}
        </div>
    );
}

export default Sweet;