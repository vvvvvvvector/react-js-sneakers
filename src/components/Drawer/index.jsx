import React from "react";

import CartItem from "../CartItem";
import DrawerInfo from "../DrawerInfo";

import Styles from "./Drawer.module.scss";

import close_button from "../../images/remove_button.svg";
import right_arrow from "../../images/right_arrow.svg";
import empty_cart from "../../images/empty_cart.svg";

function Drawer({ onCartClose, onRemove, sneakers = [] }) {
    const totalPrice = sneakers.reduce((sum, obj) => obj.price + sum, 0);

    return (
        <div className={Styles.overlay}>
            <div className={Styles.drawer}>
                <div className={Styles.top}>
                    <h2>Cart</h2>
                    {sneakers.length > 0 && <img onClick={onCartClose} src={close_button} alt="close button" />}
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
                            <button className="GreenButton">Make order<img src={right_arrow} alt="right arrow" /></button>
                        </div>
                    </React.Fragment>) :
                        (<DrawerInfo
                            title={"Cart is empty"}
                            imageURL={empty_cart}
                            description={"Add at least one pair of sneakers to make an order."}
                            onClose={onCartClose}
                        />)
                }
            </div>
        </div>
    );
}

export default Drawer;