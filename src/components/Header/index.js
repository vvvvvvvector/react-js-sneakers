import Styles from "./Header.module.scss";

import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <div className={Styles.HeaderLeft}>
                <Link to="/">
                    <img width={40} height={40} src="/images/sneakersLogo.svg" />
                </Link>
                <div>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={Styles.HeaderRight}>
                <li onClick={props.onClickCart} className={Styles.Cart}>
                    <img width={18} height={18} src="/images/cartLogo.svg" alt="cartlogo" />
                    <span>1205 руб.</span>
                </li>
                <li className={Styles.Heart}>
                    <Link to="/favourites">
                        <img width={21} height={19} src="/images/heartLogo.svg" alt="heartlogo" />
                    </Link>
                </li>
                <li className={Styles.Logo}>
                    <img width={20} height={20} src="/images/userLogo.svg" alt="userLogo" />
                </li>
            </ul>
        </header>
    );
}

export default Header;