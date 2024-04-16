import { MdDelete } from "react-icons/md";
import Card from "../../components/card";
import { FaEdit } from "react-icons/fa";
import AddFeatures from "../addingSection/AddFeatures";
import img1 from "../../assets/feature1.png"
import img2 from "../../assets/feature2.png"
import img3 from "../../assets/feature3.png"
import img4 from "../../assets/feature4.png"
import img5 from "../../assets/feature5.png"
import img6 from "../../assets/feature6.png"


const Features = () => {
  const featureCards = [
    {
      heading: "Mentorship and coaching",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique tincidunt mi id mauris",
        backgroundImage: img1,
    },
    {
      heading: "Mentorship and coaching",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique tincidunt mi id mauris",
        backgroundImage: img2,
    },
    {
      heading: "Mentorship and coaching",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique tincidunt mi id mauris",
        backgroundImage: img3,
    },
    {
      heading: "Mentorship and coaching",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique tincidunt mi id mauris",
        backgroundImage: img4,
    },
    {
      heading: "Mentorship and coaching",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique tincidunt mi id mauris",
        backgroundImage: img5,
    },
    {
      heading: "Mentorship and coaching",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique tincidunt mi id mauris",
        backgroundImage: img6,
    },
    {
      heading: "Mentorship and coaching",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique tincidunt mi id mauris",
        backgroundImage: img5,
    },
  ];

  const handleEdit = () => {};

  return (
    <div>
      <Card extra={`w-full h-full sm:overflow-auto my-5 p-5`}>
        <div className="relative flex items-center justify-between py-4">
        
        </div>
      </Card>
    </div>
  );
};

export default Features;
