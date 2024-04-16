import CommunityBackground from "../components/CommunityBackground"
import CommunityList from "../components/CommunityList"
import OurCommunity from "../components/OurCommunity"

const CommunitySection = () => {
    return (
        <div className="mx-5 mb-5">
            <OurCommunity />
            <CommunityBackground />
            <CommunityList />
        </div>
    )
}

export default CommunitySection