import Styles from "./EmptyPageInfo.module.scss";

import left_arrow from "../../images/left_arrow.svg";

const EmptyPageInfo = ({ title, description, imageURL }) => {
    return (
        <div className={Styles.emptyPage}>
            <img width={50} height={50} src={imageURL} alt="empty/orderIsDone" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="GreenButton">
                Home page
                <img src={left_arrow} alt="left arrow" />
            </button>
        </div>
    );
}

export default EmptyPageInfo;