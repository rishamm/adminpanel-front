import Card from "../../components/card";
import EditNewsHero from "../addingSection/EditNewsHero";

const Hero = () => {
  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4">
          <div className="text-xl font-bold text-navy-700">Hero Section</div>
          <div className="flex gap-3"><EditNewsHero/></div>
        </header>
        <div className="flex gap-5 mx-10">
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col justify-center items-center p-6 h-full font-normal tracking-wide bg-gray-200  rounded-3xl text-3xl text-[#6D6E71] leading-32">
              <h1 className="pt-10">
                <span className="text-[#FF8500]">*stay updated</span>, with the
                latest in the tech and <br></br> innovation sectors, both local and
                <span className="text-[#FF8500] inline-block rounded-full border-black border px-2">international</span>.
              </h1>
              <h1 className="text-[#FF8500] py-6">NEWS THAT MOVE INDUSTRIES</h1>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
