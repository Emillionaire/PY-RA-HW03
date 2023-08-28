const currencyHandler = (currency_code: string, price: number): string => {
    if (currency_code === 'USD') {
        return `$${price}`
    } else if (currency_code === 'EUR') {
        return `€${price}`
    } else {
        return `${price} GBP`
    }
};

const titleHandler = (title: string): string => {
    return title.length <= 50 ? title : title.slice(0, 50) + '...'
};

const itemLevelHandler = (quantity: number) => {
    if (quantity < 10) {
        return 'low'
    } else if (quantity < 20) {
        return 'medium'
    } else {
        return 'high'
    }
};

const Card = ({item}: any) => {
    if (typeof(item.title) === 'undefined') {
        console.log(`Element ID ${item.listing_id} is broken!`)
        return
    } else {
        return (
            <div className="item" key={item.listing_id}>
                <div className="item-image">
                    <a href={item.url}>
                        <img src={(item.MainImage.url_570xN)} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{titleHandler(item.title)}</p>
                    <p className="item-price">{currencyHandler(item.currency_code, item.price)}</p>
                    <p className={`item-quantity level-${itemLevelHandler(item.quantity)}`}>{item.quantity}</p>
                </div>
            </div>
        );
    };
};

export default Card;