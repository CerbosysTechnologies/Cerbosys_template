import React from 'react';
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../css/responsive.css"
import walletImg from "../images/wa1.svg.png"
import walletImgs from "../images/wa2.svg.png"
import walletImge from "../images/wa3.svg.png"
import walletImga from "../images/wa4.svg.png"

function Wallet()  {
    return (
        <div className="wallet">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div id="wa_hover" className="wallet_box text_align_center">
                        <i><img src={walletImg} alt="" /></i>
                        <h3>ONLINE WALLET</h3>
                        <p>It is a long established fact that a reader will be distracted by </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div id="wa_hover" className="wallet_box text_align_center">
                        <i><img src={walletImgs} alt="" /></i>
                        <h3>SEND COINS</h3>
                        <p>It is a long established fact that a reader will be distracted by </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div id="wa_hover" className="wallet_box text_align_center">
                        <i><img src={walletImge} alt="" /></i>
                        <h3>MOBILE APP </h3>
                        <p>It is a long established fact that a reader will be distracted by </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div id="wa_hover" className="wallet_box text_align_center">
                        <i><img src={walletImga} alt="" /></i>
                        <h3>COIN MINING</h3>
                        <p>It is a long established fact that a reader will be distracted by </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Wallet;