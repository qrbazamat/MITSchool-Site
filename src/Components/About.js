import Footer from "./Footer"
import './Styles/About.css'
import AnimateBgImage from './image/v4.gif'
import TodayPark from './image/today-park.png'

function About() {
    document.title = 'IT School haqida'
    return (
        <>
            <div
                className='about-bg'
                style={{
                    backgroundImage: `url(${AnimateBgImage})`,
                }}
            >
                <h1>Biz haqimizda</h1>
            </div>

            <div
                className='about-today'
                style={{
                    backgroundImage: `url(${TodayPark})`
                }}
            >
                <h2 className='p-4 text-info text-center'>
                    Ilk bor O'zbekistonda 2019-yilda IT-Park tashkil etildi.
                </h2>
            </div>

            <Footer />
        </>
    )
}

export default About;