import React from 'react';
import { Link } from 'react-router-dom';

import AppContext from "../../context";

import Styles from "./Header.module.scss";

function Header(props) {
    const { cartItems } = React.useContext(AppContext);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return (
        <header>
            <div className={Styles.HeaderLeft}>
                <img width={40} height={40} src={process.env.PUBLIC_URL + "/images/sneakers_logo.svg"} alt="sneakers logo" />
                <div>
                    <h3>React Sneakers</h3>
                    <p>The best sneakers shop</p>
                </div>
            </div>
            <ul className={Styles.HeaderRight}>
                <li onClick={props.onClickCart} className={Styles.Cart}>
                    <img width={18} height={18} src={process.env.PUBLIC_URL + "/images/cart_logo.svg"} alt="cart logo" />
                    <span>{totalPrice} rub.</span>
                </li>
                <Link to="/favourites">
                    <li className={Styles.Heart}>
                        <img width={21} height={19} src={process.env.PUBLIC_URL + "/images/heart_logo.svg"} alt="heart logo" />
                    </li>
                </Link>
                <Link to="/orders">
                    <li className={Styles.Logo}>
                        <img width={20} height={20} src={process.env.PUBLIC_URL + "/images/user_logo.svg"} alt="user logo" />
                    </li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;