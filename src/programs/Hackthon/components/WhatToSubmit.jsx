import Card from "../../../components/card"
import hero2 from "../../../assets/homehero2.png";
import hero3 from "../../../assets/homehero3.png";
import EditToSubmit from "../addingSection/EditToSubmit";

const WhatToSubmit = () => {
    return (
        <div>
            <Card extra={`w-full h-full sm:overflow-auto my-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                    </div>
                    <div className='flex gap-3'>
                        <EditToSubmit/>
                    </div>
                </header>
                <div className='flex w-full gap-3'>
                    <div className="flex w-[50%]  gap-3">
                        <div>
                            <img
                                src={hero2}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src={hero3}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex-col flex w-[50%] gap-2">
                    <div className='flex flex-col gap-5 p-5 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <h1>WHAT TO SUBMIT</h1>
                        </div>
                        <div className='flex flex-col gap-5 p-5 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <p className="text-navy-700">
                            The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.


                            </p>
                            <p>
                            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default WhatToSubmit