
const Footer = () => {
    return ( 
        <>
            <div className="container-fluid footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 mt-5">
                            <div className="logo-footer-wrap text-center">
                                <img src="./image/logo/1543560120-1353377866-b-c-9-group.png" alt="" className="logo-footer-img" />
                            </div>
                            <p className="note-footer">Chúng tôi luôn đặt trí lực, tâm lực vào mỗi sản phẩm bởi chất lượng là cốt lõi, là sự hài lòng của khách hàng và là thành công của chúng tôi.</p>
                        </div>
                        <div className="col-md-3 col-12 mt-5 mb-2">
                            <h4 className="title-menu-ft">
                                THÔNG TIN LIÊN HỆ
                            </h4>
                            <p className="about-desc mt-4">
                            CÔNG TY CỔ PHẦN ĐẦU TƯ BẤT ĐỘNG SẢN BẮC 9
                            </p>
                            <div className="address-ft">
                                <p><i class="fa-solid fa-location-dot mr-2"></i>Địa chỉ: 32 Võ Văn Dũng, Đống Đa, Hà Nội</p>
                                <p><i class="fa-solid fa-phone mr-2"></i>Số điện thoại: (04) 7308 6680</p>
                                <p><i class="fa-solid fa-envelope mr-2"></i>Email: web.nhanhoa@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 mt-5 mb-2">
                            <h4 className="title-menu-ft">
                                TIN TỨC MỚI NHẤT
                            </h4>
                            <div className="link-post-ft-wrap d-block">
                                <p className="post-ft mt-3"><a href="#" className="link-post-ft"><i class="fa-solid fa-chevron-right mr-2"></i>Cảnh báo nhà đầu tư BĐS Hà Nội: Giá chung cư đang giảm!</a></p>
                                <p className="post-ft"><a href="#" className="link-post-ft"><i class="fa-solid fa-chevron-right mr-2"></i>Nhận ngay chuyến du lịch Mỹ khi mua chung cư Goldseason 47 Nguyễn Tuân</a></p>
                                <p className="post-ft"><a href="#" className="link-post-ft"><i class="fa-solid fa-chevron-right mr-2"></i>Mẹo tự chọn căn hộ chung cư hợp phong thủy</a></p>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-12 mt-5 mb-2">
                            <h4 className="title-menu-ft">
                                LỊCH LÀM VIỆC
                            </h4>
                            <p className="text-ft">Chúng tôi luôn hỗ trợ Quý khách 24/24</p>
                            <p className="hotline-ft"><i class="fa-solid fa-square-phone"></i>Hotline: 0907 12 6969</p>
                            <p className="hotline-ft"><i class="fa-solid fa-blender-phone"></i>CSKH: 024.6666.1122</p>
                            <p className="business-hours-ft">GIỜ MỞ CỬA</p>
                            <div><span className="time-ft">Thứ 2-Thứ 6: </span><span className="time-ft-span">8h00' đến 17h30'</span></div>
                            <div><span className="time-ft">Thứ 7: </span><span className="time-ft-span">8h00' đến 17h30'</span></div>
                            <div><span className="time-ft">Chủ nhật: </span><span className="time-ft-span">8h00' đến 17h30'</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <span className="copyright-text">Copyright by Web4s.com</span>
                        <div className="logo-pay-wrap d-flex justify-content-end">
                            <img src="./image/payment-support.png" alt="" className="logo-pay" />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Footer;