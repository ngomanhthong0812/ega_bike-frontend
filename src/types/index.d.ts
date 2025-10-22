interface Category {
    category_id: number;
    name: string;
    description: string;
    image: string;
    productCount: string;
}

interface Discount {
    discount_id: number;
    name: string;
    code: string;
    description: string;
    discount_type: string;
    discount_value: number;
    start_date: string;
    end_date: string;
    min_order_value: number
    max_discount: number,
    is_active: boolean,
    thumbnail: string;
    discount_conditions: DiscountCondition[];
}

interface DiscountCondition {
    discount_condition_id: number;
    condition_type: string;
    condition_value: number;
}

interface Product {
    product_id: number;
    name: string;
    description: string;
    price: number;
    discount_price: number;
    rating: number;
    stock_quantity: number;
    created_at: string;
    sku: string;
    category: Category;
    brand: Brand;
    product_images: ProductImage[];
    product_variants: ProductVariant[];
}

interface Brand {
    brand_id: number;
    brand_name: string;
    description: string;
    logo_url: string;
    created_at: string;
}

interface ProductImage {
    product_image_id: number;
    url: string;
}

interface ProductVariant {
    product_variant_id: number;
    variant_name: string;
    variant_value: string;
    price: number;
    stock_quantity: number;
    image_url: string;
}





