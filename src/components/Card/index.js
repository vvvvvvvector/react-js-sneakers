import Styles from "./Card.module.scss";

import React from 'react';

function Card(props) {
    const [isCheckedPlus, setIsCheckedPlus] = React.useState(false);
    const [isCheckedFav, setIsCheckedFav] = React.useState(false);

    const onClickPlus = () => {
        setIsCheckedPlus(!isCheckedPlus);
    };

    const onClickFav = () => {
        setIsCheckedFav(!isCheckedFav);
    };

    return (
        <div className={Styles.Card}>
            <div className={Styles.Favourite}>
                <img src={isCheckedFav ? "/images/likedHeart.svg" : "/images/unlikedHeart.svg"} alt="liked" onClick={onClickFav} />
            </div>
            <img width={133} height={112} src={props.imageURL} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className={Styles.CardBottom}>
                <div className={Styles.CardBottomCost}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img className={Styles.AddButton} src={isCheckedPlus ? "/images/buttonChecked.svg" : "/images/buttonUnchecked.svg"} onClick={onClickPlus} />
            </div>
        </div >
    );
}

export default Card;