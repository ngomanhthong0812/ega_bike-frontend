"use client"
import { useState } from "react";
import PolicyTabsItem from "./tabs/policy";
import ReturnPolicyTabsItem from "./tabs/return-policy";
import DescriptionTabsItem from "./tabs/description";
interface IProps {
    description: string;
}
const DescriptionTabs: React.FC<IProps> = ({ description }) => {
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
                {active === 0 && <DescriptionTabsItem description={description} />}
                {active === 1 && <PolicyTabsItem />}
                {active === 2 && <ReturnPolicyTabsItem />}
            </div>
        </div>
    )
}

export default DescriptionTabs;

