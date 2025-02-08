"use client"
import { useEffect, useState } from "react";
import { ChevronUp, PhoneCall } from "lucide-react";
import Link from "next/link";

const FloatingButtons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-10 right-4 flex flex-col gap-3 z-50">
            <div className="relative w-10 h-10">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={`absolute w-10 h-10 bg-yellow-400 rounded-full 
                    flex items-center justify-center shadow-lg 
                    hover:scale-110 duration-300
                    top-1/2 left-1/2 -translate-x-1/2
                     ${isVisible ? '-translate-y-1/2 visible opacity-100' : '-translate-y-20 invisible opacity-0'}
                   `}
                >
                    <ChevronUp size={24} />
                </button>
            </div>
            <Link href="#" className=" flex items-center justify-center hover:scale-110 transition">
                <img src="https://bizweb.dktcdn.net/100/521/820/themes/957130/assets/addthis-phone.svg?1736826036594" alt="Zalo" className="w-10 h-10" />
            </Link>
            <Link href="#" target="_blank" className="flex items-center justify-center hover:scale-110 transition">
                <img src="https://bizweb.dktcdn.net/100/521/820/themes/957130/assets/addthis-zalo.svg?1736826036594" alt="Zalo" className="w-10 h-10" />
            </Link>
            <Link href="#" target="_blank" className="flex items-center justify-center   hover:scale-110 transition">
                <img src="https://bizweb.dktcdn.net/100/521/820/themes/957130/assets/addthis-messenger.svg?1736826036594" alt="Messenger" className="w-10 h-10" />
            </Link>
        </div>
    );
};

export default FloatingButtons;
