import axios from 'axios';
import { cookies } from 'next/headers';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_UR, // Đặt URL gốc cho tất cả các yêu cầu
    timeout: 10000, // Thời gian tối đa để chờ mỗi request (10 giây)
    headers: { 'Content-Type': 'application/json' }
});

// Interceptor Request: Xử lý trước khi gửi request
instance.interceptors.request.use(
    async (config) => {
        // Thêm Authorization token vào header nếu có
        const token = (await cookies()).get('AUTH_TOKEN');
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
        return response;
    },
    (error) => {
        // Xử lý lỗi khi server trả về response có lỗi
        if (error.response && error.response.status === 401) {
            // Ví dụ: Đăng xuất khi token hết hạn hoặc không hợp lệ
            console.log('Token hết hạn hoặc không hợp lệ!');
        }
        return Promise.reject(error);
    }
);

export default instance;
