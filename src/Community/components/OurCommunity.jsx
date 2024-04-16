import Card from '../../components/card'
import pink from "../../assets/pink.png";
import EditOurCommunity from '../addingSection/EditOurCommunity';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchOurCommunity } from '../../action/communityAction';


const OurCommunity = () => {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOurCommunity());
    }, [dispatch])

    const ourCommunity = useSelector((i) => i.communityState.communityData)

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            <Card extra={`w-full h-full sm:overflow-auto my-5 p-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Our Community
                    </div>
                    <div className='flex gap-3'>
                        <EditOurCommunity closeModal={closeModal} mode="edit" open={showModal} card={ourCommunity}/>
                    </div>
                </header>
                <div className='flex flex-col gap-5'>
                    <div className="flex gap-5">
                        <div className='flex w-[50%] h-[250px] '>
                            <img
                                src={ourCommunity.image}
                                className="w-full h-full mb-3 rounded-xl 3xl:h-full 3xl:w-full"
                                alt=""
                            />
                        </div>
                        <div className='flex flex-col gap-3 w-[50%]'>
                            <div className='flex flex-col gap-5 p-5 font-normal tracking-tighter text-gray-600 bg-gray-200 rounded-lg text-md leading-23'>
                                <p>{ourCommunity.description}</p>
                            </div>
                            <div className='flex '>
                                <input
                                    type="text"
                                    placeholder="Button Link"
                                    readOnly
                                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-navy-700 dark:text-white"
                                    style={{
                                        background: '#EFEFEF',
                                    }}
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </Card>
        </div>
    )
}

export default OurCommunity