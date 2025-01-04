import Link from "next/link";
import ProductCard from "./product.card"
import ButtonSeeMore from "../button/button.see.more";

interface IProps {
    col?: number,
    title?: string,
    isButton?: boolean,
}

const ProductList: React.FC<IProps> = ({ col = 4, title, isButton = true }) => {
    return (
        <div className={`${title && 'pt-24'}`}>
            {title && (
                <div className="flex items-center justify-between mb-5">
                    <Link href={'#'} className="uppercase flex text-[28px] font-[600] pb-5 gap-2 hover:text-blue-700 duration-100">
                        {title}
                    </Link>
                    {isButton && <ButtonSeeMore title="Xem tất cả" url={"#"} />}
                </div>
            )}
            <div className={`grid grid-cols-4 gap-8 sm:grid-cols-2 md:grid-cols-${col - 1} lg:grid-cols-${col} xl:grid-cols-${col} 2xl:grid-cols-${col} py-1`}>
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
                <ProductCard isQuantitySold={false} />
            </div>
        </div>
    )
}

export default ProductList