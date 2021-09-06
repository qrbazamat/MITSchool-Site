import React from 'react'
import { Link } from 'react-router-dom'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOutlineIcon from '@material-ui/icons/LockOutlined'
import { Button, Col, Label, Row } from 'reactstrap'

function SignUp(props) {

    const {
        onClick,
        onSubmit,
        inputHandler,
        formData: { fullName, email, password, phone, course }
    } = props;

    return (
        <div className='auth'>
            <div className='form-container mx-3 mx-sm-4 mx-md-5 px-2 pt-5 pb-md-4 mt-5'>
                <h3>Ro'yhatdan o'tish</h3>
                <form>
                    <div className='form-row my-4 py-2'>
                        <input
                            className='w-100'
                            type="text"
                            name='fullName'
                            value={fullName}
                            placeholder='Full name*'
                            onChange={e => inputHandler(e)}
                        />
                        <PersonOutlineIcon />
                    </div>
                    <div className='form-row my-4 py-2'>
                        <input
                            className='w-100'
                            type="email"
                            name='email'
                            value={email}
                            placeholder='Email*'
                            onChange={e => inputHandler(e)}
                        />
                        <MailOutlineIcon />
                    </div>
                    <div className='form-row my-4 py-2'>
                        <input
                            className='w-100'
                            type="password"
                            name='password'
                            value={password}
                            placeholder='Password*'
                            onChange={e => inputHandler(e)}
                        />
                        <LockOutlineIcon />
                    </div>
                    <div className='form-row my-4 py-2'>
                        <input
                            className='w-100'
                            type="text"
                            name='phone'
                            value={phone}
                            placeholder='Phone* (97-156-30-97)'
                            onChange={e => inputHandler(e)}
                        />
                        <PhoneAndroidIcon />
                    </div>
                    <Row className='flex align-items-center my-4'>
                        <Col md='5'>
                            <Label>Sellect course:</Label>
                        </Col>
                        <Col md='7'>
                            <select
                                name='course'
                                value={course}
                                onChange={e => inputHandler(e)}
                                className='w-100'
                            >
                                <option value="android" key="1">
                                    Mobile (android)
                                </option>
                                <option value="web" key="2">
                                    Web (frontend)
                                </option>
                                <option value="3dmax" key="3">
                                    3D Max (graphic design)
                                </option>
                            </select>
                        </Col>
                    </Row>
                    <div
                        className='btn-container my-4 py-2 d-flex align-items-baseline justify-content-between'
                    >
                        <Button
                            className='bg-primary'
                            onClick={e => onSubmit(e)}
                        >
                            Sign up
                        </Button>
                        <Link
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={onClick}
                            to='/auth/sign-in'
                        >
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp