import React from 'react';

function Register() {
  return (
    <>
      <div className=" bg-black w-ful md:py-10 text-white  md:my-1 my-5">
        <div className="container flex justify-center gap-10 ">
          <div className="flex justify-around flex-wrap  gap-20">
            <div className="flex flex-col justify-center items-center gap-10 md:px-1 px-5">
              <div className="font-bold text-4xl">Register Now</div>
              <div className=" md:w-[500px] w-96 ">
                There is a moment in the life of any aspiring astronomer that it
                is time to buy that first telescope. It’s exciting to think
                about setting up your own viewing station.
              </div>
              <div className="flex gap-10">
                <div className="bg-slate-500 text-white  px-4 py-4">
                  150 <span>days</span>
                </div>
                <div className="bg-slate-500 px-4 py-4 ">
                  23 <span>Hours</span>
                </div>
                <div className="bg-slate-500 px-4 py-4">
                  47 <span>Mins</span>
                </div>
                <div className="bg-slate-500 px-4 py-4">
                  59 <span>Secs</span>
                </div>
              </div>
            </div>
            {/* -------------------------- */}

            <div class="flex flex-col items-center justify-center  ">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8 md:px-20">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Courses for Free
                  </h1>
                  <div className="text-gray-900">
                    It is high time for learning
                  </div>
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <input
                        type="text"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder=" Your Name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Email Address"
                        required=""
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Your Phone Number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>

                    <button
                      type="submit"
                      class="w-full text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* ------------- */}
          {/* <div>
            <div>
              <h1>Courses for Free</h1>
              <h6>It is high time for learning</h6>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div></div>
            </div>
          </div> */}
          {/* ---------------- */}
        </div>
      </div>
    </>
  );
}

export default Register;
