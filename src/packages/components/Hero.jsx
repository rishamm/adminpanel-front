import img1 from "../../assets/package1.png";
import img2 from "../../assets/package2.png";
import img3 from "../../assets/package3.png";
import Card from '../../components/card';
import EditHeroSection from '../addingSection/EditHeroSection';


const Hero = () => {
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 mx-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Hero Section
                    </div>
                    <div className='flex gap-3'>
                        <EditHeroSection/>
                    </div>
                </header>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-5 w-[50%]'>
                        <div className='p-3 font-normal tracking-tighter bg-gray-200 rounded-xl text-md leading-23'>
                            <h1>Package Plans</h1>
                        </div>
                        <div className='flex flex-col gap-1 p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <p className="text-navy-700">
                                Welcome to OG Hub’s Packages Plans page! Here, you'll find detailed information about the service packages we offer and the policies that govern our services. Explore our range of packages designed to meet your needs, whether you're looking for individual services or comprehensive solutions.
                            </p>
                            <p> Additionally, familiarize yourself with our terms and conditions to ensure a smooth and transparent experience.
                            </p>
                            If you have any questions or need further clarification, don't hesitate to reach out to our team. Thank you for considering us for your service needs.
                            <p></p>
                        </div>
                    </div>
                    <div className="flex w-[50%]  gap-3">
                        <div className="flex flex-col gap-3 w-[60%]">
                        <div className='h-48'>
                            <img
                                src={img1}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        <div className='h-48'>
                            <img
                                src={img3}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        </div>
                        <div className='h-96 w-[40%]'>
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
    )
}

export default Hero