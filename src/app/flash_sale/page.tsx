import BannerBodySale from "@/components/banner/banner.body.sale";
import Coupons from "@/components/coupon/coupons";
import ProductList from "@/components/product/product.list";
import ProductListSlider from "@/components/product/product.list.slider";
import ProductSlider from "@/components/product/product.list.slider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Flash Sale",
};

const FlashSale = () => {
    return (
        <div className="bg-[#fcf4eb] pb-36">
            <div className="layout-container">
                <div className="pt-3">
                    <BannerBodySale />
                </div>
                <div className="flex flex-col items-center justify-center pt-6">
                    <h5>Kết thúc sau</h5>
                    <div className="countdown flex items-center gap-2 font-[600] mt-2">
                        <p className="countdown-item w-10 h-10 bg-[#d3232a] text-white item-center text-lg rounded-sm">06</p>
                        <span className="text-[#d3232a]">:</span>
                        <p className="countdown-item w-10 h-10 bg-[#d3232a] text-white item-center text-lg rounded-sm">06</p>
                        <span className="text-[#d3232a]">:</span>
                        <p className="countdown-item w-10 h-10 bg-[#d3232a] text-white item-center text-lg rounded-sm">06</p>
                    </div>
                    <div className="mt-8">
                        <div className="bg-white p-2 rounded-xl">
                            <Coupons />
                        </div>
                    </div>
                </div>
                <div className="bg-white px-5 pt-3 pb-8 rounded-xl mt-24">
                    <ProductList />
                </div>
                <div className="bg-white px-5 pt-3 pb-8 rounded-xl mt-6">
                    <ProductListSlider title="Sản phẩm đã xem" isButton={false} />
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
