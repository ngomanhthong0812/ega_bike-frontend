"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoAddSharp, IoRemoveSharp, IoCloseOutline } from "react-icons/io5";

export const CartItems = () => {
    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count > 1) setCount(count - 1);
    }

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div className="mt-4">
            <div className="flex gap-2 items-center justify-between text-[15px]">
                <div className="flex items-center gap-2">
                    <button><IoCloseOutline size={20} /></button>
                    <Image width={100} height={100} className="object-cover"
                        src="https://bizweb.dktcdn.net/thumb/compact/100/521/820/products/wohoxtouringdrybag6-1296x-0f6eb4af893443d4b233f19bb40c6c1e.jpg" alt="" />
                    <Link href={"#"} className="hover:text-blue-700 duration-100">Túi khô XTOURING - Xám sắt tổ ong</Link>
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
    );
} 