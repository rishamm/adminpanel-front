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
                
            </Card>
            {/* <CustomizedDialogs showModal={showModal} handleCloseDialog={handleCloseDialog} /> */}
        </div>
    );
};

export default AboutUs;
