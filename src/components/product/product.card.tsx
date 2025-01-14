import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

interface IProps {
    isQuantitySold?: boolean,
}
const ProductCard: React.FC<IProps> = ({ isQuantitySold = true }) => {
    return (
        <div>
            <div
                className="relative group p-1 product-card_img truncate w-full aspect-square">
                <Link href={"#"}>
                    <Image
                        width={100000}
                        height={100000}
                        className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-300 ease-linear opacity-100 group-hover:opacity-0 group-hover:scale-95"
                        src="https://bizweb.dktcdn.net/thumb/grande/100/521/820/products/2-3-4a49ba5f8a06422d9bbd84ec7d4f3a8c-large.jpg?v=1721810485640"
                        alt="primary image"
                    />
                    <Image
                        width={100000}
                        height={100000}
                        className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-300 ease-linear opacity-0 group-hover:opacity-100 group-hover:scale-90"
                        src="https://bizweb.dktcdn.net/thumb/grande/100/521/820/products/11-3-d30ef3382f6444c7a7d333bb0a0152fc-large.jpg?v=1721810923400"
                        alt="hover image"
                    />
                </Link>
                <div className="option absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-[70px] flex shadow-md shadow-[#e6e6e6] bg-white rounded-md duration-300 group-hover:translate-y-0">
                    <span className="add-cart p-4 border-r border-[#f4f4f4] hover:bg-[#f4f4f4] cursor-pointer rounded-l-md duration-150">
                        <span>Thêm vào giỏ</span>
                        <FiShoppingCart className="fill-black" />
                    </span>
                    <span className="quick-view p-4 hover:bg-[#f4f4f4] cursor-pointer rounded-r-md duration-150">
                        <span>Xem nhanh</span>
                        <FaEye />
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-2">
                <span className="text-[#969696] text-sm">EGA Bike</span>
                <Link href={"#"} className="text-black font-[600] hover:text-blue-700 duration-75">Xe đạp Scott Scale RC</Link>
                <div className="text-primary flex gap-1">
                    <FaStar size={18} />
                    <FaStar size={18} />
                    <FaRegStar size={18} />
                    <FaRegStar size={18} />
                    <FaRegStar size={18} />
                </div>
                <span className="text-[#EB3030] font-[600]">26.599.000₫</span>
                <div className="flex items-center gap-2">
                    <span className="text-[#666666] text-sm line-through">39.900.000₫</span>
                    <span className="item-center bg-[#EB3030] text-white p-[6px] py-[3px] text-xs rounded-full">-34%</span>
                </div>
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
        </div>
    )
}

export default ProductCard