function Card() {
    return (
        <div className="Card">
            <div className="Favourite">
                <img src="/images/likedHeart.svg" alt="liked" />
            </div>
            <img width={133} height={112} src="/images/sneakersImages/1.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
            <div className="CardBottom">
                <div className="CardBottomCost">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="AddButton">
                    <img width={11} height={11} src="images/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;