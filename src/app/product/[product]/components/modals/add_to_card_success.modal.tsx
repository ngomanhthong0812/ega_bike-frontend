import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image";
import Link from "next/link";

import { FaCheckCircle } from "react-icons/fa";

interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
export function AddToCardSuccessModal({ open, setOpen }: IProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-[450px] !p-0 !rounded-sm">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-1 text-[#2eb346] text-[15px] font-[400] bg-[#eff8f0] p-3 px-5 rounded-t-sm">
                        <FaCheckCircle size={15} />Thêm vào giỏ hàng thành công</DialogTitle>
                </DialogHeader>
                <div className="px-5">
                    <div className="flex gap-5 border-b">
                        <Image width={64} height={100} src="https://bizweb.dktcdn.net/thumb/small/100/521/820/products/11-1-1a1526617dea4d76a4008602b4f267ae.jpg" alt="" />
                        <p>Xe đạp đường trường Ultegra (x2)</p>
                    </div>
                    <div className="flex py-3 justify-between gap-5 border-b">
                        <p>Giỏ hàng hiện có:</p>
                        <div className="flex flex-col text-end">
                            <span className="text-[#EB3030] font-[600] text-[17px]">26.599.000₫</span>
                            <span className="text-[#666666] text-[15px]">(5) sản phẩm</span>
                        </div>
                    </div>
                </div>
                <DialogFooter className="p-3 px-5">
                    <Link href="/" className="px-3 py-2 text-center flex-1 rounded-none bg-transparent border border-black hover:bg-[#282828] hover:text-white duration-300 ">Thanh toán</Link>
                    <Link href="/" className="px-3 py-2 text-center flex-1 rounded-none bg-[#282828] text-white hover:shadow-md hover:shadow-[#6d6d6d] duration-300">Xem giỏ hàng</Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
