import WordsTableBody from '../WordsTableBody/WordsTableBody';
import words from '../../store/store';

export default function Cards() {
    return (
        <div className="Cards">
            {
                words.map((word, index) =>
                    <WordsTableBody key={index} {...word}></WordsTableBody>
                )
            }
        </div>
    );
}
