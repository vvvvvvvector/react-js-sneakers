import React from "react";

import Info from "./Info";
import AppContext from "../context";

import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);

    const onClickOrder = async () => {
        try {
            const { data } = await axios.post("https://620c1a41b57363259386e26c.mockapi.io/orders", { items: cartItems });
            setOrderId(data.id);
            setIsOrderCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete("https://620c1a41b57363259386e26c.mockapi.io/cart/" + item.id);
                await delay(700);
            }
        } catch (error) {
            alert("order error :(");
        }
    }

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
                        <button onClick={onClickOrder} className="GreenButton">Оформить заказ<img src="/images/arrow.svg" alt="rightarrow" /></button>
                    </div>
                </div> :
                <div className="Drawer">
                    <h2>Корзина</h2>
                    <Info
                        imageURL={isOrderCompleted ? "images/orderIsDone.svg" : "images/emptyCart.svg"}
                        title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
                        description={isOrderCompleted ? `Ваш заказ #${orderId} будет передан в службу курьерской доставки` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                    />
                </div>
            }
        </div >
    );
}

export default Drawer;