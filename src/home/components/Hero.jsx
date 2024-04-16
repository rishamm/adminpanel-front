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
        <div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
