import Card from '../../components/card'
import globalhub from "../../assets/globalhub.png";
import EditGlobalHub from '../addingSection/EditGlobalHub';

const GlobalHub = () => {
    return (
        <div>
            <Card extra={`w-full h-full sm:overflow-auto my-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Global Hub
                    </div>
                    <div className='flex gap-3'>
                        <EditGlobalHub/>
                    </div>
                </header>
                <div className='flex flex-col gap-5'>
                    <div className="flex gap-5">
                        <div className='flex w-[50%] h-[250px] '>
                            <img
                                src={globalhub}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
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
                                <p>At One Global Hub, we believe in the power of innovation, collaboration, and ambition.</p>

                                <p>Take the next step in your career journey with One Global Hub. Join hands with us, and let's craft a legacy together.</p>
                                <p>Whether you're seeking a full-time role, exploring part-time engagements, or considering collaborative opportunities, we're always on the lookout for talented individuals ready to shape the future.
                                    Our team thrives on diversity, creativity, and a shared passion for making a difference.</p>
                            </div>

                        </div>


                    </div>
                </div>
            </Card>
        </div>
    )
}

export default GlobalHub