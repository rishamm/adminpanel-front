import Card from "../../../components/card"
import img1 from "../../../assets/hackathon1.png";
import EditHero from "../addingSection/EditHero";
const Hero = () => {
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Hero Section
                    </div>
                    <div className='flex gap-3'>
                        <EditHero/>
                    </div>
                </header>
                <div className='flex flex-col gap-5'>
                    <div className="flex gap-5">
                        <div className='flex w-[50%] h-[250px] '>
                            <img
                                src={img1}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        <div className='flex flex-col gap-3 w-[50%]'>
                            <div className='p-3 font-normal tracking-tighter bg-gray-200 rounded-xl text-md leading-23'>
                                <h1>HACKATHON Program</h1>
                            </div>
                            <div className='flex flex-col gap-5 p-5 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-lg text-md leading-20'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>

                        </div>


                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Hero