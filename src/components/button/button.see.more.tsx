import Link from "next/link"
import { MdOutlineNavigateNext } from "react-icons/md"
interface IProps {
    title: string,
    url: string,
}
const ButtonSeeMore: React.FC<IProps> = ({ title, url }) => {
    return (
        <div className="item-center">
            <Link href={url} className="group item-center relative uppercase border border-black py-3 px-6 font-[600] text-[15px]">
                {title} <MdOutlineNavigateNext size={20} />
                <p className="absolute bottom-0 left-0 w-full h-[4px] bg-primary duration-150 group-hover:h-full z-[-1]"></p>
            </Link>
        </div>
    )
}
export default ButtonSeeMore