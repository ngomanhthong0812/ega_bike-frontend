interface IProps {
    description: string;
}
const DescriptionTabsItem: React.FC<IProps> = ({ description }) => {
    return (
        <div className="py-10 max-w-[900px] m-auto">
            {description}
        </div>
    )
}

export default DescriptionTabsItem;
