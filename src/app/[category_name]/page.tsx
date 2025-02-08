import Link from "next/link"

import Coupons from "@/components/coupon/coupons"
import ProductList from "@/components/product/product.list"
import Filter from "./components/filter"
import ProductSlider from "@/components/product/product.list.slider"
import PaginationGlobal from "@/components/pagination.global"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    const categories = [
        "Xe đạp",
        "Xe đạp trẻ em"
    ]

    return categories.map(category => ({
        category_name: category.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd')
            .replace(/ /g, '-')
            .replace(/-+/g, '-')
    }))
}

export async function getCategory(category_name: string) {
    const categories = [
        {
            id: 1,
            name: "Xe đạp",
        },
        {
            id: 2,
            name: "Xe đạp trẻ em",
        },
    ]

    const result = categories.find(category => {
        const normalizedName = category.name.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd').replace(/ /g, '-')
            .replace(/-+/g, '-');
        return normalizedName === category_name
    })
    return result
}

const Products = async ({ params }: { params: Promise<{ category_name: string }> }) => {
    const resolvedParams = await params;
    const category = await getCategory(resolvedParams.category_name)

    if (!category) {
        notFound();
    }

    const sortList = [
        {
            value: 'name-asc',
            name: 'Tên A đến Z'
        },
        {
            value: 'name-desc',
            name: 'Tên Z đến A'
        },
        {
            value: 'price-asc',
            name: 'Giá tăng dần'
        },
        {
            value: 'price-desc',
            name: 'Giá giảm dần'
        },
        {
            value: 'newest',
            name: 'Hàng mới'
        },
    ]
    return (
        <div className="layout-container">
            <div className="flex gap-1 mt-3">
                <Link href={"/"} className="font-[400] hover:text-blue-700 duration-100">Trang chủ</Link>
                <span className="font-[500]">/</span>
                <span className="font-[600]">Electric bikes</span>
            </div>
            <Link href={"#"}>
                <Image src="/slide_product_2_img_1_img.webp" alt="" width={100000} height={100000} className="w-full h-auto pt-8 hover:scale-95 duration-300" />
            </Link>
            <div className="py-10">
                <Coupons />
            </div>
            <main className="mb-28">
                <div className="title flex gap-2 justify-between items-center text-foreground mb-5">
                    <h1 className="text-xl font-[400]">Electric bikes</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-[15px]">Sắp xếp:</span>
                        <select className="border border-black p-[3px]">
                            {sortList.map(item => (
                                <option key={item.value} value={item.value}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-10">
                    <Filter />
                    <div className="product col-span-3 sm:col-span-4 md:col-span-4 lg:col-span-3">
                        <ProductList col={3} />
                    </div>
                </div>
                {/* <PaginationGlobal page={1} totalPage={5} setPage={() => { }} /> */}
                <ProductSlider isButton={false} title="Sản phẩm đã xem" />
            </main>
        </div>
    )
}
export default Products