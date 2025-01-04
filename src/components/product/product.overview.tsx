'use client'
import { IoAdd } from "react-icons/io5";

import ButtonSeeMore from "../button/button.see.more"
import { useState } from "react";

const ProductOverview = () => {
    const [info, setInfo] = useState([
        {
            active: true,
            title: 'Hệ Thống truyền động Shimano Deore T6000 30 tốc độ linh hoạt'
        },
        {
            active: false,
            title: 'Không xe hợp kim nhôm siêu nhẹ và bền bỉ'
        },
        {
            active: false,
            title: 'Phuộc trước Suntour NEX HLO 63mm êm ái'
        }
    ]);

    const setActive = (index: number) => {
        setInfo((prevInfo) =>
            prevInfo.map((item, idx) =>
                idx === index ? { ...item, active: !item.active } : item
            )
        );
    };
    return (
        <div className="pt-24 flex gap-20 sm:block md:block lg:flex xl:flex 2xl:flex">
            <div className="relative w-[62%] sm:w-full md:w-full lg:w-[60%]  xl:w-[60%] 2xl:w-[60%]">
                <img src="/lookbook_oneproduct_img.webp" alt="" />
                <button
                    onClick={() => setActive(0)}
                    className="btn-border-effect absolute item-center top-64 left-36 bg-white rounded-full w-[32px] h-[32px]">
                    <IoAdd className={`duration-200 ${info[0].active ? 'text-[25px] rotate-45' : 'text-[20px] rotate-0'}`} />
                    <span className={`absolute top-10 left-1/2 transition-transform duration-200 -translate-x-1/2 w-[250px] p-3 rounded-lg bg-white bg-opacity-85 text-start text-[15px] text-black
                        ${info[0].active ? 'scale-100 opacity-1' : 'scale-50 opacity-0'}`}>{info[0].title}</span>
                </button>
                <button
                    onClick={() => setActive(1)}
                    className="btn-border-effect absolute item-center top-16 right-64 bg-white rounded-full w-[32px] h-[32px]">
                    <IoAdd className={`duration-200 ${info[1].active ? 'text-[25px] rotate-45' : 'text-[20px] rotate-0'}`} />
                    <span className={`absolute top-10 left-1/2 transition-transform duration-200 -translate-x-1/2 w-[250px] p-3 rounded-lg bg-white bg-opacity-85 text-start text-[15px] text-black
                        ${info[1].active ? 'scale-100 opacity-1' : 'scale-50 opacity-0'}`}>{info[1].title}</span>
                </button>
                <button
                    onClick={() => setActive(2)}
                    className="btn-border-effect absolute item-center top-48 right-48 bg-white rounded-full w-[32px] h-[32px]">
                    <IoAdd className={`duration-200 ${info[2].active ? 'text-[25px] rotate-45' : 'text-[20px] rotate-0'}`} />
                    <span className={`absolute top-10 left-1/2 transition-transform duration-200 -translate-x-1/2 w-[250px] p-3 rounded-lg bg-white bg-opacity-85 text-start text-[15px] text-black
                        ${info[2].active ? 'scale-100 opacity-1' : 'scale-50 opacity-0'}`}>{info[2].title}</span>
                </button>
            </div>
            <div className="w-[38%] pt-14 pr-20 flex flex-col sm:w-full md:w-full lg:w-[40%] xl:w-[40%] 2xl:w-[40%]">
                <h1 className="font-[600] leading-9 text-[31px]">SCOTT SUB CROSS 2.0 - Lựa chọn hoàn hảo cho hành trình phượt và di chuyển trong thành phố!</h1>
                <p className="italic mt-3">Chiếc xe đạp hybrid hoàn hảo cho những ai yêu thích khám phá và di chuyển linh hoạt.
                    Với thiết kế hiện đại, cùng các tính năng vượt trội, SUB CROSS 2.0 mang đến trải nghiệm lái xe tuyệt vời trên mọi địa hình.</p>
                <div className="mt-5">
                    <h3 className="font-[600]"> Ưu điểm nổi bật:</h3>
                    <ul className="list-disc ml-8">
                        <li>Khung xe hợp kim nhôm siêu nhẹ và bền bỉ</li>
                        <li>Phuộc trước Suntour NEX HLO 63mm êm ái</li>
                        <li>Hệ thống truyền động Shimano Deore T6000 30 tốc độ linh hoạt</li>
                        <li>Khung xe hợp kim nhôm siêu nhẹ và bền bỉ</li>
                        <li>Khung xe hợp kim nhôm siêu nhẹ và bền bỉ</li>
                    </ul>
                    <div className="flex justify-start mt-4"><ButtonSeeMore title="Xem chi tiết" url="#" /></div>
                </div>
            </div>
        </div>
    )
}

export default ProductOverview