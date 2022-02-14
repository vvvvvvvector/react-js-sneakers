function Header() {
    return (
        <header>
            <div className="HeaderLeft">
                <img width={40} height={40} src="/images/sneakersLogo.svg" />
                <div>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="HeaderRight">
                <li className="Cart">
                    <img width={18} height={18} src="/images/cartLogo.svg" />
                    <span>1205 руб.</span>
                </li>
                <li className="Heart">
                    <img width={21} height={19} src="/images/heartLogo.svg" />
                </li>
                <li className="Logo">
                    <img width={20} height={20} src="/images/userLogo.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;