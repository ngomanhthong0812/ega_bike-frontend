export const getStaticProps = async () => {
    return { props: {} };
};

const ReturnPolicyTabsItem = () => {
    return (
        <div className="py-10 max-w-[900px] m-auto">
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="font-[600] text-[16px]">1. Điều kiện đổi trả:</h3>
                    <p>Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:</p>
                    <ul className="list-disc pl-8">
                        <li>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
                        <li>Hàng bị hư hỏng, sai sót hoặc không đúng với đơn đặt hàng.</li>
                        <li>Hàng không đúng kích thước, màu sắc hoặc thông số kỹ thuật.</li>
                    </ul>
                    <p> Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.</p>
                </div>
                <div>
                    <h3 className="font-[600] text-[16px]">2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả:</h3>
                    <ul className="list-disc pl-8">
                        <li><span className="font-[600]">Thời gian thông báo đổi trả:</span> trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.</li>
                        <li><span className="font-[600]">Thời gian gửi chuyển trả sản phẩm:</span> trong vòng 14 ngày kể từ khi nhận sản phẩm.</li>
                        <li><span className="font-[600]">Địa điểm đổi trả sản phẩm:</span> Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.</li>
                    </ul>
                    <p> Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.</p>
                </div>
                <p>Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.</p>
            </div>
        </div>
    )
}

export default ReturnPolicyTabsItem;