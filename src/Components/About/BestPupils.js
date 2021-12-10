import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Pupils from './Pupils.json'
import Dilshod from '../image/Pupils/Dilshod.jpg'
import Islom from '../image/Pupils/Islom.png'
import Elbek from '../image/Pupils/Elbek.png'
import Ulmasbek from '../image/Pupils/Ulmasbek.png'
import Javlon from '../image/Pupils/Javlon.jpg'
import Humoyun from '../image/Pupils/Humoyun.png'
import Unknown from '../image/Pupils/Unknown.png'
import { Card, CardFooter, CardImg, Col, Container, Row } from 'reactstrap'

const PupilsImg = [
    Dilshod,
    Islom,
    Javlon,
    Ulmasbek,
    Elbek,
    Humoyun
]

function BestPupil() {
    return (
        <div
            style={{
                minHeight: '200px',
                backgroundColor: '#000000'
            }}
            className='py-5'
        >
            <h1 className='text-one-color text-center p-4'>
                Markazda tahsil olayotgan iqtidorli o'quvchilar
            </h1>
            <Container>
                <Row className='justify-content-center'>
                    {
                        Pupils.map((pupil, i) => {
                            return (
                                <Col
                                    xl='2'
                                    lg='3'
                                    md='4'
                                    sm='6'
                                    className='my-3 mx-xl-1'
                                    key={pupil.fullName}
                                >
                                    <Bounce top delay={i*100}>
                                        <Card
                                            className='h-100 pupil-card'
                                        >
                                            <CardImg
                                                src={PupilsImg[i] || Unknown}
                                                alt={pupil.fullName}
                                            />
                                            <CardFooter
                                                className='h-100'
                                            >
                                                <h5
                                                    style={{
                                                        fontSize: '15px',
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    {pupil.fullName}
                                                </h5>
                                                <p>
                                                    {pupil.role}
                                                </p>
                                            </CardFooter>
                                        </Card>
                                    </Bounce>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default BestPupil