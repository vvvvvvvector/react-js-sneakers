import React from 'react';

import AppContext from "../../context";

import Styles from "./Header.module.scss";

import sneakers_logo from "../../images/sneakers_logo.svg";
import cart_logo from "../../images/cart_logo.svg";
import heart_logo from "../../images/heart_logo.svg";
import user_logo from "../../images/user_logo.svg";

function Header(props) {
    const { cartItems } = React.useContext(AppContext);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return (
        <header>
            <div className={Styles.HeaderLeft}>
                <img width={40} height={40} src={sneakers_logo} alt="sneakers logo" />
                <div>
                    <h3>React Sneakers</h3>
                    <p>The best sneakers shop</p>
                </div>
            </div>
            <ul className={Styles.HeaderRight}>
                <li onClick={props.onClickCart} className={Styles.Cart}>
                    <img width={18} height={18} src={cart_logo} alt="cart logo" />
                    <span>{totalPrice} rub.</span>
                </li>
                <li className={Styles.Heart}>
                    <img width={21} height={19} src={heart_logo} alt="heart logo" />
                </li>
                <li className={Styles.Logo}>
                    <img width={20} height={20} src={user_logo} alt="user logo" />
                </li>
            </ul>
        </header>
    );
}

export default Header;