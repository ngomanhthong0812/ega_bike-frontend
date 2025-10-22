import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Đặt URL gốc cho tất cả các yêu cầu
    timeout: 10000, // Thời gian tối đa để chờ mỗi request (10 giây)
    headers: { 'Content-Type': 'application/json' }
});

// Interceptor Request: Xử lý trước khi gửi request
instance.interceptors.request.use(
    async (config) => {
        // Thêm Authorization token vào header nếu có
        const token = Cookies.get('AUTH_TOKEN');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); // Nếu có lỗi trong request
    }
);

// Interceptor Response: Xử lý khi nhận response
instance.interceptors.response.use(
    (response) => {
        // Bạn có thể xử lý dữ liệu hoặc thông báo từ server ở đây
        return response.data;
    },
    (error) => {
        if (!error.response) {
            console.error("Lỗi kết nối mạng hoặc server không phản hồi.");
            return Promise.reject({ message: "Lỗi mạng, vui lòng thử lại." });
        }

        const { status } = error.response;
        if (status === 401) {
            console.warn("🔑 Token hết hạn hoặc không hợp lệ!");
            // 🚀 Nếu có refresh token flow, thực hiện refresh ở đây
        } else if (status === 403) {
            console.warn("🚫 Không có quyền truy cập!");
        } else if (status === 404) {
            console.warn("❌ Không tìm thấy dữ liệu!");
        } else if (status === 500) {
            console.error("🔥 Lỗi server! Vui lòng thử lại sau.");
        }

        return null;
    }
);

export default instance;
