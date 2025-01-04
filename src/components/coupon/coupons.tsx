import CouponCard from "./coupon.card";
const Coupons = () => {
    return (
        <div className="grid grid-cols-4 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
            <CouponCard />
            <CouponCard />
            <CouponCard />
            <CouponCard />
        </div>
    )
}
export default Coupons