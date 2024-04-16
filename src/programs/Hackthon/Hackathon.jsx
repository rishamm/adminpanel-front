import BlogPost from "./components/BlogPost"
import HackathonSponsers from "./components/HackathonSponsers"
import Hero from "./components/Hero"
import Judges from "./components/Judges"
import Prizes from "./components/Prizes"
import Requirements from "./components/Requirements"
import KnowAbout from "./components/KnowAbout"
import JudgingCriteria from "./components/JudgingCriteria"



const Hackathon = () => {
    return (
        <div>
            <Hero />
            <HackathonSponsers />
            <Requirements />
            <BlogPost />
            <Prizes />
            <Judges />
            <KnowAbout/>
            <JudgingCriteria/>
            
        </div>
    )
}

export default Hackathon