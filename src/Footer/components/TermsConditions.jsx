import { useEffect, useState } from 'react';
import { fetchTermData } from '../../action/sharedAction';
import Card from '../../components/card'
import AddTermConditionCard from '../addingSection/AddTermConditionCard';
import TermsConditionCards from './TermsConditionCards';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const TermsConditions = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const terms = useSelector((i) => i.sharedState.termData)
    useEffect(() => {
        dispatch(fetchTermData());
    }, [dispatch])
    const openTermsModal = () => {
        setShowModal(true);
    }
    const closeTermsModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <Card extra={`h-full sm:overflow-auto my-5 p-5 mx-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Term & Condition Cards
                    </div>
                    <div className='flex gap-3'>
                        <AddTermConditionCard
                         closeModal={closeTermsModal} mode="add" open={showModal} />
                    </div>
                </header>
                <div className='grid grid-cols-4 gap-4'>
                    {terms.map(card => (
                        <TermsConditionCards key={card.id} card={card} />
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default TermsConditions