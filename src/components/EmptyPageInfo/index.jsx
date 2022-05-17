import React from 'react';
import { Link } from "react-router-dom";

import Styles from "./EmptyPageInfo.module.scss";

const EmptyPageInfo = ({ title, description, imageURL }) => {
    return (
        <div className={Styles.emptyPage}>
            <img width={50} height={50} src={imageURL} alt="empty/orderIsDone" />
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to="/">
                <button className="GreenButton">
                    Home page
                    <img src={process.env.PUBLIC_URL + "/images/left_arrow.svg"} alt="left arrow" />
                </button>
            </Link>
        </div>
    );
}

export default EmptyPageInfo;