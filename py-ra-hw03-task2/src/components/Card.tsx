import '../App.css';

const Card = ({item}: any) => {
    console.log('!')

    return (
        <div className="item" key={item.listing_id}>
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">{item.currency_code}{item.price}</p>
                <p className="item-quantity level-medium">{item.quantity}</p>
            </div>
        </div>
    );
};

export default Card;