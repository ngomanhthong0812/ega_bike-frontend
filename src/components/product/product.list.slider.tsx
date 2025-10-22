'use client'
import ProductCard from "./product.card"
import ButtonSeeMore from "../button/button.see.more";
import Slider from "react-slick";

interface IProps {
    title?: string,
    isButton?: boolean,
    products: Product[]
}

const ProductListSlider: React.FC<IProps> = ({ title, isButton = true, products }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
    };
    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <div className="uppercase flex text-[28px] font-[600] pb-3 gap-2">
                    {title}
                </div>
                {isButton && <ButtonSeeMore title="Xem tất cả" url={"#"} />}
            </div>
            <Slider {...{
                ...settings,
                responsive: [
                    {
                        breakpoint: 1536,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 1280,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            }}>
                {products.map((product) => (
                    <ProductCard isQuantitySold={false} product={product} />
                ))}
            </Slider>
        </div>
    );
}

export default ProductListSlider