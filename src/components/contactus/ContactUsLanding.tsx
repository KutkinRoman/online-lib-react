import React from 'react';
import './styles.css'
import ContactsCard from "./ContactsCard";
import MessageForm from "./MessageForm";

const ContactUsLanding = () => {
    return (
        <div id={'contactUsLandingWrapper'} className={'contactUsLandingWrapper'}>
            <div className={'contactUsLandingHeader'}>
                <div className={'container'}>
                    <div className={'contactUsLandingHeaderTitle'}>
                        Связаться с нами
                    </div>
                    <div className={'contactUsLandingHeaderDescription'}>
                        Спросите нас о чем угодно, и мы будем рады услышать от вас
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'contactUsLandingContent'}>
                    <ContactsCard/>
                    <MessageForm/>
                </div>
            </div>
        </div>
    );
};

export default ContactUsLanding;