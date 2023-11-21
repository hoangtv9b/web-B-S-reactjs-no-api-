
const Contact = () => {
    return ( 
        <>
            <div className="container-fluid contact-header">
            <div className="background-dark"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="contact-title-wrap text-center">
                            <h4 className="contact-title">LIÊN HỆ</h4>
                            <div className="breadcumb-contact-wrap"><span className="breadcumb-contact">Trang chủ</span><span className="breadcumb-contact"> / </span>
                                <span className="breadcumb-contact">Liên hệ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h4 className="title-form-contact mb-3">NHAN HOA SOFTWARE COMPANY</h4>
                            <form className="form-contact">
                                <div className="form-group">
                                    <input type="text" name="" id="" className="input-contact" placeholder="Họ và tên" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="" id="" className="input-contact" placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="" id="" className="input-contact" placeholder="Tiêu đề" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Ghi chú" className="textarea-contact"></textarea>
                                </div>
                                <button type="submit" className="btn-submit-form-contact">GỬI YÊU CẦU</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1862.2109283234154!2d105.824035!3d21.0158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7952f855d3%3A0x368ab606a7edf91a!2zUC4gVsO1IFbEg24gRMWpbmcsIMOUIENo4bujIEThu6thLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1699863964084!5m2!1svi!2sus" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;