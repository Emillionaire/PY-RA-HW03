import styles from '../css/Stars.module.css';
import Star from './Star';
import { FC } from 'react';

type IStars = {
	count: number | any;
};

const Stars: FC<IStars> = ({count}) => {
	if (count > 5 || count < 1 || typeof(count) !== 'number') {
		return (
			<ul className={`${styles.cardBodyStars} ${styles.uClearfix}`}></ul>
		);
	} else {
		return (
			<ul className={`${styles.cardBodyStars} ${styles.uClearfix}`}>
				<li>
					{Array(count).fill(count).map((el, i) => {
						return <Star key={i}/>
					})}
				</li>
			</ul>
		);
	}
};

export default Stars;