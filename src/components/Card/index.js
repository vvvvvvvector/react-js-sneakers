import Styles from "./Card.module.scss";

import React from 'react';

function Card({ title, imageURL, price, onPlus, onFavourite }) {
    const [isCheckedPlus, setIsCheckedPlus] = React.useState(false);
    const [isCheckedFav, setIsCheckedFav] = React.useState(false);

    const onClickFav = () => {
        onFavourite({ title, imageURL, price });
        setIsCheckedFav(!isCheckedFav);
    };

    const onClickPlus = () => {
        onPlus({ title, imageURL, price });
        setIsCheckedPlus(!isCheckedPlus);
    };

    return (
        <div className={Styles.Card}>
            <div className={Styles.Favourite}>
                <img src={isCheckedFav ? "/images/likedHeart.svg" : "/images/unlikedHeart.svg"} alt="liked" onClick={onClickFav} />
            </div>
            <img width={133} height={112} src={imageURL} alt="Sneakers" />
            <h5>{title}</h5>
            <div className={Styles.CardBottom}>
                <div className={Styles.CardBottomCost}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={Styles.AddButton} src={isCheckedPlus ? "/images/buttonChecked.svg" : "/images/buttonUnchecked.svg"} onClick={onClickPlus} />
            </div>
        </div >
    );
}

export default Card;