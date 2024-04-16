import React from "react";
import Card from "../../../components/card";
import img from "../../../assets/elg8i2.png";
import img1 from "../../../assets/elgi3.png";
import img2 from "../../../assets/eligi1.png";
import EditEligibility from "../addingSection/EditEligibility";

const Eligibility = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Eligibility criteria
          </div>
          <div className="flex gap-3">
            <EditEligibility />
          </div>
        </header>

        <div className="flex flex-row">
          <div className="w-[50%] flex justify-center items-center gap-2 h-full p-2">
            <div className="flex flex-col w-[50%] h-[80%] gap-2">
              <img
                src={img1}
                alt="Image"
                className="w-full h-[300px] rounded-[23px]"
              />
              <img
                src={img2}
                alt="Image"
                className="w-full h-[240px] rounded-[23px]"
              />
            </div>
            <div className="w-[50%] h-full">
              <img
                src={img}
                alt="Image"
                className="w-full h-[600px] rounded-[23px]"
              />
            </div>
          </div>

          <div className="flex gap-5 w-[50%]">
            <div className="flex gap-3 p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23 my-10">
              <div>
                <h1 className="text-2xl semi-bold p-8">
                  Our Idea Stage Program is open to early-stage entrepreneurs
                  and innovators who:
                </h1>
                <ul className="list-disc list-inside text-md p-2 pl-8  leading-8 tracking-tight text-navy-700">
                  <li>
                    Have a compelling and innovative startup idea with the
                    potential for growth and scalability.
                  </li>
                  <li>
                    Demonstrate a strong passion for entrepreneurship and a
                    commitment to bringing their ideas to fruition.
                  </li>
                  <li>
                    Display a willingness to learn, adapt, and actively
                    participate in the program's workshops, training sessions,
                    and mentorship opportunities.
                  </li>
                </ul>
                <div className="flex justify-center items-center mt-4 ">
                  <div className="rounded-full overflow-hidden border border-orange-500">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-full">
                      Apply Now
                    </button>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline px-4 py-2"
                    >
                      www.w3.org/Provider/Style/dummy.html
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Eligibility;
