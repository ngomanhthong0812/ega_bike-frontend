import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCoinInsert } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import Link from "next/link";

const ProductBenefits = () => {
    return (
        <div className="col-span-1 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 border  p-2 rounded-sm">
                    <LiaShippingFastSolid size={35} />
                    Giao hàng toàn quốc
                </div>
                <div className="flex items-center gap-2 border  p-2 rounded-sm">
                    <CiCoinInsert size={35} />
                    Tích điểm tất cả sản phẩm
                </div>
                <div className="flex items-center gap-2 border  p-2 rounded-sm">
                    <MdOutlinePayment size={35} />
                    Giảm 5% khi thanh toán online
                </div>
            </div>
            <Link href="/"><img src="/Ảnh Xe đạp Màu trắng Sở thích Đồ họa Blog.png" alt="" className="object-cover rounded-md" /></Link>
        </div>
    )
}

export default ProductBenefits;
