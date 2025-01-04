'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper w-full"
            >
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src="/slider_1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-full object-cover" src="/slider_2.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Banner;
