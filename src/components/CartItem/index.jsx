import React from "react";

import Styles from "./CartItem.module.scss";

function CartItem({ sneaker, onRemove }) {
    return (
        <div className={Styles.cartItem}>
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + sneaker.imageURL})` }} className={Styles.cartSneakerImage} />
            <p>{sneaker.title}</p>
            <b>{sneaker.price} rub.</b>
            <img onClick={onRemove} src={process.env.PUBLIC_URL + "/images/remove_button.svg"} alt="remove item" />
        </div>
    );
}

export default CartItem;