import Link from "next/link"

const Login = () => {
    return (
        <div className="layout-container flex items-center justify-center !pt-10 !pb-20">
            <div className="w-[500px] p-8 border border-gray-300 rounded-lg">
                <h1 className="text-2xl font-semibold text-center mb-6">Đăng nhập</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Nhập email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mật khẩu</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition-opacity"
                    >
                        Đăng nhập
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Bạn chưa có tài khoản?{" "}
                        <Link href="/register" className="text-primary font-medium hover:underline">
                            Đăng ký ngay
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login