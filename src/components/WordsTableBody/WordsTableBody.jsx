import React, { useState } from 'react';
import '../Input/Input.scss'

function WordsTableBody(props) {

    const [checked, setChecked] = useState(props.checked || false);
    // const [value, setValue] = useState({
    //     id,
    //     english,
    //     transcription,
    //     russian,
    //     tags,
    // });

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <table>
            <tbody>
                <tr className="word">
                    {checked ? <input className="input-id" type="text" placeholder="номер" value={props.id} /> : <td className="word-id">{props.id}</td>}
                    {checked ? <input className="input-english" type="text" placeholder="слово" value={props.english} /> : <td className="word-english">{props.english}</td>}
                    {checked ? <input className="input-transcription" type="text" placeholder="транскрипция" value={props.transcription} /> : <td className="word-transcription">{props.transcription}</td>}
                    {checked ? <input className="input-russian" type="text" placeholder="перевод" value={props.russian} /> : <td className="word-russian">{props.russian}</td>}
                    {checked ? <input className="input-tags" type="text" placeholder="категория" value={props.tags} /> : <td className="word-tags">{props.tags}</td>}
                    {checked ? <button className="word-save">Сохранить</button> : <button className="word-edit" onClick={handleChange}>Редактировать</button>}
                    {checked ? <button className="word-delete" onClick={handleChange}>Отменить</button> : <button className="word-delete">Удалить</button>}
                </tr>
            </tbody>
        </table>

    );
}

export default WordsTableBody;



