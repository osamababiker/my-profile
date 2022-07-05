import React from 'react';
import './call_to_action.css';
import FileDownloadIcon from '@iconscout/react-unicons/icons/uil-file-download';
import ContactIcon from '@iconscout/react-unicons/icons/uil-at';

const CallToAction = () => {
    return (
        <section className="call-to-action container" id="">
            <div className="p-5">
            <h3> Let us talk your next innovation </h3>
            <p> feal free to contact me so we can discuss your next innovation ,  together we can build wow things </p>
            <div className="actions"> 
                <a className="btn" href="contact">Let us talk <ContactIcon /> </a>
                <a className="btn" href="cv.pdf">Download my Resume <FileDownloadIcon /> </a>
            </div>
            </div>
        </section>
    );
}

export default CallToAction;