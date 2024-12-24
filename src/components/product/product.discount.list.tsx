import Link from "next/link";
import ProductCard from "./product.card"
import { MdOutlineNavigateNext } from "react-icons/md";

const ProductDiscountList = () => {
    return (
        <div className="pt-24">
            <div className="flex items-center justify-between">
                <h1 className="uppercase flex text-[28px] font-[600] pb-5 gap-2">
                    Happy Summer - Giảm đến 50%
                    <img src="/flashsale-hot.webp" alt="" className="w-[30px] h-[30px]" />
                </h1>
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
            <div className="item-center mt-10">
                <Link href={"#"} className="group item-center relative uppercase border border-black py-3 px-7 font-[600] text-[15px]">
                    Xem tất cả <MdOutlineNavigateNext size={20} />
                    <p className="absolute bottom-0 left-0 w-full h-[4px] bg-primary duration-150 group-hover:h-full z-[-1]"></p>
                </Link>
            </div>
        </div>
    )
}

export default ProductDiscountList