

import img1 from "../../../assets/summary.png";
import img2 from "../../../assets/summary.png";
import Card from '../../../components/card';
import EditCoursSumry from "../addingSection/EditCoursSumry";


const CourseSummary = () => {
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 mx-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Find the Course Summary
                    </div>
                    <div className='flex gap-3'>
                        <EditCoursSumry/>
                    </div>
                </header>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-5 w-[50%]'>
                        <div className='flex flex-col gap-5 p-3 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <h1 className="text-base font-normal leading-6 tracking-tighter text-gray-700">Find a program that fits your goal</h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[50%]  gap-3">
                        <div className='flex items-center justify-center h-96 w-[50%]'>
                            <img
                                src={img1}
                                className="w-[80%] mb-3 h-80 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        <div className='flex items-center justify-center h-96 w-[50%]'>
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

export default CourseSummary