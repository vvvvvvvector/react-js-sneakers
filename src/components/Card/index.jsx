import React from 'react';
import ContentLoader from "react-content-loader";

import AppContext from "../../context";

import Styles from "./Card.module.scss";

import liked_heart from "../../assets/images/liked_heart.svg";
import unliked_heart from "../../assets/images/unliked_heart.svg";
import checked_button from "../../assets/images/checked_button.svg";
import unchecked_button from "../../assets/images/unchecked_button.svg";

function Card({ id, title, imageURL, price, onPlus, onFavourite, isFavourite = false, isLoading = false }) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isCheckedFav, setIsCheckedFav] = React.useState(isFavourite);
    const obj = { id, clickPlusID: id, title, imageURL, price };

    const onClickFav = () => {
        onFavourite(obj);
        setIsCheckedFav(!isCheckedFav);
    };

    const onClickPlus = () => {
        onPlus(obj);
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
                            {onFavourite && <img src={isCheckedFav ? liked_heart : unliked_heart} alt="liked" onClick={onClickFav} />}
                        </div>
                        <img width={133} height={112} src={"../../assets/images/unchecked_button.svg"} alt="Sneakers" />
                        <h5>{title}</h5>
                        <div className={Styles.CardBottom}>
                            <div className={Styles.CardBottomCost}>
                                <span>Price:</span>
                                <b>{price} rub.</b>
                            </div>
                            {onPlus && <img className={Styles.AddButton} src={isItemAdded(id) ? checked_button : unchecked_button} onClick={onClickPlus} alt="Plus" />}
                        </div>
                    </>
            }
        </div >
    );
}

export default Card;