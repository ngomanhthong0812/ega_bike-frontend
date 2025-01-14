import Link from "next/link";
import Image from "next/image";
import ProductCard from "./product.card"
import ButtonSeeMore from "../button/button.see.more";

const ProductDiscountList = () => {
    return (
        <div className="pt-24">
            <div className="flex items-center justify-between">
                <Link href={'#'} className="uppercase flex text-[28px] font-[600] pb-5 gap-2 hover:text-[#ec720e] duration-100">
                    Happy Summer - Giảm đến 50%
                    <Image src="/flashsale-hot.webp" alt="" width={100000} height={100000} className="w-[30px] h-[30px]" />
                </Link>
                <div className="flex items-center gap-2">
                    <p>Kết thúc sau</p>
                    <div className="flex flex-col bg-black text-white py-1 px-3 gap-1 items-center rounded-[5px]"><span className="text-2xl">07</span><span className="text-xs">Giờ</span></div>
                    <div className="flex flex-col bg-black text-white py-1 px-3 gap-1 items-center rounded-[5px]"><span className="text-2xl">07</span><span className="text-xs">Phút</span></div>
                    <div className="flex flex-col bg-black text-white py-1 px-3 gap-1 items-center rounded-[5px]"><span className="text-2xl">07</span><span className="text-xs">Giây</span></div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 py-1">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="mt-10">
                <ButtonSeeMore title="Xem tất cả" url={"#"} />
            </div>
        </div>
    )
}

export default ProductDiscountList