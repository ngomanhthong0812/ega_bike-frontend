"use client"
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
import { UserSearch } from "../user.search";
import { useState } from "react";
import Image from "next/image";
import UserMenu from "./user.menu";

const UserHeader = () => {
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <div className="layout-container flex items-center gap-5">
            <Link href={'/'}><Image src="/logo.webp" alt="" width={100000} height={100000} className="w-[180px] h-auto" /></Link>
            <UserMenu />
            <div className="options flex gap-3">
                <IoSearchOutline size={30} className="text-[#494949] cursor-pointer" onClick={() => setOpenSearch(true)} />
                <div className="relative account">
                    <AiOutlineUser size={30} className="text-[#494949] cursor-pointer" />
                    <div className="account-menu-popup absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#363636] rounded-md text-white text-sm flex flex-col w-[90px] z-[999]">
                        <Link href={'/login'} className="hover:bg-[#666] duration-100 p-2 py-1 rounded-t-md">Đăng nhập</Link>
                        <Link href={'/register'} className="hover:bg-[#666] duration-100 p-2 py-1 rounded-b-md">Đăng ký</Link>
                    </div>
                    {/* <div className="account-menu-popup absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#363636] rounded-md text-white text-sm flex flex-col w-[90px] z-[999]">
                        <Link href={'/account'} className="hover:bg-[#666] duration-100 p-2 py-1 rounded-t-md">Tài khoản</Link>
                        <Link href={'/logout'} className="hover:bg-[#666] duration-100 p-2 py-1 rounded-b-md">Đăng xuất</Link>
                    </div> */}
                </div>
                <Link href={'/cart'} className="relative">
                    <LuShoppingCart size={30} className="text-[#494949] cursor-pointer" />
                    <span className="absolute top-0 -right-2 bg-primary rounded-full w-4 h-4 item-center text-xs">0</span>
                </Link>
            </div>
            <UserSearch open={openSearch} setOpen={setOpenSearch} />
        </div>
    )
}
export default UserHeader