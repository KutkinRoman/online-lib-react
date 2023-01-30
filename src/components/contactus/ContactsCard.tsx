import React, {useEffect, useState} from 'react';
import './styles.css'
import {InterfaceInfo} from "../../data/entities/Info";
import {InfoService} from "../../data/services/InfoService";

const ContactsCard = () => {
    const [info, setInfo] = useState<InterfaceInfo | undefined>(undefined)

    useEffect(() => {
        const fetchInfo = async () => {
            const response = await InfoService.getInfo()
            setInfo(response.data)
        }
        fetchInfo();
    }, [])


    const renderText = (text: string) => {
        return (
            <div key={text} className={'contactUsLandingContactsCardContentItemBodyText'} children={text}/>
        )
    }

    return (
        <div className={'contactUsLandingContactsCard'}>
            <div className={'contactUsLandingContactsImage'}/>
            <div className={'contactUsLandingContactsCardContent'}>
                <div className={'contactUsLandingContactsCardContentItem'}>
                    <div className={'contactUsLandingContactsCardContentItemTitle'} children={'Телефон'}/>
                    <div className={'contactUsLandingContactsCardContentItemBody'}>
                        <div className={'contactUsLandingContactsCardContentItemPhones'}>
                            {info?.phoneNumbers.map(renderText)}
                        </div>
                    </div>
                </div>
                <div className={'contactUsLandingContactsCardContentItem'}>
                    <div className={'contactUsLandingContactsCardContentItemTitle'} children={'Онлайн сервис'}/>
                    <div className={'contactUsLandingContactsCardContentItemBody'}>
                        <div className={'contactUsLandingContactsCardContentItemBodyText'} children={info?.email}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsCard;