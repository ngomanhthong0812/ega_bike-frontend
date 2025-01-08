'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function ProductImages() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/521/820/products/img-3561-1296x-fef3b91638234f2088f2be987bea88f6-large.jpg?v=1721810970720",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/521/820/products/10-1-e3e40a3c3bce4441afc2a1b791712fd8.jpg?v=1721783248057",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/521/820/products/10-1-e3e40a3c3bce4441afc2a1b791712fd8.jpg?v=1721783248057",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/521/820/products/10-1-e3e40a3c3bce4441afc2a1b791712fd8.jpg?v=1721783248057",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/521/820/products/10-1-e3e40a3c3bce4441afc2a1b791712fd8.jpg?v=1721783248057",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/521/820/products/10-1-e3e40a3c3bce4441afc2a1b791712fd8.jpg?v=1721783248057",
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/521/820/products/10-1-e3e40a3c3bce4441afc2a1b791712fd8.jpg?v=1721783248057",
    ];

    return (
        <div className="col-span-2">
            <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                navigation
                className="!m-0 w-[480px]"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} className="w-full h-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[FreeMode, Navigation, Thumbs]}
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                className="!m-0 !mt-5"
            >
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className={`!w-[83px] !h-[83px] border p-1 rounded-md ${activeIndex === index ? 'border-primary' : 'border-transparent'}`}
                    >
                        <img src={image} className="w-full h-full object-cover rounded-sm" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductImages;
