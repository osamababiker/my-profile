import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next";
import './call_to_action.css';
import HeartEmojiIcon from '../../assets/images/icons/heartemoji.png';
import HumbleEmojiIcon from '../../assets/images/icons/humble.png';

const CallToAction = () => {

    const { t } = useTranslation();

    return (
        <section className="call-to-action container" id="">
            <div className="p-5">
            <h3> { t('call_to_action_section_title') } </h3>
            <p> { t('call_to_action_section_bio') } </p>
            <div className="actions"> 
                <Link style={{ cursor: 'pointer' }} to="contact-me" className='btn'>
                    { t('call_to_action_section_contact_link') }  <img src={HeartEmojiIcon} alt="Heart Emoji Icon" /> 
                </Link>
                <a download className="btn" href="cv.pdf"> { t('call_to_action_section_resume_link') } <img src={HumbleEmojiIcon} alt="Humble imoji Icon" /></a>
            </div>
            </div>
        </section>
    );
}

export default CallToAction;