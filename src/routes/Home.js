import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {

    const [sweet, setSweet] = useState("");
    const [sweets, setSweets] = useState([]);
    const getSweets = async () => {
        const dbSweets = await dbService.collection("sweets").get();
        dbSweets.forEach((document) => {
            const sweetObject = {
                ...document.data(),
                id: document.id,
            }
            setSweets(prev => [sweetObject, ...prev]);
            // set이 붙는 함수를 쓸 때 값 대신 함수를 전달 할 수 있음.
            // 만약 함수를 전달하면, 리액트는 이전 값에 접근할 수 있게 해줌
            // implicit return (배열을 리턴). 배열에서 첫번째 요소는 가장 최근 document이고
            // 그 뒤로 이전 document를 붙임
        });
    }

    useEffect(() => {
        getSweets();
    }, []);

    const onSubmit = async (evt) => {
        evt.preventDefault();
        await dbService.collection("sweets").add({
            sweet,
            createdAt: Date.now()
        });
        setSweet("");
    }
    const onChange = (evt) => {
        const {
            target: { value }
        } = evt;
        setSweet(value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={sweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" value="Sweet" />
            </form>
            <div>
                {sweets.map(sweet =>  
                <div key={sweet.id}>
                    <h4>{sweet.sweet}</h4>
                </div> 
                )}
            </div>
        </div>
    );
}

export default Home;