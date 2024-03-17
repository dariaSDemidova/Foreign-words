import React, { useState } from 'react';
import Card from '../Card/Card';
import words from '../../store/store';
import './CardWrapper.scss'

const CardWrapper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showPreviousCard = () => {
        if (currentIndex === 0) {
            setCurrentIndex(words.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const showNextCard = () => {
        if (currentIndex === words.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
    <div className="card-wrapper">
        <button className="previous-btn" onClick={showPreviousCard}>Назад</button>
        <Card   english={words[currentIndex].english}
                russian={words[currentIndex].russian}
                transcription={words[currentIndex].transcription}/>
        <button className="next-btn" onClick={showNextCard}>Вперед</button>
    </div>
    );
};

export default CardWrapper;



