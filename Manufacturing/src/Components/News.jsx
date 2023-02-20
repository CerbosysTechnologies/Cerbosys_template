import React from 'react';
import tImg from '../Images/c1.png'
import tImg1 from '../Images/c.png'
import tImg2 from '../Images/c2.png'

const News = () => {
    return (
        <div>
          <div className='main1'>
          <h3>Latest Company News</h3>
          </div>
            <div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_5terre.jpg">
      <img src={tImg} alt="Cinque Terre" width="600" height="400"/>
    </a>
    {/* <div className="desc">Add a description of the image here</div> */}
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_forest.jpg">
      <img src={tImg1} alt="Forest" width="600" height="400"/>
    </a>
    {/* <div className="desc">Industro Reaches Agreement to Sell Baltimore Specialty Plant</div> */}
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src={tImg2} alt="Northern Lights" width="600" height="400"/>
    </a>
    {/* <div className="desc">Add a description of the image here</div> */}
  </div>
</div>
<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src={tImg} alt="Northern Lights" width="600" height="400"/>
    </a>
 
  </div>
</div>



<div className="clearfix"></div>
        </div>
    );
};

export default News;