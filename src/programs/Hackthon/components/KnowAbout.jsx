import React, { useState } from "react";
import Button from "@mui/material/Button";
// import { FaEdit } from 'react-icons/fa';
import Card from "../../../components/card";
import imghack from "../../../assets/hak1.jpg";
import imghack1 from "../../../assets/hak2.jpg";
import EditKnwAbout from "../addingSection/EditKnwAbout";
import imghack2 from "../../../assets/hak3.jpg";
// import CustomizedDialogs from '../addingSection/EditAboutUs';
// import { Edit } from '@mui/icons-material';

const KnowAbout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenDialog = () => {
    setShowModal(true);
  };

  const handleCloseDialog = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card extra={`h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Know About
          </div>
          <div className="flex gap-3">
            <EditKnwAbout />
          </div>
        </header>

        <div className="flex flex-row">
          <div className="w-[50%] flex justify-center items-center gap-2 h-full p-2">
            <div className="flex flex-col w-[50%] h-[80%] gap-2">
              <img
                src={imghack}
                alt="Image"
                className="w-full h-[300px] rounded-[23px]"
              />
              <img
                src={imghack1}
                alt="Image"
                className="w-full h-[240px] rounded-[23px]"
              />
            </div>
            <div className="w-[50%] h-full">
              <img
                src={imghack2}
                alt="Image"
                className="w-full h-[600px] rounded-[23px]"
              />
            </div>
          </div>

          <div className="flex-col flex w-[50%] gap-2">
            <div className="flex flex-col gap-5 p-5 font-bold tracking-tighter text-orange-400 bg-gray-200 rounded-xl text-xl  leading-normal">
              <h1>From its medieval origins to the digital era, learn everything there is to know about</h1>
            </div>
            <div className="flex flex-col gap-5 p-10 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23">
              <p className="text-navy-700">
              The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
              </p>
              <p>
              The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.

              </p>
              
            </div>
          </div>
        </div>
      </Card>
      {/* <CustomizedDialogs showModal={showModal} handleCloseDialog={handleCloseDialog} /> */}
    </div>
  );
};

export default KnowAbout;
