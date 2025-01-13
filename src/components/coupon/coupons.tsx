import React from "react";
import CouponCard from "./coupon.card";
interface IProps {
    col?: number;
}
const Coupons: React.FC<IProps> = ({ col = 4 }) => {
    return (
        <div className={`grid grid-cols-${col} gap-5 sm:grid-cols-${col - 2} md:grid-cols-${col - 1} lg:grid-cols-${col} xl:grid-cols-${col} 2xl:grid-cols-${col}`}>
            <CouponCard />
            <CouponCard />
            <CouponCard />
            <CouponCard />
        </div>
    )
}
export default Coupons