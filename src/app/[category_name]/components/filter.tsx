'use client'
import { useState } from "react";
import { v4 } from "uuid";

const Filter = () => {
    const [priceRanges, setPriceRanges] = useState([
        { id: v4(), label: "Giá dưới 1.000.000₫", active: false },
        { id: v4(), label: "1.000.000₫ - 2.000.000₫", active: false },
        { id: v4(), label: "2.000.000₫ - 3.000.000₫", active: false },
        { id: v4(), label: "3.000.000₫ - 5.000.000₫", active: false },
        { id: v4(), label: "5.000.000₫ - 7.000.000₫", active: false },
        { id: v4(), label: "7.000.000₫ - 10.000.000₫", active: false },
        { id: v4(), label: "Giá trên 10.000.000₫", active: false },
    ]);

    const handleSetFilterPrice = (id: string) => {
        let newPrice = [];
        newPrice = priceRanges.map(item => {
            return item.id === id ? { ...item, active: !item.active } : item
        })
        setPriceRanges(newPrice)
    }

    return (
        <div className="filter col-span-1 sm:hidden md:hidden lg:block">
            <section className="py-3 border-b border-dashed border-[#dddddd]">
                <h2 className="uppercase mb-2 text-[15px]">Thương hiệu</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 text-[14px] cursor-pointer">
                        <input type="checkbox" name="" id="" className="w-[17px]" />
                        <span>EGA Bike</span>
                    </div>
                    <div className="flex gap-2 text-[14px] cursor-pointer">
                        <input type="checkbox" name="" id="" className="w-[17px]" />
                        <span>EGA Bike</span>
                    </div>
                </div>
            </section>
            <section className="py-3 border-b border-dashed border-[#dddddd]">
                <h2 className="uppercase mb-2 text-[15px]">Mức giá</h2>
                <div className="flex flex-col gap-2">
                    {priceRanges.map((item, index) => (
                        <div key={index} className="flex gap-2 text-[14px] cursor-pointer" onClick={() => handleSetFilterPrice(item.id)}>
                            <input type="checkbox" checked={item.active} readOnly className="w-[17px]" />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Filter