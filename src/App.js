// ./ means on one level; First letter must be upper case, it means that it is component
import Card from './components/Card'; // variable Card just store code from Card.js, naming can be different
import Header from './components/Header'; // variable Header just store code from Header.js, i can use this variable just like component 
import Drawer from './components/Drawer';

import React from 'react';

const arr = [
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageURL: "/images/sneakersImages/1.jpg" },
  { title: "Мужские Кроссовки Nike Air Max 270", price: 15999, imageURL: "/images/sneakersImages/2.jpg" },
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageURL: "/images/sneakersImages/3.jpg" },
  { title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imageURL: "/images/sneakersImages/4.jpg" },
];

function App() {
  return (
    <div className="Wrapper">
      <Drawer />
      <Header />
      <div className="Content">
        <div className="BeforeSearchBlock">
          <h1>Все кроссовки</h1>
          <div className="SearchBlock">
            <img src="/images/searchLogo.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="Sneakers">
          {
            arr.map((obj) => ( // why map instead foreach(doesnt return objects) - answer list rendering
              <Card
                title={obj.title}
                price={obj.price}
                imageURL={obj.imageURL}
              //onClickPlus={() => alert(obj.price)}
              //onClickFavourite={() => alert(obj.title)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
