import ProductImages from "./components/product.images";
import ProductInfo from "./components/product.info";
import Link from "next/link";
import ProductBenefits from "./components/product.benefits";
import ProductListSlider from "@/components/product/product.list.slider";
import DescriptionTabs from "./components/description.tabs";
import FeedbackForm from "./components/feedback.form";
import { notFound } from "next/navigation";
import useNormalizeProductName from "@/hooks/useNormalizeProductName";
import { getProducts } from "@/services/product-service";
export async function getProduct(product_name: string) {
    const products: Product[] = await getProducts();
    const { normalizeProductName } = useNormalizeProductName();

    const result = products.find((product) => {
        const normalizedName = normalizeProductName(product?.name);
        return normalizedName === product_name;
    });
    return result;
}

const ProductDetail = async ({ params }: { params: Promise<{ product_name: string }> }) => {
    const resolvedParams = await params
    const product = await getProduct(resolvedParams.product_name);
    const recentProducts: Product[] = []
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
                <span className="font-[600]">{product?.name}</span>
            </div>
            <div className="grid grid-cols-5 gap-6 mt-8  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
                <ProductImages product_images={product?.product_images} />
                <ProductInfo product={product} />
                <ProductBenefits />
            </div>
            <DescriptionTabs description={product?.description} />
            <FeedbackForm />
            {/* <div className="pt-14">
                <ProductListSlider isButton={false} title="Sản phẩm cùng loại" />
            </div> */}
            {recentProducts.length > 0 && (
                <div className="pt-14">
                    <ProductListSlider isButton={false} title="Sản phẩm cùng loại" products={recentProducts} />
                </div>
            )}
        </div>
    )
}

export default ProductDetail;