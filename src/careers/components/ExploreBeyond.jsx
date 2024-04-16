import Card from "../../components/card"
import globalhub from "../../assets/globalhub.png";
import EditExplore from "../addingSection/EditExplore";

const ExploreBeyond = () => {
    return (
        <div>
            <Card extra={`w-full h-full sm:overflow-auto my-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Explore Beyond Traditional Paths
                    </div>
                    <div className='flex gap-3'>
                        <EditExplore/>
                    </div>
                </header>
                <div className='flex flex-col gap-5'>
                    <div className="flex gap-5">
                        <div className='flex flex-col gap-3 w-[50%]'>
                            <div className='flex '>
                                <input
                                    type="text"
                                    placeholder="JOIN US AT GLOBAL HUB"
                                    readOnly
                                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-navy-700 dark:text-white"
                                    style={{
                                        background: '#EFEFEF',
                                    }}
                                />
                            </div>
                            <div className='flex flex-col gap-5 p-5 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-lg text-md leading-20'>
                                <p>At One Global Hub, we're not just a platform; we're a dynamic hub for career professionals. In our network of ventures, we value more than just CVs.</p>
                                <p>Share your aspirations, skills, and vision through a cover letter and video profile. Whether it's a specific role or the job of your dreams, we're eager to connect.</p>
                            </div>

                        </div>
                        <div className='flex w-[50%] h-[250px] '>
                            <img
                                src={globalhub}
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

export default ExploreBeyond