import Styles from "./Header.module.scss";

import { Link } from 'react-router-dom';

import React from 'react';
import AppContext from "../../context";

function Header(props) {
    const { cartItems } = React.useContext(AppContext);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return (
        <header>
            <div className={Styles.HeaderLeft}>
                <Link to="/">
                    <img width={40} height={40} src="/images/sneakersLogo.svg" />
                </Link>
                <div>
                    <h3>React Sneakers</h3>
                    <p>The best sneakers shop</p>
                </div>
            </div>
            <ul className={Styles.HeaderRight}>
                <li onClick={props.onClickCart} className={Styles.Cart}>
                    <img width={18} height={18} src="/images/cartLogo.svg" alt="cartlogo" />
                    <span>{totalPrice} rub.</span>
                </li>
                <li className={Styles.Heart}>
                    <a href="/favourites">
                        <img width={21} height={19} src="/images/heartLogo.svg" alt="heartlogo" />
                    </a>
                </li>
                <li className={Styles.Logo}>
                    <Link to="/orders">
                        <img width={20} height={20} src="/images/userLogo.svg" alt="userLogo" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;