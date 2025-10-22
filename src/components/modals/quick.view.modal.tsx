"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import Image from "next/image"
import Link from "next/link"

import { IoAddSharp, IoRemoveSharp } from "react-icons/io5"
import { FaRegStar, FaStar } from "react-icons/fa"
import { useState } from "react"
import useFormatPrice from "@/hooks/useFormatPrice"

interface IProps {
    open: boolean
    setOpen: (open: boolean) => void
    product: Product
    url: string
}

export const QuickViewModal: React.FC<IProps> = ({ open, setOpen, product, url }) => {
    const [count, setCount] = useState(1)
    const { formatPrice } = useFormatPrice()

    const handleDecrement = () => {
        if (count > 1) setCount(count - 1);
    }

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle></DialogTitle>
            <DialogContent className="max-w-[800px]">
                <div className="grid grid-cols-2 gap-8">
                    <div className="product-image">
                        <Image
                            src={product.product_images[0]?.url || '/placeholder.jpg'}
                            alt=""
                            width={500}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="product-info">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <div className="flex gap-2 text-[15px] mt-2">
                            <span>Thương hiệu: {product.brand?.brand_name || 'Đang cập nhật'}</span>
                            <span>Mã sản phẩm: {product.sku || 'Đang cập nhật'}</span>
                        </div>
                        <div className="text-primary flex gap-1">
                            {Array.from({ length: product.rating }).map((_, index) => (
                                <FaStar key={index} size={18} />
                            ))}
                            {Array.from({ length: 5 - product.rating }).map((_, index) => (
                                <FaRegStar key={index} size={18} />
                            ))}
                        </div>
                        <div className="price mt-4 flex items-center gap-2">
                            <span className="text-[#EB3030] font-[600] text-xl">{formatPrice(product.discount_price || product.price)}</span>
                            {product.discount_price &&
                                <span className="text-[#666666] text-sm line-through">{formatPrice(product.price)}</span>
                            }
                        </div>

                        <div className="mt-4 p-4 border-2 border-dashed">
                            <h3 className="font-semibold mb-2">🎁 KHUYẾN MÃI - ƯU ĐÃI</h3>
                            <ul className="text-sm space-y-2">
                                <li>• Nhập mã EGANY thêm 5% đơn hàng</li>
                                <li>• Miễn phí Ship cho đơn hàng từ 300.000₫</li>
                                <li>• Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                            </ul>
                        </div>

                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex items-center border">
                                <button className="py-2 px-4" onClick={handleDecrement}><IoRemoveSharp size={20} /></button>
                                <p className="py-2 w-[40px] text-center">{count}</p>
                                <button className="py-2 px-4" onClick={handleIncrement}><IoAddSharp size={20} /></button>
                            </div>
                            <button className="flex-1 bg-black text-white py-2 font-semibold hover:opacity-90">
                                THÊM VÀO GIỎ
                            </button>
                        </div>
                        <div className="text-end mt-2">
                            <Link href={url} className="text-[13px] text-blue-700">- Xem chi tiết -</Link>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
} 