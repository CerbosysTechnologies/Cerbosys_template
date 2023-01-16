import React from 'react';

const data = [
  {
    img: './blackgirl.png',
    para: "Men's Basketball Shoe",
    title: 'Openning Branches',
    para1:
      ' Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
  },
  {
    img: './card.png',
    para: 'Mens Originals',
    title: 'Openning Branches',
    para1:
      ' Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
  },
  {
    img: './dress.png',
    para: 'Classics',
    title: 'Openning Branches',
    para1:
      ' Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
  },
];
const ResentBlog = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="">
          <p className="head text-center">RECENT BLOG</p>
          <p className="para text-center mt-4">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however<br></br> a small
            line of blind text by the name
          </p>
          <div className="row mt-5 pt-4">
            {data &&
              data.map((curent, ind) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 col-12 mt-3" key={ind}>
                      <div className="back_col_img">
                        <div className="img_uper_div">
                          <img src={curent.img} alt="img" className="w-100" />
                          <div className="yellow_div">
                            <h4>02</h4>
                            <p>MAR</p>
                          </div>
                        </div>
                        <div className="mt-4 d-flex justify-content-center align-items-center ps-5">
                          <div className="padd_divs pb-5">
                            <p className="para2">
                              Posted by:{' '}
                              <span className="span_text">Noah Henderson</span>
                            </p>
                            <p className="titel mt-2">{curent.title}</p>
                            <p className="para mt-2">{curent.para1}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <div className="backyelow_uper_div mt-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="pt-2 back_sign_up_for">
            <p>Sign Up for a Newsletter</p>
          </div>
          <div className="ms-4 pt-2">
            <input type="email" placeholder="Enter your email" />
            <button className="btn_subs">subscribs</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResentBlog;
