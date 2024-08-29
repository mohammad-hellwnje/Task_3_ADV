
import Contact from '../../components/Contact/Contact'
import DealSection from '../../components/DealSection/DealSection'
import Features from '../../components/Features/Features'
import Hero from '../../components/Hero/Hero'
import Properties from '../../components/Properties/Properties'
import VideoContainer from '../../components/VideoContainer/VideoContainer'

function Home() {
    return (
        <div className="home">
            <Hero />
            <Features />
            <VideoContainer />
            <DealSection />
            <Properties />
            <Contact />
        </div>
    )
}

export default Home