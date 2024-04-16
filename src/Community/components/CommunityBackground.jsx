import Card from '../../components/card';
import hero1 from "../../assets/homehero1.png";
import hero2 from "../../assets/homehero2.png";
import hero3 from "../../assets/homehero3.png";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CommunityBackground = () => {
    const images = [hero1, hero2, hero3];

    return (
        <div>
            <Card extra={`w-full h-full sm:overflow-auto my-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                    Community Background
                    </div>
                </header>

                <div className='flex flex-col gap-3'>
                    <div className="flex w-full h-full gap-3">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden border border-gray-300 rounded-xl h-96 ${index === 0 ? 'w-1/2' : 'w-1/4'}`}
                            >
                                <div className='flex flex-col '>
                                    <img
                                        src={image}
                                        className="w-full h-full rounded-xl 3xl:h-full 3xl:w-full"
                                        alt=""
                                    />
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <button className="text-navy-700">
                                        <MdDelete className="w-6 h-6 text-black" />
                                    </button>
                                    <button className="dark:text-navy-700">
                                        <FaEdit className="w-5 h-6 dark:text-white text-navy-700" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default CommunityBackground;
