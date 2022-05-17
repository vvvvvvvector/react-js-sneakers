import React from "react";

import Card from "../../components/Card";
import EmptyPageInfo from "../../components/EmptyPageInfo";

import AppContext from "../../context";

import Styles from "./Favourites.module.scss"

function Favourites({ onFavourite, onAddToCart }) {
  const { favourites } = React.useContext(AppContext);

  return favourites.length > 0 ? (
    <div className={Styles.favouritesContent}>
      <div className={Styles.pageHeader}>
        <h1>
          <img width={35} height={35} className={Styles.backButton} src={process.env.PUBLIC_URL + "/images/back_button.svg"} alt="goBackButton" />
          Favourites
        </h1>
      </div>
      <div className={Styles.sneakers}>
        {favourites.map((item, index) => (
          <Card key={index} isFavourite={true} onFavourite={onFavourite} onPlus={onAddToCart} {...item} />
        ))}
      </div>
    </div>
  ) : (
    <EmptyPageInfo imageURL={process.env.PUBLIC_URL + "/images/sad_smile.jpg"} title="There are no favourites :(" description="You haven't added anything to your favourites" />
  );
}

export default Favourites;
