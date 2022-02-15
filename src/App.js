// ./ means on one level; First letter must be upper case, it means that it is component
import Card from './components/Card'; // variable Card just store code from Card.js, naming can be different
import Header from './components/Header'; // variable Header just store code from Header.js, i can use this variable just like component 
import Drawer from './components/Drawer';

import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://620c1a41b57363259386e26c.mockapi.io/items").then((res) => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []); // request only when first render

  return (
    <div className="Wrapper">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
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
            items.map((obj) => ( // why map instead foreach(doesnt return objects) - answer list rendering
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
