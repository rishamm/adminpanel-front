import Card from "../../components/card";
import startup from "../../assets/program1.png";
import EditPrgrmHero from "../addingSection/EditPrgrmHero";

const Hero = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 `}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">Hero</div>
          <div className="flex gap-3"><EditPrgrmHero /></div>
        </header>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 w-[40%]">
            <div className="flex flex-col justify-center items-center gap-3 p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 h-full rounded-xl text-3xl leading-23">
              <p className="flex text-navy-700">
                ONE GLOBAL HUB
              </p>
              <p>
                PROGRAMS
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[60%]  gap-3">
            <div className="h-96">
              <img
                src={startup}
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
