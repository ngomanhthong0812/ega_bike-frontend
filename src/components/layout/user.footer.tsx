import { HiMapPin } from "react-icons/hi2";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const UserFooter = () => {
    return (
        <div className="bg-footer py-14">
            <div className="layout-container text-white flex gap-10 text-[15px] sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
                <div className="w-[23%] flex flex-col gap-3 sm:w-full md:w-full lg:w-[23%] xl:w-[23%] 2xl:w-[23%]">
                    <Image src="/logo-footer.webp" alt="" width={100000} height={100000} className="w-[180px] h-auto" />
                    <h1 className="text-2xl mt-1">Cửa hàng xe đạp EGA</h1>
                    <p>Cửa hàng uy tín và chất lượng, cam kết mang đến những trải nghiệm mua sắm tiện lợi và hiện đại</p>
                    <p>Mã số thuế: 12345678999</p>
                    <div className="info flex flex-col gap-2">
                        <p className="flex gap-2"><HiMapPin size={20} /> Địa chỉ: 70 Demo, Demo Demo, Demo Demo</p>
                        <p className="flex gap-2"><MdPhoneIphone size={20} /> Số điện thoại: 1111111111</p>
                        <p className="flex gap-2"><HiOutlineMail size={20} /> Email: support@gmail.vn</p>
                    </div>
                    <p>© Bản quyền thuộc về Demo | Cung cấp bởi Demo</p>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                        <div>
                            <h2 className="text-base font-[600] uppercase">Cửa hàng xe đạp EGA</h2>
                            <ul className="flex flex-col gap-3 mt-3">
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Cửa hàng</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Giới thiệu</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Liên hệ</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Câu hỏi thường gặp</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Khuyến mãi Combo</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Khuyến mãi Mua X tặng Y</Link>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-base font-[600] uppercase">Chính sách</h2>
                            <ul className="flex flex-col gap-3 mt-3">
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Chính sách giao hàng</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Điều khoản dịch vụ</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Chính sách bảo mật</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Chính sách đổi trả</Link>
                                <Link href={'#'} className="hover:text-blue-500 duration-50">Chương trình cộng tác viên</Link>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-base font-[600] uppercase">Đăng kí nhận tin</h2>
                            <ul className="flex flex-col gap-3 mt-3">
                                <p className="flex flex-col">Bạn muốn nhận khuyến mãi đặc biệt? <span>Đăng ký ngay.</span></p>
                                <div className="relative bg-white p-2 rounded-full min-w-[350px]">
                                    <input type="text" placeholder="Nhập địa chỉ email" className="outline-none text-foreground pl-2 pr-28 w-full" />
                                    <div className="absolute top-0 right-0 p-[2px] h-full">
                                        <button className="h-full px-6 rounded-full bg-footer">Đăng ký</button>
                                    </div>
                                </div>
                                <ul className="flex items-center gap-5 mt-2">
                                    <li>
                                        <Link href={'#'}><Image src="/facebook.webp" alt="" width={100000} height={100000} className="w-[33px] h-auto" /></Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}><Image src="/zalo.webp" alt="" width={100000} height={100000} className="w-[33px] h-auto" /></Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}><Image src="/instagram.webp" alt="" width={100000} height={100000} className="w-[33px] h-auto" /></Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}><Image src="/youtube.webp" alt="" width={100000} height={100000} className="w-[33px] h-auto" /></Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}><Image src="/tiktok.webp" alt="" width={100000} height={100000} className="w-[33px] h-auto" /></Link>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 py-10 flex justify-center">
                        <Link href={'#'}><Image src="/footer_trustbadge.webp" alt="" width={100000} height={100000} className="w-[260px] h-auto" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserFooter