import Card from '../../components/card'
import SocialCards from './SocialCards'
import AddSocialCard from '../addingSection/AddSocialCard';
import { useEffect, useState } from 'react';
import { fetchSocialData } from '../../action/sharedAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const SocialCardPage = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSocialData());
    }, [dispatch])

    const footer = useSelector((i) => i.sharedState.footerData)
    const openSocialModal= () =>{
        setShowModal(true);
    }
    const closeSocialModal= () =>{
        setShowModal(false)
    }
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Social Cards
                    </div>
                    <div className='flex gap-3'>
                        <AddSocialCard  closeModal={closeSocialModal} mode="add" open={showModal} />
                    </div>
                </header>
                <div className='grid grid-cols-4 gap-4'>
                    {footer.map(card => (
                        <SocialCards key={card.id} card={card}  />
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default SocialCardPage