import React, { useContext, useState } from 'react';
import { WordContext } from "../WordContext";
import styles from "./Form.module.css"

const Form = () => {
    const { addWord } = useContext(WordContext);
    const [value, setValue] = useState({
        english: '',
        transcription: '',
        russian: ''
    });

    const [errors, setErrors] = useState({
        english: false,
        transcription: false,
        russian: false,
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValue(prevValue => ({
            ...prevValue,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: value.trim() === "" ? "Field cannot be empty" : false
        }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (Object.values(errors).some(error => error)) {
            return;
        }
        addWord(value);
        setValue({
            english: '',
            transcription: '',
            russian: ''
        });
        setErrors({
            english: false,
            transcription: false,
            russian: false,
        });
    };

    const isBtnDisabled = Object.values(errors).some((elem) => elem);

    return (
        <form className={styles.form} onSubmit={handleAdd}>
            <td>
                <input
                    type="text"
                    value={value.english}
                    name="english"
                    placeholder="слово"
                    className={errors.english ? styles.error_border : ""}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.transcription}
                    name="transcription"
                    placeholder="транскрипция"
                    className={errors.transcription ? styles.error_border : ""}
                    onChange={handleChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={value.russian}
                    name="russian"
                    placeholder="перевод"
                    className={errors.russian ? styles.error_border : ""}
                    onChange={handleChange}
                />
            </td>
            <td>
                <button type="submit" className={styles.saveButton} disabled={isBtnDisabled}>Save</button>
            </td>
        </form>
    );
};

export default Form;
