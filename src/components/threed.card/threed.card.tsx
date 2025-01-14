import React from 'react';
import styles from './threed.card.module.css';
import Link from 'next/link';
import Image from 'next/image';
interface IProps {
    data: { main: string, hover: string }
}
const ThreedCard: React.FC<IProps> = ({ data }) => {
    return (
        <Link href={"#"} className='mb-10'>
            <div className={`${styles['container']}`}>
                <div id="card" className={`${styles['card']}`}>
                    <Image src={data.main} alt="banner" width={100000} height={100000} className={`${styles['card__image']} w-full h-auto`} />
                </div>
                <div className={`${styles['line']}`}></div>
                <Image src={data.hover} alt="banner" width={100000} height={100000} className={`${styles['card__image_hover']} w-full h-auto`} />
            </div>
        </Link>
    )
}

export default ThreedCard;