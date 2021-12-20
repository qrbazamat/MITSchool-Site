import MyMap from "../Map";
import Footer from './Footer';
import SliderS from '../SliderS'
import '../Styles/Contact.css'

function Contact() {
    document.title = 'IT School bilan aloqa'
    return (
        <>
            <div className='contact' style={{
                minHeight: '100vh',
                background: 'gray'
            }}>
                <h1 className='text-center pt-5'>Biz bilan bog'lanish</h1>
                <h4 className='text-center py-5'>
                    Manager: 
                    <a href="tel:+998941792006" style={{paddingLeft: '5px'}}>
                        +998 (94) 179-20-06
                    </a>
                </h4>
                <br />

                <div className='my-slider-carousel'>
                    <SliderS />
                </div>

                <br/>
                <br/>
                <br/>
                <br/>

                <MyMap />

                <br/>
                <br/>
            </div>
            <Footer />
        </>
    )
}

export default Contact;