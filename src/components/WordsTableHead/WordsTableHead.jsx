function WordsTableHead() {

    return (
        <table>
            <thead className="descr">
                <tr>
                    <th className="descr-id">#</th>
                    <th className="descr-english">слово</th>
                    <th className="descr-transcription">транскрипция</th>
                    <th className="descr-russian">перевод</th>
                    <th className="descr-tags">категория</th>
                </tr>
            </thead>
        </table>
    );
}

export default WordsTableHead;