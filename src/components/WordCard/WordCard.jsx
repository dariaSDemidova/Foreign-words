// import Inputs from '../Inputs/Inputs'
import '../Inputs/Inputs.scss'

function Card(props) {

    const isEditing = true;

    return (
        <table>
            <tbody>
                <tr className="word">
                    {isEditing ? <input className="input-id" type="text" placeholder="номер" /> : <td className="word-id">{props.id}</td>}
                    {isEditing ? <input className="input-english" type="text" placeholder="слово" /> : <td className="word-english">{props.english}</td>}
                    {isEditing ? <input className="input-transcription" type="text" placeholder="транскрипция" /> : <td className="word-transcription">{props.transcription}</td>}
                    {isEditing ? <input className="input-russian" type="text" placeholder="перевод" /> : <td className="word-russian">{props.russian}</td>}
                    {isEditing ? <input className="input-tags" type="text" placeholder="категория" /> : <td className="word-tags">{props.tags}</td>}
                    {isEditing ? <button className="word-save">Сохранить</button> : <button className="word-edit">Редактировать</button>}
                    {isEditing ? <button className="word-delete">Удалить</button> : <button className="word-delete">Удалить</button>}

                    {/* <td className="word-id">{props.id}</td>
                    <td className="word-english">{props.english}</td>
                    <td className="word-transcription">{props.transcription}</td>
                    <td className="word-russian">{props.russian}</td>
                    <td className="word-tags">{props.tags}</td> */}

                    {/* <button className="word-edit">Редактировать</button>
                    <button className="word-delete">Удалить</button> */}
                </tr>
            </tbody>
        </table>

    );
}

export default Card;


