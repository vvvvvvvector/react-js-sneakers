import React from "react";

import Styles from './DrawerInfo.module.scss';

import left_arrow from "../../assets/images/left_arrow.svg";

const Info = ({ title, description, imageURL, onClose }) => {
    return (
        <div className={Styles.drawerInfo}>
            <img width={120} height={120} src={imageURL} alt="order/empty"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={onClose} className="GreenButton">Home page<img src={left_arrow} alt="left arrow" /></button>
        </div>
    );
}

export default Info;