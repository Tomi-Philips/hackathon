import AnnouncementBarge from "./AnnouncementBarge"
import BgImages from "./BgImages"
import GetStarted from "./GetStarted"
import LandingContent from "./LandingContent"


const LandingMain = () => {
    return (
        <div className=" flex justify-between py-11 items-center flex-col  h-[70vh]">
            <AnnouncementBarge/>
            <LandingContent/>
            <GetStarted/>
            <BgImages/>
        </div>
    )
}

export default LandingMain
