import Image from "next/image"
import Link from "next/link"

const ProductCategories = () => {
    return (
        <div className="py-24">
            <h1 className="uppercase flex justify-center text-[28px] font-[600] pb-5">Danh sách sản phẩm</h1>
            <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6">
                <Link href={"#"} className="item-center flex-col px-4 gap-2 product-categories_item">
                    <div className="product-categories_item_img py-1">
                        <Image src="https://bizweb.dktcdn.net/thumb/medium/100/521/820/themes/957130/assets/season_coll_1_img.png?1726653723228" alt="" width={100000} height={100000} className="w-full h-auto" />
                    </div>
                    <div className="item-center flex-col leading-4">
                        <p className="text-[#282828] font-[700] text-lg">Mountain bike</p>
                        <span className="text-[#888] text-[15px]">19 sản phẩm</span>
                    </div>
                </Link>
                <Link href={"#"} className="item-center flex-col px-4 gap-2 product-categories_item">
                    <div className="product-categories_item_img py-1">
                        <Image src="https://bizweb.dktcdn.net/thumb/medium/100/521/820/themes/957130/assets/season_coll_1_img.png?1726653723228" alt="" width={100000} height={100000} className="w-full h-auto" />
                    </div>
                    <div className="item-center flex-col leading-4">
                        <p className="text-[#282828] font-[700] text-lg">Mountain bike</p>
                        <span className="text-[#888] text-[15px]">19 sản phẩm</span>
                    </div>
                </Link>
                <Link href={"#"} className="item-center flex-col px-4 gap-2 product-categories_item">
                    <div className="product-categories_item_img py-1">
                        <Image src="https://bizweb.dktcdn.net/thumb/medium/100/521/820/themes/957130/assets/season_coll_1_img.png?1726653723228" alt="" width={100000} height={100000} className="w-full h-auto" />
                    </div>
                    <div className="item-center flex-col leading-4">
                        <p className="text-[#282828] font-[700] text-lg">Mountain bike</p>
                        <span className="text-[#888] text-[15px]">19 sản phẩm</span>
                    </div>
                </Link>
                <Link href={"#"} className="item-center flex-col px-4 gap-2 product-categories_item">
                    <div className="product-categories_item_img py-1">
                        <Image src="https://bizweb.dktcdn.net/thumb/medium/100/521/820/themes/957130/assets/season_coll_1_img.png?1726653723228" alt="" width={100000} height={100000} className="w-full h-auto" />
                    </div>
                    <div className="item-center flex-col leading-4">
                        <p className="text-[#282828] font-[700] text-lg">Mountain bike</p>
                        <span className="text-[#888] text-[15px]">19 sản phẩm</span>
                    </div>
                </Link>
                <Link href={"#"} className="item-center flex-col px-4 gap-2 product-categories_item">
                    <div className="product-categories_item_img py-1">
                        <Image src="https://bizweb.dktcdn.net/thumb/medium/100/521/820/themes/957130/assets/season_coll_1_img.png?1726653723228" alt="" width={100000} height={100000} className="w-full h-auto" />
                    </div>
                    <div className="item-center flex-col leading-4">
                        <p className="text-[#282828] font-[700] text-lg">Mountain bike</p>
                        <span className="text-[#888] text-[15px]">19 sản phẩm</span>
                    </div>
                </Link>
                <Link href={"#"} className="item-center flex-col px-4 gap-2 product-categories_item">
                    <div className="product-categories_item_img py-1">
                        <Image src="https://bizweb.dktcdn.net/thumb/medium/100/521/820/themes/957130/assets/season_coll_1_img.png?1726653723228" alt="" width={100000} height={100000} className="w-full h-auto" />
                    </div>
                    <div className="item-center flex-col leading-4">
                        <p className="text-[#282828] font-[700] text-lg">Mountain bike</p>
                        <span className="text-[#888] text-[15px]">19 sản phẩm</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default ProductCategories