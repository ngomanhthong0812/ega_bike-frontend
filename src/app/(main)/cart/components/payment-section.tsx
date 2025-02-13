"use client"
import { useState } from "react";
import { BiSolidDiscount } from "react-icons/bi";
import { DiscountsSheet } from "@/components/discounts.sheet";

export const PaymentSection = () => {
    const [openDiscounts, setOpenDiscounts] = useState(false);

    return (
        <div className="bg-[#f8f8f8] h-fit p-5 rounded-sm">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span className="font-[600]">3.990.000₫</span>
                </div>
                <div className="flex justify-between">
                    <span>Giảm giá:</span>
                    <span className="font-[600]">0₫</span>
                </div>
                <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span className="font-[600]">40.000₫</span>
                </div>
            </div>
            <div className="border-t mt-3 pt-3">
                <div className="flex justify-between">
                    <span>Tổng tiền:</span>
                    <div className="flex flex-col items-end">
                        <span className="text-[20px] font-[600] text-[#eb3030]">4.030.000₫</span>
                        <span className="text-[13px]">(Đã bao gồm VAT nếu có)</span>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="relative">
                    <input type="text" placeholder="Nhập mã giảm giá" className="w-full py-[10px] pl-3 pr-10 outline-none" />
                    <BiSolidDiscount onClick={() => setOpenDiscounts(true)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-[#6f6f6f]" size={20} />
                </div>
                <DiscountsSheet open={openDiscounts} setOpen={setOpenDiscounts} />
            </div>
            <button className="w-full bg-[#282828] text-white py-[10px] mt-3 font-[600] hover:shadow-sm hover:shadow-[#6d6d6d] duration-300">
                THANH TOÁN NGAY
            </button>
            <button className="w-full border border-black py-[10px] mt-3 font-[600] hover:bg-[#282828] hover:text-white hover:shadow-sm hover:shadow-[#6d6d6d] duration-300">
                TIẾP TỤC MUA HÀNG
            </button>
        </div>
    );
} 