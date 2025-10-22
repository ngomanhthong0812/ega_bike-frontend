export const getStaticProps = async () => {
    return { props: {} };
};

const PolicyTabsItem = () => {
    return (
        <div className="py-10 max-w-[900px] m-auto">
            <div className="flex flex-col gap-4">
                <p>EGA Bike cam kết mang đến trải nghiệm mua sắm tiện lợi và nhanh chóng cho khách hàng thông qua chính sách giao hàng linh hoạt và chuyên nghiệp. Dưới đây là các thông tin chi tiết về chính sách giao hàng của chúng tôi:</p>
                <div className="pl-6">
                    <h3 className="font-[600] text-[16px]">1. Phạm vi giao hàng:</h3>
                    <ul className="list-disc pl-8">
                        <li>EGA Bike cung cấp dịch vụ giao hàng trên toàn quốc, bao gồm cả các khu vực thành thị và nông thôn</li>
                    </ul>
                </div>

                <div className="pl-6">
                    <h3 className="font-[600] text-[16px]">2. Thời gian giao hàng</h3>
                    <ul className="list-disc pl-8">
                        <li>Nội thành: Đối với các đơn hàng trong nội thành, thời gian giao hàng từ 1-2 ngày làm việc.</li>
                        <li>Ngoại thành và tỉnh khác: Thời gian giao hàng từ 3-5 ngày làm việc, tùy thuộc vào khoảng cách và điều kiện vận chuyển</li>
                    </ul>
                </div>

                <div className="pl-6">
                    <h3 className="font-[600] text-[16px]">3. Phí giao hàng</h3>
                    <ul className="list-disc pl-8">
                        <li>Nội thành: Miễn phí giao hàng cho các đơn hàng có giá trị từ 500.000 VNĐ trở lên. Đối với các đơn hàng dưới 500.000 VNĐ, phí giao hàng sẽ được tính theo khu vực.</li>
                        <li>Ngoại thành và tỉnh khác: Phí giao hàng sẽ được tính dựa trên trọng lượng, kích thước của sản phẩm và khoảng cách giao hàng. Khách hàng sẽ được thông báo phí giao hàng cụ thể trước khi xác nhận đơn hàng.</li>
                    </ul>
                </div>

                <div className="pl-6">
                    <h3 className="font-[600] text-[16px]">4. Đóng gói sản phẩm</h3>
                    <ul className="list-disc pl-8">
                        <li>Sản phẩm được đóng gói cẩn thận, chắc chắn an toàn trong quá trình vận chuyển. Đối với các sản phẩm dễ vỡ hoặc có giá trị cao, chúng tôi sẽ có biện pháp bảo vệ đặc biệt.</li>
                    </ul>
                </div>

                <div className="pl-6">
                    <h3 className="font-[600] text-[16px]">5. Theo dõi đơn hàng</h3>
                    <ul className="list-disc pl-8">
                        <li>Khách hàng có thể theo dõi tình trạng đơn hàng thông qua mã vận đơn được cung cấp sau khi đơn hàng được xử lý. Chúng tôi sẽ gửi thông tin này qua email hoặc tin nhắn SMS.</li>
                    </ul>
                </div>

                <div className="pl-6">
                    <h3 className="font-[600] text-[16px]">6. Chính sách đổi trả</h3>
                    <ul className="list-disc pl-8">
                        <li>Trong trường hợp sản phẩm bị hư hỏng, sai sót hoặc không đúng với đơn đặt hàng, khách hàng có thể yêu cầu đổi trả trong vòng 7 ngày kể từ ngày nhận hàng. EGA Bike sẽ hỗ trợ chi phí vận chuyển cho các đơn hàng đổi trả do lỗi từ phía chúng tôi.</li>
                    </ul>
                </div>

                <div className="pl-6">
                    <h3 className="font-[600] text-[16px]">7. Liên hệ hỗ trợ</h3>
                    <ul className="list-disc pl-8">
                        <li>Nếu có bất kỳ thắc mắc hoặc yêu cầu hỗ trợ về vấn đề giao hàng, khách hàng có thể liên hệ với đội ngũ chăm sóc khách hàng của EGA Bike qua số điện thoại hoặc email. Chúng tôi luôn sẵn sàng hỗ trợ bạn.</li>
                    </ul>
                </div>
                <p>Chúng tôi mong muốn mang đến sự hài lòng tuyệt đối cho khách hàng qua từng đơn hàng. Hãy tin tưởng và lựa chọn EGA Bike cho những chuyến đạp xe của bạn!</p>
            </div>
        </div>
    )
}

export default PolicyTabsItem;