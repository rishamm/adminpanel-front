import { MdDelete } from "react-icons/md";
import Card from "../../../components/card";
import { FaEdit } from "react-icons/fa";
import AddProrgam from "../addingSection/AddProrgam";
import img from "../../../assets/image1.png";
import img1 from "../../../assets/Image2.png"
import img2 from "../../../assets/Image3.png";
import img3 from "../../../assets/image4.png";



const ProgramSetups = () => {
  const programCards = [
    {
      id: 1,
      description:
        "Fill out the online application form providing detailed information about your startup idea, the problem you aim to solve, and your target market. ",
      backgroundImage: img,
    },
    {
      id: 2,
      description:
        "Clearly articulate your unique value proposition and what sets your idea apart from existing solutions in the market.",
      backgroundImage: img1,
    },
    {
      id: 3,
      description:
        "Demonstrate the potential market opportunity and how your idea addresses a specific need or pain point within the industry.",
      backgroundImage: img2,
    },
    {
      id: 4,
      description:
        "Describe your team's expertise, highlighting the skills and experiences that contribute to the development of your startup idea.",
      backgroundImage: img3,
    },
  ];

  const handleEdit = () => {};

  return (
    <Card extra={`h-full sm:overflow-auto my-5 p-5 mx-5 `}>
      <header className="relative flex items-center justify-between py-4">
        <div className="text-xl font-bold text-navy-700">Program setup</div>
        <div className="flex items-center mx-4 gap-3">
          <AddProrgam />
        </div>
      </header>
      <div className="flex w-full gap-3 ">
        <div className="grid grid-cols-2 gap-5 ">
          {programCards.map((card, index) => (
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
              <h2>{index + 1}</h2>
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
  );
};

export default ProgramSetups;
