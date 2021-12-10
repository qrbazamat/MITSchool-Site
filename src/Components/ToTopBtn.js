import React, { useState } from 'react'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import './Styles/ToTopBtn.css'

export default function ToTopBtn() {
    const [top, setTop] = useState(!1)

    window.onscroll = () => {
        window.scrollY < 400 ?
            setTop(!1) : setTop(!0)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            {/* Go To Top */}

            <div
                className={`to-top ${top ? 'active' : ''}`}
                onClick={() => scrollToTop()}
            >
                <span>
                    <ArrowUpward style={{ fontSize: '40px' }} />
                </span>
            </div>
        </>
    )
}