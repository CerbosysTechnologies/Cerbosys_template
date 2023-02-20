import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';
function Footer() {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="flex gap-10 flex-wrap items-center">
          <div>
            <h1 className="font-bold text-2xl my-10 text-center">About</h1>
            <p className="md:w-96">
              CERBOSYS is a software development company that provides
              customized and creative services for online businesses. The
              services we provide have been instrumental in helping shape
              several start-up companies by meeting their changing needs.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl my-10 text-center">Address</h1>
            <ul className="flex flex-col gap-4">
              <li>Address: 15-16 Lakshya Vihar Indore</li>
              <li>Tel: 0731 499 3444</li>
              <li>
                website:
                <a href="http://cerbosys.com/" target="_blank">
                  www.cerbosys.com
                </a>
              </li>
              <br />
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl my-10 text-center">
              Top Products
            </h1>
            <ul className="flex flex-col gap-4">
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl my-10 text-center">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-4">
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl my-10 text-center">Features</h1>
            <ul className="flex flex-col gap-4">
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl my-10 text-center">Resources</h1>
            <ul className="flex flex-col gap-4">
              <li>Guides</li>
              <li>Research</li>
              <li>Experts</li>
              <li>Agencies</li>
            </ul>
          </div>
          {/* ------ */}
        </div>
        <div className="flex flex-col justify-center items-center mx-10 gap-10 py-20">
          <div
            className=" font-bold text-xl
          "
          >
            Copyright ©2023 All rights reserved.Cerbosys
          </div>
          <div
            className=" flex gap-10 justify-center items-center
          "
          >
            <div>
              <BsFacebook className=" w-10 h-10" />
            </div>
            <div>
              <BsTwitter className=" w-10 h-10" />
            </div>
            <div>
              <BsLinkedin className=" w-10 h-10" />
            </div>
            <div>
              <BsYoutube className=" w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
