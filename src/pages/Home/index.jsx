import React from 'react';

import Card from "../../components/Card"; // variable Card just store code from Card.js, naming can be different

import Styles from "./Home.module.scss";

import search_logo from "../../assets/images/search_logo.svg";
import remove_button from "../../assets/images/remove_button.svg";

function Home({ searchValue, setSearchValue, onChangeSearchInput, items, onAddToCart, onFavourite, isLoading }) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card key={index} onPlus={(obj) => onAddToCart(obj)} onFavourite={(obj) => onFavourite(obj)} isLoading={isLoading} {...item} />
    ));
  };

  return (
    <div className={Styles.content}>
      <div className={Styles.beforeSearchBlock}>
        <h1>
          {searchValue ? `Search for: "${searchValue}"` : "All sneakers"}
        </h1>
        <div className={Styles.searchBlock}>
          <img src={search_logo} alt="Search" />
          {searchValue && <img onClick={() => setSearchValue("")} className={Styles.removeButton} src={remove_button} alt="clear" />}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
        </div>
      </div>
      <div className={Styles.sneakers}>{renderItems()}</div>
    </div>
  );
}

export default Home;
