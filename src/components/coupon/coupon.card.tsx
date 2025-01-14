import Image from "next/image"
import { MdOutlineInfo } from "react-icons/md"

const CouponCard = () => {
    return (
        <div className="flex">
            <div className="coupon-card_left bg-white p-[6px] pl-[13px] rounded-r-2xl rounded-l-lg item-center">
                <Image src="/coupon_1_img.webp" alt="" width={100000} height={100000} className="w-[40px] h-auto" />
            </div>
            <div className="coupon-card_right bg-white text-[13px] text-[#999] p-2 pb-3 rounded-2xl">
                <div className="flex justify-between gap-3">
                    <div>
                        <h3 className="uppercase text-base font-[600] text-black">Summer - 5%</h3>
                        <p className="text-[#727272]">Giảm 5% cho tất cả xe đạp trẻ em</p>
                    </div>
                    <MdOutlineInfo size={20} className="text-black" />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p>Mã: <span className="text-[#434343]">SUMMER5</span></p>
                        <p>HSD: 30/12/2024</p>
                    </div>
                    <button className="bg-[#372720] text-white px-2 py-[5px] text-xs hover:shadow-md hover:shadow-[#7f5c4d] duration-100">Sao chép</button>
                </div>
            </div>
        </div>
    )
}
export default CouponCard