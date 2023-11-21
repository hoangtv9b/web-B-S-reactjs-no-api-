
const Project = () => {
    return ( 
        <>
            <div className="container-fluid contact-header">
            <div className="background-dark"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="contact-title-wrap text-center">
                            <h4 className="contact-title">BẮC 9 GROUP</h4>
                            <div className="breadcumb-contact-wrap"><span className="breadcumb-contact">Trang chủ</span><span className="breadcumb-contact"> / </span>
                                <span className="breadcumb-contact">Bắc 9 Group</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="title-navbar-h4">
                                <span className="title-navbar">DỰ ÁN BẮC 9</span>
                            </h4>
                            <ul className="navbar-web">
                                <li className="nav-item"><a href="#" className="link-navbar-web">ĐẤT NỀN</a></li>
                                <li className="nav-item"><a href="#" className="link-navbar-web">CHUNG CƯ</a></li>
                                <li className="nav-item"><a href="#" className="link-navbar-web">NHÀ PHỐ</a></li>
                                <li className="nav-item"><a href="#" className="link-navbar-web">BIỆT THỰ</a></li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div className="top-list-product d-flex align-items-center ">
                                <div className="col-sm-5 d-flex align-items-center">
                                    <h2 className="trade-mark-title">BẮC 9 GROUP</h2><span className="count-product-text">(15 Sản phẩm)</span>
                                </div>
                                <div className="col-sm-7 d-flex justify-content-end">
                                    <a href="#" className="sort-product-btn">Sắp xếp<i class="fa-solid fa-caret-down"></i></a>
                                </div>
                            </div>
                            <div className="product-wrap">
                                <img src="./image/thumb_350_d-an-roman-plaza-avatar-du-an-dream-center-home.jpg" alt="" className="img-product img-product-project" />
                                <div className="product-hover product-hover-project">
                                    <a href="#" className="link-product">DỰ ÁN ROMAN PLAZA</a>
                                    <a href="#" className="product-btn">Xem chi tiết</a>
                                </div>
                            </div>
                            <div className="product-wrap">
                                <img src="./image/thumb_350_d-an-roman-plaza-avatar-du-an-dream-center-home.jpg" alt="" className="img-product img-product-project" />
                                <div className="product-hover product-hover-project">
                                    <a href="#" className="link-product">DỰ ÁN ROMAN PLAZA</a>
                                    <a href="#" className="product-btn">Xem chi tiết</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Project;