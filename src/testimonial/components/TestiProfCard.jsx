import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Card from "../../components/card";
import { useDispatch } from "react-redux";
import { deleteProffesonalTestimonial, deleteTestimonial, fetchProffesonalTestimonial } from "../../action/homeAction";
import { enqueueSnackbar } from "notistack";
import DeleteModal from "../../components/shared/DeleteModal";

const TestiProfCard = ({ card, handleEdit }) => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteProfTestiFn = () => {
    
    deleteProffesonalTestimonial(card?._id)
    .then((response) => {
      if (response.success) {
        enqueueSnackbar(response.message, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
        dispatch(fetchProffesonalTestimonial());
        setShowDeleteModal(false);
      } else {
        enqueueSnackbar(response.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
        setShowDeleteModal(false);
      }
    }).catch((error) => {
      console.error('Error deleting testimonial:', error);
      enqueueSnackbar("An error occurred while deleting the testimonial", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setShowDeleteModal(false);
    });
  };

  return (
    <div>
      <Card extra={`flex flex-col w-full h-full p-4 3xl:p-[18px] bg-white border`}>
        <div>
          <Card extra="p-5">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center mb-4">
                <img src={card?.image} alt="Profile" className="h-44 w-44" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{card?.name}</h3>
                <p className="text-base text-gray-500">{card?.lastName}</p>
              </div>
              <div>
                <p className="text-sm">{card?.description}</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button onClick={() => setShowDeleteModal(true)} className="text-navy-700">
                  <MdDelete className="w-6 h-6 text-navy-700" />
                </button>
                <button className="text-navy-700" onClick={handleEdit}>
                  <FaEdit className="w-5 h-6 text-navy-700" />
                </button>
              </div>
            </div>
          </Card>
          <DeleteModal
            open={showDeleteModal}
            closeModal={() => setShowDeleteModal(false)}
            handleDeleteFn={deleteProfTestiFn} // Pass the function directly without arrow function
          />
        </div>
      </Card>
    </div>
  );
};

export default TestiProfCard;
