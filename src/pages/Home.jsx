import Card from "../components/Card"; // variable Card just store code from Card.js, naming can be different

function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onFavourite,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onPlus={(obj) => onAddToCart(obj)} // i can pass only item in method onAddToCart, 'no diff'
        onFavourite={(obj) => onFavourite(obj)}
        isLoading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="Content">
      <div className="BeforeSearchBlock">
        <h1>
          {searchValue ? `Search for: "${searchValue}"` : "All sneakers"}
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
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="Sneakers">{renderItems()}</div>
    </div>
  );
}

export default Home;
