import React, { useContext, useState } from 'react';
import { WordContext } from '../WordContext';
import Card from '../Card/Card';
import Loading from '../Loading/Loading'; 
import styles from './Cards.module.css';

export default function Cards({ handleViewTranslation }) {
    const { words, loading } = useContext(WordContext); 
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const nextCard = () => {
        setActiveCardIndex(prevIndex => (prevIndex + 1) % words.length);
    };

    const prevCard = () => {
        setActiveCardIndex(prevIndex => (prevIndex - 1 + words.length) % words.length);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={styles.cards}>
            <button className={styles.prevButton} onClick={prevCard}>Назад</button>
            {words.map((word, index) => (
                <Card
                    english={word.english}
                    russian={word.russian}
                    transcription={word.transcription}
                    onViewTranslation={handleViewTranslation}
                    isActive={index === activeCardIndex}
                    key={index}
                />
            ))}
            <button className={styles.nextButton} onClick={nextCard}>Вперед</button>
        </div>
    );
}