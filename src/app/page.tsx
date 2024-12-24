import Banner from "@/components/banner";
import Coupons from "@/components/coupon/coupons";
import ProductCategories from "@/components/product.categories";
import ProductDiscountList from "@/components/product/product.discount.list";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="layout-container">
        <ProductCategories />
        <Coupons />
        <ProductDiscountList />
      </div>
    </main>
  );
}
