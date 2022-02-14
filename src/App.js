function App() {
  return (
    <div className="Wrapper">

      <div className="Overlay">
        <div className="Drawer">
          <h2>Корзина<img className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" /></h2>
          <div className="Items">
            <div className="CartItem">
              <div style={{ backgroundImage: 'url(/images/sneakersImages/1.jpg)' }} className="CartItemImg">
              </div>
              <div className="CartItemPB">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" />
            </div>
            <div className="CartItem">
              <div style={{ backgroundImage: 'url(/images/sneakersImages/2.jpg)' }} className="CartItemImg">
              </div>
              <div className="CartItemPB">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" />
            </div>
            <div className="CartItem">
              <div style={{ backgroundImage: 'url(/images/sneakersImages/3.jpg)' }} className="CartItemImg">
              </div>
              <div className="CartItemPB">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" />
            </div>
            <div className="CartItem">
              <div style={{ backgroundImage: 'url(/images/sneakersImages/3.jpg)' }} className="CartItemImg">
              </div>
              <div className="CartItemPB">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="RemoveBtn" src="/images/buttonRemove.svg" alt="remove" />
            </div>
          </div>

          <div className="CartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="GreenButton">Оформить заказ<img src="/images/arrow.svg" alt="arrow" /></button>
          </div>

        </div>
      </div>

      <header>
        <div className="HeaderLeft">
          <img width={40} height={40} src="/images/sneakersLogo.svg" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="HeaderRight">
          <li className="Cart">
            <img width={18} height={18} src="/images/cartLogo.svg" />
            <span>1205 руб.</span>
          </li>
          <li className="Heart">
            <img width={21} height={19} src="/images/heartLogo.svg" />
          </li>
          <li className="Logo">
            <img width={20} height={20} src="/images/userLogo.svg" />
          </li>
        </ul>
      </header>
      <div className="Content">
        <div className="BeforeSearchBlock">
          <h1>Все кроссовки</h1>
          <div className="SearchBlock">
            <img src="/images/searchLogo.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="Sneakers">
          <div className="Card">
            <div className="Favourite">
              <img src="/images/unlikedHeart.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/images/sneakersImages/1.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
            <div className="CardBottom">
              <div className="CardBottomCost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="AddButton">
                <img width={11} height={11} src="images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="Card">
            <div className="Favourite">
              <img src="/images/likedHeart.svg" alt="liked" />
            </div>
            <img width={133} height={112} src="/images/sneakersImages/2.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
            <div className="CardBottom">
              <div className="CardBottomCost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="AddButton">
                <img width={11} height={11} src="images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="Card">
            <div className="Favourite">
              <img src="/images/likedHeart.svg" alt="liked" />
            </div>
            <img width={133} height={112} src="/images/sneakersImages/3.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
            <div className="CardBottom">
              <div className="CardBottomCost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="AddButton">
                <img width={11} height={11} src="images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="Card">
            <div className="Favourite">
              <img src="/images/likedHeart.svg" alt="liked" />
            </div>
            <img width={133} height={112} src="/images/sneakersImages/4.jpg" alt="Sneakers" />
            <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
            <div className="CardBottom">
              <div className="CardBottomCost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="AddButton">
                <img width={11} height={11} src="/images/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
