import React from 'react';
import './styles.css';

const Review  = () => {
    return (
        <div className={'reviewWrapper'}>
            <div className={'reviewTop container'}>
                <div className={'reviewBookCover'}> </div>
                <div className={'reviewContentItems reviewItem '}>

                    <div className={'reviewItemText '} >
                        The Notorious B.I.G. был одним из самых харизматичных и талантливых артистов 1990-х годов.
                        Урожденный Кристофер Уоллес и выросший в Клинтон-Хилл/Бед-Стай, Бруклин, Бигги жил почти
                        архетипичной рэп-жизнью: проблемы с молодежью, торговля наркотиками, оружием, тюрьма, рекордный
                        хит, богатство и международная суперзвезда, которые пришли с этим.
                    </div>

                </div>
            </div>

            <div className={'reviewContent container'}>

            </div>
        </div>
    );
};

export default Review;