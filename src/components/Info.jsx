import React from "react";

const Info = ({ title, description, imageURL, onClose }) => {
    return (
        <div className="EmptyCart">
            <img width={120} height={120} src={imageURL} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onClose} className="GreenButton">Home page<img src="/images/leftArrow.svg" alt="leftarrow" /></button>
        </div>
    );
}

export default Info;