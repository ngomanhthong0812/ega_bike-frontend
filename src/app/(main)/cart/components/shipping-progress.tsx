export const ShippingProgress = () => {
    return (
        <>
            <div className="item-center gap-2">
                <p className="relative bg-[#dae1e8] flex-1 h-[7px] rounded-md">
                    <span className="absolute top-0 left-0 bg-[#5bb72e] w-[80%] h-[7px] rounded-md"></span>
                </p>
                <span className="text-[#5bb72e] font-[500]">80%</span>
            </div>
            <p className="text-sm">Bạn cần mua thêm <span className="text-[#eb3030] font-[500]">1.010.000₫</span> nữa để được Freeship</p>
        </>
    );
} 