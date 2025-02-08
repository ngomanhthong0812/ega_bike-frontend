"use client"
import { ShippingProgress } from "./components/shipping-progress";
import { CartItems } from "./components/cart-items";
import { CartNote } from "./components/cart-note";
import { PaymentSection } from "./components/payment-section";
import dynamic from "next/dynamic";
import Link from "next/link";

const ProductSlider = dynamic(() => import("@/components/product/product.list.slider").then(mod => mod.default));

const Cart = () => {
    return (
        <div className="layout-container !pb-36">
            <div className="flex gap-1 mt-3">
                <Link href={"/"} className="font-[400] hover:text-blue-700 duration-100">Trang chủ</Link>
                <span className="font-[500]">/</span>
                <span className="font-[600]">Giỏ hàng</span>
            </div>
            <div className="mt-8">
                <h1 className="text-[30px] font-[600]">Giỏ hàng</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    <div className="lg:col-span-2 md:col-span-2">
                        <ShippingProgress />
                        <CartItems />
                        <CartNote />
                    </div>
                    <div className="lg:col-span-1 md:col-span-2">
                        <PaymentSection />
                    </div>
                </div>
            </div>
            <ProductSlider isButton={false} title="Có thể bạn sẽ thích" />
        </div>
    );
}

export default Cart;

