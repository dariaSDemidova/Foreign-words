import React, { useContext } from 'react';
import { WordContext } from '../WordContext';
import Card from '../Card/Card';
import Loading from '../Loading/Loading'; 
import styles from './Cards.module.css';

export default function Cards({ handleViewTranslation }) {
    const { words, loading } = useContext(WordContext); 

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={styles.cards}>
            {words.map((word, index) => (
                <Card
                    english={word.english}
                    russian={word.russian}
                    transcription={word.transcription}
                    onViewTranslation={handleViewTranslation}
                    key={index}
                />
            ))}
        </div>
    );
}



