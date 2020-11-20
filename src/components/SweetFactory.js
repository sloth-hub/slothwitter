import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SweetFactory = ({userObj}) => {

    const [sweet, setSweet] = useState("");
    const [file, setFile] = useState("");
    
    const onSubmit = async (evt) => {
        evt.preventDefault();
        let fileUrl = "";
        if (file !== "") {
            const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await fileRef.putString(file, "data_url");
            fileUrl = await response.ref.getDownloadURL();
        }
        const sweetObj = {
            text: sweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            fileUrl
        }
        await dbService.collection("sweets").add(sweetObj);
        setSweet("");
        setFile("");
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
        <form onSubmit={onSubmit}>
            <input type="text"
                value={sweet}
                onChange={onChange}
                placeholder="What's on your mind?"
                maxLength={120} />
            <input type="file" accept="image/*" onChange={onFileChange} />
            <input type="submit" value="Sweet" />
            {file &&
                <div>
                    <img src={file} width="50px" height="50px" alt="thumbnail" />
                    <button onClick={onClearPhotoClick}>clear</button>
                </div>
            }
        </form>
    );
}

export default SweetFactory;