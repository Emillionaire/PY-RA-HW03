import Card from './Card';
import data from '../data/etsy.json';

type ListingProps = {
    items: typeof data
}


const Listing = ({items}: ListingProps): JSX.Element => {
    return (
        <div className='item-list'>
            {items.map((item: any) => (
                <Card item={item} />
            ))}
        </div>
    );
};

export default Listing;