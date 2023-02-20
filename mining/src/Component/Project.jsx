import React from 'react';
import projectImg from '../images/project_img.png'
import projectImg1 from '../images/project_img1.png' 
import projectImg2 from '../images/project_img2.png'

const Project = () => {
    return (
        <div className="projects">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Our Features Projects</h2>
                     <span>It is a long established fact that a reader will be distracted by the readable</span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div id="proj" className="carousel slide projects_ban" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#proj" data-slide-to="0" className="active"></li>
                        <li data-target="#proj" data-slide-to="1"></li>
                        <li data-target="#proj" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container-fluid">
                              {/* <div className="carousel-caption relative3"> */}
                                 <div className="row">
                                    <div className="col-md-4">
                                       <div className="project">
                                          <div className="project_img">
                                             <figure><img src={projectImg} alt="" /></figure>
                                          </div>
                                          <div id="pro_ho" className="project_text">
                                             <h3>Reader will be<br/> distracted by the readable</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-4">
                                       <div className="project">
                                          <div className="project_img">
                                             <figure><img src={projectImg1} alt="#"/></figure>
                                          </div>
                                          <div id="pro_ho" className="project_text">
                                             <h3>Reader will be<br/> distracted by the readable</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-4">
                                       <div className="project">
                                          <div className="project_img">
                                             <figure><img src={projectImg2}alt="#"/></figure>
                                          </div>
                                          <div id="pro_ho" className="project_text">
                                             <h3>Reader will be<br/> distracted by the readable</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                             
                           </div>
                        </div>
                       
                     
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default Project;