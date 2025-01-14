"use client"
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

import { IoAddSharp, IoRemoveSharp, IoCloseOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { BiSolidDiscount } from "react-icons/bi";
import Image from "next/image";

const ProductSlider = dynamic(() => import("@/components/product/product.list.slider").then(mod => mod.default));
const DiscountsSheet = dynamic(() => import("@/components/discounts.sheet").then(mod => mod.DiscountsSheet), {
    ssr: false
});

const Cart = () => {
    const [openDiscounts, setOpenDiscounts] = useState(false);
    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div className="layout-container !pb-36">
            <div className="flex gap-1 mt-3">
                <Link href={"/"} className="font-[400] hover:text-blue-700 duration-100">Trang chủ</Link>
                <span className="font-[500]">/</span>
                <span className="font-[600]">Giỏ hàng</span>
            </div>  
            <div className="mt-8">
                <h1 className="text-[30px] font-[600]">Giỏ hàng</h1>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div className="item-center gap-2">
                            <p className="relative bg-[#dae1e8] flex-1 h-[7px] rounded-md">
                                <span className="absolute top-0 left-0 bg-[#5bb72e] w-[80%] h-[7px] rounded-md"></span>
                            </p>
                            <span className="text-[#5bb72e] font-[500]">80%</span>
                        </div>
                        <p className="text-sm">Bạn cần mua thêm <span className="text-[#eb3030] font-[500]">1.010.000₫</span> nữa để được Freeship</p>
                        <div className="mt-4">
                            <div className="flex gap-2 items-center justify-between text-[15px]">
                                <div className="flex items-center gap-2">
                                    <button><IoCloseOutline size={20} /></button>
                                    <Image
                                        width={100}
                                        height={100}
                                        className="object-cover"
                                        src="https://bizweb.dktcdn.net/thumb/compact/100/521/820/products/wohoxtouringdrybag6-1296x-0f6eb4af893443d4b233f19bb40c6c1e.jpg" alt="" />
                                    <Link href={"#"} className="hover:text-blue-700 duration-100">Túi khô XTOURING - Xám sắt tổ ong Túi khô XTOURING</Link>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[16px] font-[600] text-[#eb3030]">3.990.000₫</span>
                                    <div className="flex items-center border">
                                        <button className="py-[5px] px-3" onClick={handleDecrement}><IoRemoveSharp size={18} /></button>
                                        <p className="py-[5px] w-[30px] text-center">{count}</p>
                                        <button className="py-[5px] px-3" onClick={handleIncrement}><IoAddSharp size={18} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center justify-between text-[15px]">
                                <div className="flex items-center gap-2">
                                    <button><IoCloseOutline size={20} /></button>
                                    <Image
                                        width={100}
                                        height={100}
                                        className="object-cover"
                                        src="https://bizweb.dktcdn.net/thumb/compact/100/521/820/products/wohoxtouringdrybag6-1296x-0f6eb4af893443d4b233f19bb40c6c1e.jpg" alt="" />
                                    <Link href={"#"} className="hover:text-blue-700 duration-100">Túi khô XTOURING - Xám sắt tổ ong Túi khô XTOURING</Link>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[16px] font-[600] text-[#eb3030]">3.990.000₫</span>
                                    <div className="flex items-center border">
                                        <button className="py-[5px] px-3" onClick={handleDecrement}><IoRemoveSharp size={18} /></button>
                                        <p className="py-[5px] w-[30px] text-center">{count}</p>
                                        <button className="py-[5px] px-3" onClick={handleIncrement}><IoAddSharp size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="note mt-5">
                            <p>Ghi chú đơn hàng</p>
                            <input type="text" className="border outline-none px-2 py-3 w-full mt-1 rounded-sm" />
                        </div>
                    </div>
                    <div className="payment col-span-1 pl-8">
                        <div className="bg-[#f5f5f5] p-6">
                            <h1 className="uppercase text-[15px] font-[600]">Hẹn giờ nhận hàng</h1>
                            <div className="flex justify-between gap-5 text-[15px] mt-4">
                                <div className="flex flex-col w-full ">
                                    <span>Ngày nhận hàng</span>
                                    <input type="date" className="rounded-sm p-2 border" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <span>Ngày nhận hàng</span>
                                    <input type="time" className="rounded-sm p-2 border" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-4 font-[500]">
                                <input type="checkbox" className="w-[18px] h-[18px] " />
                                <span>Xuất hoá đơn công ty</span>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="uppercase font-[600]">Tổng cộng</p>
                                <div className="flex flex-col text-end">
                                    <span className="text-[#eb3030] text-[18px] font-[600]">1.010.000₫</span>
                                    <span className="text-[14px] text-[#666] font-[400]">(Đã bao gồm VAT nếu có)</span>
                                </div>
                            </div>
                            <div className="flex justify-between mt-3">
                                <span className="item-center gap-1"><BiSolidDiscount size={20} className="text-red-500" />Mã giảm giá</span>
                                <button className="flex items-center gap-2" onClick={() => setOpenDiscounts(true)}>Chọn mã giảm giá <GrFormNext size={20} /></button>
                                <DiscountsSheet open={openDiscounts} setOpen={setOpenDiscounts} />
                            </div>
                            <button
                                className="w-full mt-4 border py-[9px] border-black font-[600] 
                    uppercase text-[15px] bg-[#282828] text-white hover:shadow-sm hover:shadow-[#6d6d6d] duration-300 ">
                                Thanh toán
                            </button>
                            <div className="flex-1 mt-4 flex justify-center">
                                <Link href={'#'}><Image src="/footer_trustbadge.webp" alt="" width={260} height={50} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductSlider isButton={false} title="Có thể bạn sẽ thích" />
        </div>
    );
}
export default Cart;

