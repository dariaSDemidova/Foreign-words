import React, { useContext, useState } from 'react';
import styles from './WordsTableBody.module.css';
import { WordContext } from "../WordContext";

function WordsTableBody({ id, english, transcription, russian }) {
    const { updateWord, deleteWord } = useContext(WordContext);

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
        updateWord(id, value);
        setPressed(!isPressed);        
    };

    const handleEdit = () => {
        setPressed(!isPressed);
    };

    const handleDelete = () => {
        deleteWord(id);
    };

    const isBtnDisabled = Object.values(errors).some((elem) => elem);

    return (
        <table>
            <tr className={styles.word}>
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
                        <button className={styles.saveButton} onClick={saveChanges} disabled={isBtnDisabled}>Save</button>
                        <button className={styles.cancelButton} onClick={handleCancel}>Close</button>
                    </>
                ) : (
                    <>
                        <button className={styles.editButton} onClick={handleEdit}>Edit</button>
                        <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
                    </>
                )}
            </td>
            </tr>
        </table>
    );
}

export default WordsTableBody;