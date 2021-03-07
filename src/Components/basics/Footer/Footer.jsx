import React from 'react';
import './Footer.scss';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faViber, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Typography from '@material-ui/core/Typography';


function Copyright() {
    return (
        <Typography className="credits_title"  variant="body2" color="textSecondary">
            {'Copyright © '}<span role="img" aria-label="information"> 🍕</span> all
            rights reserved:
                <a rel='noopener noreferrer'
                   href="mailto:volodimirperun007@gmail.com"> volodimirperun007@gmail.com</a>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const Footer = () => {

    return (

        <footer className='footer'>

            <p className="address"><span>Наші контакти </span>+380985845196, +380977377403
                +380985845196(Viber, WhatsApp) - volodimirperun007@gmail.com</p>

            <div className="social">
                <a href="viber://add?number=380985845196" rel='noopener noreferrer' target="_blank">
                    <FontAwesomeIcon className="fa-viber" icon={faViber}/></a>
                <a href="https://wa.me/+380977377403" rel='noopener noreferrer' target="_blank">
                    <FontAwesomeIcon className="fa-whatsapp" icon={faWhatsapp}/></a>
                <a href="mailto:volodimirperun007@gmail.com" rel='noopener noreferrer' target="_blank">
                    <FontAwesomeIcon className="fa-envelope" icon={faEnvelope}/></a>
            </div>

            <div className="credits">
               <Copyright />
            </div>

        </footer>
    )
};

export default Footer;
