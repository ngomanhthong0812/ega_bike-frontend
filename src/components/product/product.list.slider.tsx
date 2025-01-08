'use client'
import Link from "next/link";
import ProductCard from "./product.card"
import ButtonSeeMore from "../button/button.see.more";
import Slider from "react-slick";

interface IProps {
    title?: string,
    isButton?: boolean,
}

const ProductSlider: React.FC<IProps> = ({ title, isButton = true }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
    };
    return (
        <div className="pt-14">
            <div className="flex items-center justify-between mb-5">
                <div className="uppercase flex text-[28px] font-[600] pb-3 gap-2">
                    {title}
                </div>
                {isButton && <ButtonSeeMore title="Xem tất cả" url={"#"} />}
            </div>
            <Slider {...settings}>
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
            </Slider>
        </div>
    );
}

export default ProductSlider