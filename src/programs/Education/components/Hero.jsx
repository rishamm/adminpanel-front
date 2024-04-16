import React from 'react'
import img1 from "../../../assets/edu1.png";
import img2 from "../../../assets/edu2.png";
import img3 from "../../../assets/edu3.png";
import Card from '../../../components/card';
import EditHero from '../addingSection/EditHero';


const Hero = () => {
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 mx-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Hero Section
                    </div>
                    <div className='flex gap-3'>
                        <EditHero/>
                    </div>
                </header>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-5 w-[50%]'>
                        <div className='p-3 font-normal tracking-tighter bg-gray-200 rounded-xl text-md leading-23'>
                            <h1>Og Education Courses</h1>
                        </div>
                        <div className='gap-1 p-3 font-normal tracking-tighter text-gray-600 bg-gray-200  rounded-xl text-md leading-23'>
                            <h1>Empowering Tech Innovators</h1>
                        </div>
                        <div className='p-2 border rounded-lg'>
                          <button className=''>
                            <p>https://www.w3.org/Provider/Style/dummy.html</p>
                          </button>
                        </div>
                    </div>
                    <div className="flex w-[50%]  gap-3">
                        <div className="flex flex-col gap-3 w-[50%]">
                        <div className='h-56'>
                            <img
                                src={img1}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        <div className='h-40'>
                            <img
                                src={img2}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        </div>
                        <div className='h-96 w-[50%]'>
                            <img
                                src={img3}
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