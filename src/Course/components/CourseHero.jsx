import React from "react";
import Card from "../../components/card";
import img1 from "../../assets/coursehero2.png";
import img2 from "../../assets/coursehero3.png";
import img3 from "../../assets/coursehero1.png";
import EditCourseHero from "../addingSection/EditCourseHero";

const CourseHero = () => {
  return (
    <div>
      <Card extra={`h-full my-5 mx-5 `}>
        <header className="relative flex items-center mx-4 justify-between py-4">
          <div className="text-xl font-bold text-gray-400 mb-8">
            Hero Section
          </div>
          <div className="flex gap-3">
            <EditCourseHero />
          </div>
        </header>
        <div className="flex gap-5 ">
          <div className="flex flex-col gap-5 w-[50%]  ">
            <div className="flex flex-col justify-center items-center py-24 font-medium font-sans tracking-tighter bg-gray-200 rounded-3xl text-md text-gray-600 leading-23 mx-24">
              <h1>OG EDUCATION COURSES </h1>
              <h1>
                EMPOWERING <span>TECH INNOVATORS</span>
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 p-8 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-3xl text-md leading-23 mx-24">
              <p className="text-navy-700">Button-text</p>
            </div>
          </div>
          <div className="flex w-[50%]  gap-3 mr-24">
            <div className="flex flex-col gap-3 w-[60%]">
              <div className="h-48">
                <img
                  src={img1}
                  className="w-full h-full mb-3 rounded-3xl 3xl:h-full 3xl:w-full"
                  alt=""
                />
              </div>
              <div className="h-48">
                <img
                  src={img2}
                  className="w-full h-full mb-3 rounded-3xl 3xl:h-full 3xl:w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="h-96 w-[40%]">
              <img
                src={img3}
                className="w-full h-full mb-3 rounded-3xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseHero;
