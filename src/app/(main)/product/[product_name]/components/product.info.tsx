"use client"
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa"
import { GrNext } from "react-icons/gr";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { DiscountsSheet } from "../../../../../components/discounts.sheet";
import { AddToCardSuccessModal } from "../../../../../components/modals/add_to_card_success.modal";
import Image from "next/image";

const ProductInfo = () => {
    const [openDiscounts, setOpenDiscounts] = useState(false);
    const [openAddToCardSuccess, setOpenAddToCardSuccess] = useState(false);
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
        <div className="col-span-2">
            <h1 className="font-[600] text-[25px]">Túi khô XTOURING - Xám sắt tổ ong Túi khô XTOURING</h1>
            <div className="text-primary flex gap-1">
                <FaStar size={18} />
                <FaStar size={18} />
                <FaRegStar size={18} />
                <FaRegStar size={18} />
                <FaRegStar size={18} />
            </div>
            <div className="flex gap-2 text-[15px] mt-2">
                <span>Thương hiệu: EGA Bike</span>
                <span>Mã sản phẩm: Đang cập nhật</span>
            </div>
            <div className="flex flex-col leading-5">
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-[#EB3030] font-[600] text-[20px]">26.599.000₫</span>
                    <div className="flex items-center gap-2">
                        <span className="text-[#666666] text-[16px] line-through">39.900.000₫</span>
                        <span className="item-center bg-[#EB3030] text-white p-[6px] py-[3px] text-sm rounded-full">-34%</span>
                    </div>
                </div>
                <div className="text-[15px]">(Tiết kiệm: <span className="text-[#EB3030]">860.000₫</span> )</div>
            </div>
            <div className="endow relative mt-8">
                <h3 className="flex gap-2 items-center font-[600] text-[15px] text-black uppercase bg-white absolute -top-1 left-4 px-2 -translate-y-1/2">
                    <Image width={10000} height={10000} src="/icon-product-promotion.webp" alt="" className="w-[20px] h-[20px]" />
                    Khuyến mãi - Ưu đãi
                </h3>
                <ul className="flex flex-col gap-1 text-[15px] border-2 border-dashed border-black rounded-sm p-5">
                    <li className="flex gap-3"><span>•</span> Nhập mã EGANY thêm 5% đơn hàng</li>
                    <li className="flex gap-3"><span>•</span> Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                    <li className="flex gap-3"><span>•</span> Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                </ul>
            </div>
            <div className="dicount-product-detail mt-4">
                <h3 className="font-[600] text-[16px]">Mã giảm giá</h3>
                <div className="flex items-center gap-2 text-[14px] uppercase mt-[7px] cursor-pointer" onClick={() => setOpenDiscounts(true)}>
                    <div className="discount-product-detail-item"><span>summer5</span></div>
                    <div className="discount-product-detail-item"><span>summer5</span></div>
                    <div className="discount-product-detail-item"><span>summer5</span></div>
                    <div className="discount-product-detail-item"><span>summer5</span></div>
                    <GrNext size={17} />
                </div>
                <DiscountsSheet open={openDiscounts} setOpen={setOpenDiscounts} />
            </div>
            <div className="mt-7 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center border">
                        <button className="py-[9px] px-4" onClick={handleDecrement}><IoRemoveSharp size={20} /></button>
                        <p className="py-[9px] w-[40px] text-center">{count}</p>
                        <button className="py-[9px] px-4" onClick={handleIncrement}><IoAddSharp size={20} /></button>
                    </div>
                    <button
                        className="border py-[9px] flex-1 border-black text-black font-[600] 
                    uppercase text-[15px] hover:bg-[#282828] hover:text-white hover:shadow-sm hover:shadow-[#6d6d6d] duration-300 "
                        onClick={() => setOpenAddToCardSuccess(true)}>
                        Thêm vào giỏ
                    </button>
                    <AddToCardSuccessModal open={openAddToCardSuccess} setOpen={setOpenAddToCardSuccess} />
                </div>
                <button
                    className="border py-[9px] border-black font-[600] 
                    uppercase text-[15px] bg-[#282828] text-white hover:shadow-sm hover:shadow-[#6d6d6d] duration-300 ">
                    Mua ngay
                </button>
            </div>
            <div className="text-center mt-3">
                Gọi đặt mua
                <span className="text-primary font-[600] hover:text-blue-700 duration-150 cursor-pointer"> 1800.0000 </span>
                (7:30 - 22:00)
            </div>
        </div>
    )
}

export default ProductInfo