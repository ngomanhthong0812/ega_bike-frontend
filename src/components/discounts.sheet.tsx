import Coupons from "@/components/coupon/coupons";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    discounts: Discount[];
}
export function DiscountsSheet({ open, setOpen, discounts }: IProps) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="!p-0 z-[999]">
                <SheetHeader>
                    <SheetTitle className="border-b shadow-sm text-center py-2 text-[16px]">Mã giảm giá</SheetTitle>
                </SheetHeader>
                <div className="flex items-start justify-center mt-3 overflow-y-auto h-full pb-32">
                    <Coupons col={1} data={discounts} />
                </div>
            </SheetContent>
        </Sheet>
    )
}
