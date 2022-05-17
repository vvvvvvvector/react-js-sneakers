import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Orders from './pages/Orders';

import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

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

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.clickPlusID) === Number(obj.id));
      if (findItem) { // if clicked card element is in cart and plus green -> delete an element from backend and ux; else add new element
        setCartItems((prev) => prev.filter((x) => Number(x.clickPlusID) !== Number(obj.id)));
        axios.delete(`https://620c1a41b57363259386e26c.mockapi.io/cart/${findItem.id}`);
      } else {
        const { data } = await axios.post("https://620c1a41b57363259386e26c.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, data]); // ?[...cartItems, obj] - bad practice?
      }
    } catch (error) {
      alert("add to cart error!");
      console.log(error.message);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://620c1a41b57363259386e26c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id))); // ?[...cartItems, obj] - bad practice?
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onFavourite = async (obj) => {
    try {
      if (favourites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://620c1a41b57363259386e26c.mockapi.io/favourites/${obj.id}`);
      } else {
        const { data } = await axios.post("https://620c1a41b57363259386e26c.mockapi.io/favourites", obj);
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error while adding to favourites!");
      console.log(error.message);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.clickPlusID) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favourites, isItemAdded, setCartOpened, setCartItems }}>
      <>
        <div className="Wrapper">
          <Header onClickCart={() => {
            setCartOpened(true);
            document.body.style.overflow = 'hidden';
          }} />

          <Routes>
            <Route exact path="/" element={<Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              cartItems={cartItems}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              onAddToCart={onAddToCart}
              onFavourite={onFavourite}
              isLoading={isLoading} />} />
            <Route path='/favourites' element={<Favourites
              onFavourite={onFavourite} />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
        {cartOpened && <Drawer onCartClose={() => { setCartOpened(false); document.body.style.overflow = 'visible'; }} sneakers={cartItems} onRemove={onRemoveItem} />}
      </>
    </AppContext.Provider >
  );
}

export default App;
