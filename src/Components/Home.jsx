import Slider from "react-slick";
const Home = () => {
    const PrevArrow = ({ onClick }) => (
        <div className="slider-prev" onClick={onClick}>
            <i className="fa-solid fa-angle-left"></i>
        </div>
        );
    const NextArrow = ({ onClick }) => (
        <div className="slider-next" onClick={onClick}>
            <i className="fa-solid fa-angle-right"></i>
        </div>
        );
    const slideHeader = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 3000
    }
    const sliderTradeMark = {
        slidesToShow: 5,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
            }
        ]
    }
    return ( 
        <>
            <div className="container-fluid p-0">
                <Slider {...slideHeader}>
                    <img src="./image/1544608869-1591723759-roman-plaza.jpg" alt="" className="slide-img" />
                    <img src="./image/slide-2-sl3.jpg" alt="" className="slide-img" />
                    <img src="./image/slide-3-sl2.jpg" alt="" className="slide-img" />
                </Slider>
            </div>
            <div className="container-fluid my-4">
                <div className="container">
                    <div className="nh-info-wrap text-center my-3">
                        <h2 className="NH-title"><span>VỀ CHÚNG TÔI</span></h2>
                        <div className="nh-info">Chúng tôi là Công Ty Cổ Phần Đầu Tư Bất động sản Bắc 9</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <img src="./image/custom-ve-chung-toi-hai-phat-land.png" alt="" className="img-intro" />
                            <h3 className="intro-title">Chúng tôi là ai</h3>
                            <div className="box-content-intro"> 
                                <p className="content-intro"><b>Bắc 9 </b>có đội ngũ cán bộ mang trong mình trọn vẹn nhiệt huyết của tuổi thanh xuân cùng sự sáng tạo không ngừng của những người đam mê thành công.</p>
                                <p className="content-intro content-end"> Với môi trường làm việc đa dạng, khuyến khích nhân viên nâng cao trình độ chuyên môn, chúng tôi luôn hướng tới giá trị sau cùng là phục vụ cho quý khách hàng những dịch vụ tốt nhất về Bất động sản.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <img src="./image/custom-tam-nhin-su-menh-hai-phat-land.jpg" alt="" className="img-intro" />
                            <h3 className="intro-title">Tầm nhìn và sứ mệnh</h3>
                            <div className="box-content-intro">
                                <p className="content-intro"><b>Bắc 9 </b>nỗ lực phấn đấu phát triển bền vững, trở thành doanh nghiệp hàng đầu Việt Nam trong lĩnh vực đầu tư, kinh doanh và quản lý bất động sản.</p>
                                <p className="content-intro content-end">Bắc 9 sẽ là nơi khách hàng trao gửi niềm tin trọn vẹn, là nơi người lao động cống hiến hết mình, cổ đông hoàn toàn hài lòng, và cộng đồng được hưởng nhiều lợi ích.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <img src="./image/custom-chung-toi-lam-viec-hai-phat-land.jpg" alt="" className="img-intro" />
                            <h3 className="intro-title">Chúng tôi làm việc như thế nào</h3>
                            <div className="box-content-intro">
                                <p className="content-intro">Đội ngũ <b>Bắc 9 </b> khác biệt nhờ nỗ lực và kinh nghiệm sâu rộng, đây cũng là cơ hội để chúng tôi tận dụng kiến thức đem lại lợi ích cho khách hàng.</p>
                                <p className="content-intro content-end">Siêng năng và không ngừng học hỏi, chúng tôi cùng nhau đoàn kết để làm hài lòng khách hàng nhiều nhất, từ đó đem lại thu nhập và sự thành công cho chúng tôi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid background-feild">
                <div className="container">
                    <div className="nh-info-wrap text-center pt-5 pb-2">
                        <h2 className="NH-title style-white-title"><span className="style-white">LĨNH VỰC HOẠT ĐỘNG</span></h2>
                        <div className="nh-info style-white">Lĩnh vực hoạt động chuyên nghiệp tích luỹ qua nhiều năm kinh nghiệm.</div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-4 my-3">
                            <div className="title-feild-wrap">
                                <a className="icon-span"><i class="fa-solid fa-building-columns fa-icon"></i></a>
                                <span className="title-feild">CHỦ ĐẦU TƯ BẤT ĐỘNG SẢN</span>
                                <p className="text-feild">Bắc 9 được đánh giá là CĐT uy tín trong lĩnh vực đầu tư xây dựng hiện nay, đã thành công với một số dự án bất động sản như: KĐT Tân Tây Đô, Tổ hợp The Pride, KĐT Phú Lương…</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div className="title-feild-wrap">
                                <a className="icon-span"><i class="fa-solid fa-address-book fa-icon"></i></a>
                                <span className="title-feild">test</span>
                                <p className="text-feild">Dịch vụ môi giới và tư vấn bất động sản của chúng tôi luôn luôn thấu hiểu nhu cầu, lựa chọn của khách hàng có năng lực phù hợp nhất tương ứng với mỗi loại đất bất động sản.</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div className="title-feild-wrap">
                                <a className="icon-span"><i class="fa-solid fa-address-book fa-icon"></i></a>
                                <span className="title-feild">test 1</span>
                                <p className="text-feild">Với một quy trình tư vấn chuyên nghiệp, chúng tôi sẽ giúp khách hàng cho thuê và thuê được bất đông sản đáp ứng mọi nhu cầu về nhà ở của khách hàng một cách nhanh nhất.</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div className="title-feild-wrap">
                                <a className="icon-span"><i class="fa-solid fa-address-book fa-icon"></i></a>
                                <span className="title-feild">test 2</span>
                                <p className="text-feild">Bắc 9 được đánh giá là CĐT uy tín trong lĩnh vực đầu tư xây dựng hiện nay, đã thành công với một số dự án bất động sản như: KĐT Tân Tây Đô, Tổ hợp The Pride, KĐT Phú Lương…</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div className="title-feild-wrap">
                                <a className="icon-span"><i class="fa-solid fa-address-book fa-icon"></i></a>
                                <span className="title-feild">test 3</span>
                                <p className="text-feild">Dịch vụ môi giới và tư vấn bất động sản của chúng tôi luôn luôn thấu hiểu nhu cầu, lựa chọn của khách hàng có năng lực phù hợp nhất tương ứng với mỗi loại đất bất động sản.</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <div className="title-feild-wrap">
                                <a className="icon-span"><i class="fa-solid fa-address-book fa-icon"></i></a>
                                <span className="title-feild">test 4</span>
                                <p className="text-feild">Dịch vụ môi giới và tư vấn bất động sản của chúng tôi luôn luôn thấu hiểu nhu cầu, lựa chọn của khách hàng có năng lực phù hợp nhất tương ứng với mỗi loại đất bất động sản.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5">
                <div className="container">
                    <div className="nh-info-wrap text-center my-3">
                        <h2 className="NH-title"><span>DỰ ÁN BẤT ĐỘNG SẢN</span></h2>
                        <div className="nh-info">Chúng tôi hân hạnh mang đến cho quý khách những sản phẩm đa dạng</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product-wrap">
                                <img src="./image/thumb_350_eco-ban-hang-no4-1-bia.jpg" alt="" className="img-product" />
                                <div className="product-hover">
                                    <a href="#" className="link-product">ECO-BAN HANG NO4</a>
                                    <a href="#" className="product-btn">Xem chi tiết</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-wrap">
                                <img src="./image/thumb_350_34-avatar-du-an-nha-pho-thuong-mai-24h.jpg" alt="" className="img-product" />
                                <div className="product-hover">
                                    <a href="#" className="link-product">NHÀ PHỐ THƯƠNG MAI 24H</a>
                                    <a href="#" className="product-btn">Xem chi tiết</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-wrap">
                                <img src="./image/thumb_350_33-avatar-du-an-176-dinh-cong.jpg" alt="" className="img-product" />
                                <div className="product-hover">
                                    <a href="#" className="link-product">DỰ ÁN DREAM CENTER HOME</a>
                                    <a href="#" className="product-btn">Xem chi tiết</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-wrap">
                                <img src="./image/thumb_350_d-an-sky-central-avatar-du-an-thanh-xuan-complex.jpg" alt="" className="img-product" />
                                <div className="product-hover">
                                    <a href="#" className="link-product">DỰ ÁN SKY CENTRAL</a>
                                    <a href="#" className="product-btn">Xem chi tiết</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-wrap">
                                <img src="./image/thumb_350_d-an-roman-plaza-avatar-du-an-dream-center-home.jpg" alt="" className="img-product" />
                                <div className="product-hover">
                                    <a href="#" className="link-product">DỰ ÁN ROMAN PLAZA</a>
                                    <a href="#" className="product-btn">Xem chi tiết</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-wrap">
                                <img src="./image/thumb_350_d-an-the-vesta-avatar-the-vesta.jpg" alt="" className="img-product" />
                                <div className="product-hover">
                                    <a href="#" className="link-product">DỰ ÁN THE VESTA</a>
                                    <a href="#" className="product-btn">Xem chi tiết</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid post-container py-5">
                <div className="container">
                    <div className="nh-info-wrap text-center my-3">
                        <h2 className="NH-title"><span>TIN TỨC</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="post-wrap">
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                    <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                    <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                    <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="post-wrap">
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                    <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                    <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                    <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="post-wrap">
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                    <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                    <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                                <div className="post-block d-flex">
                                    <a href="#"><img src="./image/c-nh-bao-nha-u-t-b-s-ha-n-i-gia-chung-c-ang-gi-m-tt.jpg" alt="" className="img-review" /></a>
                                    <div className="post-info-review">
                                        <div className="post-title-wrap"><a href="#"><p className="post-title-review">CẢNH BÁO NHÀ ĐẦU TƯ BĐS HÀ NỘI: GIÁ CHUNG CƯ ĐANG...</p></a></div>
                                        <p className="time-post-review">22/05/2017</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5">
                <div className="container">
                    <div className="nh-info-wrap text-center my-3">
                        <h2 className="NH-title"><span>THƯƠNG HIỆU</span></h2>
                    </div>
                    <div className="slide-trademark">
                        <Slider {...sliderTradeMark}>
                            <div className="img-trademark-wrap"><img src="./image/acer-logoacer-500x500.png" alt="" className="img-trademark" /></div>
                            <div className="img-trademark-wrap"><img src="./image/apple-apple-logo-black-svg-0.png" alt="" className="img-trademark" /></div>
                            <div className="img-trademark-wrap"><img src="./image/assus-asus-1.png" alt="" className="img-trademark" /></div>
                            <div className="img-trademark-wrap"><img src="./image/electronic-electrolux.png" alt="" className="img-trademark" /></div>
                            <div className="img-trademark-wrap"><img src="./image/tosiba-toshiba-logo.png" alt="" className="img-trademark" /></div>
                            <div className="img-trademark-wrap"><img src="./image/sony-sony.png" alt="" className="img-trademark" /></div>
                            <div className="img-trademark-wrap"><img src="./image/msi-msi-500x500.png" alt="" className="img-trademark" /></div>
                            <div className="img-trademark-wrap"><img src="./image/microsof-microsoft.png" alt="" className="img-trademark" /></div>
                            <div className="img-trademark-wrap"><img src="./image/pansonic-panasonic.png" alt="" className="img-trademark" /></div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29804.627500574035!2d105.792016!3d20.969438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad89165b4235%3A0x48c39974c8a92cbc!2zQ8O0bmcgdHkgxJHhuqd1IHTGsCBi4bqldCDEkeG7mW5nIHPhuqNuIELhuq9jIDk!5e0!3m2!1svi!2sus!4v1699795510284!5m2!1svi!2sus" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </>
     );
}
 
export default Home;