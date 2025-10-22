'use client'
import Image from "next/image"
import { toast } from "react-toastify"
interface IProps {
    is_active: boolean
    code: string
}
const CouponStatusButton: React.FC<IProps> = ({ is_active, code }) => {
    const handleCopy = () => {
        toast.success('Đã copy mã giảm giá')
        navigator.clipboard.writeText(code);
    }
    return (
        is_active ?
            <button
                onClick={handleCopy}
                className="bg-[#372720] text-white px-2 py-[5px] text-xs hover:shadow-md hover:shadow-[#7f5c4d] duration-100">Sao chép</button>
            :
            <Image src='/outdated.webp' alt="" width={100000} height={100000} className="w-[50px] h-auto" />
    )
}

export default CouponStatusButton
