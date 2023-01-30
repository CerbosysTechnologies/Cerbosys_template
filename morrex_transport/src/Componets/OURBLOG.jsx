import React from 'react'
import image1 from '../img/blog-1.jpg'
import image2 from '../img/blog-2.jpg'

import user1 from '../img/user.jpg'

function OURBLOG() {
  return (
    <div>
        
            {/* <!-- Blog Start --> */}
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center pb-2">
                <h6 class="text-primary text-uppercase font-weight-bold">Our Blog</h6>
                <h1 class="mb-4">Latest From Blog</h1>
            </div>
            <div class="row">
                <div class="col-md-6 mb-5">
                    <div class="position-relative">
                        <img class="img-fluid w-100" src={image1} alt=""/>
                        <div class="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle potinfixd"
                            // style="width: 60px; height: 60px; bottom: -30px; right: 30px;"
                            >
                            <h4 class="font-weight-bold mb-n1">01</h4>
                            <small class="text-white text-uppercase">Jan</small>
                        </div>
                    </div>
                    {/* style="padding: 30px;" */}
                    <div class="bg-secondary" >
                        <div class="d-flex mb-3">
                            <div class="d-flex align-items-center">
                                {/* style="width: 40px; height: 40px;" */}
                                <img class="rounded-circle BlogsUser"  src={user1} alt=""/>
                                <a class="text-muted ml-2" href="">John Doe</a>
                            </div>
                            <div class="d-flex align-items-center ml-4">
                                <i class="far fa-bookmark text-primary"></i>
                                <a class="text-muted ml-2" href="">Web Design</a>
                            </div>
                        </div>
                        <h4 class="font-weight-bold mb-3">Kasd tempor diam sea justo dolor</h4>
                        <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                        <a class="border-bottom border-primary text-uppercase text-decoration-none" href="">Read More <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <div class="col-md-6 mb-5">
                    <div class="position-relative">
                        <img class="img-fluid w-100" src={image2} alt=""/>
                        <div class=" potinfixd position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                            // style="width: 60px; height: 60px; bottom: -30px; right: 30px;"
                            >
                            <h4 class="font-weight-bold mb-n1">01</h4>
                            <small class="text-white text-uppercase">Jan</small>
                        </div>
                    </div>
                    {/* //style="padding: 30px;" */}
                    <div class="bg-secondary" >  
                        <div class="d-flex mb-3">
                            <div class="d-flex align-items-center">
                                {/* style="width: 40px; height: 40px;" */}
                                <img class="rounded-circle BlogsUser"  src={user1}alt=""/>
                                <a class="text-muted ml-2" href="">John Doe</a>
                            </div>
                            <div class="d-flex align-items-center ml-4">
                                <i class="far fa-bookmark text-primary"></i>
                                <a class="text-muted ml-2" href="">Web Design</a>
                            </div>
                        </div>
                        <h4 class="font-weight-bold mb-3">Kasd tempor diam sea justo dolor</h4>
                        <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                        <a class="border-bottom border-primary text-uppercase text-decoration-none" href="">Read More <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
    {/* <!-- Blog End --> */}
    </div>
  )
}

export default OURBLOG