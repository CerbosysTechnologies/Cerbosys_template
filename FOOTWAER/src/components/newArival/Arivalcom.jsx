import Heading from '../heading/Heading';
import './Arivalcom.scss';
const Arivalcom = () => {
  const data = [
    {
      img: './shoos1.png',
      para: "Men's Basketball Shoe",
      title: 'Air Jordan XXXIII',
      sno: '$115',
    },
    {
      img: './shoos1.png',
      para: 'Mens Originals',
      title: 'Yung-1 Shoes',
      sno: '$120',
    },
    {
      img: './shoos1.png',
      para: 'Classics',
      title: 'Mobius OG',
      sno: '$140',
    },
    {
      img: './shoos1.png',
      para: 'Lifestyle',
      title: 'Reebok Split Fuel',
      sno: '$80',
    },
  ];
  const items = [
    {
      img: './img1.png',
    },
    {
      img: './img2.png',
    },
    {
      img: './img3.png',
    },
    {
      img: './img4.png',
    },
    {
      img: './img5.png',
    },
  ];
  return (
    <>
      <div className="px-5 mt-5 pt-4">
        {/* <h4 className="text-center fs_w">New Arrival</h4> */}
        <Heading title="New Arrival" />
        <div className="row mt-3">
          {data &&
            data.map((curent, ind) => {
              console.log(curent.img);
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-12" key={ind}>
                    <div>
                      <img src={curent.img} alt="imggg" className="w-100" />
                      <div className="mt-3">
                        <p className="fs_s11" style={{ color: '#888888' }}>
                          {curent.para}
                        </p>
                        <h6 className="fs_w" style={{ color: '#222222' }}>
                          {curent.title}
                        </h6>
                        <h6 style={{ color: 'red' }}>{curent.sno}</h6>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className="mt-5 pt-4 px-5">
        <div className="d-flex flex-wrap justify-content-between mt-4">
          {items &&
            items.map((element, ind) => {
              return (
                <>
                  <div key={ind} className="icon_div_img">
                    <img
                      src={element.img}
                      alt={element.title}
                      className="img_icons"
                    />
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className="uper_div_img mt-5 pt-5">
        <div className="back_img_div "></div>
        <div className="right_div pe-5">
          <div>
            <p className="para">
              Nike Announce The <br></br>Free FlyKnit
            </p>
            <p>Running Sneaker</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arivalcom;
