import React, { useState } from 'react'
import AndroidIcon from '../image/Courses-Icon/android-os.svg'
import AppleIcon from '../image/Courses-Icon/apple-logo.svg'
import HtmlIcon from '../image/Courses-Icon/html-5.svg'
import CssIcon from '../image/Courses-Icon/css3.svg'
import JSIcon from '../image/Courses-Icon/javascript.svg'
import LinuxIcon from '../image/Courses-Icon/linux-100.png'
import MacIcon from '../image/Courses-Icon/mac-client-100.png'
import WindowsIcon from '../image/Courses-Icon/windows-10.svg'
import NodeIcon from '../image/Courses-Icon/nodejs.svg'
import ReactIcon from '../image/Courses-Icon/react-js.svg'
import CoursesData from './Courses.json'
import { Card, CardImg, Row, Col, CardTitle, Container, CardBody, CardFooter } from 'reactstrap'

const CardImgUrl = [
    AndroidIcon,
    AppleIcon,
    HtmlIcon,
    CssIcon,
    JSIcon,
    LinuxIcon,
    MacIcon,
    WindowsIcon,
    NodeIcon,
    ReactIcon
]

function Courses() {
    const [filterCourse, setFilterCourse] = useState('')

    return (
        <div
            style={{
                backgroundColor: '#000'
            }}
            className='pb-5 Courses'
        >
            <Container>
                <h1 className='text-one-color text-center p-5'>
                    Markazimizda o'qitiladigan kurslar
                </h1>
                <div className='courses-filter'>
                    <button
                        onClick={() => setFilterCourse('')}
                        style={{
                            backgroundColor: !filterCourse?'#7EB928':''
                        }}
                    >
                        Hamma Kurslar
                    </button>
                    <button
                        onClick={() => setFilterCourse('mobile')}
                        style={{
                            backgroundColor: filterCourse === 'mobile'?'#7EB928':''
                        }}
                    >
                        Faqat Mobile Kurslar
                    </button>
                    <button
                        onClick={() => setFilterCourse('web')}
                        style={{
                            backgroundColor: filterCourse === 'web'?'#7EB928':''
                        }}
                    >
                        Faqat Web Kurslar
                    </button>
                    <button
                        onClick={() => setFilterCourse('ks')}
                        style={{
                            backgroundColor: filterCourse === 'ks'?'#7EB928':''
                        }}
                    >
                        Faqat Savodxonlik Kurslar
                    </button>
                </div>
                <Row className='text-center justify-content-center'>
                    {
                        CoursesData.map((course, index) => {
                            const hide = !filterCourse ? ''
                                :
                                course.type !== filterCourse ? 'hide' : ''
                            return (
                                <Col
                                    lg='3'
                                    md='4'
                                    sm='6'
                                    className={`my-3 show ${hide}`}
                                    key={course.title}
                                >
                                    <Card
                                        className='h-100 p-1 b-radius'
                                    >
                                        <CardImg
                                            top
                                            width='90%'
                                            height='90%'
                                            className='h-75'
                                            src={CardImgUrl[index]}
                                            alt={course.title}
                                        />
                                        <CardBody
                                            className='bg-gray'
                                        >
                                            <CardTitle
                                                tag='h4'
                                                className=''
                                            >
                                                {course.title}
                                            </CardTitle>
                                            <h6>
                                                Kurs narxi: <b className='text-danger'>{course.price}$</b>
                                            </h6>
                                        </CardBody>
                                        <CardFooter
                                            tag='small'
                                            className='taj'
                                        >
                                            {course.description}
                                        </CardFooter>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Courses