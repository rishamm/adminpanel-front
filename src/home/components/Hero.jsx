import { useState } from 'react';
import Card from '../../components/card';
import hero1 from "../../assets/homhero1.png"
import hero2 from "../../assets/homhero2.png";
import hero3 from "../../assets/homhero3.png";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditHero from '../addingSection/EditHero';

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false); 
  const [fileInputs, setFileInputs] = useState(images.map(() => null)); 
  const [previewImages, setPreviewImages] = useState(Array(images.length).fill(null)); 

  const openHeroModal = () => {
    setShowModal(true);
  }

  const toggleEditMode = () => {
    setEditMode(prevMode => !prevMode); 
  }

  const handleFileInputChange = (index, event) => {
    const files = event.target.files;
    const newFileInputs = [...fileInputs];
    newFileInputs[index] = files[0]; 
    setFileInputs(newFileInputs);

    // Update preview image for the corresponding input element
    const reader = new FileReader();
    reader.onload = () => {
      const newPreviewImages = [...previewImages];
      newPreviewImages[index] = reader.result;
      setPreviewImages(newPreviewImages);
    };
    reader.readAsDataURL(files[0]);
  }

  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Hero
          </div>
          <div className='flex gap-3'>
            <EditHero/>
          </div>
        </header>
        <div className='flex gap-5'>
          <div className='flex flex-col gap-5 w-[50%]'>
            <div className='p-6 h-[70%] font-normal tracking-tighter bg-gray-200 rounded-3xl text-lg leading-23'>
              <h1>Welcome to OG Hub Sculpting Tomorrow's success Today</h1>
            </div>
            
            <div className='h-[20%] p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-3xl text-lg leading-23'>
              <p className="p-6 text-navy-700">
                Button Link
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[50%]  gap-3">
            <div className='h-48'>
              <img
                src={hero1}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>
            <div className='flex gap-5 h-60'>
              <img
                src={hero2}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
              <img
                src={hero3}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>

          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
