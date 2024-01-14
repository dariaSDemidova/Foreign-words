
function Card(props) {

    return (
        <div className="word">
            <p className="word-id">{props.id}</p>
            <p className="word-english">{props.english}</p>
            <p className="word-transcription">{props.transcription}</p>
            <p className="word-russian">{props.russian}</p>
            <p className="word-tags">{props.tags}</p>

            <button className="word-save">Сохранить</button>
            <button className="word-edit">Редактировать</button>
            <button className="word-delete">Удалить</button>
        </div>
    );
}

export default Card;