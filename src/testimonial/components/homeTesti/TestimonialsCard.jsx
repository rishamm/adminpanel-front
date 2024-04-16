import React, { useEffect, useState } from "react";
import AddTestimonials from "../../addingSection/AddTestimonials";
import TestiCards from "./TestiCards";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchTestimonial } from "../../../action/homeAction";
import Card from "../../../components/card";


const TestimonialsCard = ({extra}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTestimonial());
  }, [dispatch])

  const testimonial = useSelector((i) => i.homeState.testimonialsData)
  const openSocialModal= () =>{
    setShowModal(true);
}
const closeSocialModal= () =>{
    setShowModal(false)
}
  console.log("testimonial", testimonial)


 

  return (
    <Card extra={`flex flex-col w-full h-full p-4 3xl:p-[18px] bg-white border`} className="mx-10 bg-white my-10 p-5 rounded-3xl">
      <header className="relative flex items-center justify-between w-full py-4">
        <div className="ml-4 text-xl font-bold text-navy-700"> Home Testimonial</div>
        <div className="flex gap-3 mb-4 mr-4">
          <AddTestimonials closeModal={closeSocialModal} mode="add" open={showModal} />
        </div>
      </header>
      <div className="grid grid-cols-4 gap-4">
        {testimonial.map(testimonial => (
          <div key={testimonial.id}>
            <TestiCards card={testimonial} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TestimonialsCard;
