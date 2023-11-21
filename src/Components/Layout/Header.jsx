import { useEffect, useState } from "react";

const Header = () => {
    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);
    const [animationState, setAnimationState] = useState("-100%");
    const [displayOutside, setDisplayOutside] = useState("none");
    useEffect(()=>{
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
    }, [])
    const btnNavbarMobileShow = () => {
        setAnimationState("0");
        setDisplayOutside("block");
    }
    const btnNavbarMobileHidden = () => {
        setAnimationState("-100%");
        setDisplayOutside("none");
    }
    return ( 
        <>
            <div className="container-fluid header-top">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <a href="/"><img src="./image/logo/1543560120-1353377866-b-c-9-group.png" alt="img-logo" className="img-logo" /></a>
                        <ul className="navbar-menu-header d-flex align-items-center">
                            <li className="nav-item"><a href="/" className="fist-link-nav"><i class="fa-solid fa-house"></i><span className="mx-2">|</span>TRANG CHỦ</a></li>
                            <li className="nav-item nav-item-hover"><a href="/gioi-thieu">GIỚI THIỆU<i class="fa-sharp fa-solid fa-caret-down ml-1"></i></a>
                                <ul className="navbar-second">
                                    <li><a href="#" className="navbar-item-second">Thương hiệu</a></li>
                                    <li><a href="#" className="navbar-item-second">Tầm nhìn sứ mệnh</a></li>
                                    <li><a href="#" className="navbar-item-second">Giá trị cốt lõi</a></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-hover"><a href="/du-an">DỰ ÁN<i class="fa-sharp fa-solid fa-caret-down ml-1"></i></a>
                                <ul className="navbar-second">
                                    <li><a href="#" className="navbar-item-second">Đất nền</a></li>
                                    <li><a href="#" className="navbar-item-second">Chung cư</a></li>
                                    <li><a href="#" className="navbar-item-second">Nhà phố</a></li>
                                    <li><a href="#" className="navbar-item-second">Biệt thự</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="/tin-tuc">TIN TỨC & SỰ KIỆN</a></li>
                            <li className="nav-item"><a href="/tuyen-dung">TUYỂN DỤNG</a></li>
                            <li className="nav-item"><a href="/lien-he">LIÊN HỆ</a></li>
                        </ul>
                        <form action="#" className="search-form">
                            <input type="search" name="" id="" className="search-input" placeholder="Từ khóa tìm kiếm" />
                            <button type="submit" className="btn-submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </div>
{/* responsive navbar */}
            <div className="container-fluid header-top-mobile">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <a href="./"><img src="./image/logo/1543560120-1353377866-b-c-9-group.png" alt="img-logo" className="img-logo-mobile" /></a>
                        <div className="header-top-mobile-second d-flex align-items-center">
                            <form action="#" className="search-form mr-3">
                                <input type="search" name="" id="" className="search-input" placeholder="Từ khóa tìm kiếm" />
                                <button type="submit" className="btn-submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                            <div className="btn-menu-mobile" onClick={btnNavbarMobileShow}><i class="fa-solid fa-bars"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="out-side-click" onClick={btnNavbarMobileHidden} style={{ height: `${windowHeight}`, display: `${displayOutside}` }}></div>
            <div className="menu-responsive"style={{ height: `${windowHeight}px`, left: `${animationState}` }}>
                <div className="title-navbar-wrap d-flex justify-content-between align-items-center">
                    <h4 className="title-navbar-mobile">MENU CHÍNH</h4>
                    <div className="btn-close-navbar" onClick={btnNavbarMobileHidden}><i class="fa-solid fa-xmark"></i></div>
                </div>
                <ul className="navbar-header-mobile">
                    <li><a href="#" className="link-navbar-mobile link-navbar-mobile-fistchild"><i class="fa-solid fa-house"></i> <span> | </span>Trang chủ</a></li>
                    <li><a href="#" className="link-navbar-mobile">Giới thiệu<i class="fa-sharp fa-solid fa-caret-down ml-1"></i></a></li>
                    <li><a href="#" className="link-navbar-mobile">Dự án<i class="fa-sharp fa-solid fa-caret-down ml-1"></i></a></li>
                    <li><a href="#" className="link-navbar-mobile">Tin tức & sự kiện</a></li>
                    <li><a href="#" className="link-navbar-mobile">Tuyển dụng</a></li>
                    <li><a href="#" className="link-navbar-mobile">Liên hệ</a></li>
                </ul>
            </div>
        </>
     );
}
 
export default Header;