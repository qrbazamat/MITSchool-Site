import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOutlineIcon from '@material-ui/icons/LockOutlined'
import CloseIcon from '@material-ui/icons/Close'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function SignIn(props) {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <div className='auth'>
            <div className='form-container mx-3 mx-sm-4 mx-md-5 px-2 p-5 pb-md-5 mt-5'>
                <h3>Tizimga kirish</h3>
                <form>
                    <div className='form-row my-4 py-2'>
                        <input
                            className='w-100'
                            type="email"
                            placeholder='Email*'
                        />
                        <MailOutlineIcon />
                    </div>
                    <div className='form-row my-4 py-2'>
                        <input
                            className='w-100'
                            type="password"
                            placeholder='Password*'
                        />
                        <LockOutlineIcon />
                    </div>
                    <div
                        className='btn-container my-4 py-2 d-flex align-items-baseline justify-content-between'
                    >
                        <Button
                            className='bg-primary'
                            onClick={toggle}
                        >
                            Sign in
                        </Button>
                        <Modal
                            isOpen={modal}
                            /*toggle={toggle}*/
                        >
                            <ModalHeader
                                className='d-flex justify-content-between text-danger'
                            >
                                Kirish huquqi mavjud emas !!!
                                <CloseIcon
                                    onClick={toggle}
                                    style={{
                                        cursor: 'pointer',
                                        border: '1px solid',
                                        position: 'absolute',
                                        right: '10px',
                                        borderRadius: '4px'
                                    }}
                                />
                            </ModalHeader>
                            <ModalBody
                                style={{
                                    fontSize: '18px',
                                }}
                            >
                                Ushbu tizimdan foydalanish uchun sizga taqiq qo'yilgan yoki, siz tizimdan foydalanuvchilar ro'yxatida mavjud emassiz. Iltimos, tizim nazorati tekshiruvidan o'tish uchun ma'lumotlaringizni tekshirib qayta urinib ko'ring.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>
                                    Qayta urinish
                                </Button>{' '}
                                <Button color="danger" onClick={toggle}>
                                    Bekor qilish
                                </Button>
                            </ModalFooter>
                        </Modal>
                        <Link
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={props.onClick}
                            to='/auth/sign-up'
                        >
                            Sign up
                        </Link>
                    </div>
                    <div className='form-row border-0 justify-content-center'>
                        <p>
                            Forgot password ?
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn