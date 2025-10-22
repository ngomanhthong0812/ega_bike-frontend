import Image from "next/image"
import { MdOutlineInfo } from "react-icons/md"
import CouponStatusButton from "./coupon.status.button"

interface IProps {
    data: Discount
}

const CouponCard: React.FC<IProps> = ({ data }) => {
    // Chuyển đổi date thành định dạng ngày "dd/mm/yyyy"
    const formatDate = (date: string) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="flex">
            <div className="coupon-card_left bg-white p-[6px] pl-[13px] rounded-r-2xl rounded-l-lg item-center">
                <Image src={data.thumbnail} alt="" width={100000} height={100000} className="min-w-[40px] max-w-[40px] h-auto" />
            </div>
            <div className="coupon-card_right flex flex-col flex-1 justify-between bg-white text-[13px] text-[#999] p-2 pb-3 rounded-2xl">
                <div className="flex justify-between gap-3">
                    <div>
                        <h3 className="uppercase text-base font-[600] text-black line-clamp-1">{data.name}</h3>
                        <p className="text-[#727272] line-clamp-2">{data.description}</p>
                    </div>
                    <MdOutlineInfo size={20} className="text-black" />
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p>Mã: <span className="text-[#434343]">{data.code}</span></p>
                        <p>HSD: {formatDate(data.end_date)}</p>
                    </div>
                    <CouponStatusButton is_active={data.is_active} code={data.code} />
                </div>
            </div>
        </div>
    )
}
export default CouponCard