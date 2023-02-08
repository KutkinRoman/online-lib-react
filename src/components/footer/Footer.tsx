import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <div id={'footerWrapper'} className={'footerWrapper'}>
            <div className={'footerTop container'}>
                <div className={'footerTopLogo'}/>
            </div>
            <div className={'footerLine'}/>

            <div className={'footerContent container'}>

                <div className={'footerContentItem footerContentItemContacts'}>

                    <div className={'footerContentItemLine'}>
                        <div className={'footerHouseIcon'}/>
                        <div id={'footerAddressText'} className={'footerAddressText'}>
                            г.Алматы<br/>Абая 14
                        </div>
                    </div>

                    <div className={'footerContentItemLine'}>
                        <div className={'footerPhoneIcon'}/>
                        <div id={'footerAddressText'} className={'footerAddressText'}>
                            +7 (777)-777-77-77
                            <br/>
                            +7 (702)-777-77-77
                        </div>
                    </div>

                    <div className={'footerContentItemLine'}>
                        <div className={'footerClockIcon'}/>
                        <div id={'footerAddressText'} className={'footerAddressText'}>
                            Пн-Вс <br/> 10:00 - 20:00
                        </div>
                    </div>

                    {/*<div className={'footerContentItemLine'}>*/}
                    <div className={'footerFaceBookIcon'}/>
                    <div className={'footerTwitterBookIcon'}/>
                    {/*</div>*/}
                </div>

                <div className={'footerContentItem'}>

                    <div className={'footerInfoTitle'}>
                        О библиотеке OnlineLib
                    </div>
                    <div className={'footerInfoText'}>
                        LHL - это веб-сайт с обширной коллекцией книг, канцелярских принадлежностей и журналов. Это не
                        только универсальный магазин для любителей книг, но и интерактивное и инновационное место,
                        созданное для того, чтобы было весело и увлекательно открывать для себя новые книги и подарки и
                        делать покупки онлайн.
                    </div>
                </div>

                <div className={'footerContentItem'}>
                    {/**/}
                </div>
            </div>
            <div className={'footerCopyright'}>
                &copy; 2023 Copyright LearnHub Library
            </div>
        </div>
    );
};

export default Footer;