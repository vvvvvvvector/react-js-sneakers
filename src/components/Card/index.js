import Styles from "./Card.module.scss";

function Card(props) {
    const onClickButton = () => {
        alert(props.price)
    };

    return (
        <div className={Styles.Card}>
            <div className={Styles.Favourite}>
                <img src="/images/likedHeart.svg" alt="liked" />
            </div>
            <img width={133} height={112} src={props.imageURL} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className={Styles.CardBottom}>
                <div className={Styles.CardBottomCost}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={Styles.AddButton} onClick={onClickButton}>
                    <img width={11} height={11} src="images/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;