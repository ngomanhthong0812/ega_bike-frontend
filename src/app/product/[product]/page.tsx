'use client'
import { useParams } from "next/navigation";
import ProductImages from "./components/product.images";
import ProductInfo from "./components/product.info";
import Link from "next/link";
import ProductBenefits from "./components/product.benefits";
import ProductSlider from "@/components/product/product.list.slider";

const ProductDetail = () => {
    const params = useParams();
    return (
        <div className="layout-container !pb-28">
            <div className="flex gap-1 mt-3">
                <Link href={"/"} className="font-[400] hover:text-blue-700 duration-100">Trang chủ</Link>
                <span className="font-[500]">/</span>
                <Link href={"/"} className="font-[400] hover:text-blue-700 duration-100">Sản phẩm nổi bật</Link>
                <span className="font-[500]">/</span>
                <span className="font-[600]">Túi khô XTOURING - Xám sắt tổ ong Túi khô XTOURING</span>
            </div>
            <div className="grid grid-cols-5 gap-6 mt-8">
                <ProductImages />
                <ProductInfo />
                <ProductBenefits />
            </div>
            <ProductSlider isButton={false} title="Sản phẩm cùng loại" />
            <ProductSlider isButton={false} title="Sản phẩm đã xem" />
        </div>
    )
}

export default ProductDetail;