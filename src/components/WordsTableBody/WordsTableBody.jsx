import React, { useState } from 'react';
import styles from '../WordsTableBody/WordsTableBody.scss';

function WordsTableBody({ id, english, transcription, russian, handleDelete }) {
    const [isPressed, setPressed] = useState(false);
    const [value, setValue] = useState({
        id,
        english,
        transcription,
        russian,
    });

    const [errors, setErrors] = useState({
        english: false,
        transcription: false,
        russian: false,
    });
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValue((prevValue) => {
            return { ...prevValue, [name]: value };
        });
        setErrors({
            ...errors,
            [event.target.name]:
            event.target.value.trim() === "" ? "Field cannot be empty" : false,
        });
    };

    const handleCancel = () => {
        setPressed(!isPressed);
        setValue({ id, english, transcription, russian });
    };

    const saveChanges = () => {
        setValue({ ...value });
        setPressed(!isPressed);        
    };

    const handleEdit = () => {
        setPressed(!isPressed);
    };

    const isBtnDisabled = Object.values(errors).some((elem) => elem);

    return (
        <table>
            <tr className="word">
                <td>{id}</td>
                {isPressed ? (
                    <>
                        <td>
                            <input
                                type="text"
                                onChange={handleChange}
                                value={value.english}
                                name="english"
                                className={errors.english ? styles.error_border : ""}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                onChange={handleChange}
                                value={value.transcription}
                                name="transcription"
                                className={errors.transcription ? styles.error_border : ""}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                onChange={handleChange}
                                value={value.russian}
                                name="russian"
                                className={errors.russian ? styles.error_border : ""}
                            />
                        </td>
                    </>
            ) : (
                <>
                    <td>{value.english}</td>
                    <td>{value.transcription}</td>
                    <td>{value.russian}</td>
                </>
            )}
            <td>
                {isPressed ? (
                    <>
                        <button className="word-save" onClick={saveChanges} disabled={isBtnDisabled}>Save</button>
                        <button className="word-cancel" onClick={handleCancel}>Close</button>
                    </>
                ) : (
                    <>
                        <button className="word-edit" onClick={handleEdit}>Edit</button>
                        <button className="word-delete" onClick={handleDelete}>Delete</button>
                    </>
                )}
            </td>
            </tr>
        </table>
    );
}

export default WordsTableBody;

