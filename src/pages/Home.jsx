import Card from "../components/Card"; // variable Card just store code from Card.js, naming can be different

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onFavourite,
}) {
  return (
    <div className="Content">
      <div className="BeforeSearchBlock">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="SearchBlock">
          <img src="/images/searchLogo.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="RemoveBtn"
              src="/images/buttonRemove.svg"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="Sneakers">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(
            (
              item,
              index // why map instead foreach(doesnt return objects) - answer list rendering
            ) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                imageURL={item.imageURL}
                onPlus={(obj) => onAddToCart(obj)} // i can pass only item in method onAddToCart, 'no diff'
                onFavourite={(obj) => onFavourite(obj)}
              />
            )
          )}
      </div>
    </div>
  );
}

export default Home;
