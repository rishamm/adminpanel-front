import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaEdit } from "react-icons/fa";
import Card from "../../components/card";
import hero2 from "../../assets/homehero2.png";
import hero3 from "../../assets/homehero3.png";
import { Edit } from "@mui/icons-material";
import EditGoals from "../addingSection/EditGoals";

const Goals = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenDialog = () => {
    setShowModal(true);
  };

  const handleCloseDialog = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card extra={`h-full my-5 mx-5 `}>
        <header className="relative flex items-center justify-between py-4 px-10">
          <div className="text-xl font-bold text-navy-700">Your Goals</div>
          <div className="flex gap-3">
            <EditGoals />
          </div>
        </header>

        <div className="flex w-full px-10">
          <div className="flex  flex-col w-[50%]  gap-20">
            <div className="flex  gap-5 p-8  font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-3xl text-lg semi-bold leading-23">
              <h1>FIND A PROGRAM THAT FITS YOUR GOAL</h1>
            </div>
            <div className="flex flex-col gap-5 p-14 mb-4  font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-3xl text-md leading-23">
              <p className="text-navy-700">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.

The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex flex-col w-[25%] gap-3">{/* Content */}</div>

            <div className="flex-col flex w-[50%]">
              <div className="flex justify-between items-center mb-2">
                <div className="flex justify-center items-center h-80 w-[45%]">
                  <img
                    src={hero2}
                    className="w-full h-full rounded-3xl 3xl:h-full 3xl:w-full "
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={hero3}
                    className="w-full h-full rounded-3xl 3xl:h-full 3xl:w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* <CustomizedDialogs showModal={showModal} handleCloseDialog={handleCloseDialog} /> */}
    </div>
  );
};

export default Goals;
