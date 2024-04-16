

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Card from "../../components/card";
import { deleteFooterData, fetchSocialData } from "../../action/sharedAction";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import DeleteModal from "../../components/shared/DeleteModal";
import AddSocialCard from "../addingSection/AddSocialCard";


const SocialCards = ({ card, index }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const deleteSocialFn = () => {
        deleteFooterData(card._id)
            .then(response => {
                if (response.data.success) {
                    enqueueSnackbar(response.data.message, { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                    dispatch(fetchSocialData());
                    setShowDeleteModal(false);
                } else {
                    enqueueSnackbar(response.data.message, { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'right' } });
                    setShowDeleteModal(false);
                }
            })
    }

    return (
        <div>
            <Card key={card} extra={`flex flex-col w-full h-full p-4 3xl:p-[18px] bg-white border`}>
                <div className="w-full h-full">
                    <div className="relative w-full">
                        <img
                            src={card.icon}
                            className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                            alt=""
                        />
                    </div>
                    <div className="mb-2 break-words">
                        <h1 className="text-lg font-bold text-gray-600">
                            {card.name}
                        </h1>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                            {card.link}
                        </p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <button className="text-navy-700" ><MdDelete onClick={() => setShowDeleteModal(true)} className="w-6 h-6 text-navy-700 " /></button>
                        <button className="text-navy-700">
                            <AddSocialCard open={showModal} mode="edit" card={card} closeModal={() => setShowModal(false)} /></button>
                    </div>
                </div>

            </Card>
            <DeleteModal open={showDeleteModal} closeModal={() => setShowDeleteModal(false)} handleDeleteFn={() => deleteSocialFn()} />
        </div>
    )
};

export default SocialCards;
