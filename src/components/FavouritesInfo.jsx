import { Link } from "react-router-dom";

const FavouritesInfo = ({ title, description, imageURL }) => {
    return (
        <div className="EmptyFavourites">
            <img width={50} height={50} src={imageURL} alt="empty/orderIsDone"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to="/">
                <button className="GreenButton">
                    Home page
                    <img src="/images/leftArrow.svg" alt="left arrow" />
                </button>
            </Link>
        </div>
    );
}

export default FavouritesInfo;