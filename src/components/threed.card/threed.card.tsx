import styles from './threed.card.module.css';

const ThreedCard = () => {
    return (
        <div className={styles['container-card']}>
            <div className={styles['threed-card-container']}>
                <div className={styles['threed-card']}>
                    <img
                        src="https://bizweb.dktcdn.net/100/521/820/themes/957130/assets/banner_coll_1_2_hover.png?1726653723228"
                        alt=""
                        className="w-[80%]"
                    />
                </div>
            </div>
            <div className={styles['img-truncate']}>
                <img
                    src="https://bizweb.dktcdn.net/100/521/820/themes/957130/assets/banner_coll_1_2_hover.png?1726653723228"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default ThreedCard;