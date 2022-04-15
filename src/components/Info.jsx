import React from "react";

import AppContext from "../context";

const Info = ({title, description, imageURL}) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="EmptyCart">
            <img width={120} height={120} src={imageURL} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} className="GreenButton">Вернуться назад<img src="/images/leftArrow.svg" alt="leftarrow" /></button>
        </div>
    );
}

export default Info;