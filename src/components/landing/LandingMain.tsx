import React from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css'
import Button from "../form/Button";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";

interface CardInfoProps {
    title: string;
    description: string;
}

const CardInfo = ({title, description}: CardInfoProps) => {
    return (
        <div className={'landingMainCardInfo'}>
            <div className={'landingMainCardInfoTitle'} children={title}/>
            <div className={'landingMainCardInfoDescription'} children={description}/>
        </div>
    )
}

const LandingMain = () => {
    const navigate = useNavigate();
    const authStore = useAppStore().authStore

    return (
        <div id={'landingMainWrapper'} className={'landingMainWrapper'}>
            <div className={'landingMainHeader container'}>
                <div className={'landingMainTitle'}>
                    Лучшие <span className={'landingMainTitle landingMainTextPrimary'}>книги</span> и рекомендации для
                    вас
                </div>
                <div className={'landingMainDescription'}>
                    Не можете решить какую книгу прочитать? Вам не надо искать дальше.
                    Открывайте для себя книги, которые вы можете прочитать, делитесь ими и комментируйте.
                </div>
                {!authStore.isAuth() &&
                    <Button
                        className={'landingMainStartButton'}
                        children={'Зарегистрируйтесь и начните!'}
                        onClick={() => navigate('/sign-up')}
                    />
                }
            </div>
            <div className={'landingMainCards container'}>
                <div className={'landingMainCard'}>
                    <CardInfo title={'01'} description={'+ 1000 Книг'}/>
                    <CardInfo title={'02'} description={'+ 600 Пользователей'}/>
                    <CardInfo title={'03'} description={'+ 100 Блогов'}/>
                </div>
                <div className={'landingMainCard landingMainCardBooks'}/>
                <div className={'landingMainCard landingMainCardGirl'}/>
            </div>
        </div>
    );
};


export default observer(LandingMain);