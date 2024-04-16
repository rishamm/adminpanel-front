import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProffesonalTestimonial } from "../../action/homeAction";
import Card from "../../components/card";
import AddProfTest from "../addingSection/AddProfTest";
import TestiProfCard from "./TestiProfCard";

const TestiProffesional = (extra) => {
  // const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProffesonalTestimonial());
    }, [dispatch])
  
    const proffesonalTestimonial = useSelector((i) => i.homeState.professionalData)
    console.log("testimonialddddddd", proffesonalTestimonial)
  
  return (
    <Card extra={`flex flex-col w-full h-full p-4 3xl:p-[18px] bg-white border`} className="mx-10 bg-white my-10 p-5 rounded-3xl">
      <header className="relative flex items-center justify-between w-full py-4">
        <div className="ml-4 text-xl font-bold text-navy-700"> Proffesional Testimonial</div>
        <div className="flex gap-3 mb-4 mr-4">
          <AddProfTest/>
        </div>
      </header>
      <div className="grid grid-cols-4 gap-4">
        {proffesonalTestimonial.map(card => (
          <div key={card.id}>
            <TestiProfCard card={card} />
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TestiProffesional
