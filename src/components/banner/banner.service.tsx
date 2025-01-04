import { LuPhoneCall } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { SlSocialDropbox } from "react-icons/sl";
import { PiHandCoins } from "react-icons/pi";
import { v4 } from "uuid";

const BannerService = () => {
    const banners = [
        {
            id: v4(),
            title: 'Hotline: 19001993',
            content: 'Dich vụ hổ trợ bạn 24/7',
            icon: <LuPhoneCall size={40} />
        },
        {
            id: v4(),
            title: 'Quà tặng hấp dẫn',
            content: 'Nhiều ưu đãi khuyến mãi hot',
            icon: <GoGift size={40} />
        },
        {
            id: v4(),
            title: 'Đổi trả miễn phí',
            content: 'Trong vòng 7 ngày',
            icon: <SlSocialDropbox size={40} />
        },
        {
            id: v4(),
            title: 'Giá luôn tốt nhất',
            content: 'Hoàn tiền nếu nơi khác rẻ hơn',
            icon: <PiHandCoins size={40} />
        }
    ]
    return (
        <div className="mt-24 bg-primary">
            <ul className="layout-container grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
                {banners.map(banner => (
                    <li key={banner.id} className="flex items-center gap-4 py-5">
                        {banner.icon}
                        <div className="leading-6">
                            <p className="font-[600]">{banner.title}</p>
                            <span className="text-sm font-[500]">{banner.content}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default BannerService