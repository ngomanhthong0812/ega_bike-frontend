import * as React from "react"

import {
    Drawer,
    DrawerContent,
} from "@/components/ui/drawer"
import { IoSearchOutline } from "react-icons/io5"
import { AiOutlineUser } from "react-icons/ai"
import { LuShoppingCart } from "react-icons/lu"
import { DialogTitle } from "@radix-ui/react-dialog"
import Link from "next/link"

interface IProps {
    open: boolean
    setOpen: (open: boolean) => void
}
export function UserSearch({ open, setOpen }: IProps) {
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent>
                <DialogTitle></DialogTitle>
                <div className="mx-auto w-full max-w-[1210px]">
                    <div className="px-4 pt-10 pb-28 flex justify-between items-center gap-5">
                        <img src="/logo.webp" alt="" className="w-[180px]" />
                        <div className="flex-1 flex flex-col items-center">
                            <div className="relative">
                                <input type="text" className="w-[650px] py-3 pl-3 pr-10 outline-none rounded-full border border-black text-sm"
                                    placeholder="Tìm theo thương hiệu..." />
                                <div className="absolute h-full item-center right-[2px] py-[2px] top-1/2 -translate-y-1/2">
                                    <button className="w-[80px] h-full  flex items-center justify-center rounded-full bg-black">
                                        <IoSearchOutline size={25}
                                            className="text-[#ffffff] " />
                                    </button>
                                </div>
                            </div>
                            <ul className="flex gap-2 w-[650px] text-[#727272] mt-2 px-3">
                                <li className="text-[13px] hover:text-[#292929] duration-100"><Link href="#">Xe đạp</Link></li>
                                <li className="text-[13px] hover:text-[#292929] duration-100"><Link href="#">Phụ tùng xe đạp</Link></li>
                                <li className="text-[13px] hover:text-[#292929] duration-100"><Link href="#">Phụ tùng xe đạp</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-3">
                            <AiOutlineUser size={30} className="text-[#494949] cursor-pointer" />
                            <div className="relative">
                                <LuShoppingCart size={30} className="text-[#494949] cursor-pointer" />
                                <span className="absolute top-0 -right-2 bg-primary rounded-full w-4 h-4 item-center text-xs">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
