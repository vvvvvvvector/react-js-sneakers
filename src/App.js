// ./ means on one level; First letter must be upper case, it means that it is component
import Header from './components/Header'; // variable Header just store code from Header.js, i can use this variable just like component 
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favourites from './pages/Favourites';

import { Route, Routes } from 'react-router-dom';

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

      <Routes>
        <Route path={"/"} element={<Home
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          items={items}
          onAddToCart={onAddToCart}
          onFavourite={onFavourite} />} />
        <Route path={"/favourites"} element={<Favourites />} />
      </Routes>

    </div>
  );
}

export default App;
