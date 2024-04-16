import styles from '../WordsTableHead/WordsTableHead.module.css';

function WordsTableHead() {

    return (
        <table>
            <thead className={styles.descr}>
                <tr>
                    <th>#</th>
                    <th>слово</th>
                    <th>транскрипция</th>
                    <th>перевод</th>
                    <th>категория</th>
                </tr>
            </thead>
        </table>
    );
}

export default WordsTableHead;