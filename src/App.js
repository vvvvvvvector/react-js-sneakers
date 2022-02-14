// ./ means on one level; First letter must be upper case, it means that it is component
import Card from './components/Card'; // variable Card just store code from Card.js, naming can be different
import Header from './components/Header'; // variable Header just store code from Header.js, i can use this variable just like component 
import Drawer from './components/Drawer';

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
