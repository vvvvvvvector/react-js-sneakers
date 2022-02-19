// ./ means on one level; First letter must be upper case, it means that it is component
import Card from './components/Card'; // variable Card just store code from Card.js, naming can be different
import Header from './components/Header'; // variable Header just store code from Header.js, i can use this variable just like component 
import Drawer from './components/Drawer';

import { Route } from 'react-router-dom';

import React from 'react';

import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');  // controlled input because of {value} in inupt

  React.useEffect(() => {
    axios.get("https://620c1a41b57363259386e26c.mockapi.io/items").then((res) => setItems(res.data));
    axios.get("https://620c1a41b57363259386e26c.mockapi.io/cart").then((res) => setCartItems(res.data));
  }, []); // request only when first render

  const onAddToCart = (obj) => {
    axios.post("https://620c1a41b57363259386e26c.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]); // ?[...cartItems, obj] - bad practice?
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://620c1a41b57363259386e26c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id)); // ?[...cartItems, obj] - bad practice?
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onFavourite = (obj) => {
    axios.post("https://620c1a41b57363259386e26c.mockapi.io/favourites", obj);
    setFavourites((prev) => [...prev, obj]);
  };

  const element = document.querySelector("body");

  const comp = <h1>hello world</h1>;

  return (
    <div className="Wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={() => {
        element.style = "overflow-y: visible";
        setCartOpened(false)
      }} onRemove={onRemoveItem} /> : null}
      <Header onClickCart={() => {
        element.style = "overflow-y: hidden";
        setCartOpened(true);
      }} />
      <div className="Content">
        <div className="BeforeSearchBlock">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="SearchBlock">
            <img src="/images/searchLogo.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="RemoveBtn" src="/images/buttonRemove.svg" alt="clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="Sneakers">
          {
            items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) => ( // why map instead foreach(doesnt return objects) - answer list rendering
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageURL={item.imageURL}
                  onPlus={(obj) => onAddToCart(obj)} // i can pass only item in method onAddToCart, 'no diff'
                  onFavourite={(obj) => onFavourite(obj)}
                />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
