import React from "react";

import Styles from './DrawerInfo.module.scss';

const DrawerInfo = ({ title, description, imageURL, onClose }) => {
    return (
        <div className={Styles.drawerInfo}>
            <img width={120} height={120} src={imageURL} alt="order/empty"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onClose} className="GreenButton">Home page<img src={process.env.PUBLIC_URL + "/images/left_arrow.svg"} alt="left arrow" /></button>
        </div>
    );
}

export default DrawerInfo;