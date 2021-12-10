import React from 'react'
import Bounce from 'react-reveal/Bounce';
import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from 'reactstrap'
import MentorsData from './Mentor.json'
import AbdumalikImg from '../image/MentorImg/Abdumalik.png'
import AzamatImg from '../image/MentorImg/AzamatQurbanov.jpg'
import AzizbekImg from '../image/MentorImg/Azizbek.png'
import DavronImg from '../image/MentorImg/Davron.png'
import TursunaliImg from '../image/MentorImg/Tursunali.png'
import DilnozaImg from '../image/MentorImg/Dilnoza.png'
import JavohirImg from '../image/MentorImg/Javohir.png'

const MentorImg = [
    AbdumalikImg,
    AzamatImg,
    AzizbekImg,
    DavronImg,
    DilnozaImg,
    JavohirImg,
    TursunaliImg
]

function Mentors() {
    return (
        <div
            style={{
                minHeight: '800px',
            }}
            className=''
        >
            <Container>
                <div className='Mentors'>
                    <h1 className='text-one-color text-center p-5'>
                        Markaz hodimlari haqida
                    </h1>
                    {
                        MentorsData.map((mentor, i) => {
                            const align = i % 2 ? 'right' : 'left'
                            
                            return (
                                <Row
                                    key={mentor.fullName}
                                >
                                    <Col
                                        className='mentor-item my-4'
                                    >
                                       <Bounce left={i % 2 === 1} right={i % 2 === 0} duration={2000}>
                                            <Card
                                                className={`mentor-card b-radius ${align}`}
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row'
                                                }}
                                            >
                                                <CardImg
                                                    src={MentorImg[i]}
                                                    className='b-radius'
                                                    alt={1}
                                                    style={{
                                                        height: '220px',
                                                        width: '220px'
                                                    }}
                                                />
                                                <CardBody
                                                    className='mentor-card-body'
                                                >
                                                    <CardTitle tag='h1'>
                                                        {mentor.fullName}
                                                    </CardTitle>
                                                    <h4>{mentor.phone}</h4>
                                                    <h4 className='text-one-color'>{mentor.role}</h4>
                                                    <p>
                                                        {mentor.description}
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Bounce>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Mentors