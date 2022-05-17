import React from 'react';

import Card from "../../components/Card"; // variable Card just store code from Card.js, naming can be different

import Styles from "./Home.module.scss";

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
          <img src={process.env.PUBLIC_URL + "/images/search_logo.svg"} alt="Search" />
          {searchValue && <img onClick={() => setSearchValue("")} className={Styles.removeButton} src={process.env.PUBLIC_URL + "/images/remove_button.svg"} alt="clear" />}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
        </div>
      </div>
      <div className={Styles.sneakers}>{renderItems()}</div>
    </div>
  );
}

export default Home;
