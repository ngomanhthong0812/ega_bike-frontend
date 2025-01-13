import Coupons from "@/components/coupon/coupons";
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
export function DiscountsSheet({ open, setOpen }: IProps) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="!p-0">
                <SheetHeader>
                    <SheetTitle className="border-b shadow-sm text-center py-2 text-[16px]">Mã giảm giá</SheetTitle>
                </SheetHeader>
                <div className="flex items-center justify-center mt-3">
                    <Coupons col={1} />
                </div>
            </SheetContent>
        </Sheet>
    )
}
