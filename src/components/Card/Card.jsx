import React, { useState, useEffect, useRef } from 'react';
import styles from './Card.module.css'

const Card = ({ english, russian, transcription, isActive, onViewTranslation }) => {
    const [checked, setChecked] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.focus();
    }, []); 

    const handleChange = () => {
        setChecked(!checked);
        onViewTranslation(); 
    };

    return (
        <div className={`${styles.card} ${isActive ? styles.active : ''}`}>
            <div className={styles.english}>{english}</div>
            <div className={styles.transcription}>{transcription}</div>
            {checked ? 
                <div className={styles.russian}>{russian}</div> : 
                <button ref={buttonRef} className={styles.wordCheck} onClick={handleChange}>Проверить</button>
            }
        </div>
    );
}

export default Card;