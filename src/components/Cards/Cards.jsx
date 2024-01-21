import Card from '../Card/Card'
import words from '../../store/store';
import './Cards.scss'

export default function Cards() {
    return (
        <div className="cards">
            {
                words.map((word, index) =>
                    <Card key={index} {...word}></Card>
                )
            }
        </div>
    );
}
