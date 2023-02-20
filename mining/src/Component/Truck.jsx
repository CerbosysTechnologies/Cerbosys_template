import React from 'react';
import truckImg from '../images/truck.png'
import truckImg1 from '../images/jcb.png'

const Truck = () => {
    return (
       
        
        
                <div className="truck">
                 <div className="container-fluid">
                    <div className="row">
                       <div className="col-md-6 jkhgkj">
                          <div className="truck_img1">
                             <img src={truckImg} alt="#"/>
                          </div>
                       </div>
                       <div className="col-md-6">
                          <div className="truck_img1">
                             <img src={truckImg1} alt="#"/>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
    );
};

export default Truck;