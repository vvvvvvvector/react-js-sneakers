import Card from '../components/Card';

function Favourites({ items, onFavourite }) {
    return (
        <div className="Content">
            <h1>Мои закладки</h1>
            <div className="Sneakers">
                {
                    items.map((item, index) => ( // why map instead foreach(doesnt return objects) - answer list rendering
                        <Card
                            key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            imageURL={item.imageURL}
                            isFavourite={true}
                            onFavourite={onFavourite}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Favourites;