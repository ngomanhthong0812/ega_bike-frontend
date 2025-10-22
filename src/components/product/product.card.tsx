"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { QuickViewModal } from "../modals/quick.view.modal";
import { AddToCardSuccessModal } from "../modals/add_to_card_success.modal";
import useFormatPrice from "@/hooks/useFormatPrice";
import useNormalizeProductName from "@/hooks/useNormalizeProductName";
interface IProps {
    isQuantitySold?: boolean,
    product: Product
}
const ProductCard: React.FC<IProps> = ({ isQuantitySold = true, product }) => {
    const [openQuickViewModal, setOpenQuickViewModal] = useState<boolean>(false);
    const [openAddToCardSuccess, setOpenAddToCardSuccess] = useState(false);
    const { formatPrice } = useFormatPrice();
    const { normalizeProductName } = useNormalizeProductName();

    return (
        <div>
            <div
                className="relative group p-1 product-card_img truncate w-full aspect-square">
                <Link href={`/product/${normalizeProductName(product?.name)}`}>
                    <Image
                        width={100000}
                        height={100000}
                        className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-300 ease-linear opacity-100 group-hover:opacity-0 group-hover:scale-95"
                        src={product?.product_images[0]?.url || '/placeholder.jpg'}
                        alt="primary image"
                    />
                    <Image
                        width={100000}
                        height={100000}
                        className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-300 ease-linear opacity-0 group-hover:opacity-100 group-hover:scale-90"
                        src={product?.product_images[1]?.url || '/placeholder.jpg'}
                        alt="hover image"
                    />
                </Link>
                <div className="option absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-[70px] flex shadow-sm shadow-[#e6e6e6] bg-white rounded-md duration-300 group-hover:translate-y-0">
                    <span className="add-cart p-4 border-r border-[#f4f4f4] hover:bg-[#f4f4f4] cursor-pointer rounded-l-md duration-150"
                        onClick={() => setOpenAddToCardSuccess(true)}>
                        <span>Thêm vào giỏ</span>
                        <FiShoppingCart className="fill-black" />
                    </span>
                    <span className="quick-view p-4 hover:bg-[#f4f4f4] cursor-pointer rounded-r-md duration-150"
                        onClick={() => setOpenQuickViewModal(true)}>
                        <span>Xem nhanh</span>
                        <FaEye />
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-2">
                <span className="text-[#969696] text-sm">{product?.brand?.brand_name || 'Đang cập nhật'}</span>
                <Link href={`/product/${normalizeProductName(product?.name)}`} className="text-black font-[600] hover:text-blue-700 duration-75 line-clamp-1">{product.name}</Link>
                <div className="text-primary flex gap-1">
                    {Array.from({ length: product?.rating }).map((_, index) => (
                        <FaStar key={index} size={18} />
                    ))}
                    {Array.from({ length: 5 - product?.rating }).map((_, index) => (
                        <FaRegStar key={index} size={18} />
                    ))}
                </div>
                <span className="text-[#EB3030] font-[600]">{formatPrice(product?.discount_price || product?.price)}</span>
                {product?.discount_price &&
                    <div className="flex items-center gap-2">
                        <span className="text-[#666666] text-sm line-through">{formatPrice(product.price)}</span>
                        <span className="item-center bg-[#EB3030] text-white p-[6px] py-[3px] text-xs rounded-full">
                            {((product?.price - product?.discount_price) / product?.price * 100).toFixed(0)}%
                        </span>
                    </div>
                }
                <div className="grid grid-cols-8 gap-2">
                    <div className="border cursor-pointer item-center">
                        <Image
                            width={100000}
                            height={100000}
                            src="https://bizweb.dktcdn.net/thumb/grande/100/521/820/products/2-3-4a49ba5f8a06422d9bbd84ec7d4f3a8c-large.jpg?v=1721810485640"
                            alt=""
                            className="w-[25px] h-auto" />
                    </div>
                    <div className="border border-black cursor-pointer item-center">
                        <Image
                            width={100000}
                            height={100000}
                            src="https://bizweb.dktcdn.net/thumb/grande/100/521/820/products/2-3-4a49ba5f8a06422d9bbd84ec7d4f3a8c-large.jpg?v=1721810485640"
                            alt=""
                            className="w-[25px] h-auto" />
                    </div>
                    <div className="border cursor-pointer item-center">
                        <Image
                            width={100000}
                            height={100000}
                            src="https://bizweb.dktcdn.net/thumb/grande/100/521/820/products/2-3-4a49ba5f8a06422d9bbd84ec7d4f3a8c-large.jpg?v=1721810485640"
                            alt=""
                            className="w-[25px] h-auto" />
                    </div>
                </div>
                {!product?.discount_price && (
                    <Image src="/promo_tag_2.webp" alt="" width={100} height={100} className="w-[100px] h-auto mt-[2px]" />
                )}
                {isQuantitySold
                    &&
                    <div className="mt-2">
                        <p className="text-[14px]">Vừa mở bán</p>
                        <div className="relative bg-[#e9ecef] h-[5px] rounded-md mt-1">
                            <p className="absolute top-0 left-0 w-[10%] h-full bg-[#d62626] rounded-md"></p>
                        </div>
                    </div>
                }
            </div>

            <AddToCardSuccessModal
                open={openAddToCardSuccess}
                setOpen={setOpenAddToCardSuccess} />
            <QuickViewModal
                open={openQuickViewModal}
                setOpen={setOpenQuickViewModal}
                product={product}
                url={`/product/${normalizeProductName(product?.name)}`} />
        </div>
    )
}

export default ProductCard