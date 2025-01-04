import Banner from "@/components/banner/banner";
import BannerBody from "@/components/banner/banner.body";
import BannerBodySale from "@/components/banner/banner.body.sale";
import BannerService from "@/components/banner/banner.service";
import Coupons from "@/components/coupon/coupons";
import ProductCategories from "@/components/product/product.categories";
import ProductDiscountList from "@/components/product/product.discount.list";
import ProductInfoOverlay from "@/components/product/product.info.overlay";
import ProductList from "@/components/product/product.list";
import ProductOverview from "@/components/product/product.overview";
import ThreedList from "@/components/threed.card/threed.list.module";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="layout-container">
        <ProductCategories />
        <Coupons />
        <ProductDiscountList />
        <BannerBody />
        <ProductList title="PHỤ KIỆN XE ĐẠP" />
        <ProductInfoOverlay />
        <ProductOverview />
        <BannerBodySale />
        <ProductList title="PHỤ TÙNG XE ĐẠP" />
        <ThreedList />
      </div>
      <BannerService />
    </main>
  );
}
