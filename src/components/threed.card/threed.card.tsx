import React from 'react';
import styles from './threed.card.module.css';
import Link from 'next/link';
interface IProps {
    data: { main: string, hover: string }
}
const ThreedCard: React.FC<IProps> = ({ data }) => {
    return (
        <Link href={"#"} className='mb-10'>
            <div className={`${styles['container']}`}>
                <div id="card" className={`${styles['card']}`}>
                    <img src={data.main} alt="banner" className={`${styles['card__image']}`} />
                </div>
                <div className={`${styles['line']}`}></div>
                <img src={data.hover} alt="banner" className={`${styles['card__image_hover']}`} />
            </div>
        </Link>
    )
}

export default ThreedCard;