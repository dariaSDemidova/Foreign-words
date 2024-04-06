// import React, { useState, useEffect, useRef } from 'react';
// import './Card.scss'

// const Card = (props) => {
//     const { english, russian, transcription, onViewTranslation } = props;
//     const [checked, setChecked] = useState(props.checked || false);
//     const buttonRef = useRef(null);

//     useEffect(() => {
//         buttonRef.current.focus();
//     }, []); 

//     const handleChange = () => {
//         setChecked(!checked);
//         onViewTranslation();
//     };

//     return (
//         <div className="card">
//             <div className="card-english">{english}</div>
//             <div className="card-transcription">{transcription}</div>
//             {checked ? 
//                 <div className="card-russian">{russian}</div> : 
//                 <button ref={buttonRef} className="word-check" onClick={handleChange}>Проверить</button>
//             }
//         </div>
//     );
// }

// export default Card;

import React, { useState, useEffect, useRef } from 'react';
import './Card.scss'

const Card = (props) => {
    const { english, russian, transcription, onViewTranslation } = props;
    const [checked, setChecked] = useState( false);
    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.focus();
    }, []); 

    const handleChange = () => {
        setChecked(!checked);
        onViewTranslation();
    };

    return (
        <div className="card">
            <div className="card-english">{english}</div>
            <div className="card-transcription">{transcription}</div>
            {checked ? 
                <div className="card-russian">{russian}</div> : 
                <button ref={buttonRef} className="word-check" onClick={handleChange}>Проверить</button>
            }
        </div>
    );
}

export default Card;







