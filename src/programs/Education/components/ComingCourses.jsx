import Card from "../../../components/card"
import ComingCourseCards from "./ComingCourseCards"
import img from "../../../assets/comingCourse.png"
import AddComingCourse from "../addingSection/AddComingCourse";

const ComingCourses = () => {
    const cards = [
        {
            id: 1,
            heading: "Sample Card 1",
            link: "https://example.com/card1",
            description: "Learn how to craft a compelling pitch deck tailored for potential investors, and practice your presentation skills with us.",
            image: img
        },
        {
            id: 2,
            heading: "Sample Card 2",
            link: "https://example.com/card2",
            description: "Learn how to craft a compelling pitch deck tailored for potential investors, and practice your presentation skills with us.",
            image: img
        },
        {
            id: 3,
            heading: "Sample Card 3",
            link: "https://example.com/card1",
            description: "Learn how to craft a compelling pitch deck tailored for potential investors, and practice your presentation skills with us.",
            image: img
        },
        {
            id: 4,
            heading: "Sample Card 4",
            link: "https://example.com/card2",
            description: "Learn how to craft a compelling pitch deck tailored for potential investors, and practice your presentation skills with us.",
            image: img
        }
    ];
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 p-5 mx-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Coming Courses Cards
                    </div>
                    <div className='flex gap-3'>
                        <AddComingCourse />
                    </div>
                </header>
                <div className='grid grid-cols-4 gap-4'>
                    {cards.map(card => (
                        <ComingCourseCards key={card.id} card={card} />
                    ))}
                </div>
            </Card>

        </div>
    )
}

export default ComingCourses