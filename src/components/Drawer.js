function Drawer() {
    return (
        <div className="Overlay">
            <div className="Drawer">
                <h2>Корзина<img className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" /></h2>
                <div className="Items">
                    <div className="CartItem">
                        <div style={{ backgroundImage: 'url(/images/sneakersImages/1.jpg)' }} className="CartItemImg">
                        </div>
                        <div className="CartItemPB">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" />
                    </div>
                    <div className="CartItem">
                        <div style={{ backgroundImage: 'url(/images/sneakersImages/2.jpg)' }} className="CartItemImg">
                        </div>
                        <div className="CartItemPB">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" />
                    </div>
                </div>

                <div className="CartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="GreenButton">Оформить заказ<img src="/images/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;