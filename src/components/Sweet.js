import React from 'react';

const Sweet = ({ sweetObj, isOwner }) => {
    return (
        <div>
            <h4>{sweetObj.text}</h4>
            {isOwner && (
                <>
                    <button>delete</button>
                    <button>edit</button>
                </>
            )}
        </div>
    );
}

export default Sweet;