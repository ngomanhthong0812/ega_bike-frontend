import React from "react";
import CouponCard from "./coupon.card";
interface IProps {
    col?: number;
    data: Discount[]
}
const Coupons: React.FC<IProps> = ({ col = 4, data }) => {
    if (data.length === 0) return <div className="text-center text-[16px]">Không có mã giảm giá</div>;
    return (
        <div className={`grid gap-5
            grid-cols-${col}
            sm:grid-cols-${col - 2}
            md:grid-cols-${col - 1} 
            lg:grid-cols-${col} 
            xl:grid-cols-${col} 
            2xl:grid-cols-${col}`}>
            {data.map((discount) => (
                <CouponCard
                    key={discount.discount_id}
                    data={discount} />
            ))}
        </div>
    )
}
export default Coupons