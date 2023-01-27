import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <div className={'footerWrapper'}>
            <div className={'footerTop'}>
                <div className={'footerTopLogo'}/>
            </div>
            <div className={'footerContent'}>
                <div className={'footerContentItem'}>

                </div>
                <div className={'footerContentItem'}>
                    <div className={'footerInfoTitle'}>
                        О библиотеке OnlineLib
                    </div>
                    <div className={'footerInfoText'}>
                        LHL - это веб-сайт с обширной коллекцией книг, канцелярских принадлежностей и журналов. Это не только универсальный магазин для любителей книг, но и интерактивное и инновационное место, созданное для того, чтобы было весело и увлекательно открывать для себя новые книги и подарки и делать покупки онлайн.
                    </div>
                </div>
                <div className={'footerContentItem'}>

                </div>
            </div>
            <div className={'footerCopyright'}>
                &copy; 2023 Copyright LearnHub Library | Deisgned by Abel
            </div>
        </div>
    );
};

export default Footer;