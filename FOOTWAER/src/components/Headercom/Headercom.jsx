import Button from '../Button/Button';
import './Headercom.scss';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BiBasketball } from 'react-icons/bi';
import logo from '../../assets/images/logo.png';

const Headercom = () => {
  return (
    <>
      <div className="main_uper">
        <div className="backimg"></div>
        <div className=" position_start">
          <div>
            <img src={logo} alt="img" />
          </div>
        </div>
        <div className=" position_center">
          <div>
            <p>Men's Originals</p>
            <h4>New Sneaker Fower.</h4>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-end position_div">
          <div className="d-flex justify-content-between pb-2  pt-2">
            <div className="back_icon ">
              <BsFacebook className="icon_color" />
            </div>
            <div className="back_icon_1 ms-2">
              <BiBasketball className="icon_color" />
            </div>
            <div className="back_icon_2 ms-2">
              <AiOutlineTwitter className="icon_color" />
            </div>
          </div>
          <div className="pb-2 pt-2">
            <Button titel="Show Now" />
          </div>
          <div className="pb-3  pt-2">hello</div>
        </div>
      </div>
    </>
  );
};

export default Headercom;
