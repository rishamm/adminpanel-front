import React from 'react'
import Card from "../../../components/card";
import ideahero from "../../../assets/ideastagehero.png";
import EditIdeaHero from "../addingSection/EditIdeaHero";

const Hero = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">Hero Section</div>
          <div className="flex gap-3"><EditIdeaHero/></div>
        </header>

        <div className="flex gap-5 flex-row">
          <div className="flex flex-col w-[50%] gap-3">
            <div className="h-96">
              <img
                src={ideahero}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>
          </div>

          <div className="flex gap-5 w-[50%]">
            <div className="flex gap-3 p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23">
              <div>
                <h1 className="text-2xl semi-bold p-8">Idea stage Program</h1>
                <p className="text-md p-2 pl-8  leading-8 tracking-tight text-navy-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Hero
