"use client"
import { useEffect, useState } from "react";
import { BiSolidDiscount } from "react-icons/bi";
import { DiscountsSheet } from "@/components/discounts.sheet";

import { GrFormNext } from "react-icons/gr";
import { getDiscounts } from "@/services/discount-service";

export const PaymentSection = () => {
    const [openDiscounts, setOpenDiscounts] = useState(false);
    const [issueInvoice, setIssueInvoice] = useState(false);
    const [discounts, setDiscounts] = useState<Discount[]>([]);
    useEffect(() => {
        const fetchDiscounts = async () => {
            const discounts = await getDiscounts();
            setDiscounts(discounts);
        }
        fetchDiscounts();
    }, [])

    return (
        <div className="bg-[#f8f8f8] h-fit p-5 rounded-sm">
            <div className="flex flex-col gap-3">
                <h1 className="uppercase text-[20px] font-[600]">Thanh toán</h1>
                <div className="flex justify-between">
                    <span>Số lượng sản phẩm:</span>
                    <span className="font-[600]">x4</span>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4"
                        checked={issueInvoice}
                        onChange={(e) => setIssueInvoice(e.target.checked)} />
                    <span>Xuất hoá đơn công ty</span>
                </div>
                <div className={`flex flex-col gap-4 text-[15px] ${issueInvoice ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} transition-all duration-300 overflow-hidden`}>
                    <div className="flex flex-col">
                        <label htmlFor="company_name">Tên công ty</label>
                        <input
                            type="text"
                            id="company_name"
                            placeholder="Nhập tên công ty"
                            className="w-full py-[8px] pl-3 pr-6 outline-none" />
                        {/* <span className="text-[13px] text-[#eb3030] mt-1">Bạn không được để trống trường này</span> */}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="tax_code">Mã số thuế</label>
                        <input
                            type="text"
                            id="tax_code"
                            placeholder="Nhập mã số thuế"
                            className="w-full py-[8px] pl-3 pr-6 outline-none" />
                        {/* <span className="text-[13px] text-[#eb3030] mt-1">Bạn không được để trống trường này</span> */}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address">Địa chỉ công ty</label>
                        <textarea
                            id="address"
                            placeholder="Nhập địa chỉ công ty(bao gồm Phường/Xã, Quận/Huyện, Tỉnh/Thành phố nếu có)"
                            className="w-full py-[8px] pl-3 pr-6 outline-none" />
                        {/* <span className="text-[13px] text-[#eb3030] mt-1">Bạn không được để trống trường này</span> */}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email nhận hoá đơn</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Nhập email nhận hoá đơn"
                            className="w-full py-[8px] pl-3 pr-6 outline-none" />
                        {/* <span className="text-[13px] text-[#eb3030] mt-1">Bạn không được để trống trường này</span> */}
                    </div>
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
                <div className="flex justify-between font-[500]">
                    <div className="flex items-center gap-2">
                        <BiSolidDiscount onClick={() => setOpenDiscounts(true)}
                            className=" text-[#f54949]" size={25} />
                        <span>Mã giảm giá</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setOpenDiscounts(true)}>
                        <span>Chọn mã giảm giá</span>
                        <GrFormNext size={20} />
                    </div>
                </div>
                <DiscountsSheet
                    open={openDiscounts}
                    setOpen={setOpenDiscounts}
                    discounts={discounts} />
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