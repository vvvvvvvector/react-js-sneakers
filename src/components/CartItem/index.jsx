import React from "react";

import Styles from "./CartItem.module.scss";

import remove_button from "../../assets/images/remove_button.svg";

function CartItem({ sneaker, onRemove }) {
    return (
        <div className={Styles.cartItem}>
            <p>{sneaker.title}</p>
            <b>{sneaker.price} rub.</b>
            <img onClick={onRemove} src={remove_button} alt="remove item" />
        </div>
    );
}

export default CartItem;