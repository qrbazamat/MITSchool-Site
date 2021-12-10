import React from 'react'
import '../Styles/Footer.css'
import FacebookIcon from '../image/Link-Icon/icon-facebook.svg'
import InstagramIcon from '../image/Link-Icon/icon-instagram.svg'
import TelegramIcon from '../image/Link-Icon/icon-telegram.svg'
import YouTubeIcon from '../image/Link-Icon/icon-youtube.svg'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'
import Telegram from '@material-ui/icons/Telegram'
import Instagram from '@material-ui/icons/Instagram'

function Footer() {
    return (
        <div className='footer-app text-center'>
            <p className=''>
                &copy; &nbsp;
                {(new Date()).getFullYear()} &nbsp;
                IT School Mingbuloq
            </p>

            <h5><br />
                Barcha huquqlar himoyalangan
            </h5><br />

            <div className='link-icon'>
                <a href="https://facebook.com" target='_blank' rel='noreferrer'>
                    <img src={FacebookIcon} alt="facebook" />
                </a>
                <a href="https://instagram.com" target='_blank' rel='noreferrer'>
                    <img src={InstagramIcon} alt="instagram" />
                </a>
                <a href="https://t.me/mitsschool" target='_blank' rel='noreferrer'>
                    <img src={TelegramIcon} alt="telegram" />
                </a>
                <a href="https://youtube.com" target='_blank' rel='noreferrer'>
                    <img src={YouTubeIcon} alt="youtube" />
                </a>
            </div>

            <div className='m-4'>
                <address>
                <LocationOnIcon /> &nbsp;
                    Mingbuloq tumani, Jomashuy shaharchasi, Ozodlik ko'chasi, 102 uy.
                </address>
                Mo'ljal: &nbsp; <i> Madaniyat markazi 2-qavat.</i>
            </div>

            <div className='m-4'>
                <h4>Developer</h4>
                <LocalPhoneIcon /> &nbsp;
                +998-97-156-30-97, &nbsp;&nbsp;&nbsp; +998-33-156-30-97
                &nbsp;&nbsp;&nbsp;&nbsp;
                <br/>
                <Telegram /> &nbsp;
                @azamatqurbanov, &nbsp; <Instagram /> @azamatqurbanovf
            </div>
        </div>
    )
}

export default Footer
