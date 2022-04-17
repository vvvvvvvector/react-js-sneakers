import Card from "../components/Card";
import { Link } from "react-router-dom";
import AppContext from "../context";
import React from "react";
import FavouritesInfo from "../components/FavouritesInfo";

function Favourites({ onFavourite, onAddToCart }) {
  const { favourites } = React.useContext(AppContext);

  return favourites.length > 0 ? (
    <div className="ContentPages">
      <div className="SmallHeader">
        <h1>
          <Link to="/">
            <img
              width={35}
              height={35}
              className="BackBtn"
              src="images/buttonBack.svg"
              alt="goBackButton"
            />
          </Link>
          Favourites
        </h1>
      </div>
      <div className="Sneakers">
        {favourites.map((item, index) => (
          <Card
            key={index}
            isFavourite={true}
            onFavourite={onFavourite}
            onPlus={onAddToCart}
            {...item}
          />
        ))}
      </div>
    </div>
  ) : (
    <FavouritesInfo imageURL="images/sadSmile.jpg" title="There are no favourites :(" description="You haven't added anything to your favourites"/>
  );
}

export default Favourites;
