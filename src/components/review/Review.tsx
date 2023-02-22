import React from 'react';
import './styles.css';
import {IReviewEntity} from "../../data/entities/IReviewEntity";
import {Rating} from "@mui/material";


const justinReview: IReviewEntity = {
    title: 'It Was All a Dream: Biggie and the World That Made Him',
    authorOfReview: 'Джастин Тинсли',
    rating: 3,
    description: 'The Notorious B.I.G. был одним из самых харизматичных и талантливых артистов 1990-х годов.\n                        Урожденный Кристофер Уоллес и выросший в Клинтон-Хилл/Бед-Стай, Бруклин, Бигги жил почти\n                        архетипичной рэп-жизнью: проблемы с молодежью, торговля наркотиками, оружием, тюрьма, рекордный\n                        хит, богатство и международная суперзвезда, которые пришли с этим.'
}

const Review = () => {
    return (
        <div className={'reviewWrapper'}>
            <div className={'reviewContainer'}>
                <div className={'reviewBackgroundImageContainer'}>
                    <div className={'reviewBackgroundImageBlue'}/>
                    <div className={'reviewBackgroundImageViolet'}/>
                    <div className={'reviewBackgroundImageWhite'}/>
                    <div className={'reviewBackgroundImageRed'}/>
                    <div className={'reviewBackgroundImage'}/>
                </div>
                <div className={'reviewContent'}>
                    <div className={'reviewContentHeader'}>
                        {justinReview.title}
                    </div>
                    <div className={'reviewContentAuthor'}>
                        {justinReview.authorOfReview}
                    </div>
                    <div className={'reviewRatingContainer'}>
                        <Rating name="read-only" value={4} readOnly/>
                        <div className={'numberOfRatings'}>116 оценок</div>
                    </div>
                    <div className={'reviewContentDescriptionHeader'} children={'Описание'}/>
                    <div className={'reviewContentDescription'}>
                        {justinReview.description}
                    </div>
                    <div className={'reviewButtons'}>
                        <div className={'reviewButton reviewBuyButton'} children={'Купить'}/>
                        <div className={'reviewButton reviewReadButton'} children={'Читать'}/>
                        <div className={'reviewButton reviewDownloadButton'} children={'Скачать'}/>
                    </div>
                </div>
            </div>
                <div className={'reviewShowMoreButton'}  >
                    Посмотреть больше &#10149;
                </div>
        </div>
    );
};

export default Review;
