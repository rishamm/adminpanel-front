import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaEdit } from "react-icons/fa";
import Card from "../../components/card";
import hero2 from "../../assets/cntct1.png";
import hero3 from "../../assets/cntct2.png";
import { Edit } from "@mui/icons-material";
import EditCntctHero from "../addingSection/EditCntctHero";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenDialog = () => {
    setShowModal(true);
  };

  const handleCloseDialog = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card extra={`h-full sm:overflow-auto my-5 mx-5 p-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">Hero</div>
          <div className="flex gap-3">
            <EditCntctHero />
          </div>
        </header>
        <div className="flex w-full gap-3">
          <div className="flex w-[50%]  gap-3">
            <div>
              <img
                src={hero2}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>
            <div>
              <img
                src={hero3}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>
          </div>
          <div className="flex className='flex justify-center items-center  w-[50%] gap-2">
            <div className="flex justify-center items-center w-[70%] h-[20%]  gap-5 p-2 font-semibold tracking-tighter text-navy-700 bg-gray-200 rounded-xl text-3xl leading-32 font-poppins">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
