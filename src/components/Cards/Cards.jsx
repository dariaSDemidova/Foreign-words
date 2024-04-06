// import Card from '../Card/Card'
// import words from '../../store/store';
// import './Cards.scss'

// export default function Cards() {
//     return (
//         <div className="cards">
//             {
//                 words.map((word, index) =>
//                     <Card key={index} {...word}></Card>
//                 )
//             }
//         </div>
//     );
// }

import Card from '../Card/Card';
import './Cards.scss'

export default function Cards({words, handleViewTranslation}) {
    return (
        <div className="cards">
            {
                words.map((word, index) =>
                <Card english={words[index].english}
                russian={words[index].russian}
                transcription={words[index].transcription}
                onViewTranslation={handleViewTranslation}
                key={index}/>
                )
            }
        </div>
    );
};