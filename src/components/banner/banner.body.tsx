import Image from "next/image"
import Link from "next/link"

const BannerBody = () => {
    return (
        <div className="pt-24">
            <div className="flex gap-6">
                <Link href={"#"} className="flex-1 truncate">
                    <Image src="/bento_grid_item_1_img.webp" alt="" width={100000} height={100000} className="w-full h-full object-cover scale-105 hover:scale-110 duration-300" />
                </Link>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex gap-6">
                        <Link href={"#"} className="truncate">
                            <Image src="/bento_grid_item_2_img.webp" alt="" width={100000} height={100000} className="w-full h-full object-cover scale-105 hover:scale-110 duration-300" />
                        </Link>
                        <Link href={"#"} className="truncate">
                            <Image src="/bento_grid_item_3_img.webp" alt="" width={100000} height={100000} className="w-full h-full object-cover scale-105 hover:scale-110 duration-300" />
                        </Link>
                    </div>
                    <Link href={"#"} className="truncate">
                        <Image src="/bento_grid_item_4_img.webp" alt="" width={100000} height={100000} className="w-full h-full object-cover scale-105 hover:scale-110 duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerBody