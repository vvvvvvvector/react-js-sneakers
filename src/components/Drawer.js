function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="Overlay">
            {items.length > 0 ?
                <div className="Drawer">
                    <h2>Корзина<img onClick={onClose} className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" /></h2>
                    <div className="Items">
                        {items.map((obj) => (
                            <div className="CartItem">
                                <div style={{ backgroundImage: `url(${obj.imageURL})` }} className="CartItemImg">
                                </div>
                                <div className="CartItemPB">
                                    <p>{obj.title}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" />
                            </div>
                        ))}
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
                        <button className="GreenButton">Оформить заказ<img src="/images/arrow.svg" alt="rightarrow" /></button>
                    </div>
                </div> :
                <div className="Drawer">
                    <h2>Корзина<img onClick={onClose} className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" /></h2>
                    <div className="EmptyCart">
                        <img width={120} height={120} src="/images/emptycart.svg" />
                        <h3>Корзина пустая</h3>
                        <button onClick={onClose} className="GreenButton">Вернуться назад<img src="/images/leftArrow.svg" alt="leftarrow" /></button>
                    </div>
                </div>
            }
        </div >
    );
}

export default Drawer;