import React from "react";

import Card from "../../components/Card";
import EmptyPageInfo from "../../components/EmptyPageInfo";

import AppContext from "../../context";

import Styles from "./Favourites.module.scss"

import sad_smile from "../../images/sad_smile.jpg";
import back_button from "../../images/back_button.svg";

function Favourites({ onFavourite, onAddToCart }) {
  const { favourites } = React.useContext(AppContext);

  return favourites.length > 0 ? (
    <div className={Styles.favouritesContent}>
      <div className={Styles.pageHeader}>
        <h1>
          <img width={35} height={35} className={Styles.backButton} src={back_button} alt="goBackButton" />
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
    <EmptyPageInfo imageURL={sad_smile} title="There are no favourites :(" description="You haven't added anything to your favourites" />
  );
}

export default Favourites;
