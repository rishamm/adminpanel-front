
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Card from "../../../components/card";


const ComingCourseCards = ({card}) => {
    
    return (
        <div>
            <Card key={card} extra={`flex flex-col w-full h-full p-4 3xl:p-[18px] bg-white border`}>
                <div className="w-full h-full">
                    <div className="relative w-full">
                        <img
                            src={card.image}
                            className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                            alt=""
                        />
                    </div>
                    <div className="mb-2 break-words">
                        <h1 className="text-lg font-bold text-gray-600">
                            {card.heading}
                        </h1>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                            {card.description}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                            {card.link}
                        </p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <button className="text-navy-700" ><MdDelete className="w-6 h-6 text-navy-700 " /></button>
                        <button className="text-navy-700"><FaEdit
                            className="w-5 h-6 text-navy-700 " /></button>
                    </div>
                </div>

            </Card>

        </div>
    )
};

export default ComingCourseCards;
