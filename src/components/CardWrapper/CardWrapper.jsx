import React, { useState } from 'react';
import words from '../../store/store';
import Cards from '../Cards/Cards';
import './CardWrapper.scss';

const CardWrapper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnedWordsCount, setLearnedWordsCount] = useState(0); 

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

    const handleViewTranslation = () => {
        setLearnedWordsCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <div className="words-count">Изучено слов: {learnedWordsCount}</div>
            <div className="card-wrapper">
            <button className="previousButton" onClick={showPreviousCard}>Назад</button>
            <Cards words={words} handleViewTranslation={handleViewTranslation}/>
            <button className="nextButton" onClick={showNextCard}>Вперед</button>
            </div>
        </div>
    );
};

export default CardWrapper;


// <Card
//                 english={words[currentIndex].english}
//                 russian={words[currentIndex].russian}
//                 transcription={words[currentIndex].transcription}
//                 onViewTranslation={handleViewTranslation} 
//             />


