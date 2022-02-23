import Styles from "./Card.module.scss";

import ContentLoader from "react-content-loader";

import React from 'react';

function Card({ id, title, imageURL, price, onPlus, onFavourite, isFavourite = false, isAdded = false, isLoading = false }) {
    const [isCheckedPlus, setIsCheckedPlus] = React.useState(isAdded);
    const [isCheckedFav, setIsCheckedFav] = React.useState(isFavourite);

    const onClickFav = () => {
        onFavourite({ id, title, imageURL, price });
        setIsCheckedFav(!isCheckedFav);
    };

    const onClickPlus = () => {
        onPlus({ id, title, imageURL, price });
        setIsCheckedPlus(!isCheckedPlus);
    };

    return (
        <div className={Styles.Card}>
            {
                isLoading ? <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> :
                    <>
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
                    </>
            }
        </div >
    );
}

export default Card;