import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCoinInsert } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Fullscreen } from "lucide-react";

const ProductBenefits = () => {
    const benefits = [
        {
            icon: <LiaShippingFastSolid size={30} />,
            title: "Giao hàng toàn quốc",
        },
        {
            icon: <CiCoinInsert size={30} />,
            title: "Tích điểm tất cả sản phẩm",
        },
        {
            icon: <MdOutlinePayment size={30} />,
            title: "Giảm 5% khi thanh toán online",
        }
    ]
    return (
        <div className="col-span-1 flex flex-col gap-2 sm:hidden md:hidden lg:hidden xl:flex 2xl:flex">
            <div className="flex flex-col gap-2">
                {benefits.map((benefit, index) => (
                    <div className="flex items-center gap-2 border  p-3 rounded-sm" key={index}>
                        {benefit.icon}
                        {benefit.title}
                    </div>
                ))}
            </div>
            <Link href="/"><Image src="/banner-product-detail.png" alt="" className="w-full h-auto object-cover rounded-md"
                width={100000} height={100000}
            /></Link>
        </div>
    )
}

export default ProductBenefits;
