import React, { useState } from 'react';
import './Card.scss'


export default function Card(props) {

    const [checked, setChecked] = useState(props.checked || false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="card">
            <div className="card-english">{props.english}</div>
            <div className="card-transcription">{props.transcription}</div>
            {checked ? <div className="card-russian">{props.russian}</div> : <button className="word-check" onClick={handleChange}>Проверить</button>}
        </div>
    );
}








