import ProductImages from "./components/product.images";
import ProductInfo from "./components/product.info";
import Link from "next/link";
import ProductBenefits from "./components/product.benefits";
import ProductSlider from "@/components/product/product.list.slider";
import DescriptionTabs from "./components/description.tabs";
import FeedbackForm from "./components/feedback.form";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const products = [
        "Túi khô XTOURING - Xám sắt tổ ong",
        "Túi khô XTOURING - Đen tổ ong",
        "Túi khô XTOURING - Xanh rêu",
        "Túi khô XTOURING - Xanh navy",
        "Túi khô XTOURING - Nâu đất"
    ];
    return products.map(product => ({
        product_name: product.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd')
            .replace(/ /g, '-')
            .replace(/-+/g, '-')
    }));
}

export async function getProduct(product_name: string) {
    const products = [
        {
            id: 1,
            name: "Túi khô XTOURING - Xám sắt tổ ong",
            price: 1290000,
            description: "Túi khô chống nước cao cấp, thiết kế hiện đại",
        },
        {
            id: 2,
            name: "Túi khô XTOURING - Đen tổ ong",
            price: 1290000,
            description: "Túi khô chống nước cao cấp, thiết kế hiện đại",
        },
        {
            id: 3,
            name: "Túi khô XTOURING - Xanh rêu",
            price: 1290000,
            description: "Túi khô chống nước cao cấp, thiết kế hiện đại",
        },
        {
            id: 4,
            name: "Túi khô XTOURING - Xanh navy",
            price: 1290000,
            description: "Túi khô chống nước cao cấp, thiết kế hiện đại",
        },
        {
            id: 5,
            name: "Túi khô XTOURING - Nâu đất",
            price: 1290000,
            description: "Túi khô chống nước cao cấp, thiết kế hiện đại",
        }
    ]

    const result = products.find((product) => {
        const normalizedName = product.name.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd')
            .replace(/ /g, '-')
            .replace(/-+/g, '-');
        return normalizedName === product_name;
    });
    return result;
}

const ProductDetail = async ({ params }: { params: Promise<{ product_name: string }> }) => {
    const resolvedParams = await params
    const product = await getProduct(resolvedParams.product_name);

    if (!product) {
        notFound()
    }
    return (
        <div className="layout-container !pb-28">
            <div className="flex gap-1 mt-3">
                <Link href={"/"} className="font-[400] hover:text-blue-700 duration-100">Trang chủ</Link>
                <span className="font-[500]">/</span>
                <Link href={"/"} className="font-[400] hover:text-blue-700 duration-100">Sản phẩm nổi bật</Link>
                <span className="font-[500]">/</span>
                <span className="font-[600]">Túi khô XTOURING - Xám sắt tổ ong Túi khô XTOURING</span>
            </div>
            <div className="grid grid-cols-5 gap-6 mt-8  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
                <ProductImages />
                <ProductInfo />
                <ProductBenefits />
            </div>
            <DescriptionTabs />
            <FeedbackForm />
            <ProductSlider isButton={false} title="Sản phẩm cùng loại" />
            <ProductSlider isButton={false} title="Sản phẩm đã xem" />
        </div>
    )
}

export default ProductDetail;