import shoos from '../../assets/images/shoos.png';
import bluemen from '../../assets/images/bluemen.png';
import './Center.scss';
import Button from '../Button/Button';
const Center = () => {
  return (
    <>
      <div className="px-4">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12 p-0">
            <div className="img_div h-100">
              <img src={shoos} alt="img" className="img h-100" />

              <div className="position_rel">
                <p>Running Shoes</p>
                <h4>Nike Just Do It</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12 p-0">
            <div className="img_div_uper w-100">
              <img src={bluemen} alt="img_shoos" className="img" />

              <div className="position_left">
                <div>
                  <p className="para">
                    The Benefits<br></br>
                    Of Running
                  </p>
                  <p className="py-2">Season Off 30 - 10%.</p>
                  <div className="pt-3">
                    <Button titel="More Info" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Center;
