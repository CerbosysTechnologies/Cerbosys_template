import React from 'react';
import workImg from "../images/work.png"

function Work() {
    return (
        <div class="works">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="titlepage text_align_center">
                        <h2>How It Works</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="works_vedio">
                        <figure>
                            <img src={workImg} alt="" />
                            </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Work;