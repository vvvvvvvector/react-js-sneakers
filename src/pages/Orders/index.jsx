import React from 'react';
import axios from "axios";

import EmptyPageInfo from "../../components/EmptyPageInfo";
import Card from "../../components/Card";

import Styles from "./Orders.module.scss";

import broke_smile from "../../images/broke_smile.jpg";
import back_button from "../../images/back_button.svg";

function Orders() {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://620c1a41b57363259386e26c.mockapi.io/orders");
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        })();
    }, []);

    return orders.length > 0 ? (
        <div className={Styles.ordersContent}>
            <div className={Styles.pageHeader}>
                <h1>
                    <img width={35} height={35} className={Styles.backButton} src={back_button} alt="goBackButton"
                    />
                    Orders
                </h1>
            </div>
            <div className={Styles.sneakers}>
                {orders.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </div>
    ) : (
        <EmptyPageInfo imageURL={broke_smile} title="You don't have orders" description="Make at least one order" />
    );
}

export default Orders;