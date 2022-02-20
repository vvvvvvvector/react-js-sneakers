import Card from "../components/Card";
import { Link } from "react-router-dom";

function Favourites({ items = [], onFavourite }) {
  return items.length > 0 ? (
    <div className="ContentFav">
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
          Мои закладки
        </h1>
      </div>
      <div className="Sneakers">
        {items.map(
          (
            item,
            index // why map instead foreach(doesnt return objects) - answer list rendering
          ) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
              isFavourite={true}
              onFavourite={onFavourite}
            />
          )
        )}
      </div>
    </div>
  ) : (
    <div className="EmptyFavourites">
      <img width={50} height={50} src="/images/sadSmile.jpg" />
      <h2>Закладок нет :(</h2>
      <p>Вы ничего не добавили в закладки</p>
      <Link to="/">
        <button className="GreenButton">
          Вернуться назад
          <img src="/images/leftArrow.svg" alt="leftarrow" />
        </button>
      </Link>
    </div>
  );
}

export default Favourites;
