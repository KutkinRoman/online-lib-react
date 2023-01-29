import React from 'react';
import './styles.css'

interface ShowMoreButtonProps {
    onClick?: () => void
}

const ShowMoreButton = ({onClick}:ShowMoreButtonProps ) => {
    return (
        <div className={'showMoreButtonContainer'}>
            <div className={'showMoreButton'} onClick={onClick}>
                Посмотреть больше &#10149;
            </div>
        </div>
    );
};

export default ShowMoreButton;