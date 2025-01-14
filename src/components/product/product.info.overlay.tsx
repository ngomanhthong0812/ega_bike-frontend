import { v4 } from "uuid"
import Image from "next/image"
import ButtonSeeMore from "../button/button.see.more"

const ProductInfoOverlay = () => {
    const productInfoOverlayList = [
        {
            id: v4(),
            title: 'XTOURING Full Frame',
            link: '#',
            imgUrl: '/lookbook_1_image.webp',
        },
        {
            id: v4(),
            title: 'XTOURING Accessory',
            link: '#',
            imgUrl: '/lookbook_2_image.webp',
        },
        {
            id: v4(),
            title: 'XTOURING Dry Bag',
            link: '#',
            imgUrl: '/lookbook_3_image.webp',
        }
    ]
    return (
        <div className="pt-24">
            <h1 className="uppercase flex justify-center text-[28px] font-[600] pb-5 gap-2 hover:text-blue-700 duration-100">
                BIKEPACKING EQUIPMENT
            </h1>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                {productInfoOverlayList.map(item => (
                    <div key={item.id} className="flex-1">
                        <Image src={item.imgUrl} alt="" width={100000} height={100000} className="w-full h-[494px] mb-7" />
                        <div className="flex justify-center"><h3 className="text-[23px] mb-1">{item.title}</h3></div>
                        <ButtonSeeMore title="Xem chi tiết" url={item.link} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductInfoOverlay