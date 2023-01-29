import React from 'react';
import './styles.css';
import {ReviewEntity} from "../../data/entities/ReviewEntity";


const justinReview: ReviewEntity = {
    title: 'It Was All a Dream: Biggie and the World That Made Him',
    authorOfReview: 'Джастин Тинсли',
    rating:'',
    description: 'The Notorious B.I.G. был одним из самых харизматичных и талантливых артистов 1990-х годов.\n                        Урожденный Кристофер Уоллес и выросший в Клинтон-Хилл/Бед-Стай, Бруклин, Бигги жил почти\n                        архетипичной рэп-жизнью: проблемы с молодежью, торговля наркотиками, оружием, тюрьма, рекордный\n                        хит, богатство и международная суперзвезда, которые пришли с этим.'
}

const Review = () => {
    return (
        <div className={'reviewWrapper'}>
            <div className={'reviewTop container  '}>
                <div className={'blueItem'}></div>
                <div className={'reviewBookCover'}></div>

                <div className={'reviewContentItems reviewItem '}>

                    <div className={'itWasAllADream'}>{justinReview.title} </div>
                    <div className={'authorOfReviewItem'}> {justinReview.authorOfReview} </div>
                    <div className={'reviewItemText '}> {justinReview.description} </div>

                </div>
            </div>

            <div className={'reviewContent container'}>

            </div>
        </div>
    );
};

export default Review;