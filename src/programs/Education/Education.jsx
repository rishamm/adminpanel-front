import Collaborators from "./components/Collaborators"
import ComingCourses from "./components/ComingCourses"
import CourseCard from "./components/CourseCard"
import CourseSummary from "./components/CourseSummary"
import Hero from "./components/Hero"

const Education = () => {
    return (
        <div>
            <Hero />
            <CourseCard />
            <Collaborators />
            <CourseSummary />
            <ComingCourses />
        </div>
    )
}

export default Education
