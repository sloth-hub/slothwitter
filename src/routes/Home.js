import Sweet from "components/Sweet";
import SweetFactory from "components/SweetFactory";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";


const Home = ({ userObj }) => {

    const [sweets, setSweets] = useState([]);
    useEffect(() => {
        dbService.collection("sweets")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
            const sweetArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setSweets(sweetArray);
        });
    }, []);

    return (
        <div className="container">
            <SweetFactory userObj={userObj}/>
            <div style={{ marginTop: 30 }}>
                {sweets.map(sweet =>
                    <Sweet key={sweet.id}
                        sweetObj={sweet}
                        isOwner={sweet.creatorId === userObj.uid} />
                )}
            </div>
        </div>
    );
}

export default Home;