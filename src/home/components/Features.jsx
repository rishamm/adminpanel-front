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
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">Features</div>
          <div className="flex gap-3">
            <AddFeatures />
          </div>
        </header>
        <div className="flex w-full gap-3">
          <div className="grid grid-cols-3 gap-5 ">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="p-3 bg-gray-200 rounded-md"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              >
                <h2 className="text-lg font-semibold">{card.heading}</h2>
                <p>{card.description}</p>
                <div className="flex items-center justify-end gap-2">
                  <button className="text-navy-700">
                    <MdDelete className="w-6 h-6 text-navy-700 " />
                  </button>
                  <button className="text-navy-700">
                    <FaEdit
                      onClick={handleEdit}
                      className="w-5 h-6 text-navy-700 "
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Features;
