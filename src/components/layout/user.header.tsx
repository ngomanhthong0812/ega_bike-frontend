import { USER_MENU_NAV } from "../../constants/user.menu"

import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormDown } from "react-icons/gr";
import Link from "next/link";

const UserHeader = () => {
    return (
        <div className="layout-container flex items-center gap-5">
            <Link href={'/'}><img src="/logo.webp" alt="" className="w-[180px]" /></Link>
            <nav className="flex-1 ml-14 flex items-center justify-between">
                <ul className="flex items-center">
                    {USER_MENU_NAV.map(item => (
                        <li key={item.id} className="py-5 px-4 font-[600] cursor-pointer">
                            <div className="item-center gap-2 menu-item">
                                {item.name}
                                <GrFormDown size={20} />
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="flex gap-3">
                    <div className="cursor-pointer w-8 h-8 bg-[#eee6] item-center rounded-full"><GrFormPrevious size={25} /></div>
                    <div className="cursor-pointer w-8 h-8 bg-[#eee6] item-center rounded-full"><GrFormNext size={25} /></div>
                </ul>
            </nav>
            <div className="options flex gap-3">
                <IoSearchOutline size={30} className="text-[#494949] cursor-pointer" />
                <AiOutlineUser size={30} className="text-[#494949] cursor-pointer" />
                <div className="relative">
                    <LuShoppingCart size={30} className="text-[#494949] cursor-pointer" />
                    <span className="absolute top-0 -right-2 bg-primary rounded-full w-4 h-4 item-center text-xs">0</span>
                </div>
            </div>
        </div>
    )
}
export default UserHeader