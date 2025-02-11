import Image from "next/image"
import Link from "next/link"

const BannerBodySale = () => {
    return (
        <Link href={"#"}>
            <Image src="/slide_product_2_img_1_img.webp" alt="" width={100000} height={100000} className="w-full h-auto hover:scale-95 duration-300" />
        </Link>
    )
}

export default BannerBodySale