import React from 'react';
import './styles.css';
import {IReviewEntity} from "../../data/entities/IReviewEntity";
import {Rating} from "@mui/material";


const justinReview: IReviewEntity = {
    title: 'It Was All a Dream: Biggie and the World That Made Him',
    authorOfReview: 'Джастин Тинсли',
    rating:'',
    description: 'The Notorious B.I.G. был одним из самых харизматичных и талантливых артистов 1990-х годов.\n                        Урожденный Кристофер Уоллес и выросший в Клинтон-Хилл/Бед-Стай, Бруклин, Бигги жил почти\n                        архетипичной рэп-жизнью: проблемы с молодежью, торговля наркотиками, оружием, тюрьма, рекордный\n                        хит, богатство и международная суперзвезда, которые пришли с этим.'
}

const Review = () => {
    return (
        <div className={'reviewWrapper'}>
            <div className={'reviewTop container'}>
                <div className={'blueItem'}></div>
                <div className={'reviewBookCover'}></div>

                <div className={'reviewContentItems reviewItem '}>
                    <div className={'itWasAllADream'}>{justinReview.title} </div>
                    <div className={'justin'}>Джастин Тинсли {/*{justinReview.authorOfReview}*/} </div>
                    <div className={'reviewRatingContainer RatingCount'}>
                        <Rating name="read-only" value={4} readOnly/>
                    </div>
                    <div className={'numberOfRatings'}>116 оценок</div>
                    <div className={'descriptionWord'}>Описание</div>
                    {/*<div className={'ratingIcon ratingIcon'}></div>*/}
                    <div className={'reviewItemText '}> {justinReview.description} </div>
                    <div className={'buyButton borrowText'}> Купить </div>
                    <div className={'readButton borrowText'}> Читать </div>
                    <div className={'downloadButton borrowText'}> Скачать </div>
                    <div className={'showMoreButton'}  >
                        Посмотреть больше &#10149;
                    </div>
                    {/*<div className={'showMoreButtonContainer'}>*/}

                    {/*</div>*/}
                </div>
            </div>

            <div className={'reviewContent container'}>

            </div>
        </div>
    );
};

export default Review;