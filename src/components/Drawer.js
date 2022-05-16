import React from "react";
import axios from "axios";

import Info from "./Info";

import AppContext from "../context";

import order_is_done from "../assets/images/order_is_done.svg";
import empty_cart from "../assets/images/empty_cart.svg";
import remove_button from "../assets/images/remove_button.svg";
import right_arrow from "../assets/images/right_arrow.svg";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

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
                    <h2>Cart<img onClick={onClose} className="RemoveBtn" src={remove_button} alt="remove" /></h2>
                    <div className="Items">
                        {items.map((obj, index) => (
                            <div className="CartItem" key={index}>
                                <div style={{ backgroundImage: `url(${obj.imageURL})` }} className="CartItemImg">
                                </div>
                                <div className="CartItemPB">
                                    <p>{obj.title}</p>
                                    <b>{obj.price} rub.</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className="RemoveBtn" src={remove_button} alt="remove" />
                            </div>
                        ))}
                    </div>
                    <div className="CartTotalBlock">
                        <ul>
                            <li>
                                <span>Total:</span>
                                <div></div>
                                <b>{totalPrice} rub.</b>
                            </li>
                            <li>
                                <span>Tax 5%:</span>
                                <div></div>
                                <b>{totalPrice * 0.05} rub.</b>
                            </li>
                        </ul>
                        <button onClick={onClickOrder} className="GreenButton">Make order<img src={right_arrow} alt="right arrow" /></button>
                    </div>
                </div> :
                <div className="Drawer">
                    <h2>Cart</h2>
                    <Info
                        onClose={onClose}
                        imageURL={isOrderCompleted ? order_is_done : empty_cart}
                        title={isOrderCompleted ? "Order is done!" : "Cart is empty"}
                        description={isOrderCompleted ? `Your order #${orderId} will be transferred to the courier delivery service` : "Add at least one pair of sneakers to make an order."}
                    />
                </div>
            }
        </div >
    );
}

export default Drawer;