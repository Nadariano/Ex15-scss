export default function Cards() {
    let img1 = 'https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(1).jpg'
    let img2 = 'https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(7).jpg'
    return (
        <div className="cards">
            <div className="card">
                <img src={img1} alt="" />
                <div className="card_content">
                    <h2 className="card_title"> FPT UNIVERSITY</h2>
                    <p className="card_description">D1 Street, Saigon Hi-tecch Park, Long Thanh My Ward,
                        Thu Duc City, Ho Chi Minh City</p>
                </div>
            </div>
            <div className="card card_dark">
                <img src={img2} alt="" />
                <div className="card_content">
                    <h2 className="card_title"> CONTACT</h2>
                    <p className="card_description">
                        Copyright &copy; FPT University 2023
                        (028) 7300 5588
                        daihoc.hcmc@fpt.edu.vn
                    </p>
                </div>
            </div>
        </div>
    )
}
