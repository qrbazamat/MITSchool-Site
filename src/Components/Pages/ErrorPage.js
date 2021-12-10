import React from 'react'
import '../Styles/ErrorStyle.css'

function ErrorPage() {
    document.title = 'IT School not found'
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            width: '100vw',
            height: '100vh',
            background: '#1a2b3c',
            color: 'red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h1>
                Bunday sahifa mavjud emas &nbsp;&nbsp;
                <span className='animateError'>
                    )-:
                </span>
            </h1>
        </div>
    )
}

export default ErrorPage
