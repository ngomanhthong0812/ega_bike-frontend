"use client"; // Đảm bảo chạy trên client-side

import { useState } from "react";
import NProgress from "nprogress"; // Import NProgress

// Import CSS cho NProgress
import "nprogress/nprogress.css";
import { toast } from "react-toastify";

export default function Cart() {
    const [loading, setLoading] = useState(false);

    // Hàm để thực hiện tác vụ và hiển thị thanh tiến trình
    const handleTask = async () => {
        NProgress.start(); // Bắt đầu thanh tiến trình
        toast.success("ok")
        setLoading(true); // Đặt trạng thái loading

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Giả lập tác vụ (ví dụ gọi API)
        } catch (error) {
            console.error("Có lỗi xảy ra", error);
        } finally {
            NProgress.done(); // Kết thúc thanh tiến trình
            setLoading(false); // Đặt trạng thái loading lại
        }
    };

    return (
        <div>
            <button onClick={handleTask} disabled={loading}>
                {loading ? "Đang xử lý..." : "Thực hiện tác vụ"}
            </button>
        </div>
    );
}
