import FavouritesInfo from "../components/FavouritesInfo";

import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios";

import Card from "../components/Card";

function Orders() {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://620c1a41b57363259386e26c.mockapi.io/orders");
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
            console.log(orders);
        })();
    }, []);

    return orders.length > 0 ? (
        <div className="ContentPages">
            <div className="SmallHeader">
                <h1>
                    <Link to="/">
                        <img
                            width={35}
                            height={35}
                            className="BackBtn"
                            src="/images/buttonBack.svg"
                            alt="goBackButton"
                        />
                    </Link>
                    Orders
                </h1>
            </div>
            <div className="Sneakers">
                {orders.map((item, index) => (
                    <Card
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </div>
    ) : (
        <FavouritesInfo imageURL="images/brokeSmile.jpg" title="You don't have orders" description="Make at least one order" />
    );
}

export default Orders;