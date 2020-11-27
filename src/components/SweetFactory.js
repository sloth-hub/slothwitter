import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const SweetFactory = ({ userObj }) => {

    const [sweet, setSweet] = useState("");
    const [file, setFile] = useState("");

    const onSubmit = async (evt) => {
        evt.preventDefault();
        let fileUrl = "";
        if (sweet !== "") {
            if (file !== "") {
                const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
                const response = await fileRef.putString(file, "data_url");
                fileUrl = await response.ref.getDownloadURL();
            }
            const sweetObj = {
                text: sweet,
                createdAt: Date.now(),
                creatorId: userObj.uid,
                creatorName: userObj.displayName,
                fileUrl
            }
            await dbService.collection("sweets").add(sweetObj);
            setSweet("");
            setFile("");
        } else {
            alert("내용을 입력해주세요.");
        }
    }
    const onChange = (evt) => {
        const {
            target: { value }
        } = evt;
        setSweet(value);
    }
    const onFileChange = (evt) => {
        const {
            target: { files }
        } = evt;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            // 파일 로딩이 끝날 때 finishedEvent를 갖게 됨
            const {
                currentTarget: { result }
            } = finishedEvent;
            setFile(result);
        }
        reader.readAsDataURL(theFile); // 그 다음에 readAsDataURL 사용해 데이터를 얻게 됨
    }
    const onClearPhotoClick = () => {
        setFile("");
        document.querySelector("input[type='file']").value = "";
    };

    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <textarea
                    value={sweet}
                    onChange={onChange}
                    placeholder="What's on your mind?"
                    maxLength={120}
                    spellCheck="false"
                    className="factoryInput__input" />
                <input type="submit" value="&rarr;" className="factoryInput__arrow" />
            </div>
            <label htmlFor="attach-file" className="factoryInput__label">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus} />
            </label>
            <input type="file"
                id="attach-file"
                accept="image/*"
                onChange={onFileChange}
                style={{
                    opacity: 0,
                }} />
            {file &&
                <div className="factoryForm__attachment">
                    <img src={file}
                        alt="thumbnail"
                        style={{
                            backgroundImage: file,
                        }} />
                    <div className="factoryForm__clear" onClick={onClearPhotoClick}>
                        <span>Remove</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            }
        </form>
    );
}

export default SweetFactory;