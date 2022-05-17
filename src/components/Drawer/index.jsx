import React from "react";
import axios from "axios";

import CartItem from "../CartItem";
import DrawerInfo from "../DrawerInfo";

import AppContext from "../../context";

import Styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onCartClose, onRemove, sneakers = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);

    const [orderId, setOrderid] = React.useState(null);
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);

    const onClickMakeOrder = async () => {
        try {
            const { data } = await axios.post("https://620c1a41b57363259386e26c.mockapi.io/orders", { items: cartItems })
                .catch(() => {
                    alert("error while posting order!");
                });

            setOrderid(data.id);
            setIsOrderCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; ++i) {
                const item = cartItems[i];
                await axios.delete("https://620c1a41b57363259386e26c.mockapi.io/cart/" + item.id);
                await delay(700);
            }
        } catch (error) {
            alert("error while making oreder!");
        }
    }

    const totalPrice = sneakers.reduce((sum, obj) => obj.price + sum, 0);

    return (
        <div className={Styles.overlay}>
            <div className={Styles.drawer}>
                <div className={Styles.top}>
                    <h2>Cart</h2>
                    {sneakers.length > 0 && <img onClick={onCartClose} src={process.env.PUBLIC_URL + "/images/remove_button.svg"} alt="close button" />}
                </div>
                {
                    sneakers.length > 0 ? (<React.Fragment>
                        <div className={Styles.middle}>
                            {sneakers.length > 0 && sneakers.map((sneaker) => (
                                <CartItem key={sneaker.id} sneaker={sneaker} onRemove={() => onRemove(sneaker.id)} />
                            ))}
                        </div>
                        <div className={Styles.bottom}>
                            <ul>
                                <li>
                                    <span>Total:</span>
                                    <div></div>
                                    <b>{totalPrice} rub.</b>
                                </li>
                                <li>
                                    <span>Tax 5%:</span>
                                    <div></div>
                                    <b>{(totalPrice * 0.05).toFixed(3)} rub.</b>
                                </li>
                            </ul>
                            <button onClick={onClickMakeOrder} className="GreenButton">Make order<img src={process.env.PUBLIC_URL + "/images/right_arrow.svg"} alt="right arrow" /></button>
                        </div>
                    </React.Fragment>) :
                        (<DrawerInfo
                            title={isOrderCompleted ? "Order is done!" : "Cart is empty"}
                            imageURL={isOrderCompleted ? process.env.PUBLIC_URL + "/images/order_is_done.svg" : process.env.PUBLIC_URL + "/images/empty_cart.svg"}
                            description={isOrderCompleted ? `Your order #${orderId} will be transferred to the courier delivery service` : "Add at least one pair of sneakers to make an order."}
                            onClose={onCartClose}
                        />)
                }
            </div>
        </div>
    );
}

export default Drawer;