import Info from "./Info";

function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="Overlay">
            {items.length > 0 ?
                <div className="Drawer">
                    <h2>Корзина<img onClick={onClose} className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" /></h2>
                    <div className="Items">
                        {items.map((obj, index) => (
                            <div className="CartItem" key={index}>
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
                    <h2>Корзина</h2>
                    <Info imageURL="images/emptyCart.svg" title="Корзина пустая" description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."/>
                </div>
            }
        </div >
    );
}

export default Drawer;