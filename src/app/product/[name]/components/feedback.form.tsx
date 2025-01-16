"use client"
import { FaRegStar, FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { IoWarning } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FeedbackModal } from "./modals/feedback.modal";
import { useState } from "react";

const FeedbackForm = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border p-4 mt-10 rounded-[4px]">
            <h1 className="text-[30px] font-[600]">Nhận xét</h1>
            <div className="border p-5 mt-3 bg-[#80bb351a] text-center">
                <div className="flex gap-5">
                    <div className="flex flex-col gap-1">
                        <span className="text-[30px] text-[#80bb35] font-[500]">3/5</span>
                        <div className="text-primary flex gap-1 justify-center">
                            <FaStar size={18} />
                            <FaStar size={18} />
                            <FaRegStar size={18} />
                            <FaRegStar size={18} />
                            <FaRegStar size={18} />
                        </div>
                        <p className="text-[15px] font-[400]">(2 đánh giá)</p>
                        <button className="bg-[#80bb35] text-white text-[15px] font-[500] px-4 py-2 rounded-sm mt-3"
                            onClick={() => setOpen(true)}>Gửi đánh giá của bạn</button>
                    </div>
                    <div>
                        <button className="px-4 py-2 mr-3 font-[500] text-[14px] border border-[#80bb35] rounded-[4px] bg-white">Tất cả</button>
                        <button className="px-4 py-2 mr-3 font-[500] text-[14px] border rounded-[4px] bg-white">5 Điểm (1)</button>
                        <button className="px-4 py-2 mr-3 font-[500] text-[14px] border rounded-[4px] bg-white">4 Điểm (1)</button>
                        <button className="px-4 py-2 mr-3 font-[500] text-[14px] border rounded-[4px] bg-white">3 Điểm (1)</button>
                        <button className="px-4 py-2 mr-3 font-[500] text-[14px] border rounded-[4px] bg-white">2 Điểm (1)</button>
                        <button className="px-4 py-2 mr-3 font-[500] text-[14px] border rounded-[4px] bg-white">1 Điểm (1)</button>
                        <button className="px-4 py-2 mr-3 font-[500] text-[14px] border rounded-[4px] bg-white">Có hình ảnh (1)</button>
                    </div>
                </div>
                {/* <div>
                    <p className="text-[15px] font-[400]">Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này</p>
                    <button className="bg-[#80bb35] text-white text-[15px] font-[500] px-4 py-2 rounded-sm mt-3"
                        onClick={() => setOpen(true)}>Gửi đánh giá của bạn</button>
                </div> */}
            </div>
            <div className="border border-t-0 p-5">
                <div>
                    <div className="flex gap-2 items-center text-sm">
                        <span className="font-[600]">Thong</span>
                        <div className="text-primary flex gap-1 justify-center">
                            <FaStar size={13} />
                            <FaStar size={13} />
                            <FaRegStar size={13} />
                            <FaRegStar size={13} />
                            <FaRegStar size={13} />
                        </div>
                    </div>
                    <p className="text-[13px] font-[400] mt-1">Tốt</p>
                    <div className="flex gap-2 mt-1 items-center text-[15px] text-[#80bb35] font-[400]">
                        <button>Gửi trả lời</button>
                        <GoDotFill size={15} className="text-gray-400" />
                        <button className="item-center gap-1"><BiSolidLike size={18} className="fill-gray-400" />Hữu ích</button>
                        <GoDotFill size={15} className="text-gray-400" />
                        <button className="item-center gap-1"><IoWarning size={18} className="fill-gray-400" />Báo cáo sai phạm</button>
                        <GoDotFill size={15} className="text-gray-400" />
                        <span className="text-gray-400">16:31 04/10/2024</span>
                    </div>
                </div>
            </div>
            <FeedbackModal open={open} setOpen={setOpen} />
        </div>
    )
}

export default FeedbackForm;