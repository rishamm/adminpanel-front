import Card from "../../components/card";
import img1 from "../../assets/carreer1.jpg";
import img2 from "../../assets/carreer2.jpg"
import EditCarrHero from "../addingSection/EditCarrHero";

const Hero = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">
            Hero
          </div>
          <div className="flex gap-3"><EditCarrHero/></div>
        </header>
        <div className="flex gap-5 mx-10">
          <div className="flex flex-col gap-5  w-[50%]">
            <div className="p-6  font-semibold text-gray-600 tracking-normal h-[80%] w-[90%] bg-gray-200 rounded-3xl text-xl leading-32">
              <h1 className="pt-9">
                CRAFTING THE FUTURE,
              </h1>
              <h1>
                ONE OPPORTUNITY AT A TIME
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-[50%]  gap-3">
            <div className="h-48">
              <img
                src={img1}
                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
              />
            </div>
            <div className="h-48">
              <img
                src={img2}
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
