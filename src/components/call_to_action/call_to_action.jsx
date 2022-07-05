import React from 'react';
import './call_to_action.css';
import HeartEmojiIcon from '../../assets/images/icons/heartemoji.png';
import HumbleEmojiIcon from '../../assets/images/icons/humble.png';
import { Link } from 'react-scroll';

const CallToAction = () => {
    return (
        <section className="call-to-action container" id="">
            <div className="p-5">
            <h3> Let us talk your next innovation </h3>
            <p> feal free to contact me so we can discuss your next innovation ,  together we can build wow things </p>
            <div className="actions"> 
                <Link style={{ cursor: 'pointer' }} to="contact-me" className='btn'>
                    Let us talk  <img src={HeartEmojiIcon} alt="Heart Emoji Icon" /> 
                </Link>
                <a download className="btn" href="cv.pdf">Download my Resume <img src={HumbleEmojiIcon} alt="Humble imoji Icon" /></a>
            </div>
            </div>
        </section>
    );
}

export default CallToAction;