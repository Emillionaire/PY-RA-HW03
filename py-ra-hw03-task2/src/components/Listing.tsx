import '../App.css';
import { JSX } from "react";
import Card from './Card';




const Listing = ({items}: any): JSX.Element => {
    console.log(items)

    return (
        <div className='item-list'>
            {items.map((item: any) => {
                <Card item={item} />
            })}
        </div>
    );
};

export default Listing;