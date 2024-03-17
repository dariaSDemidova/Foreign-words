import words from '../../store/store';
import WordsTableHead from '../WordsTableHead/WordsTableHead';
import WordsTableBody from '../WordsTableBody/WordsTableBody';
import '../WordsTableHead/WordsTableHead.scss';
import '../WordsTableBody/WordsTableBody.scss';

function Table() {

    return (
        <div>
            <WordsTableHead />
            {
                words.map((word, index) =>
                    <WordsTableBody key={index} {...word}></WordsTableBody>
                )
            }
        </div>
    );
}


export default Table;