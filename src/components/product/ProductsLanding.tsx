import React from 'react';
import './styles.css'

const ProductsLanding = () => {
    return (
        <div className={'productsWrapper'}>
            <div className={'container'}>
                <div className={'productsItems'}>
                    <div className={'productsItem'}>
                        <div className={'productsItemImage productsItemImageBookClub'}/>
                        <div className={'productsItemContent'}>
                            <div className={'productsItemContentTitle'} children={'Встреча книжного клуба'}/>
                            <div className={'productsItemContentDescription'}
                                 children={'Присоединяйтесь к нашему книжному клубу и будьте в курсе событий. Все, что вам нужно сделать, это зарегистрироваться и сообщить!'}/>
                        </div>
                    </div>
                    <div className={'productsItem'}>
                        <div className={'productsItemContent'}>
                            <div className={'productsItemContentTitle'} children={'Книжные онлайн-ярмарки'}/>
                            <div className={'productsItemContentDescription'}
                                 children={'Не можете решить, какую книгу почитать? Вам не нужно искать дальше. Открывайте для себя книги, которые вы можете прочитать, делитесь ими и комментируйте.'}/>
                        </div>
                        <div className={'productsItemImage productsItemImageOnlineShop'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsLanding;