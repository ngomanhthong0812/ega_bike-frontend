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
import Image from 'next/image';

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
                    <Image className="w-full h-full object-cover" src="/slider_1.jpg" alt="" width={100000} height={100000} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full h-full object-cover" src="/slider_2.jpg" alt="" width={100000} height={100000} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Banner;
