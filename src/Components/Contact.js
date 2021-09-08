import MyMap from "./Map";
import Footer from './Footer';

function Contact() {
    document.title = 'IT School bilan aloqa'
    return (
        <>
            <div className='contact' style={{
                minHeight: '100vh',
                background: 'gray'
            }}>
                <h1 className='text-center pt-5'>Biz bilan bog'lanish</h1>
                <br /> <br />
                <MyMap />
            </div>
            <Footer />
        </>
    )
}

export default Contact;