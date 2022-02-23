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
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');  // controlled input because of {value} in inupt

  React.useEffect(() => {
    async function FetchData() {
      // setIsLoading(true); // if there are a lot of requests
      const CartResponse = await axios.get("https://620c1a41b57363259386e26c.mockapi.io/cart");
      const FavResponse = await axios.get("https://620c1a41b57363259386e26c.mockapi.io/favourites");
      const ItemsResponse = await axios.get("https://620c1a41b57363259386e26c.mockapi.io/items");

      setIsLoading(false);

      setCartItems(CartResponse.data); // 1
      setFavourites(FavResponse.data); // 2
      setItems(ItemsResponse.data); // 3 4real
    }

    FetchData();
  }, []); // request only when first render

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find(item => item.id === obj.id)) { // if clicked card element is in cart and plus green -> delete an element from backend and ux; else add new element
        axios.delete(`https://620c1a41b57363259386e26c.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter((x) => x.id !== obj.id));
      } else {
        axios.post("https://620c1a41b57363259386e26c.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]); // ?[...cartItems, obj] - bad practice?
      }
    } catch (error) {
      alert("Не удалось добавить в корзину!");
      console.log(error.message);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://620c1a41b57363259386e26c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id)); // ?[...cartItems, obj] - bad practice?
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onFavourite = async (obj) => {
    try {
      if (favourites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://620c1a41b57363259386e26c.mockapi.io/favourites/${obj.id}`);
      } else {
        const { data } = await axios.post("https://620c1a41b57363259386e26c.mockapi.io/favourites", obj);
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в закладки!");
      console.log(error.message);
    }
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
          cartItems={cartItems}
          onChangeSearchInput={onChangeSearchInput}
          items={items}
          onAddToCart={onAddToCart}
          onFavourite={onFavourite}
          isLoading={isLoading} />} />
        <Route path={"/favourites"} element={<Favourites
          items={favourites}
          onFavourite={onFavourite}
          onAddToCart={onAddToCart} />} />
      </Routes>

    </div>
  );
}

export default App;
