import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import hero2 from "../../assets/homehero2.png";
import hero3 from "../../assets/homehero3.png";
import EditAboutUs from '../addingSection/EditAboutUs';
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomeAbout } from '../../action/homeAction';

const AboutUs = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHomeAbout());
    }, [dispatch])

    const aboutus = useSelector((i) => i.homeState.aboutUsData)

    const handleOpenDialog = () => {
        setShowModal(true);
    };

    const handleCloseDialog = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Card extra={`w-full h-full sm:overflow-auto my-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        About Us
                    </div>
                    <div className='flex gap-3'>
                        <EditAboutUs closeModal={handleCloseDialog} card={aboutus} mode="edit" open={showModal}/>
                    </div>
                </header>
                <div className='flex w-full gap-3'>
                    <div className="flex w-[50%]  gap-3">
                        <div>
                            <img
                                src={aboutus.image}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src={aboutus.image1}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex-col flex w-[50%] gap-2">
                        <div className='flex flex-col gap-5 p-5 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <h1>{aboutus.heading}</h1>
                            <p className="text-navy-700">
                            {aboutus.description}
                            </p>
                        </div>
                        <div className='flex flex-col gap-5 p-5 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-xl text-md leading-23'>
                            <h1>{aboutus.heading1}</h1>
                            <p className="text-navy-700">
                            {aboutus.description1}.
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
            {/* <CustomizedDialogs showModal={showModal} handleCloseDialog={handleCloseDialog} /> */}
        </div>
    );
};

export default AboutUs;
