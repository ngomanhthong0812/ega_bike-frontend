const Register = () => {
    return (
        <div className="layout-container flex items-center justify-center !pt-10 !pb-20">
            <div className="w-[500px] p-8 border border-gray-300 rounded-lg">
                <h1 className="text-2xl font-semibold text-center mb-6">Đăng ký tài khoản</h1>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Họ</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                                placeholder="Nhập họ"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Tên</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                                placeholder="Nhập tên"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                        <input
                            type="tel"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Nhập số điện thoại"
                        />
                    </div>
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
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register