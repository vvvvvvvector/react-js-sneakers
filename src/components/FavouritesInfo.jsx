import { Link } from "react-router-dom";

const FavouritesInfo = ({title, description, imageURL}) => {
    return (
        <div className="EmptyFavourites">
            <img width={50} height={50} src={imageURL} />
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to="/">
                <button className="GreenButton">
                    Вернуться назад
                    <img src="/images/leftArrow.svg" alt="leftarrow" />
                </button>
            </Link>
        </div>
    );
}

export default FavouritesInfo;