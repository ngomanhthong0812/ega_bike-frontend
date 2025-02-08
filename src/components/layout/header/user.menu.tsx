import { USER_MENU_NAV } from "@/constants/user.menu"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GrFormDown, GrFormNext, GrFormPrevious } from "react-icons/gr"

const UserMenu = () => {
    const menuRef = useRef<HTMLUListElement>(null);
    const [itemCol, setItemCol] = useState(0);
    const [itemCurrent, setItemCurrent] = useState(0);

    useEffect(() => {
        const checkVisibility = () => {
            if (!menuRef.current) return;

            const children = menuRef.current.children;

            Array.from(children).forEach((child) => {
                const childRect = (child as HTMLElement).getBoundingClientRect();
                if (childRect.bottom > 64) {
                    (child as HTMLElement).style.visibility = "hidden";
                } else {
                    (child as HTMLElement).style.visibility = "visible";
                }
            });
        };

        const observer = new ResizeObserver(() => {
            checkVisibility();
        });

        checkVisibility();

        if (menuRef.current) {
            observer.observe(menuRef.current);
        }

        return () => observer.disconnect();

    }, [itemCurrent]);

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (menuRef.current) {
                const col = Math.floor(menuRef.current.offsetHeight / 64) - 1;
                setItemCol(col);
                setItemCurrent(0);
                if (col === 0) {
                    setItemCurrent(col);
                }
            }
        });
        if (menuRef.current) {
            observer.observe(menuRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleNext = () => {
        if (itemCurrent < itemCol) {
            setItemCurrent(itemCurrent + 1);
        }
    }

    const handlePrevious = () => {
        if (itemCurrent > 0) {
            setItemCurrent(itemCurrent - 1);
        }
    }

    return (
        <nav className="flex-1 ml-14 flex items-center justify-between">
            <div className="max-h-[64px]">
                <ul className="flex flex-wrap items-center"
                    ref={menuRef}
                    style={{ transform: `translateY(-${itemCurrent * 64}px)` }}>
                    {USER_MENU_NAV.map(item => (
                        <li key={item.id} className="py-5 px-4 font-[600] cursor-pointer
                         whitespace-nowrap flex items-center">
                            <div className="group flex items-center gap-2 menu-item">
                                {item.name}
                                {item.subMenu.length > 0 && <GrFormDown size={20} />}
                                {item.subMenu.length > 0 && (
                                    <ul className={`absolute flex ${item.subMenu[0]?.subMenu?.length > 0 ? 'flex-row gap-10 sm:flex-wrap lg:flex-wrap xl:flex-nowrap sm:w-[300px] md:w-[300px] lg:w-[800px] xl:w-fit' : 'flex-col w-fit'}
                                 top-[26px] left-1/4 transform -translate-x-1/4 p-2 invisible group-hover:visible bg-white shadow-md`}>
                                        {item.subMenu.map(subItem => (
                                            <li key={subItem.id}>
                                                <Link href={subItem.link} >
                                                    <p className="text-start py-[4px] px-4 text-black hover:text-[#2f5acf]">{subItem.name}</p>
                                                </Link>
                                                <ul className="text-[#878787] text-[15px] font-[500]">
                                                    {subItem.subMenu?.map(subItem => (
                                                        <li key={subItem.id}>
                                                            <Link href={subItem.link} >
                                                                <p className="py-1 px-4 hover:text-[#ec720e]">{subItem.name}</p>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {itemCol > 0 && (
                <ul className="flex items-center gap-3 ml-2">
                    <button
                        onClick={handlePrevious}
                        className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-full
                             ${itemCurrent === 0 ? 'bg-[#f4f4f466]' : 'bg-[#eee6] hover:bg-[#eee8]'} `}>
                        <GrFormPrevious
                            size={25}
                            className={`${itemCurrent === 0 ? 'text-[#dadada]' : 'text-[#666]'}`} />
                    </button>
                    <button
                        onClick={handleNext}
                        className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-full 
                            ${itemCurrent === itemCol ? 'bg-[#f4f4f466]' : 'bg-[#eee6] hover:bg-[#eee8]'} `}>
                        <GrFormNext
                            size={25}
                            className={`${itemCurrent === itemCol ? 'text-[#dadada]' : 'text-[#666]'}`} />
                    </button>
                </ul>
            )}
        </nav>
    )
}

export default UserMenu