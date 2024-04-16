import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Card from "../../components/card";
import { deleteTerm, fetchTermData } from "../../action/sharedAction";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import DeleteModal from "../../components/shared/DeleteModal";
import AddTermConditionCard from "../addingSection/AddTermConditionCard";


const TermsConditionCards = ({card,index}) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const deleteTermFn = () => {
        deleteTerm(card._id)
            .then(response => {
                if (response.data.success) {
                    enqueueSnackbar(response.data.message, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                    dispatch(fetchTermData());
                    setShowDeleteModal(false);
                } else {
                    enqueueSnackbar(response.data.message, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                    setShowDeleteModal(false);
                }
            })
    }

    return (
        <div>
            <Card key={index} extra={`flex flex-col w-full h-full p-4 3xl:p-[18px] bg-white border`}>
                <div className="flex flex-col justify-between w-full h-full">
                    
                    <div className="mb-2 break-words">
                        <h1 className="text-lg font-bold text-gray-600">
                            {card.question}
                        </h1>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                            {card.answer}
                        </p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <button className="text-navy-700" onClick={() => setShowDeleteModal(true)} ><MdDelete className="w-6 h-6 text-navy-700 " /></button>
                        <button className="text-navy-700">
                            <AddTermConditionCard open={showModal} mode="edit" card={card} closeModal={() => setShowModal(false)} /></button>
                    </div>
                </div>

            </Card>
            
            <DeleteModal open={showDeleteModal} closeModal={() => setShowDeleteModal(false)} handleDeleteFn={() => deleteTermFn()} />
            
        </div>
    )
};

export default TermsConditionCards;
