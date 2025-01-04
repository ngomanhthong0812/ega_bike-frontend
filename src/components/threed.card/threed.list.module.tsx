import ThreedCard from './threed.card';
import { v4 as uuid } from 'uuid';

const ThreedList = () => {
    const bannerList = [
        {
            id: uuid(),
            main: '/banner_coll_1_1.jpg',
            hover: '/banner_coll_1_1_hover.webp',
        },
        {
            id: uuid(),
            main: '/banner_coll_1_2.jpg',
            hover: '/banner_coll_1_2_hover.webp',
        }, {
            id: uuid(),
            main: '/banner_coll_1_3.jpg',
            hover: '/banner_coll_1_3_hover.webp',
        }
    ]
    return (
        <div className="pt-24 grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {bannerList?.map(banner => (
                <ThreedCard key={banner.id} data={banner} />
            ))}
        </div>
    )
}

export default ThreedList;