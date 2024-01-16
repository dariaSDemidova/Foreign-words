
function Inputs() {

    return (
        <div className="input">
            <input className="input-id" type="text" placeholder="номер" />
            <input className="input-english" type="text" placeholder="слово" />
            <input className="input-transcription" type="text" placeholder="транскрипция" />
            <input className="input-russian" type="text" placeholder="перевод" />
            <input className="input-tags" type="text" placeholder="категория" />

            <button className="word-save">Сохранить</button>
            <button className="word-delete">Удалить</button>
        </div>
    );
}

export default Inputs;