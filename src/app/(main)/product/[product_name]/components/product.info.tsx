"use client"
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa"
import { GrNext } from "react-icons/gr";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { DiscountsSheet } from "../../../../../components/discounts.sheet";
import { AddToCardSuccessModal } from "../../../../../components/modals/add_to_card_success.modal";
import Image from "next/image";
import { getDiscounts } from "@/services/discount-service";
import useFormatPrice from "@/hooks/useFormatPrice";

interface IProps {
    product: Product
}
const ProductInfo = ({ product }: IProps) => {
    const [openDiscounts, setOpenDiscounts] = useState(false);
    const [openAddToCardSuccess, setOpenAddToCardSuccess] = useState(false);
    const [count, setCount] = useState(1);
    const [discounts, setDiscounts] = useState<Discount[]>([]);
    const { formatPrice } = useFormatPrice();

    useEffect(() => {
        const fetchDiscounts = async () => {
            const discounts = await getDiscounts();
            setDiscounts(discounts);
        }
        fetchDiscounts();
    }, [])

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
            <h1 className="font-[600] text-[25px]">{product?.name}</h1>
            <div className="text-primary flex gap-1">
                {Array.from({ length: product?.rating }).map((_, index) => (
                    <FaStar key={index} size={18} />
                ))}
                {Array.from({ length: 5 - product?.rating }).map((_, index) => (
                    <FaRegStar key={index} size={18} />
                ))}
            </div>
            <div className="flex gap-2 text-[15px] mt-2">
                <span>Thương hiệu: {product?.brand?.brand_name || 'Đang cập nhật'}</span>
                <span>Mã sản phẩm: {product?.sku || 'Đang cập nhật'}</span>
            </div>
            <div className="flex flex-col leading-5">
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-[#EB3030] font-[600] text-[20px]">{formatPrice(product?.discount_price || product?.price)}</span>
                    {product?.discount_price &&
                        <div className="flex items-center gap-2">
                            <span className="text-[#666666] text-[16px] line-through">{formatPrice(product?.price)}</span>
                            <span className="item-center bg-[#EB3030] text-white p-[6px] py-[3px] text-sm rounded-full">
                                {((product?.price - product?.discount_price) / product?.price * 100).toFixed(0)}%
                            </span>
                        </div>
                    }
                </div>
                {product?.discount_price &&
                    <div className="text-[15px]">(Tiết kiệm: <span className="text-[#EB3030]">{formatPrice(product?.price - product?.discount_price)}</span> )</div>
                }
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
                    {discounts.map((discount, index) => (
                        index < 4 && <div key={discount.discount_id} className="discount-product-detail-item"><span>{discount.code}</span></div>
                    ))}
                    <GrNext size={17} />
                </div>
                <DiscountsSheet
                    open={openDiscounts}
                    setOpen={setOpenDiscounts}
                    discounts={discounts} />
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