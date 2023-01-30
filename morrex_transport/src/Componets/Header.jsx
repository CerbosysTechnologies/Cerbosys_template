import React from 'react';

function Header() {
  return (
    <div>
      {/* <!-- Header Start --> */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">Safe & Faster</h1>
          <h1 className="text-white display-3 mb-5">Logistics Services</h1>
          <div className="mx-auto flexInput">
            {/* style="width: 100%; max-width: 600px;" */}
            <div className="input-group inputdiv">
              <input
                type="text"
                className="form-control border-light padin"
                // style="padding: 30px;"
                placeholder="Tracking Id"
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-3">Track & Trace</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </div>
  );
}

export default Header;
