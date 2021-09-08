import Footer from "./Footer"
import './Styles/About.css'
import AnimateBgImage from './image/v4.gif'
import TodayPark from './image/today-park.png'
import Courses from "./About/Courses"
import Mentors from "./About/Mentors"
import BestPupil from "./About/BestPupil"

function About() {
    document.title = 'IT School haqida'
    return (
        <>
            <div
                className='about'
                style={{
                    background: '#000000c5'
                }}
            >
                <div
                    className='about-bg'
                    style={{
                        backgroundImage: `url(${AnimateBgImage})`,
                    }}
                >
                    <h1>Biz haqimizda</h1>
                </div>

                <div
                    className='pb-5'
                >
                    <h2 className='p-4 text-one-color text-center'>
                        Ilk bor O'zbekistonda 2019-yilda IT Park tashkil etildi.
                    </h2>

                    <div
                        className='about-today'
                        style={{
                            backgroundImage: `url(${TodayPark})`
                        }}
                    >

                    </div>

                    <div className='title-bottom'>
                        Hozirgi kunda IT Park O'zbekiston IT bozorining Lokomotivi hisoblanib, uning tarkibida IT Center, IT Marketing, Rezidentlik va boshqalar mavjud.
                    </div>
                </div>

                <Courses />

                <Mentors />

                <BestPupil />

            </div>
            <Footer />
        </>
    )
}

export default About;