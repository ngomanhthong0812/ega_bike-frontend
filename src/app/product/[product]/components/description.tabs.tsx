"use client"
import { useState } from "react";

const DescriptionTabs = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="mt-10">
            <div className="flex gap-10 text-lg text-black font-[600] border-b items-center justify-center">
                <button className={`description-tabs_item ${active === 0 ? "active" : ""}`}
                    onClick={() => setActive(0)}
                >Mô tả sản phẩm</button>
                <button className={`description-tabs_item ${active === 1 ? "active" : ""}`}
                    onClick={() => setActive(1)}
                >Chính sách giao hàng</button>
                <button className={`description-tabs_item ${active === 2 ? "active" : ""}`}
                    onClick={() => setActive(2)}
                >Chính sách đổi trả</button>
            </div>
            <div>
                {active === 0 && <div className="py-10 max-w-[900px] m-auto">
                    Mô tả sản phẩm - Đang cập nhật.
                </div>}
                {active === 1 && <div className="py-10 max-w-[900px] m-auto">
                    Chính sách giao hàng - Đang cập nhật.
                </div>}
                {active === 2 && <div className="py-10 max-w-[900px] m-auto">
                    Chính sách đổi trả - Đang cập nhật.
                </div>}
            </div>
        </div>
    )
}

export default DescriptionTabs;