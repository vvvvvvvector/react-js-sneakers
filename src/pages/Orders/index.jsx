import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import EmptyPageInfo from "../../components/EmptyPageInfo";
import Card from "../../components/Card";

import Styles from "./Orders.module.scss";

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
                    <Link to="/">
                        <img width={35} height={35} className={Styles.backButton} src={process.env.PUBLIC_URL + "/images/back_button.svg"} alt="goBackButton" />
                    </Link>
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
        <EmptyPageInfo imageURL={process.env.PUBLIC_URL + "/images/broke_smile.jpg"} title="You don't have orders" description="Make at least one order" />
    );
}

export default Orders;