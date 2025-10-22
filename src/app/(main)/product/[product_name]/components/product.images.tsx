'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from "next/image";

interface IProps {
    product_images: ProductImage[]
}
const ProductImages = ({ product_images }: IProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="col-span-2">
            <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                navigation
                className="!m-0 w-[480px]"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {product_images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image?.url} alt="image" className="w-full h-full object-cover" width={480} height={480} />
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
                {product_images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className={`!w-[83px] !h-[83px] border p-1 rounded-md ${activeIndex === index ? 'border-primary' : 'border-transparent'}`}
                    >
                        <Image src={image?.url} alt="image" className="w-full h-full object-cover rounded-sm" width={100000} height={100000} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductImages;
